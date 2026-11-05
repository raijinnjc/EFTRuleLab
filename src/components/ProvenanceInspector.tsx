import type {Dataset,Provenance} from '../evidence/types';
import {Disclosure} from './primitives';
import {SourceReference} from './SourceReference';
export function ProvenanceInspector({label,provenance,data}:{label:string;provenance:Provenance;data:Dataset}){
 const source=data.sources.find(s=>s.id===provenance.sourceId)!;
 return <Disclosure label={label}><dl className="provenance-grid"><dt>Source</dt><dd>{source.title}, FY{provenance.fiscalYear}</dd><dt>Locator</dt><dd>{provenance.locator}. {provenance.pdfPages.length?`Recorded PDF pages: ${provenance.pdfPages.join(', ')}.`:'Exact PDF page not recorded; no page is inferred.'}</dd><dt>Evidence</dt><dd>Published source record; inherited PRD transcription.</dd><dt>Inspection limit</dt><dd>{provenance.note}</dd></dl><SourceReference provenance={provenance} sources={data.sources}/></Disclosure>;
}
