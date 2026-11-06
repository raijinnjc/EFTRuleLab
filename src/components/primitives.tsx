import type {ReactNode} from 'react';
import type {EvidenceType} from '../evidence/types';
import {evidenceLabels} from '../domain/evidence';
import {formatRupiah} from '../domain/format';
export function EvidenceBadge({type}:{type:EvidenceType}){return <span className={`evidence-badge ${type==='NOT_OBTAINED'?'is-incomplete':''}`}>{evidenceLabels[type]}</span>;}
export function Amount({value,className=''}:{value:bigint;className?:string}){return <span className={`amount ${className}`}>{formatRupiah(value)}</span>;}
export function Section({id,title,children}:{id:string;title:string;children:ReactNode}){return <section id={id} className="section" aria-labelledby={`${id}-title`}><h2 id={`${id}-title`}>{title}</h2><div id={`tour-${id}`}/>{children}</section>;}
export function Disclosure({label,children}:{label:string;children:ReactNode}){return <details className="disclosure"><summary>{label}</summary><div className="disclosure-content">{children}</div></details>;}
export function EvidenceUnavailable({reason}:{reason:string}){
 return <section className="error-state" role="alert"><h1>Evidence package unavailable</h1><p>{reason}</p><h2>Test 1: INCOMPLETE</h2><p>Fiscal reconciliation was not performed. Required inputs are missing or invalid.</p><h2>Test 2: INCOMPLETE</h2><p>Approved assessment and selection records were not obtained for this study. No recipient replay has been executed.</p><p>Check the versioned local evidence package before retrying. Missing or invalid inputs must not be treated as zero.</p></section>;
}
