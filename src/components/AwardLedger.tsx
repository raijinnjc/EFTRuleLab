import {useState} from 'react';
import type {Dataset} from '../evidence/types';
import {queryAwards,subtotal} from '../domain/analysis';
import type {AwardQuery,AwardSort} from '../domain/analysis';
import {Amount,Disclosure,EvidenceBadge,Section} from './primitives';
import {SourceReference} from './SourceReference';
const initial:AwardQuery={search:'',kecamatan:'',sort:'village',direction:'asc'};
const columns:[AwardSort,string][]=[['village','Village'],['kecamatan','Kecamatan'],['amount','Allocation'],['page','PDF page'],['row','Row']];
export function AwardLedger({data}:{data:Dataset}){
 const [query,setQuery]=useState(initial);const rows=queryAwards(data.awards,query);
 const sort=(key:AwardSort)=>setQuery({...query,sort:key,direction:query.sort===key&&query.direction==='asc'?'desc':'asc'});
 return <Section id="awards" title="The award ledger"><div className="analysis-intro"><p className="lead-small">Published amounts, open to inspection.</p><EvidenceBadge type="OFFICIAL_SOURCE"/></div><p>{data.awards.length} positive entries in the published FY2022 allocation annex. This historical ledger is unchanged by the Policy Studio or extraction experiment.</p>
 <div className="control-row ledger-controls"><label>Search village or kecamatan<input type="search" value={query.search} onChange={e=>setQuery({...query,search:e.target.value})}/></label><label>Kecamatan<select aria-label="Kecamatan" value={query.kecamatan} onChange={e=>setQuery({...query,kecamatan:e.target.value})}><option value="">All kecamatan</option>{data.coverage.map(c=><option key={c.kecamatan}>{c.kecamatan}</option>)}</select></label><button onClick={()=>setQuery(initial)}>Clear filters</button></div>
 <div className="ledger-totals"><p>Full published total<strong data-testid="full-ledger-total"><Amount value={subtotal(data.awards)}/></strong></p><p>Filtered subtotal<strong data-testid="filtered-subtotal"><Amount value={subtotal(rows)}/></strong></p><p role="status" aria-live="polite">{rows.length} of {data.awards.length} positive entries shown</p></div>
 <p className="small-copy table-hint">Use column buttons to sort. Scroll within the ledger to inspect every entry and all source columns.</p>
 <div className="table-scroll" tabIndex={0} role="region" aria-label="Published award ledger"><table className="award-table"><caption>FY2022 published positive performance allocations</caption><thead><tr>{columns.map(([key,label])=><th key={key} scope="col" aria-sort={query.sort===key?(query.direction==='asc'?'ascending':'descending'):'none'}><button aria-label={`Sort by ${label}`} onClick={()=>sort(key)}>{label}{query.sort===key?` (${query.direction==='asc'?'ascending':'descending'})`:''}</button></th>)}<th scope="col">Source document</th></tr></thead><tbody>{rows.map(a=><tr key={a.id}><th scope="row">{a.village}</th><td>{a.kecamatan}</td><td><Amount value={BigInt(a.amount)}/></td><td>{a.provenance.pdfPages.join(', ')}</td><td>row {a.sourceRow}</td><td><SourceReference provenance={a.provenance} sources={data.sources}/><span className="small-copy">Annex II, column 27; row within kecamatan.</span></td></tr>)}</tbody></table></div>
 {rows.length===0&&<p className="empty-state" role="status">No matching village. Clear the search or choose another kecamatan. No matching entry does not imply failed assessment or environmental underperformance.</p>}
 <p className="mode-note">{data.coverage.reduce((n,c)=>n+c.allocationTableRows,0)} allocation-table rows are covered by the annex; this is not the assessed population. Blank or absent positive amounts do not establish zero scores or ineligibility. Allocations are not actual payments.</p>
 <Disclosure label="Copy published ledger"><p>Selectable tab-separated source transcription; full published ledger, unaffected by filters.</p><textarea className="copy-ledger" aria-label="Copyable full published ledger" readOnly rows={8} value={['Village\tKecamatan\tAmount Rp\tSource\tPDF page\tRow',...data.awards.map(a=>`${a.village}\t${a.kecamatan}\t${a.amount}\t${a.provenance.sourceId}\t${a.provenance.pdfPages.join(',')}\t${a.sourceRow}`)].join('\n')}/></Disclosure>
 </Section>;
}
