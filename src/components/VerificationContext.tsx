import type {Dataset,Provenance} from '../evidence/types';
import {SourceReference} from './SourceReference';
export function VerificationContext({data,have,need,follows,limit,provenance}:{data:Dataset;have:string;need:string;follows:string;limit:string;provenance?:Provenance}){
 return <dl className="provenance-grid"><dt>What we have</dt><dd>{have}</dd><dt>What we need</dt><dd>{need}</dd><dt>What follows</dt><dd>{follows}</dd><dt>What does not follow</dt><dd>{limit}</dd><dt>Source</dt><dd>{provenance?<SourceReference provenance={provenance} sources={data.sources}/>:<a href="#sources">Research evidence boundaries · PRD §§2.4 and F05</a>}</dd></dl>;
}
