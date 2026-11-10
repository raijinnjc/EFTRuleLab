import {useEffect,useState} from 'react';
import type {Dataset} from '../evidence/types';
import {ResearchPuzzle} from './ResearchPuzzle';
import {ResearchRuleShift} from './ResearchRuleShift';
import {ResearchEvidenceGap} from './ResearchEvidenceGap';
const scenes=[['puzzle','01 The puzzle'],['rule-shift','02 The rule shift'],['evidence-gap','03 The evidence gap']] as const;
export function ResearchExperience({data,ruleYear,onRuleChange,introVisible=false}:{data:Dataset;introVisible?:boolean;ruleYear?:2021|2022;onRuleChange?:(year:2021|2022)=>void}){
 const initial=()=>typeof window!=='undefined'&&scenes.some(([id])=>id===window.location.hash.slice(1))?window.location.hash.slice(1):'puzzle';const [active,setActive]=useState(initial);
 useEffect(()=>{const change=()=>{const id=window.location.hash.slice(1);if(scenes.some(([key])=>key===id)){setActive(id);}};change();window.addEventListener('hashchange',change);return ()=>window.removeEventListener('hashchange',change)},[]);
 return <section id="research-experience" aria-label="Graphical research experience">
 <div id="puzzle" role="tabpanel" aria-labelledby="chapter-puzzle" hidden={active!=='puzzle'}><ResearchPuzzle data={data} introVisible={introVisible}/></div><div id="rule-shift" className="precision-system analytical-surface supporting-scene" role="tabpanel" aria-label="Supporting fixed-base rule comparison" hidden={active!=='rule-shift'}><ResearchRuleShift introVisible={introVisible} data={data} ruleYear={ruleYear} onRuleChange={onRuleChange}/></div><div id="evidence-gap" role="tabpanel" aria-labelledby="chapter-evidence-gap" hidden={active!=='evidence-gap'}><ResearchEvidenceGap data={data} introVisible={introVisible}/></div>
 <div className="chapter-footer"><span>Inherited PRD transcription. No fresh primary-PDF inspection.</span><a href={active==='puzzle'?'#evidence-gap':active==='evidence-gap'?'#protocol':'#puzzle'}>{active==='puzzle'?'Inspect the decision evidence':active==='evidence-gap'?'See the proposed verification workflow':'Return to the research argument'}</a></div></section>;
}
