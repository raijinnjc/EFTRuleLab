import {useId} from 'react';
import type {Dataset} from '../evidence/types';
import {reconstruct} from '../domain/fiscal';
import {verifyHistorical} from '../domain/evidence';
import {Amount,Disclosure,EvidenceBadge,EvidenceUnavailable} from './primitives';
import {SourceReference} from './SourceReference';
import {VerificationContext} from './VerificationContext';
function Connector({unavailable=false}:{unavailable?:boolean}){
 const id=useId();
 return <svg className={`connector ${unavailable?'unavailable':''}`} viewBox="0 0 32 40" role="img" aria-labelledby={id}><title id={id}>{unavailable?'Replay unavailable: required inputs not obtained':'Next fiscal verification step'}</title><path d="M16 2v30m-6-6 6 6 6-6"/></svg>;
}
export function TwoTestDiagram({data}:{data:Dataset}){
 const verification=verifyHistorical(data);
 if(verification.test1.status==='INCOMPLETE')return <EvidenceUnavailable reason={verification.test1.reason}/>;
 const result=reconstruct(data);
 return <div className="two-test-diagram" role="group" aria-label="Two independent verification questions">
  <article id="test-1" className="evidence-track verified" aria-labelledby="test-1-title">
   <div className="track-heading"><span className="track-number" aria-hidden="true">01</span><EvidenceBadge type="DERIVED"/></div>
   <h3 id="test-1-title">Test 1: Fiscal reconciliation</h3>
   <p className="track-question">Do the published amounts balance?</p>
   <ol className="evidence-steps">
    <li><Disclosure label="Inspect fiscal inputs"><div className="table-scroll" tabIndex={0} role="region" aria-label="Fiscal input table"><table><caption>Published fiscal inputs</caption><thead><tr><th scope="col">Input</th><th scope="col">Rupiah</th></tr></thead><tbody>{[data.fiscal.gross,...data.fiscal.deductions].map(x=><tr key={x.id}><th scope="row">{x.label}</th><td><Amount value={BigInt(x.value)}/></td></tr>)}</tbody></table></div><p>Source-checked amounts reported in the supplied PRD. <SourceReference provenance={data.fiscal.gross.provenance} sources={data.sources}/></p><VerificationContext data={data} have="The supplied gross envelope and five source-referenced deductions." need="The correct fiscal instrument, transcription and residual-share rule." follows="These source values permit an exact fiscal reconstruction." limit="Budget inputs alone do not establish selection, payments or outcomes." provenance={data.fiscal.gross.provenance}/></Disclosure><p className="step-note">Gross ADD, five deductions and the documented FY2022 rule.</p></li>
    <li><Connector/><Disclosure label="Inspect pool calculation"><strong>Reproduce the performance pool</strong><p><Amount value={result.residual}/> residual × {data.rules.find(r=>r.fiscalYear===2022)!.shares.performanceBp/100}%</p><p className="step-note">The performance share applies to the residual, not gross ADD.</p><VerificationContext data={data} have="Gross ADD, five source-referenced deductions and the FY2022 component rule." need="Correct fiscal-year instrument and input transcription." follows="The documented share reproduces the available performance pool." limit="A matching pool does not identify eligible villages or verify cash payments." provenance={data.rules.find(r=>r.fiscalYear===2022)!.provenance}/></Disclosure></li>
    <li><Connector/><Disclosure label="Inspect ledger comparison"><strong>Compare the published ledger</strong><p>{data.awards.length} positive entries × <Amount value={BigInt(data.awards[0].amount)}/></p><p className="step-note">Annex II, column 27, PDF pp.17 to 21.</p><VerificationContext data={data} have="The twenty positive amounts with source page and within-kecamatan row locators." need="A sum of the full published ledger, not a filtered subset." follows={result.gap===0n?'The supplied baseline pool and published positive allocations match exactly.':'These fiscal inputs have a reconciliation discrepancy; inspect their source versions before drawing conclusions.'} limit="Equal awards do not imply equal scores, verified eligibility or ecological performance." provenance={data.awards[0].provenance}/></Disclosure></li>
   </ol>
   <div className="track-result"><span className="result-status">{verification.test1.status}</span><Amount value={result.gap} className="result-value"/><p>Pool-to-ledger reconciliation gap</p><Disclosure label="Inspect fiscal result"><VerificationContext data={data} have="A valid fiscal reconstruction and full positive-award ledger." need="A zero gap for PASS; invalid inputs must stop calculation." follows={result.gap===0n?'PASS answers the arithmetic question for the supplied source baseline.':'The nonzero gap prevents a fiscal PASS for these inputs; it does not establish government error.'} limit="It does not imply Test 2 success, cash transfer or ecological outcome." provenance={data.fiscal.gross.provenance}/></Disclosure></div>
  </article>
  <article id="test-2" className="evidence-track incomplete" aria-labelledby="test-2-title">
   <div className="track-heading"><span className="track-number" aria-hidden="true">02</span><EvidenceBadge type="NOT_OBTAINED"/></div>
   <h3 id="test-2-title">Test 2: Recipient decision replay</h3>
   <p className="track-question">Can the selection be independently reproduced?</p>
   <ol className="evidence-steps">
    <li><Disclosure label="Inspect missing decision records"><ul>{data.missing.filter(m=>verification.test2.missingIds.includes(m.id)).map(m=><li key={m.id}>{m.label} — <strong>{m.status.replaceAll('_',' ')}</strong></li>)}</ul><VerificationContext data={data} have="The published allocation roster and an explicit missing-record registry." need="Approved assessment values, assessed universe, implemented rules and signed decisions." follows="The study cannot independently replay the historical recipient decision." limit="No absent research record becomes a zero score or proof of government misconduct."/></Disclosure><p className="step-note">Approved historical inputs and the implemented decision rule are required.</p></li>
    <li><Connector unavailable/><Disclosure label="Inspect unavailable replay"><strong>Independent replay unavailable</strong><p>No recipient set or scores are calculated from missing records.</p><VerificationContext data={data} have="Published allocations and regulatory architecture, not approved historical scores." need="Approved assessment values, actual assessed universe, implemented selection function and signed decisions." follows="Test 2 is INCOMPLETE from the records obtained for this study." limit="Missing research inputs do not prove the government lacks records or acted improperly."/></Disclosure></li>
    <li><Connector unavailable/><Disclosure label="Inspect decision comparison"><strong>Comparison cannot be performed</strong><p className="step-note">Passing the fiscal test does not establish recipient eligibility or selection reproducibility.</p><VerificationContext data={data} have="A known published ledger, which is a target for future independent comparison." need="A recipient identity set and amounts derived from authoritative historical inputs, with target roster withheld." follows="No historical identity/amount replay result can be asserted." limit="INCOMPLETE does not establish selection failure or certification."/></Disclosure></li>
   </ol>
   <div className="track-result"><span className="result-status">{verification.test2.status}</span><p>{verification.test2.reason}</p><p className="step-note">This does not mean the government has no such records.</p><Disclosure label="Inspect incomplete result"><VerificationContext data={data} have="Explicit not-obtained entries in this research evidence register." need="The approved historical assessment and selection record set." follows="Stop the affected replay and name its missing evidence." limit="Do not fabricate a success, failure, ranking or eligibility algorithm."/></Disclosure></div>
  </article>
 </div>;
}
