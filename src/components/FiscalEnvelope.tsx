import {useState} from 'react';
import type {Dataset} from '../evidence/types';
import {envelope,formatBillions,plotFraction} from '../domain/analysis';
import {parseRupiah,reconstruct} from '../domain/fiscal';
import {formatRupiah} from '../domain/format';
import {Amount,Disclosure,EvidenceBadge,Section} from './primitives';
import {ProvenanceInspector} from './ProvenanceInspector';
import {componentKeys,componentLabels} from './PolicyStudio';
export function FiscalEnvelope({data}:{data:Dataset}){
 const [display,setDisplay]=useState('full');const rows=envelope(data);const r=reconstruct(data);const gross=parseRupiah(data.fiscal.gross.value);
 const fmt=display==='billions'?formatBillions:formatRupiah;
 const rule=data.rules.find(x=>x.fiscalYear===2022)!;
 return <Section id="funds" title="Follow the funds"><div className="analysis-intro"><p className="lead-small">From the gross envelope to the residual.</p><EvidenceBadge type="DERIVED"/></div><p>Five deductions total <Amount value={r.deductions}/>. The remaining <Amount value={r.residual}/> is split by the FY2022 rule. The residual and its components are parts of gross ADD, not additional money.</p>
 <div className="tool-layout"><div className="tool-canvas"><figure className="waterfall"><figcaption>Gross ADD to residual. One shared scale, from zero to {fmt(gross)}. Deductions span the previous to the next running balance.</figcaption><div className="waterfall-rows" role="img" aria-label="Gross ADD to residual waterfall">{rows.map(row=><div className="waterfall-row" key={row.id}><div className="waterfall-row-label"><span>{row.label}{row.kind==='deduction'?' · deduction':''}</span><strong>{fmt(row.change)}</strong></div><svg viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true"><path className="chart-guide" d="M0 36H1000"/><rect className={row.kind==='deduction'?'waterfall-deduction':'waterfall-total'} x={plotFraction(row.from,gross)*1000} y={6} width={plotFraction(row.to-row.from,gross)*1000} height={26}/></svg><p className="small-copy">Running balance: {fmt(row.balance)}</p></div>)}</div></figure>
 <p className="mode-note">Performance is {rule.shares.performanceBp/100}% of the residual, approximately {(Number(r.components.performance*100000000n/gross)/1000000).toFixed(3)}% of gross ADD. Exact amounts remain unchanged when display units switch.</p>
 <div className="component-split"><h3>Inside the FY2022 residual</h3><p>Separate residual-scale view. Basic, formula and performance sum to <Amount value={r.residual}/>.</p><div className="residual-stack" aria-hidden="true">{componentKeys.map(key=><span key={key} className={key} style={{width:`${plotFraction(r.components[key],r.residual)*100}%`}}/>)}</div><dl className="component-values">{componentKeys.map(key=><div key={key}><dt><span className={`swatch ${key}`}/>{componentLabels[key]}</dt><dd><Amount value={r.components[key]}/></dd></div>)}</dl></div>
 </div><aside className="tool-notes" aria-label="Fiscal display and provenance"> <label className="display-control">Envelope display<select value={display} onChange={e=>setDisplay(e.target.value)}><option value="full">Full Rp</option><option value="billions">Rp billion · rounded display only</option></select></label>
 <Disclosure label="Inspect five deductions">{data.fiscal.deductions.map(input=><article className="deduction-entry" key={input.id}><h3>{input.label}: <Amount value={parseRupiah(input.value)}/></h3><ProvenanceInspector label={`Inspect ${input.label} source`} provenance={input.provenance} data={data}/></article>)}</Disclosure>
 <ProvenanceInspector label="Inspect gross ADD source" provenance={data.fiscal.gross.provenance} data={data}/>
 <Disclosure label="Inspect envelope formula"><p>{formatRupiah(gross)} − {formatRupiah(r.deductions)} = {formatRupiah(r.residual)}. Performance pool = {formatRupiah(r.residual)} × {rule.shares.performanceBp} ÷ 10,000 = {formatRupiah(r.components.performance)}.</p></Disclosure>
</aside></div>
 <div className="table-scroll" tabIndex={0} role="region" aria-label="Envelope data"><table><caption>Exact fiscal envelope</caption><thead><tr><th scope="col">Step</th><th scope="col">Amount / deduction</th><th scope="col">Running balance</th></tr></thead><tbody>{rows.map(row=><tr key={row.id}><th scope="row">{row.label}</th><td><Amount value={row.change}/></td><td><Amount value={row.balance}/></td></tr>)}</tbody></table></div>
 </Section>;
}
