import {useState} from 'react';
import type {Dataset} from '../evidence/types';
import {buildAudit,serializeAudit,exportFilename,type AnalyticalState,type ExportFormat} from '../domain/exports';
import {Section} from './primitives';
import {CopyText} from './SourceDrawer';
export function ResearchExports({data,state}:{data:Dataset;state:AnalyticalState}){
 const caption=buildAudit(data,state,'').figureCitation;
 const [text,setText]=useState('');const [status,setStatus]=useState('');
 const prepare=(format:ExportFormat)=>{const audit=buildAudit(data,state,new Date().toISOString());const contents=serializeAudit(audit,format);setText(contents);
 try{const url=URL.createObjectURL(new Blob([contents],{type:format==='json'?'application/json;charset=utf-8':format==='csv'?'text/csv;charset=utf-8':'text/markdown;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download=exportFilename(audit,format);document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);setStatus(`Download requested: ${a.download}. If the browser did not save it, copy the identical text below.`);}catch{setStatus('Download unavailable. Select and copy the complete export text below.');}};
 return <Section id="exports" title="Audit and research exports"><p className="lead-small">Take the calculations and their qualifications together.</p>
 <div className="tool-layout"><div className="tool-canvas"><ul className="export-formats">{(['json','csv','markdown'] as const).map(f=><li key={f}><button onClick={()=>prepare(f)}>Download {f==='markdown'?'Markdown':f.toUpperCase()}</button><p>{f==='json'?'Structured audit: inputs, formulas, exact outputs, sources and evidence states.':f==='csv'?'Twenty published ledger rows with source columns and the complete audit_context_json.':'Readable audit note: calculations, missing evidence, sources and limitations.'}</p></li>)}</ul>
 <p role="status" aria-label="Download status" aria-live="polite">{status}</p>{text&&<><label className="export-fallback">Export text fallback<textarea readOnly value={text} rows={14} onFocus={e=>e.currentTarget.select()}/></label><CopyText text={text} label="Copy export text"/></>}
 <label className="citation-label">Figure citation<textarea readOnly value={caption} onFocus={e=>e.currentTarget.select()}/></label><CopyText text={caption} label="Copy figure citation"/></div>
 <aside className="tool-notes" aria-label="Export state and qualifications"><h3>Included analytical state</h3><p>Current analytical state: FY{state.ruleYear} rule{state.ruleYear===2021?' · counterfactual on the fixed FY2022 base':' · documented FY2022 baseline'}. Extraction experiment {state.experimentActive?'active':'inactive'}.</p><p>All downloads retain the full immutable published ledger, regardless of search filters. Monetary values are exact decimal strings. Spreadsheet software may automatically reformat imported text: import monetary columns as text.</p><p className="small-copy">The fallback is the last generated snapshot. Download again to capture later analytical changes. Export time is a local generation timestamp, not an audit or source-verification date.</p></aside></div></Section>;
}
