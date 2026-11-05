import {useId} from 'react';
import type {Dataset} from '../evidence/types';
import {reconstruct} from '../domain/fiscal';
import {verifyHistorical} from '../domain/evidence';
import {Amount,Disclosure,EvidenceBadge} from './primitives';
import {SourceReference} from './SourceReference';
function Connector({unavailable=false}:{unavailable?:boolean}){
 const id=useId();
 return <svg className={`connector ${unavailable?'unavailable':''}`} viewBox="0 0 32 40" role="img" aria-labelledby={id}><title id={id}>{unavailable?'Replay unavailable: required inputs not obtained':'Next fiscal verification step'}</title><path d="M16 2v30m-6-6 6 6 6-6"/></svg>;
}
export function TwoTestDiagram({data}:{data:Dataset}){
 const result=reconstruct(data);const verification=verifyHistorical(data);
 return <div className="two-test-diagram" aria-label="Two independent verification questions">
  <article id="test-1" className="evidence-track verified" aria-labelledby="test-1-title">
   <div className="track-heading"><span className="track-number" aria-hidden="true">01</span><EvidenceBadge type="DERIVED"/></div>
   <h3 id="test-1-title">Test 1: Fiscal reconciliation</h3>
   <p className="track-question">Do the published amounts balance?</p>
   <ol className="evidence-steps">
    <li><Disclosure label="Inspect fiscal inputs"><div className="table-scroll" tabIndex={0} role="region" aria-label="Fiscal input table"><table><caption>Published fiscal inputs</caption><thead><tr><th scope="col">Input</th><th scope="col">Rupiah</th></tr></thead><tbody>{[data.fiscal.gross,...data.fiscal.deductions].map(x=><tr key={x.id}><th scope="row">{x.label}</th><td><Amount value={BigInt(x.value)}/></td></tr>)}</tbody></table></div><p>Source-checked amounts reported in the supplied PRD. <SourceReference provenance={data.fiscal.gross.provenance} sources={data.sources}/></p></Disclosure><p className="step-note">Gross ADD, five deductions and the documented FY2022 rule.</p></li>
    <li><Connector/><strong>Reproduce the performance pool</strong><p><Amount value={result.residual}/> residual × {data.rules.find(r=>r.fiscalYear===2022)!.shares.performanceBp/100}%</p><p className="step-note">The performance share applies to the residual, not gross ADD.</p></li>
    <li><Connector/><strong>Compare the published ledger</strong><p>{data.awards.length} positive entries × <Amount value={BigInt(data.awards[0].amount)}/></p><p className="step-note">Annex II, column 27, PDF pp.17–21.</p></li>
   </ol>
   <div className="track-result"><span className="result-status">{verification.test1.status}</span><Amount value={result.gap} className="result-value"/><p>Pool-to-ledger reconciliation gap</p></div>
  </article>
  <article id="test-2" className="evidence-track incomplete" aria-labelledby="test-2-title">
   <div className="track-heading"><span className="track-number" aria-hidden="true">02</span><EvidenceBadge type="NOT_OBTAINED"/></div>
   <h3 id="test-2-title">Test 2: Recipient decision replay</h3>
   <p className="track-question">Can the selection be independently reproduced?</p>
   <ol className="evidence-steps">
    <li><Disclosure label="Inspect missing decision records"><ul>{data.missing.filter(m=>verification.test2.missingIds.includes(m.id)).map(m=><li key={m.id}>{m.label} — <strong>{m.status.replaceAll('_',' ')}</strong></li>)}</ul></Disclosure><p className="step-note">Approved historical inputs and the implemented decision rule are required.</p></li>
    <li><Connector unavailable/><strong>Independent replay unavailable</strong><p>No recipient set or scores are calculated from missing records.</p></li>
    <li><Connector unavailable/><strong>Comparison cannot be performed</strong><p className="step-note">Passing the fiscal test does not establish recipient eligibility or selection reproducibility.</p></li>
   </ol>
   <div className="track-result"><span className="result-status">{verification.test2.status}</span><p>{verification.test2.reason}</p><p className="step-note">This does not mean the government has no such records.</p></div>
  </article>
 </div>;
}
