import type {Dataset,Provenance} from '../evidence/types';
export function SourceReference({provenance,sources}:{provenance:Provenance;sources:Dataset['sources']}){
 const s=sources.find(s=>s.id===provenance.sourceId);
 if(!s)return <span>Source unavailable</span>;
 const page=provenance.pdfPages[0];
 return <a className="source-link" href={s.pdfUrl?`${s.pdfUrl}${page?`#page=${page}`:''}`:s.url} target="_blank" rel="noopener noreferrer">{s.id}{page?` · PDF p.${page}`:` · ${provenance.locator}`}</a>;
}
