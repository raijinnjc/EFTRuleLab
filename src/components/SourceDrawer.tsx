import {createContext,useContext,useRef,useState,type ReactNode} from 'react';
import type {Dataset} from '../evidence/types';
import {sourceEntries,type ResearchEntry} from '../domain/research';
const SourceContext=createContext<((id:string)=>void)|null>(null);
export function InspectSourceButton({id,label}:{id:string;label?:string}){const open=useContext(SourceContext);return open?<button className="source-inspect" aria-label={label??`Inspect ${id} source`} onClick={()=>open(id)}>{label?'Evidence':id.length>8?'Inspect record':`Inspect ${id} source`}</button>:null;}
export function SourceDetails({source:s}:{source:ResearchEntry}){
 const citation=`${s.id}: ${s.title??s.label}. ${s.institution??'Institution unavailable'}, ${s.year??'year unavailable'}. ${s.url??'Local research record'}. ${s.inspection}. ${s.limitation}`;
 return <><dl className="provenance-grid"><dt>Official title</dt><dd>{s.title??'Unavailable in supplied citation; descriptive label only.'}</dd><dt>Institution</dt><dd>{s.institution??'Unavailable in supplied citation'}</dd><dt>Publication / fiscal year</dt><dd>{s.year??'Unavailable'} / {s.fiscalYear??'Not established or not applicable'}</dd><dt>Verification status</dt><dd>{s.inspection}</dd><dt>Location</dt><dd>{s.locations}</dd><dt>Research limitations</dt><dd>{s.limitation}</dd></dl>
 {s.url&&<a href={s.url} target="_blank" rel="noopener noreferrer">Open source document record</a>}
 {s.sha256&&<p>Recorded SHA256: <code className="hash">{s.sha256}</code>{s.id==='PRD'?'Supplied Markdown checked locally.':'Previously reported PDF hash; not recalculated here.'}</p>}
 <details className="disclosure"><summary>Figures supported by this source ({s.claims.length})</summary><ul>{s.claims.map((c,i)=><li key={i}><strong>{c.label}</strong>: {c.provenance.locator}. {c.provenance.pdfPages.length?`PDF pages ${c.provenance.pdfPages.join(', ')}`:'Page unavailable; no page inferred'}. {c.provenance.evidenceType}. {c.provenance.note}</li>)}</ul></details>
 <label className="citation-label">Copyable source citation<textarea readOnly value={citation} onFocus={e=>e.currentTarget.select()}/></label><CopyText text={citation} label="Copy citation"/>
 </>;
}
export function CopyText({text,label}:{text:string;label:string}){const [status,setStatus]=useState('');return <><button onClick={async()=>{try{await navigator.clipboard.writeText(text);setStatus('Copied to clipboard.');}catch{setStatus('Clipboard unavailable. Select and copy the text above.');}}}>{label}</button><p role="status">{status}</p></>;}
export function SourceProvider({data,children}:{data:Dataset;children:ReactNode}){
 const dialog=useRef<HTMLDialogElement>(null);const trigger=useRef<HTMLElement|null>(null);const [selected,setSelected]=useState<ResearchEntry|null>(null);
 const open=(id:string)=>{const s=sourceEntries(data).find(x=>x.id===id);if(!s)return;trigger.current=document.activeElement as HTMLElement;setSelected(s);dialog.current?.showModal();};
 return <SourceContext.Provider value={open}>{children}<dialog ref={dialog} className="source-drawer" aria-labelledby="source-dialog-title" onClose={()=>trigger.current?.focus()}><button autoFocus onClick={()=>dialog.current?.close()}>Close source inspector</button><h2 id="source-dialog-title">{selected?.id}: {selected?.label}</h2>{selected&&<SourceDetails source={selected}/>}</dialog></SourceContext.Provider>;
}
