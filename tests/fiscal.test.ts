import {describe,it,expect} from 'vitest';
import {dataset} from '../src/evidence/dataset';
import {allocate,compareRules,parseRupiah,reconstruct} from '../src/domain/fiscal';
import {verifyHistorical} from '../src/domain/evidence';
import {formatRupiah} from '../src/domain/format';
import type {Dataset} from '../src/evidence/types';
const clone=():Dataset=>JSON.parse(JSON.stringify(dataset));
describe('exact PRD fiscal fixtures',()=>{
 it('reconstructs deductions, residual and published 2022 pools (T01–T05/T18–T19)',()=>{
  const r=reconstruct(dataset);
  expect(r.deductions).toBe(68920200000n);expect(r.residual).toBe(6977416000n);
  expect(r.components).toEqual({basic:5233062000n,formula:1255934880n,performance:488419120n});
  expect(r.ledger).toBe(488419120n);expect(r.gap).toBe(0n);
 });
 it('keeps both rules on the same 2022 base with 60/40 shift (T06–T15/T34)',()=>{
  const c=compareRules(dataset);
  expect(c.evidenceType).toBe('FIXED_BASE_COUNTERFACTUAL');expect(c.baseFiscalYear).toBe(2022);
  expect(c.previous).toEqual({basic:5930803600n,formula:837289920n,performance:209322480n});
  expect(c.delta).toEqual({basic:-697741600n,formula:418644960n,performance:279096640n});
  expect(Object.values(c.previous).reduce((a,b)=>a+b)).toBe(6977416000n);
  expect(Object.values(c.current).reduce((a,b)=>a+b)).toBe(6977416000n);
  expect(Object.values(c.delta).reduce((a,b)=>a+b)).toBe(0n);
  expect(c.delta.formula*100n/(-c.delta.basic)).toBe(60n);expect(c.delta.performance*100n/(-c.delta.basic)).toBe(40n);
  expect(c).not.toHaveProperty('test1');expect(c).not.toHaveProperty('recipientAwards');
 });
 it.each(['-1','0.1','','1e5',' 12','01'])('rejects invalid integer %s (T29)',v=>expect(()=>parseRupiah(v)).toThrow());
 it('preserves amounts beyond Number safe integer through formatting',()=>{
  const v=parseRupiah('9007199254740993123');expect(v).toBe(9007199254740993123n);
  expect(formatRupiah(v)).toBe('Rp9,007,199,254,740,993,123');expect(v).toBe(9007199254740993123n);
 });
 it('rejects silent rounding for indivisible shares',()=>expect(()=>allocate(1n,dataset.rules[1])).toThrow(/integer|round/i));
 it('rejects invalid shares or negative residual',()=>{
  expect(()=>allocate(-1n,dataset.rules[1])).toThrow();
  expect(()=>allocate(10000n,{...dataset.rules[1],shares:{basicBp:7500,formulaBp:1800,performanceBp:900}})).toThrow(/share/i);
 });
});
describe('independent two-test evidence model',()=>{
 it('reports PASS/Rp0 and independent INCOMPLETE, never a selection calculation (T27/T32)',()=>{
  const v=verifyHistorical(dataset);expect(v.test1).toMatchObject({status:'PASS',gap:0n,evidenceType:'DERIVED'});
  expect(v.test2).toMatchObject({status:'INCOMPLETE',evidenceType:'NOT_OBTAINED'});
  expect(v.test2.missingIds).toEqual(['performance_scores_2022','assessment_universe_2022','executed_selection_rule','signed_decision_records']);
 });
 it('a nonzero gap cannot falsely PASS and cannot change Test 2',()=>{
  const d=clone();Object.assign(d.fiscal.gross,{value:'75897626000'});
  const v=verifyHistorical(d);expect(v.test1).toMatchObject({status:'DISCREPANCY',gap:700n});expect(v.test2.status).toBe('INCOMPLETE');
 });
 it('unavailable required inputs report INCOMPLETE rather than zero or PASS',()=>{
  const d=clone();Object.assign(d.fiscal.gross,{value:null});
  expect(verifyHistorical(d).test1).toMatchObject({status:'INCOMPLETE',gap:null});expect(verifyHistorical(d).test2.status).toBe('INCOMPLETE');
 });
 it('repeated calculations never mutate original source values (T31)',()=>{const before=JSON.stringify(dataset);reconstruct(dataset);compareRules(dataset);expect(JSON.stringify(dataset)).toBe(before);});
});
