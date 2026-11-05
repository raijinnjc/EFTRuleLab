import type {Dataset} from '../evidence/types';
import {reconstruct} from './fiscal';
export const evidenceLabels={
 OFFICIAL_SOURCE:'Published source record',DERIVED:'Reproduced calculation',FIXED_BASE_COUNTERFACTUAL:'Counterfactual · same FY2022 base',
 RESEARCH_EXTRACTION_TEST:'Research-side extraction test',NOT_OBTAINED:'Not obtained for this study',PROPOSED_PROTOCOL:'Proposed verification procedure',CONTEXTUAL_RESEARCH:'Published research / guidance'
} as const;
export type FiscalVerification = {status:'PASS'|'DISCREPANCY';gap:bigint;evidenceType:'DERIVED'} | {status:'INCOMPLETE';gap:null;evidenceType:'NOT_OBTAINED';reason:string};
export interface Verification {test1:FiscalVerification;test2:{status:'INCOMPLETE';evidenceType:'NOT_OBTAINED';missingIds:readonly string[];reason:string}}
export function verifyHistorical(d:Dataset):Verification {
 // This bounded model intentionally has no historical assessment-to-award function.
 const test2={status:'INCOMPLETE' as const,evidenceType:'NOT_OBTAINED' as const,missingIds:['performance_scores_2022','assessment_universe_2022','executed_selection_rule','signed_decision_records'],reason:'Approved assessment and selection records not obtained for this study.'};
 try {const r=reconstruct(d);return {test1:{status:r.gap===0n?'PASS':'DISCREPANCY',gap:r.gap,evidenceType:'DERIVED'},test2};}
 catch {return {test1:{status:'INCOMPLETE',gap:null,evidenceType:'NOT_OBTAINED',reason:'Required fiscal inputs are missing or invalid; reconciliation was not performed.'},test2};}
}
