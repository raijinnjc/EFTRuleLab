import type {Award,Dataset,Provenance} from '../evidence/types';
import {allocate,parseRupiah,reconstruct} from './fiscal';
import researchCase from '../../data/research-extraction-case.json';
export const extractionCase=Object.freeze(researchCase);
export type AwardSort='village'|'kecamatan'|'amount'|'page'|'row';
export interface AwardQuery {search:string;kecamatan:string;sort:AwardSort;direction:'asc'|'desc'}
const normalized=(s:string)=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('en').trim();
export function queryAwards(awards:readonly Award[],q:AwardQuery):Award[]{
 const search=normalized(q.search);
 const rows=awards.filter(a=>(!q.kecamatan||a.kecamatan===q.kecamatan)&&normalized(`${a.village} ${a.kecamatan}`).includes(search));
 const value=(a:Award)=>q.sort==='amount'?parseRupiah(a.amount):q.sort==='page'?a.provenance.pdfPages[0]:q.sort==='row'?a.sourceRow:normalized(a[q.sort]);
 return rows.sort((a,b)=>{const x=value(a),y=value(b);const cmp=x<y?-1:x>y?1:0;return (q.direction==='asc'?1:-1)*(cmp||a.id.localeCompare(b.id));});
}
export function subtotal(awards:readonly Award[]):bigint{return awards.reduce((n,a)=>n+parseRupiah(a.amount),0n);}
export interface EnvelopeRow {id:string;label:string;change:bigint;balance:bigint;from:bigint;to:bigint;kind:'total'|'deduction';provenance:Provenance}
export function envelope(d:Dataset):EnvelopeRow[]{
 const r=reconstruct(d);let balance=parseRupiah(d.fiscal.gross.value);
 const rows:EnvelopeRow[]=[{id:'gross',label:'Gross ADD',change:balance,balance,from:0n,to:balance,kind:'total',provenance:d.fiscal.gross.provenance}];
 for(const input of d.fiscal.deductions){const previous=balance;const value=parseRupiah(input.value);balance-=value;rows.push({id:input.id,label:input.label,change:-value,balance,from:balance,to:previous,kind:'deduction',provenance:input.provenance});}
 rows.push({id:'residual',label:'Residual ADD',change:r.residual,balance:r.residual,from:0n,to:r.residual,kind:'total',provenance:d.fiscal.gross.provenance});return rows;
}
// Only geometry is converted to Number, after bounded integer scaling. Money stays BigInt.
export function plotFraction(value:bigint,total:bigint):number{
 if(value===0n&&total===0n)return 0;
 if(value<0n||total<=0n||value>total)throw Error('Invalid chart domain');
 return Number(value*1000000n/total)/1000000;
}
export function formatBillions(value:bigint):string{
 const abs=value<0n?-value:value;const milli=(abs+500000n)/1000000n;
 return `${value<0n?'−':''}Rp${milli/1000n}.${String(milli%1000n).padStart(3,'0')} billion`;
}
export function extraction(d:Dataset,active:boolean){
 const r=reconstruct(d);const bpd=d.fiscal.deductions.find(x=>x.id==='bpd')!;
 const verifiedBpd=parseRupiah(bpd.value);
 if(!d.sources.some(s=>s.id===extractionCase.sourceId))throw Error('Missing extraction provenance');
 const selectedBpd=active?parseRupiah(extractionCase.flawedBpdRp):verifiedBpd;
 const residual=parseRupiah(d.fiscal.gross.value)-(r.deductions-verifiedBpd+selectedBpd);
 const pool=allocate(residual,d.rules.find(x=>x.fiscalYear===2022)!).performance;
 const gap=pool-r.ledger;
 return {verifiedBpd,selectedBpd,pool,gap,ledger:r.ledger,residual,status:active?'APPARENT_MISMATCH' as const:r.gap===0n?'PASS' as const:'DISCREPANCY' as const,evidenceType:active?'RESEARCH_EXTRACTION_TEST' as const:'DERIVED' as const};
}
