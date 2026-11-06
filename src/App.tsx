import {SourceProvider} from './components/SourceDrawer';
import {SourceLibrary} from './components/SourceLibrary';
import {ProtocolWorkflow} from './components/ProtocolWorkflow';
import {GuidedDemo} from './components/GuidedDemo';
import {ResearchExports} from './components/ResearchExports';
import './styles/research.css';
import {useEffect,useState} from 'react';
import {dataset} from './evidence/dataset';
import type {Dataset} from './evidence/types';
import {verifyHistorical} from './domain/evidence';
import {reconstruct} from './domain/fiscal';
import {Amount,Disclosure,EvidenceUnavailable,Section} from './components/primitives';
import {TwoTestDiagram} from './components/TwoTestDiagram';
import {PolicyStudio} from './components/PolicyStudio';
import {FiscalEnvelope} from './components/FiscalEnvelope';
import {AwardLedger} from './components/AwardLedger';
import {ExtractionExperiment} from './components/ExtractionExperiment';
import './styles/analysis.css';
import './styles/tokens.css';
import './styles/app.css';
import './styles/dusk.css';
const links=[['overview','Research question'],['policy','Policy'],['funds','Funds'],['awards','Awards'],['verification','Verification'],['protocol','ARP'],['sources','Sources'],['exports','Exports']] as const;
export function App({data=dataset}:{data?:Dataset}={}){
 const [ruleYear,setRuleYear]=useState<2021|2022>(2022);const [experimentActive,setExperimentActive]=useState(false);
 const [menuOpen,setMenuOpen]=useState(false);
 const [section,setSection]=useState(typeof window==='undefined'?'overview':window.location.hash.slice(1)||'overview');
 useEffect(()=>{const onHash=()=>setSection(window.location.hash.slice(1)||'overview');window.addEventListener('hashchange',onHash);return ()=>window.removeEventListener('hashchange',onHash);},[]);
 const verification=verifyHistorical(data);
 if(verification.test1.status==='INCOMPLETE')return <main className="container"><EvidenceUnavailable reason={verification.test1.reason}/></main>;
 const r=reconstruct(data);
 return <SourceProvider data={data}>
  <a className="skip-link" href="#main">Skip to content</a>
  <header className="site-header"><div className="container header-inner"><a href="#overview" className="wordmark" aria-label="EFT RuleLab home">EFT <span>RuleLab</span></a><p className="project-context">Kubu Raya · FY2022<br/><span>Independent research prototype</span></p><button className="menu-button" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={()=>setMenuOpen(!menuOpen)}>Navigation</button><nav id="primary-nav" className={menuOpen?'is-open':''} aria-label="Primary">{links.map(([id,label])=><a href={`#${id}`} aria-current={section===id?'location':undefined} key={id} onClick={()=>setMenuOpen(false)}>{label}</a>)}</nav></div></header>
  <main id="main" className="container" tabIndex={-1}>
   <section id="overview" className="overview" aria-labelledby="overview-title"><picture className="hero-photo" aria-hidden="true"><source media="(max-width: 767px)" srcSet="/images/dusk-mobile.webp"/><img src="/images/dusk-desktop.webp" alt="" fetchPriority="high"/></picture><div className="hero-copy"><span className="evidence-badge">Independent fiscal research · Kubu Raya FY2022</span><h1 id="overview-title">The numbers reconcile. Can the decision be reproduced?</h1><p className="lead">{verification.test1.status==='PASS'?'Kubu Raya’s published FY2022 performance allocation balances exactly.':'The fiscal input package has a reconciliation discrepancy; inspect the source versions before drawing a conclusion.'} Reconstructing why these villages received positive awards requires different records.</p><a className="primary-link" href="#verification">Explore the evidence</a></div><aside className="allocation-summary" aria-label="Published allocation baseline"><span className="summary-title">Published performance pool</span><Amount value={r.components.performance} className="hero-amount"/><p>{data.awards.length} published positive entries.<br/>Reproduced from the FY2022 residual.</p><div className="mini-results"><div><strong>Test 1: {verification.test1.status}</strong><span><Amount value={r.gap}/> reconciliation gap</span></div><div><strong>Test 2: {verification.test2.status}</strong><span>Approved assessment/selection records not obtained for this study.</span></div></div><p className="small-copy">ADD is a district-to-village transfer, distinct from national Dana Desa.</p></aside></section>
   <GuidedDemo data={data}/><Disclosure label="Research terms"><dl className="provenance-grid"><dt>ADD</dt><dd>A district-to-village transfer, distinct from national Dana Desa.</dd><dt>Performance allocation</dt><dd>A published budget component, not evidence of actual cash payment or environmental impact.</dd><dt>Reconciliation</dt><dd>Comparing the computed pool with the sum of the published positive amounts.</dd><dt>Recipient decision replay</dt><dd>Independently reproducing identities and amounts from approved assessment and selection records.</dd><dt>Method</dt><dd>Historical documentary reconstruction using source-referenced research inputs and explicit evidence limits.</dd></dl></Disclosure>
   <Section id="verification" title="Two questions. Different evidence."><div className="section-intro"><p>One test follows the arithmetic. The other would need to follow the decision. They are independent checks.</p><span className="small-copy">Historical FY2022 source · reproduced calculations</span></div><TwoTestDiagram data={data}/><p className="small-copy">Historical baseline only. <a href="#extraction">Explore the separate research-side extraction experiment</a>.</p><Disclosure label="Read the verification transcript"><p>Test 1: subtract the five deductions from gross ADD, apply the FY2022 performance share to the residual, then compare that pool with the sum of the published positive allocations. {verification.test1.status==='PASS'?'The supplied baseline reconciles exactly.':'These inputs have a reconciliation discrepancy; this is not an allegation of government error.'}</p><p>Test 2: obtain the approved assessment register, actual assessed universe, implemented selection rules and signed decisions before independently deriving a recipient set. Those inputs were not obtained for this study. The replay has not been executed.</p></Disclosure></Section>
   <PolicyStudio data={data} ruleYear={ruleYear} onRuleChange={setRuleYear}/><FiscalEnvelope data={data}/><AwardLedger data={data}/><ExtractionExperiment data={data} experimentActive={experimentActive} onExperimentChange={setExperimentActive}/>
   <ProtocolWorkflow data={data}/><SourceLibrary data={data}/><ResearchExports data={data} state={{ruleYear,experimentActive}}/>
  </main>
  <footer className="site-footer"><div className="container"><strong>EFT RuleLab</strong><p className="photo-credit">Atmospheric photograph: <a href="https://commons.wikimedia.org/wiki/File:Vallee-brouillard.jpg" target="_blank" rel="noopener noreferrer">Thomas Bresson, Vallée brouillard</a>, <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">CC BY 3.0</a>. Cropped and compressed for this interface. Not presented as Kubu Raya or evidence of ecological outcomes.</p><p>Independent research demonstration · Not an official Kubu Raya system · No actual payments or ecological outcomes verified.</p><p>P0 research workbench. Proposed institutional roles require confirmation; recipient decision replay remains incomplete.</p></div></footer>
 </SourceProvider>;
}
