import {expect,it} from 'vitest';
import {motionScrollBehavior,isResearchRoute,motionDurationMs} from '../src/motion';
it('keeps initial and reduced-motion navigation instant, normal route changes smooth',()=>{expect(motionScrollBehavior(true,false)).toBe('instant');expect(motionScrollBehavior(false,true)).toBe('instant');expect(motionScrollBehavior(false,false)).toBe('smooth');});
it('only coordinates known research routes, preserving local focus anchors and external links',()=>{for(const id of ['overview','puzzle','rule-shift','evidence-gap','policy','funds','awards','verification','extraction','protocol','sources','exports'])expect(isResearchRoute(id)).toBe(true);for(const id of ['main','puzzle-context','','unknown','https://example.com'])expect(isResearchRoute(id)).toBe(false);});

it('parses both author milliseconds and minified CSS seconds without changing the rhythm',()=>{expect(motionDurationMs('210ms')).toBe(210);expect(motionDurationMs('.21s')).toBe(210);expect(motionDurationMs(' 0.28s ')).toBe(280);for(const value of ['bad','-1s','Infinityms','140'])expect(motionDurationMs(value)).toBe(0);});
