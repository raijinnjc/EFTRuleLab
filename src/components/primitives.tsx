import type {ReactNode} from 'react';
import type {EvidenceType} from '../evidence/types';
import {evidenceLabels} from '../domain/evidence';
import {formatRupiah} from '../domain/format';
export function EvidenceBadge({type}:{type:EvidenceType}){return <span className={`evidence-badge ${type==='NOT_OBTAINED'?'is-incomplete':''}`}>{evidenceLabels[type]}</span>;}
export function Amount({value,className=''}:{value:bigint;className?:string}){return <span className={`amount ${className}`}>{formatRupiah(value)}</span>;}
export function Section({id,title,children}:{id:string;title:string;children:ReactNode}){return <section id={id} className="section" aria-labelledby={`${id}-title`}><h2 id={`${id}-title`}>{title}</h2>{children}</section>;}
export function Disclosure({label,children}:{label:string;children:ReactNode}){return <details className="disclosure"><summary>{label}</summary><div className="disclosure-content">{children}</div></details>;}
