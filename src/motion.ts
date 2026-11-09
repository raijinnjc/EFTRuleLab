import {workspaceFor} from './navigation';
export function isResearchRoute(id:string){return ['overview','puzzle','rule-shift','evidence-gap'].includes(id)||workspaceFor(id)!==null;}
export function motionScrollBehavior(initial:boolean,reduced:boolean):ScrollBehavior{return initial||reduced?'instant':'smooth';}
/** Commit the URL immediately without the anchor's competing automatic fragment scroll. */
export function writeResearchRoute(id:string){if(window.location.hash.slice(1)===id)return;const oldURL=window.location.href;window.history.pushState(null,'',`#${id}`);window.dispatchEvent(new HashChangeEvent('hashchange',{oldURL,newURL:window.location.href}));}
let clearScrollWatch=()=>{};
export function releaseResearchScroll(){clearScrollWatch();}
export function scrollResearchTarget(target:Element|null,initial=false){
 clearScrollWatch();if(!target)return;
 const preference=window.matchMedia('(prefers-reduced-motion: reduce)');const behavior=motionScrollBehavior(initial,preference.matches);
 const padding=parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0;const margin=parseFloat(getComputedStyle(target).scrollMarginTop)||0;
 const destination=Math.max(0,Math.min(window.scrollY+target.getBoundingClientRect().top-padding-margin,document.documentElement.scrollHeight-window.innerHeight));
 if(behavior==='smooth'&&Math.abs(destination-window.scrollY)>1){
  const clear=()=>{window.removeEventListener('scrollend',clear);window.removeEventListener('wheel',clear);window.removeEventListener('pointerdown',clear);window.removeEventListener('keydown',clear);preference.removeEventListener('change',reduce);clearScrollWatch=()=>{}};
  const reduce=()=>{if(preference.matches){target.scrollIntoView({block:'start',behavior:'instant'});clear();}};
  clearScrollWatch=clear;window.addEventListener('scrollend',clear,{once:true});window.addEventListener('wheel',clear,{once:true,passive:true});window.addEventListener('pointerdown',clear,{once:true});window.addEventListener('keydown',clear,{once:true});preference.addEventListener('change',reduce);
 }
 target.scrollIntoView({block:'start',behavior});
}
/** CSS minifiers may serialize milliseconds as seconds; keep the runtime duration exact. */
export function motionDurationMs(value:string){const match=/^(\d*\.?\d+)(ms|s)$/.exec(value.trim());return match?Number(match[1])*(match[2]==='s'?1000:1):0;}
