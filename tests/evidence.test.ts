import { describe, expect, it } from 'vitest';
import { dataset } from '../src/evidence/dataset';
import { validateDataset } from '../src/evidence/validate';
const clone = () => JSON.parse(JSON.stringify(dataset));
describe('PRD transcription and provenance boundary', () => {
  it('loads the exact gross, five deductions, and fiscal year (T01/T02)', () => {
    const d = validateDataset(dataset);
    expect(d.fiscal.gross.value).toBe('75897616000');
    expect(d.fiscal.deductions.map((x: {value: string}) => x.value)).toEqual(['34851000000','18986400000','5833200000','7905600000','1344000000']);
    expect(d.fiscal.fiscalYear).toBe(2022);
  });
  it('preserves all 20 unique published allocations with page/row locators (T16–T18)', () => {
    const d = validateDataset(dataset);
    expect(d.awards).toHaveLength(20);
    expect(new Set(d.awards.map((a: {kecamatan: string; village: string}) => a.kecamatan+'|'+a.village)).size).toBe(20);
    expect(d.awards.every((a: {amount: string})=>a.amount==='24420956')).toBe(true);
    expect(d.awards.find((a: {village: string})=>a.village==='Sungai Kupah')).toMatchObject({sourceRow:4,provenance:{pdfPages:[20],sourceId:'S1',fiscalYear:2022}});
  });
  it('preserves nine coverage rows without inventing the other 98 villages (T20–T22)', () => {
    const d = validateDataset(dataset);
    expect(d.coverage).toHaveLength(9);
    expect(d.coverage.reduce((n: number,c: {allocationTableRows: number})=>n+c.allocationTableRows,0)).toBe(118);
    expect(d.coverage.reduce((n: number,c: {positiveAllocationRows: number})=>n+c.positiveAllocationRows,0)).toBe(20);
    expect(d.coverage.reduce((n: bigint,c: {performanceSubtotalRp: string})=>n+BigInt(c.performanceSubtotalRp),0n)).toBe(488419120n);
  });
  it('retains original legal identity and inherited hash inspection limits', () => {
    const d=validateDataset(dataset);
    expect(d.sources.find((s: {id:string})=>s.id==='S1')).toMatchObject({publicationYear:2021,fiscalYear:2022,inspection:'INHERITED_PRD_TRANSCRIPTION',sha256Recalculated:false});
    expect(d.rules.map((r: {fiscalYear:number})=>r.fiscalYear)).toEqual([2021,2022]);
  });
  it('keeps missing decisions, payments and outcomes null, not zero (T27)', () => {
    const d=validateDataset(dataset);
    expect(d.missing).toHaveLength(7);
    for(const m of d.missing){expect(m.value).toBeNull(); expect(m.status).toBe('NOT_OBTAINED');}
  });
  it('deep freezes source values and ledger', () => {
    expect(Object.isFrozen(dataset)).toBe(true);
    expect(Object.isFrozen(dataset.awards?.[0])).toBe(true);
  });
  it('rejects duplicate village pairs (T28)', () => {const d=clone();d.awards.push(d.awards[0]);expect(()=>validateDataset(d)).toThrow(/duplicate/i);});
  it('rejects unknown source IDs', () => {const d=clone();d.awards[0].provenance.sourceId='fiction';expect(()=>validateDataset(d)).toThrow(/source/i);});
  it('rejects duplicate source IDs', () => {const d=clone();d.sources.push(d.sources[0]);expect(()=>validateDataset(d)).toThrow(/duplicate/i);});
  it.each(['-1','1.2','',null,25,'1e3',' 10'])('rejects invalid monetary input %s (T29)', value=>{const d=clone();d.fiscal.gross.value=value;expect(()=>validateDataset(d)).toThrow(/amount/i);});
  it('rejects unavailable required budget input',()=>{const d=clone();delete d.fiscal.gross;expect(()=>validateDataset(d)).toThrow();});
  it('rejects incorrect share sums and unsupported years (T30)',()=>{const d=clone();d.rules[0].shares.basicBp=8000;expect(()=>validateDataset(d)).toThrow(/share/i);d.rules[0].fiscalYear=2020;expect(()=>validateDataset(d)).toThrow();});
  it('rejects a missing page that is required for a published award',()=>{const d=clone();d.awards[0].provenance.pdfPages=[];expect(()=>validateDataset(d)).toThrow(/page/i);});
  it('rejects mismatched source fiscal scope',()=>{const d=clone();d.awards[0].provenance.sourceId='S2';expect(()=>validateDataset(d)).toThrow(/fiscal/i);});
  it('rejects fabricated assessment values',()=>{const d=clone();d.missing[0].value=0;expect(()=>validateDataset(d)).toThrow(/unavailable/i);});
  it('rejects incorrect coverage counts',()=>{const d=clone();d.coverage[0].positiveAllocationRows=6;expect(()=>validateDataset(d)).toThrow(/coverage/i);});
});
it.each(['fiscal','coverage'])('rejects a consistent FY2021 citation on a FY2022 %s record',kind=>{
 const d=clone();const p=kind==='fiscal'?d.fiscal.gross.provenance:d.coverage[0].provenance;
 Object.assign(p,{sourceId:'S2',fiscalYear:2021,pdfPages:[11]});
 expect(()=>validateDataset(d)).toThrow(/fiscal/i);
});
it('rejects null fiscal provenance disguised as a document citation',()=>{
 const d=clone();Object.assign(d.fiscal.gross.provenance,{sourceId:'PRD',fiscalYear:null,pdfPages:[]});
 expect(()=>validateDataset(d)).toThrow(/fiscal/i);
});
