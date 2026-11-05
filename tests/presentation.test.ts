import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {expect,it} from 'vitest';
import {App} from '../src/App';
import {TwoTestDiagram} from '../src/components/TwoTestDiagram';
import {dataset} from '../src/evidence/dataset';
import type {Dataset} from '../src/evidence/types';
it('the overview does not retain a hardcoded PASS if source amounts change',()=>{
 const changed:Dataset=JSON.parse(JSON.stringify(dataset));Object.assign(changed.fiscal.gross,{value:'75897626000'});
 const html=renderToStaticMarkup(createElement<{data?:Dataset}>(App,{data:changed}));
 expect(html).toContain('Test 1: DISCREPANCY');expect(html).not.toContain('Test 1: PASS');expect(html).toContain('Rp700');expect(html).not.toContain('balances exactly');expect(html).not.toContain('reconciles exactly');
});
it('invalid fiscal inputs render unavailable evidence instead of crashing or displaying a false PASS',()=>{
 const changed:Dataset=JSON.parse(JSON.stringify(dataset));Object.assign(changed.fiscal.gross,{value:null});
 const html=renderToStaticMarkup(createElement<{data?:Dataset}>(App,{data:changed}));
 expect(html).toContain('Evidence package unavailable');expect(html).toContain('Test 1: INCOMPLETE');expect(html).toContain('Test 2: INCOMPLETE');expect(html).not.toContain('PASS');
});

it('standalone diagram stops on invalid evidence rather than crashing',()=>{
 const changed:Dataset=JSON.parse(JSON.stringify(dataset));Object.assign(changed.fiscal.gross,{value:null});
 const html=renderToStaticMarkup(createElement(TwoTestDiagram,{data:changed}));
 expect(html).toContain('Evidence package unavailable');expect(html).not.toContain('PASS');
});
