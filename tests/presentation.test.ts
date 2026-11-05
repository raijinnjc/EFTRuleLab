import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {expect,it} from 'vitest';
import {App} from '../src/App';
import {dataset} from '../src/evidence/dataset';
import type {Dataset} from '../src/evidence/types';
it('the overview does not retain a hardcoded PASS if source amounts change',()=>{
 const changed:Dataset=JSON.parse(JSON.stringify(dataset));Object.assign(changed.fiscal.gross,{value:'75897626000'});
 const html=renderToStaticMarkup(createElement<{data?:Dataset}>(App,{data:changed}));
 expect(html).toContain('Test 1: DISCREPANCY');expect(html).not.toContain('Test 1: PASS');expect(html).toContain('Rp700');
});
