import {ResearchChapterNavigation} from './components/ResearchChapterNavigation';
import {isResearchRoute,writeResearchRoute,scrollResearchTarget,releaseResearchScroll} from './motion';
import {WorkspaceContext,WorkspaceFrame,workspaceFor,workspaceLabels,returnSceneFor} from './navigation';
import {ResearchExperience as ResearchExperienceView} from './components/ResearchExperience';
import {SourceProvider,InspectSourceButton} from './components/SourceDrawer';
import {SourceLibrary as SourceLibraryView} from './components/SourceLibrary';
import {ProtocolWorkflow as ProtocolWorkflowView} from './components/ProtocolWorkflow';
import {GuidedDemo} from './components/GuidedDemo';
import {ResearchExports as ResearchExportsView} from './components/ResearchExports';
import './styles/research.css';
import {memo,useEffect,useMemo,useRef,useState} from 'react';
import {dataset} from './evidence/dataset';
import type {Dataset} from './evidence/types';
import {verifyHistorical} from './domain/evidence';
import {reconstruct} from './domain/fiscal';
import {Amount,Disclosure,EvidenceUnavailable,Section} from './components/primitives';
import {TwoTestDiagram as TwoTestDiagramView} from './components/TwoTestDiagram';
import {PolicyStudio as PolicyStudioView} from './components/PolicyStudio';
import {FiscalEnvelope as FiscalEnvelopeView} from './components/FiscalEnvelope';
import {AwardLedger as AwardLedgerView} from './components/AwardLedger';
import {ExtractionExperiment as ExtractionExperimentView} from './components/ExtractionExperiment';
import './styles/analysis.css';
import './styles/tokens.css';
import './styles/app.css';
import './styles/dusk.css';
import './styles/graphical.css';
import './styles/workspaces.css';
import './styles/precision.css';
import './styles/motion.css';
import './styles/story.css';
import './styles/consolidation.css';
// Stable view boundaries avoid recalculating hidden tools on unrelated App state updates.
const ResearchExperience=memo(ResearchExperienceView);
const TwoTestDiagram=memo(TwoTestDiagramView);
const PolicyStudio=memo(PolicyStudioView);
const FiscalEnvelope=memo(FiscalEnvelopeView);
const AwardLedger=memo(AwardLedgerView);
const ExtractionExperiment=memo(ExtractionExperimentView);
const ProtocolWorkflow=memo(ProtocolWorkflowView);
const SourceLibrary=memo(SourceLibraryView);
const ResearchExports=memo(ResearchExportsView);
const links=[['overview','Research question'],['rule-shift','Rule Shift'],['policy','Policy'],['funds','Funds'],['awards','Awards'],['verification','Verification'],['extraction','Extraction'],['protocol','ARP'],['sources','Sources'],['exports','Exports']] as const;
export function App({data=dataset}:{data?:Dataset}={}){
 const [ruleYear,setRuleYear]=useState<2021|2022>(2022);const [experimentActive,setExperimentActive]=useState(false);
 const [menuOpen,setMenuOpen]=useState(false);
 const [section,setSection]=useState(typeof window==='undefined'?'overview':window.location.hash.slice(1)||'overview');
 const sceneOrigin=useRef(['puzzle','rule-shift','evidence-gap','protocol'].includes(section)?section:returnSceneFor(section));
 const firstNavigation=useRef(true);const shouldFocus=useRef(true);const activeWorkspace=workspaceFor(section);
 const navigate=(id:string,focus=true)=>{if(['puzzle','rule-shift','evidence-gap','protocol'].includes(id))sceneOrigin.current=id;if(section!==id)shouldFocus.current=focus;setSection(id);writeResearchRoute(id);};
 useEffect(()=>{const previous=window.history.scrollRestoration;window.history.scrollRestoration='manual';return ()=>{releaseResearchScroll();window.history.scrollRestoration=previous}},[]);
 useEffect(()=>{const click=(event:MouseEvent)=>{if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;const link=event.target instanceof Element?event.target.closest<HTMLAnchorElement>('a[href^="#"]'):null;const id=link?.getAttribute('href')?.slice(1);if(!id||!isResearchRoute(id)||link?.target||link?.hasAttribute('download'))return;event.preventDefault();if(id!==section)navigate(id);else if(!link?.closest('#primary-nav'))focusSection();};document.addEventListener('click',click);return ()=>document.removeEventListener('click',click);},[section]);
 useEffect(()=>{const onHash=()=>{const id=window.location.hash.slice(1)||'overview';if(id==='main')return;if(['puzzle','rule-shift','evidence-gap','protocol'].includes(id))sceneOrigin.current=id;setSection(id);setMenuOpen(false);};window.addEventListener('hashchange',onHash);return ()=>window.removeEventListener('hashchange',onHash);},[]);
 const focusSection=(initial=false)=>{const id=workspaceFor(section);const target=document.getElementById(id??(section==='overview'?'overview':'research-experience'));const scroller=id==='protocol'||(!id&&section!=='overview')?document.querySelector('.story-chapters'):id?document.querySelector('.workspace-toolbar'):target;scrollResearchTarget(scroller??null,initial);const heading=id||section==='overview'?target?.querySelector('h1'):target?.querySelector('[role=tabpanel]:not([hidden]) .scene-heading :is(h1,h2)');if(heading instanceof HTMLElement){heading.tabIndex=-1;heading.focus({preventScroll:true});}};
 useEffect(()=>{const frame=requestAnimationFrame(()=>{if(!shouldFocus.current){shouldFocus.current=true;return;}focusSection(firstNavigation.current);firstNavigation.current=false;});return ()=>cancelAnimationFrame(frame);},[section]);
 const exportState=useMemo(()=>({ruleYear,experimentActive}),[ruleYear,experimentActive]);
 const verification=verifyHistorical(data);
 if(verification.test1.status==='INCOMPLETE')return <main className="container"><EvidenceUnavailable reason={verification.test1.reason}/></main>;
 const r=reconstruct(data);
 return <SourceProvider data={data}><WorkspaceContext.Provider value={activeWorkspace}>
  <a className="skip-link" href="#main">Skip to content</a>
  <header className="site-header"><div className="container header-inner"><a href="#overview" className="wordmark" aria-label="EFT RuleLab home"><img className="brand-mark" src="/brand/eft-rulelab-mark.svg" alt="" width="34" height="34"/>EFT <span>RuleLab</span></a><p className="project-context">Kubu Raya · FY2022<br/><span>Independent research prototype</span></p><button className="menu-button" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={()=>{setMenuOpen(!menuOpen);if(!menuOpen)requestAnimationFrame(()=>document.querySelector<HTMLAnchorElement>('#primary-nav a')?.focus());}}>Research tools</button></div></header><div className="container tool-directory" hidden={!menuOpen}><nav id="primary-nav" className={menuOpen?'is-open':''} aria-label="Primary">{links.map(([id,label])=><a href={`#${id}`} aria-current={section===id?'location':undefined} key={id} onClick={()=>{setMenuOpen(false);if(section===id)requestAnimationFrame(()=>document.querySelector<HTMLButtonElement>('.menu-button')?.focus());}}>{label}</a>)}</nav></div>
  <main id="main" className="container" tabIndex={-1}><GuidedDemo data={data} route={section} onNavigate={navigate}/>
   <div hidden={section!=='overview'}><section id="overview" className="overview" aria-labelledby="overview-title"><picture className="hero-photo" aria-hidden="true"><source media="(max-width: 767px)" srcSet="/images/dusk-mobile.webp"/><img src="/images/dusk-desktop.webp" alt="" fetchPriority="high"/></picture><div className="hero-copy"><span className="evidence-badge">Independent fiscal research · Kubu Raya FY2022</span><h1 id="overview-title">The numbers reconcile. Can the decision be reproduced?</h1><p className="lead">{verification.test1.status==='PASS'?"Kubu Raya’s FY2022 ADD records reconcile arithmetically.":'The fiscal input package has a reconciliation discrepancy; inspect the source versions before drawing a conclusion.'} Independently reproducing who received an allocation requires different evidence.</p><p className="story-case-context">This ecology-related performance-allocation case examines fiscal accountability, not ecological outcomes.</p><div className="story-hero-actions"><a className="primary-link" href="#puzzle">Inspect the reconciliation</a><InspectSourceButton id="S1" text="Sources and study limits" label="Inspect introduction sources and study limits"/></div></div><aside className="allocation-summary" aria-label="Published allocation baseline"><span className="summary-title">Published performance pool</span><Amount value={r.components.performance} className="hero-amount"/><p>{data.awards.length} published positive entries.<br/>Reproduced from the FY2022 residual.</p><div className="mini-results"><div><strong>Test 1: {verification.test1.status}</strong><span><Amount value={r.gap}/> reconciliation gap</span></div><div><strong>Test 2: {verification.test2.status}</strong><span>Approved assessment/selection records not obtained for this study.</span></div></div><p className="small-copy">ADD is a district-to-village transfer, distinct from national Dana Desa.</p></aside></section></div>
   <ResearchChapterNavigation route={section}/><div hidden={activeWorkspace!==null||section==='overview'}><ResearchExperience data={data} introVisible={section==='overview'} ruleYear={ruleYear} onRuleChange={setRuleYear}/></div>
   {activeWorkspace&&section!=='protocol'&&<div className="workspace-toolbar"><a href={`#${sceneOrigin.current}`}>Back to {sceneOrigin.current==='rule-shift'?'Rule Shift':sceneOrigin.current==='evidence-gap'?'Evidence Gap':sceneOrigin.current==='protocol'?'Proposed verification':'The Puzzle'}</a><span>{workspaceLabels[activeWorkspace]} workspace</span><button onClick={()=>{setMenuOpen(true);requestAnimationFrame(()=>document.querySelector<HTMLAnchorElement>('#primary-nav a')?.focus());}}>Choose another tool</button></div>}
   <WorkspaceFrame id="verification" active={activeWorkspace}><Section id="verification" title="Two questions. Different evidence."><div className="section-intro"><p>One test follows the arithmetic. The other would need to follow the decision. They are independent checks.</p><span className="small-copy">Historical FY2022 source · reproduced calculations</span></div><TwoTestDiagram data={data}/><p className="small-copy">Historical baseline only. <a href="#extraction">Explore the separate research-side extraction experiment</a>.</p><Disclosure label="Read the verification transcript"><p>Test 1: subtract the five deductions from gross ADD, apply the FY2022 performance share to the residual, then compare that pool with the sum of the published positive allocations. {verification.test1.status==='PASS'?'The supplied baseline reconciles exactly.':'These inputs have a reconciliation discrepancy; this is not an allegation of government error.'}</p><p>Test 2: obtain the approved assessment register, actual assessed universe, implemented selection rules and signed decisions before independently deriving a recipient set. Those inputs were not obtained for this study. The replay has not been executed.</p></Disclosure></Section></WorkspaceFrame>
   <WorkspaceFrame id="policy" active={activeWorkspace}><PolicyStudio data={data} ruleYear={ruleYear} onRuleChange={setRuleYear}/></WorkspaceFrame><WorkspaceFrame id="funds" active={activeWorkspace}><FiscalEnvelope data={data}/></WorkspaceFrame><WorkspaceFrame id="awards" active={activeWorkspace}><AwardLedger data={data}/></WorkspaceFrame><WorkspaceFrame id="extraction" active={activeWorkspace}><ExtractionExperiment data={data} experimentActive={experimentActive} onExperimentChange={setExperimentActive}/></WorkspaceFrame>
   <WorkspaceFrame id="protocol" active={activeWorkspace}><ProtocolWorkflow data={data}/></WorkspaceFrame><WorkspaceFrame id="sources" active={activeWorkspace}><SourceLibrary data={data}/></WorkspaceFrame><WorkspaceFrame id="exports" active={activeWorkspace}><ResearchExports data={data} state={exportState}/></WorkspaceFrame>
   <Disclosure label="Research terms"><dl className="provenance-grid"><dt>EFT</dt><dd>Ecological fiscal transfers. This demonstrator examines the documentary accountability of an ADD case with ecology-related performance criteria, not the effectiveness of all ecological fiscal transfers.</dd><dt>Why this ADD case?</dt><dd>The FY2022 assessment framework includes ecology/climate criteria alongside enterprise, gender-responsive development and financial governance. This study examines documentary reproducibility, not ecological effectiveness. Criteria are inherited PRD content; no original assessment records were obtained. <InspectSourceButton id="PRD" text="Inspect research context" label="Inspect EFT and ADD research context"/></dd><dt>ADD</dt><dd>A district-to-village transfer, distinct from national Dana Desa.</dd><dt>Performance allocation</dt><dd>A published budget component, not evidence of actual cash payment or environmental impact.</dd><dt>Reconciliation</dt><dd>Comparing the computed pool with the sum of the published positive amounts.</dd><dt>Recipient decision replay</dt><dd>Independently reproducing identities and amounts from approved assessment and selection records.</dd><dt>Method</dt><dd>Historical documentary reconstruction using source-referenced research inputs and explicit evidence limits.</dd></dl></Disclosure>
  </main>
  <footer className="site-footer"><div className="container"><strong>EFT RuleLab</strong><p className="photo-credit">Atmospheric photograph: <a href="https://commons.wikimedia.org/wiki/File:Vallee-brouillard.jpg" target="_blank" rel="noopener noreferrer">Thomas Bresson, Vallée brouillard</a>, <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">CC BY 3.0</a>. Cropped and compressed for this interface. Not presented as Kubu Raya or evidence of ecological outcomes.</p><p>Independent research demonstration. Not an official Kubu Raya system. No actual payments or ecological outcomes verified.</p><p>P0 research workbench. Proposed institutional roles require confirmation; recipient decision replay remains incomplete.</p></div></footer>
 </WorkspaceContext.Provider></SourceProvider>;
}
