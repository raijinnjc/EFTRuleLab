import type {ReactNode} from 'react';
import {formatRupiah} from '../../domain/format';
import {InspectSourceButton} from '../SourceDrawer';
export function ChapterNavigation({children,label}:{children:ReactNode;label:string}){return <nav className="precision-navigation" aria-label={label}>{children}</nav>;}
export function GraphicalCanvas({children,label}:{children:ReactNode;label:string}){return <figure className="precision-canvas" aria-label={label}>{children}</figure>;}
export function ContextInspector({children,announcement}:{children:ReactNode;announcement:string}){return <aside id="puzzle-context" className="precision-inspector scene-inspector" aria-label="Selected puzzle detail" tabIndex={-1}><p className="precision-announcement" role="status">{announcement}</p>{children}</aside>;}
export function Money({value,className=''}:{value:bigint;className?:string}){return <span className={`precision-money ${className}`}>{formatRupiah(value)}</span>;}
export function ChartLegend({children}:{children:ReactNode}){return <div className="precision-legend">{children}</div>;}
export function FigureCaption({children}:{children:ReactNode}){return <figcaption className="precision-caption">{children}</figcaption>;}
export function SourceAction({id,label,text='Inspect source'}:{id:string;label:string;text?:string}){return <InspectSourceButton id={id} label={label} text={text}/>;}
export function EvidenceStatus({status,children}:{status:'PASS'|'DISCREPANCY'|'INCOMPLETE';children?:ReactNode}){return <span className={`precision-status ${status==='PASS'?'is-pass':'is-open'}`}><strong>{status}</strong>{children&&<span>{children}</span>}</span>;}
export function ResearchLimitation({children}:{children:ReactNode}){return <p className="precision-limitation">{children}</p>;}
export function AnalyticalControl({label,children}:{label:string;children:ReactNode}){return <label className="precision-control">{label}{children}</label>;}
