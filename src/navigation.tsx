import {createContext,useContext,type ReactNode} from 'react';
export const workspaceIds=['policy','funds','awards','verification','extraction','protocol','sources','exports'] as const;
export type WorkspaceId=typeof workspaceIds[number];
export const workspaceLabels:Record<WorkspaceId,string>={policy:'Full allocation',funds:'Fiscal envelope',awards:'Published awards',verification:'Two-test verification',extraction:'Extraction experiment',protocol:'ARP workflow',sources:'Evidence records',exports:'Audit exports'};
export function workspaceFor(id:string):WorkspaceId|null{return workspaceIds.includes(id as WorkspaceId)?id as WorkspaceId:null;}
export function returnSceneFor(id:string){return id==='protocol'?'protocol':id==='policy'?'rule-shift':['verification','protocol','sources','exports'].includes(id)?'evidence-gap':'puzzle';}
export const WorkspaceContext=createContext<WorkspaceId|null>(null);
export function WorkspaceFrame({id,active,children}:{id:WorkspaceId;active:WorkspaceId|null;children:ReactNode}){return <div data-workspace={id} id={id==='protocol'?'protocol-panel':undefined} role={id==='protocol'?'tabpanel':undefined} aria-labelledby={id==='protocol'?'chapter-protocol':undefined} className={`precision-system analytical-surface ${id==='protocol'?'story-surface':'tool-surface'}`} hidden={active!==id}>{children}</div>;}
export function useWorkspaceHeading(id:string){return useContext(WorkspaceContext)===id;}
