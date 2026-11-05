import type {Dataset} from '../evidence/types';
import {allocate,reconstruct} from './fiscal';
import {verifyHistorical} from './evidence';
import {extraction} from './analysis';
import {sourceEntries} from './research';
export interface AnalyticalState {ruleYear:2021|2022;experimentActive:boolean}
export type ExportFormat='json'|'csv'|'markdown';
type Lossless<T> = T extends bigint ? string : T extends readonly (infer U)[] ? Lossless<U>[] : T extends object ? {[K in keyof T]:Lossless<T[K]>} : T;
const lossless=<T,>(v:T):Lossless<T>=>JSON.parse(JSON.stringify(v,(_,x)=>typeof x==='bigint'?x.toString():x));
export function buildAudit(d:Dataset,state:AnalyticalState,generatedAt:string){
 const historical=reconstruct(d);const rule=d.rules.find(r=>r.fiscalYear===state.ruleYear)!;
 return {schemaVersion:'eft-rulelab-audit/1',applicationVersion:'0.1.0',datasetVersion:d.version,generatedAt,fiscalYear:2022,
 figureCitation:`Figure citation: EFT RuleLab FY2022 fiscal reconciliation ${historical.gap===0n?'PASS':'DISCREPANCY'}, gap ${historical.gap.toString()} rupiah; recipient decision replay INCOMPLETE. S1 (Perbup 94/2021), Annex II PDF pp.17–21, inherited PRD transcription; dataset ${d.version}. No primary PDF inspection here.`,
 monetaryRepresentation:'Exact decimal integer rupiah strings; never binary floating point.',inputs:d.fiscal,
 historical:lossless(historical) as {deductions:string;residual:string;components:{basic:string;formula:string;performance:string};ledger:string;gap:string},
 selected:{rule,ruleYear:state.ruleYear,counterfactual:state.ruleYear===2021,fixedBaseFiscalYear:2022,fixedBaseRp:historical.residual.toString(),components:lossless(allocate(historical.residual,rule)),disclaimer:state.ruleYear===2021?'FY2021 weights applied counterfactually to the fixed FY2022 residual; not actual FY2021 expenditure.':'FY2022 documented rule on FY2022 residual.'},
 publishedAwards:d.awards,verification:lossless(verifyHistorical(d)),extraction:{active:state.experimentActive,...lossless(extraction(d,state.experimentActive)),disclaimer:'This scenario corrects a researcher-side document extraction discrepancy; it does not indicate an error or overpayment by the government.'},
 methodology:'Residual = gross ADD minus five deductions. Component = residual × basis points / 10000, exact integer arithmetic; reject fractional rupiah without an approved rounding convention. Historical gap = FY2022 performance pool minus immutable published award total. Extraction uses FY2022 weights in a separate workspace, independently of selected comparison rule.',
 missingEvidence:d.missing,sources:d.sources,researchRegister:sourceEntries(d),limitations:['Original V4 memorandum and official annex PDFs unavailable for fresh inspection; inherited PRD transcription.','Recipient decision replay remains INCOMPLETE; no inferred scores, selection rules or recipient set.','Published allocations do not establish payments, eligibility, fairness or ecological outcomes.']};
}
export type Audit=ReturnType<typeof buildAudit>;
const quote=(v:unknown)=>`"${String(v??'').replaceAll('"','""')}"`;
export function ledgerCsv(a:Audit){
 const headers=['village','kecamatan','amount_rp_exact','source_id','source_pdf_pages','source_row','source_locator','fiscal_year','selected_rule_year','counterfactual','fixed_base_rp_exact','historical_gap_rp_exact','recipient_replay','extraction_active','provenance_note','audit_context_json'];
 const {publishedAwards,...context}=a;
 return [headers.map(quote).join(','),...publishedAwards.map(r=>[r.village,r.kecamatan,r.amount,r.provenance.sourceId,r.provenance.pdfPages.join(';'),r.sourceRow,r.provenance.locator,a.fiscalYear,a.selected.ruleYear,a.selected.counterfactual,a.selected.fixedBaseRp,a.historical.gap,a.verification.test2.status,a.extraction.active,r.provenance.note,JSON.stringify(context)].map(quote).join(','))].join('\r\n');
}
export function serializeAudit(a:Audit,format:ExportFormat){
 if(format==='json')return JSON.stringify(a,null,2);
 if(format==='csv')return ledgerCsv(a);
 return `# EFT RuleLab research audit\n\nGenerated locally: ${a.generatedAt}\nDataset: ${a.datasetVersion}; application ${a.applicationVersion}; schema ${a.schemaVersion}.\n\n## Analytical state\n\n${a.selected.disclaimer}\nAll amounts below are exact decimal integer rupiah.\n\n## Historical fiscal inputs\n\nGross: ${a.inputs.gross.value}\n${a.inputs.deductions.map(x=>`- ${x.label}: ${x.value} (${x.provenance.sourceId}; ${x.provenance.locator})`).join('\n')}\n\nResidual: ${a.historical.residual}\nHistorical components: ${JSON.stringify(a.historical.components)}\nSelected components: ${JSON.stringify(a.selected.components)}\n\n## Verification\n\n${a.figureCitation}\n\nTest 1: ${a.verification.test1.status}; gap ${a.historical.gap}.\nTest 2: ${a.verification.test2.status}.\n\n## Published positive ledger\n\n${a.publishedAwards.map(r=>`- ${r.village}, ${r.kecamatan}: ${r.amount}; ${r.provenance.sourceId}, PDF pp. ${r.provenance.pdfPages.join(', ')}, row ${r.sourceRow}`).join('\n')}\n\n## Extraction experiment\n\nActive: ${a.extraction.active}; verified BPD ${a.extraction.verifiedBpd}; selected BPD ${a.extraction.selectedBpd}; experimental pool ${a.extraction.pool}; gap ${a.extraction.gap}.\n${a.extraction.disclaimer}\n\n## Methodology\n\n${a.methodology}\n\n## Missing evidence\n\n${a.missingEvidence.map(x=>`- ${x.label}: ${x.status}. ${x.note}`).join('\n')}\n\n## Sources and provenance\n\n${a.sources.map(s=>`- ${s.id}: ${s.title}. ${s.issuingBody}, ${s.publicationYear}; FY ${s.fiscalYear??'not applicable'}. ${s.url}\n  ${s.accessNote} Recorded PDF pages: ${s.recordedPages.join(', ')||'unavailable'}. SHA256 ${s.sha256}; recalculated here: ${s.sha256Recalculated}.`).join('\n')}\n\n${a.limitations.join('\n\n')}\n`;
}
export function exportFilename(a:Audit,f:ExportFormat){return `eft-rulelab-fy2022-rule${a.selected.ruleYear}-${a.selected.counterfactual?'counterfactual':'historical'}-${a.extraction.active?'extraction-active':'verified'}-${a.generatedAt.slice(0,10)}.${f==='markdown'?'md':f}`;}
