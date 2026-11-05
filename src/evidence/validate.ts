import type { Dataset } from './types';
const fail=(message:string):never=>{throw new Error(message);};
const object=(v:unknown):Record<string,unknown>=>v!==null && typeof v==='object' && !Array.isArray(v)?v as Record<string,unknown>:fail('Missing or invalid record');
const array=(v:unknown):unknown[]=>Array.isArray(v)?v:fail('Missing list');
const text=(v:unknown):string=>typeof v==='string' && v.trim().length>0?v:fail('Missing text');
const integer=(v:unknown):number=>typeof v==='number' && Number.isSafeInteger(v) && v>=0?v:fail('Invalid integer');
const amount=(v:unknown):bigint=>typeof v==='string' && /^(0|[1-9][0-9]*)$/.test(v)?BigInt(v):fail('Invalid amount');
function unique(values:readonly string[],label:string){if(new Set(values).size!==values.length)fail(`Duplicate ${label}`);}
export function validateDataset(input:unknown):Dataset {
  const d=object(input);text(d.version);
  const sources=array(d.sources).map(object);
  unique(sources.map(s=>text(s.id)),'source ID');
  for(const s of sources){
    for(const key of ['title','issuingBody','url','accessNote']) text(s[key]);
    integer(s.publicationYear);
    if(s.fiscalYear!==null && ![2021,2022].includes(integer(s.fiscalYear)))fail('Invalid fiscal year');
    if(!['INHERITED_PRD_TRANSCRIPTION','SUPPLIED_DOCUMENT'].includes(text(s.inspection)))fail('Invalid inspection');
    if(typeof s.sha256Recalculated!=='boolean'|| !/^[a-f0-9]{64}$/.test(text(s.sha256)))fail('Invalid hash metadata');
    if(s.pdfUrl!==null && !text(s.pdfUrl).startsWith('https://'))fail('Invalid source PDF');
    if(!text(s.url).startsWith('https://') && s.id!=='PRD')fail('Invalid source URL');
    array(s.recordedPages).forEach(p=>{if(integer(p)<1)fail('Invalid source page');});
    array(s.sections).forEach(text);
  }
  const sourceById=new Map(sources.map(s=>[s.id,s]));
  const provenance=(value:unknown,expectedYear:2021|2022,requirePage=false)=>{
    const p=object(value);const s=sourceById.get(text(p.sourceId));if(!s)fail('Unknown source');
    if(p.fiscalYear!==expectedYear || s!.fiscalYear!==expectedYear)fail('Source fiscal scope mismatch');
    if(p.evidenceType!=='OFFICIAL_SOURCE')fail('Invalid historical evidence type');
    text(p.locator);text(p.note);
    const pages=array(p.pdfPages);if(requirePage && pages.length===0)fail('Missing award page');
    for(const page of pages)if(integer(page)<1||!array(s!.recordedPages).includes(page))fail('Unknown source page');
  };
  const fiscal=object(d.fiscal);if(fiscal.fiscalYear!==2022)fail('Unsupported fiscal year');
  const inputs=[object(fiscal.gross),...array(fiscal.deductions).map(object)];
  unique(inputs.map(x=>text(x.id)),'fiscal input');
  const expected=['fixed_income','rt_rw','bpd','other_allowances','preparatory'];
  if(inputs.length!==6 || !expected.every(id=>inputs.slice(1).some(x=>x.id===id)))fail('Missing deductions');
  for(const x of inputs){text(x.label);amount(x.value);provenance(x.provenance,2022);}
  if(amount(inputs[0].value)<inputs.slice(1).reduce((n,x)=>n+amount(x.value),0n))fail('Deductions exceed gross');
  const rules=array(d.rules).map(object);unique(rules.map(r=>String(r.fiscalYear)),'rule fiscal year');
  if(rules.length!==2)fail('Missing rule');
  for(const r of rules){
    text(r.id);if(r.fiscalYear!==2021&&r.fiscalYear!==2022)fail('Unsupported rule fiscal year');
    const s=object(r.shares);const shares=['basicBp','formulaBp','performanceBp'].map(k=>integer(s[k]));
    if(shares.reduce((n,x)=>n+x,0)!==10000)fail('Invalid share sum');
    provenance(r.provenance,r.fiscalYear as 2021|2022);if(object(r.provenance).fiscalYear!==r.fiscalYear)fail('Rule fiscal mismatch');
  }
  const awards=array(d.awards).map(object);
  unique(awards.map(a=>text(a.kecamatan).normalize('NFKC').toLowerCase()+'|'+text(a.village).normalize('NFKC').toLowerCase()),'village pair');
  unique(awards.map(a=>text(a.id)),'award ID');
  if(awards.length!==20)fail('Expected published 20-entry ledger');
  for(const a of awards){
    if(integer(a.sourceRow)<1 || amount(a.amount)<=0n)fail('Invalid positive award');
    if(a.recordType!=='published_positive_allocation')fail('Invalid award record type');
    provenance(a.provenance,2022,true);if(object(a.provenance).fiscalYear!==2022)fail('Award fiscal scope mismatch');
  }
  const coverage=array(d.coverage).map(object);unique(coverage.map(c=>text(c.kecamatan)),'coverage kecamatan');
  if(coverage.length!==9)fail('Missing coverage');
  for(const c of coverage){
    const selected=awards.filter(a=>a.kecamatan===c.kecamatan);
    if(integer(c.allocationTableRows)<integer(c.positiveAllocationRows)||c.positiveAllocationRows!==selected.length ||amount(c.performanceSubtotalRp)!==selected.reduce((n,a)=>n+amount(a.amount),0n))fail('Coverage mismatch');
    provenance(c.provenance,2022);
  }
  if(coverage.reduce((n,c)=>n+integer(c.allocationTableRows),0)!==118||!awards.every(a=>coverage.some(c=>c.kecamatan===a.kecamatan)))fail('Coverage total mismatch');
  const missing=array(d.missing).map(object);unique(missing.map(m=>text(m.id)),'missing record ID');
  const ids=['performance_scores_2022','assessment_universe_2022','executed_selection_rule','signed_decision_records','payment_execution','ecological_outcomes','original_research_records'];
  if(missing.length!==ids.length||!ids.every(id=>missing.some(m=>m.id===id)))fail('Missing evidence boundaries');
  for(const m of missing){text(m.label);text(m.note);if(!sourceById.has(text(m.sourceId)))fail('Unknown evidence source');if(m.value!==null||m.status!=='NOT_OBTAINED')fail('Historical record must remain unavailable');}
  return input as Dataset;
}
