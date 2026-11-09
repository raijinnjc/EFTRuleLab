import {motionDurationMs} from '../motion';
import {useLayoutEffect,useRef,type RefObject} from 'react';
/** Emphasize new evidence content without retaining old content, changing geometry or remounting controls. */
export function useSelectionMotion<T extends HTMLElement>(ref:RefObject<T|null>,key:string){
 const previous=useRef(key);const timing=useRef<{duration:number;easing:string}|null>(null);
 // Tokens are fixed for this mounted theme. Read before interaction, not after a selection DOM update.
 useLayoutEffect(()=>{const style=getComputedStyle(document.documentElement);timing.current={duration:motionDurationMs(style.getPropertyValue('--motion-chart')),easing:style.getPropertyValue('--motion-ease').trim()};},[]);
 useLayoutEffect(()=>{
  if(previous.current===key)return;previous.current=key;
  const el=ref.current;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  if(!el||el.closest('[hidden]')||reduced.matches||typeof el.animate!=='function')return;
  const {duration,easing}=timing.current??{duration:0,easing:''};if(duration<=0||!Number.isFinite(duration)||!easing)return;
  const animation=el.animate([{opacity:.88,transform:'translateY(3px)'},{opacity:1,transform:'none'}],{duration,easing});
  const cancel=()=>animation.cancel();reduced.addEventListener('change',cancel);
  return ()=>{cancel();reduced.removeEventListener('change',cancel)};
 },[key,ref]);
}
