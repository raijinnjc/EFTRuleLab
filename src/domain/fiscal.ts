import type {Dataset,RuleSet} from '../evidence/types';
import {validateDataset} from '../evidence/validate';
export interface Components {basic:bigint;formula:bigint;performance:bigint}
export interface FiscalResult {deductions:bigint;residual:bigint;components:Components;ledger:bigint;gap:bigint}
export function parseRupiah(value:string):bigint {
 if(typeof value!=='string'||!/^(0|[1-9][0-9]*)$/.test(value))throw new Error('Invalid integer rupiah amount');
 return BigInt(value);
}
export function allocate(residual:bigint,rule:RuleSet):Components {
 if(residual<0n)throw new Error('Negative residual');
 const shares=rule.shares;
 const values=[shares.basicBp,shares.formulaBp,shares.performanceBp];
 if(![2021,2022].includes(rule.fiscalYear)||values.some(v=>!Number.isSafeInteger(v)||v<0)||values.reduce((a,b)=>a+b,0)!==10000)throw new Error('Invalid rule shares');
 const part=(bp:number)=>{const n=residual*BigInt(bp);if(n%10000n!==0n)throw new Error('Noninteger allocation; no rounding convention supplied');return n/10000n;};
 return {basic:part(shares.basicBp),formula:part(shares.formulaBp),performance:part(shares.performanceBp)};
}
export function reconstruct(input:Dataset):FiscalResult {
 const d=validateDataset(input);
 const deductions=d.fiscal.deductions.reduce((n,x)=>n+parseRupiah(x.value),0n);
 const residual=parseRupiah(d.fiscal.gross.value)-deductions;
 const rule=d.rules.find(r=>r.fiscalYear===2022)!;
 const components=allocate(residual,rule);
 const ledger=d.awards.reduce((n,a)=>n+parseRupiah(a.amount),0n);
 return {deductions,residual,components,ledger,gap:components.performance-ledger};
}
export function compareRules(d:Dataset){
 const historical=reconstruct(d);
 const previous=allocate(historical.residual,d.rules.find(r=>r.fiscalYear===2021)!);
 const current=historical.components;
 return {evidenceType:'FIXED_BASE_COUNTERFACTUAL' as const,baseFiscalYear:2022 as const,previous,current,
  delta:{basic:current.basic-previous.basic,formula:current.formula-previous.formula,performance:current.performance-previous.performance}};
}
