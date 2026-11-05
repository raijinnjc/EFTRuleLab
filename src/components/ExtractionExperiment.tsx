import {useState} from 'react';
import type {Dataset} from '../evidence/types';
import {extraction,extractionCase} from '../domain/analysis';
import {formatRupiah} from '../domain/format';
import {Amount,Disclosure,EvidenceBadge,Section} from './primitives';
import {ProvenanceInspector} from './ProvenanceInspector';
export function ExtractionExperiment({data}:{data:Dataset}){
 const [active,setActive]=useState(false);const s=extraction(data,active);const baseline=extraction(data,false);
 const bpd=data.fiscal.deductions.find(x=>x.id==='bpd')!;
 return <Section id="extraction" title="Extraction integrity experiment"><div className="analysis-intro"><p className="lead-small">One transcription. A different analytical result.</p><EvidenceBadge type={s.evidenceType}/></div>
 <p>Replay an observed research-side BPD extraction discrepancy in a separate analytical workspace. Verified source inputs, the published ledger and historical verification above remain unchanged.</p>
 <div className={`experiment-state ${active?'experiment-active':''}`}><h3>{active?'Research-side extraction test · active':'Verified source value · default'}</h3><div className="control-row"><button aria-pressed={active} onClick={()=>setActive(true)}>Replay observed research-side extraction</button><button onClick={()=>setActive(false)}>Restore verified source value</button></div>
 <div className="table-scroll" tabIndex={0} role="region" aria-label="Extraction comparison"><table><caption>Research input comparison; published records are immutable</caption><thead><tr><th scope="col">Input / calculation</th><th scope="col">Verified baseline</th><th scope="col">Selected analytical state</th></tr></thead><tbody><tr><th scope="row">BPD allowances</th><td><Amount value={s.verifiedBpd}/></td><td><Amount value={s.selectedBpd}/></td></tr><tr><th scope="row">Calculated performance pool</th><td><Amount value={baseline.pool}/></td><td><Amount value={s.pool}/></td></tr><tr><th scope="row">Published awards (unchanged)</th><td><Amount value={s.ledger}/></td><td><Amount value={s.ledger}/></td></tr></tbody></table></div>
 <p>Selected BPD input: <Amount value={s.selectedBpd}/>{active?' (flawed research extraction).':' (source-checked baseline).'}</p><p className="small-copy">Scroll within the comparison table on narrow screens; all amounts remain available as exact rupiah.</p>
 <div className="experiment-result" role="status" aria-live="polite"><strong>{active?'Apparent mismatch in extracted input':'Source-checked reconciliation'}</strong><span className="result-value" data-testid="experiment-gap">{s.gap>0n?'+':''}{formatRupiah(s.gap)}</span><p>{active?'Apparent gap from the flawed researcher-side input.':'Gap restored to the verified source baseline.'}</p></div>
 <p>Published awards remain <Amount value={s.ledger}/>. Test 2 remains INCOMPLETE; the experiment supplies no assessment or selection records.</p>
 </div><p className="mode-note">This scenario corrects a researcher-side document extraction discrepancy; it does not indicate an error or overpayment by the government.</p>
 <Disclosure label="Inspect experiment derivation"><p>Selected residual <Amount value={s.residual}/> × the documented FY2022 performance share = <Amount value={s.pool}/>. Subtract the unchanged published ledger <Amount value={s.ledger}/> to obtain the research calculation gap.</p><p>Reported flawed research extraction: Rp{BigInt(extractionCase.flawedBpdRp).toLocaleString('en-US')}. Research provenance: {extractionCase.sourceId} {extractionCase.section}. {extractionCase.note}</p></Disclosure>
 <ProvenanceInspector label="Inspect source-checked BPD provenance" provenance={bpd.provenance} data={data}/>
 </Section>;
}
