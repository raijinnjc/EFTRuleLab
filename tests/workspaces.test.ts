import {it,expect} from 'vitest';
import {workspaceFor,returnSceneFor} from '../src/navigation';
it('classifies all legacy analytical/evidence links without treating graphical routes as tools',()=>{for(const id of ['policy','funds','awards','verification','extraction','protocol','sources','exports'])expect(workspaceFor(id)).toBe(id);for(const id of ['overview','puzzle','rule-shift','evidence-gap','unknown'])expect(workspaceFor(id)).toBeNull();expect(returnSceneFor('policy')).toBe('rule-shift');expect(returnSceneFor('protocol')).toBe('protocol');});
