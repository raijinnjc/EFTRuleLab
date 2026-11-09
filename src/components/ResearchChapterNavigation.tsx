import {useRef,type KeyboardEvent} from 'react';
const chapters=[['puzzle','01 What we can prove'],['evidence-gap',"02 What's missing"],['protocol','03 Proposed verification']] as const;
export function ResearchChapterNavigation({route}:{route:string}){
 const refs=useRef<(HTMLAnchorElement|null)[]>([]);const selected=chapters.some(([id])=>id===route)?route:null;
 const key=(e:KeyboardEvent<HTMLAnchorElement>,i:number)=>{if(e.key===' '){e.preventDefault();refs.current[i]?.click();return;}const next=e.key==='ArrowRight'?(i+1)%3:e.key==='ArrowLeft'?(i+2)%3:e.key==='Home'?0:e.key==='End'?2:null;if(next!==null){e.preventDefault();refs.current[next]?.focus();}};
 return <nav className="scene-tabs story-chapters" role="tablist" aria-label="Research chapters">{chapters.map(([id,label],i)=><a key={id} href={`#${id}`} role="tab" id={`chapter-${id}`} aria-controls={id==='protocol'?'protocol-panel':id} aria-selected={selected===id} tabIndex={selected===id||(!selected&&i===0)?0:-1} ref={el=>{refs.current[i]=el}} onKeyDown={e=>key(e,i)}>{label}</a>)}</nav>;
}
