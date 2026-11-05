import {expect,it,describe} from 'vitest';
import {dataset} from '../src/evidence/dataset';
import {queryAwards,subtotal,envelope,extraction,plotFraction,formatBillions} from '../src/domain/analysis';
const query={search:'',kecamatan:'',sort:'village' as const,direction:'asc' as const};
describe('immutable ledger queries',()=>{
 it('searches village and kecamatan, ignoring case and accents',()=>{
  expect(queryAwards(dataset.awards,{...query,search:'SÚNGAI KUPAH'}).map(a=>a.village)).toEqual(['Sungai Kupah']);
  expect(queryAwards(dataset.awards,{...query,search:'batu ampar'})).toHaveLength(5);
 });
 it('combines filter with search and handles empty results',()=>{
  expect(queryAwards(dataset.awards,{...query,search:'sungai',kecamatan:'Sungai Kakap'})).toHaveLength(1);
  expect(queryAwards(dataset.awards,{...query,search:'unknown'})).toEqual([]);
 });
 it('sorts descending without mutating source rows',()=>{
  const before=JSON.stringify(dataset);const rows=queryAwards(dataset.awards,{...query,direction:'desc'});
  expect(rows[0].village).toBe('Teluk Bayur');expect(JSON.stringify(dataset)).toBe(before);
 });
 it('keeps global and filtered subtotal distinct and exact',()=>{
  expect(subtotal(dataset.awards)).toBe(488419120n);
  expect(subtotal(queryAwards(dataset.awards,{...query,kecamatan:'Kubu'}))).toBe(73262868n);
  expect(subtotal([])).toBe(0n);
 });
 it('retains source page and row on search results',()=>expect(queryAwards(dataset.awards,{...query,search:'Sungai Kupah'})[0]).toMatchObject({sourceRow:4,provenance:{sourceId:'S1',pdfPages:[20]}}));
});
describe('envelope and display math',()=>{
 it('preserves every running balance and reconciles residual',()=>{
  const rows=envelope(dataset);expect(rows).toHaveLength(7);
  expect(rows.map(r=>r.balance)).toEqual([75897616000n,41046616000n,22060216000n,16227016000n,8321416000n,6977416000n,6977416000n]);
  expect(rows[3].change).toBe(-5833200000n);expect(rows[6].kind).toBe('total');
 });
 it('uses bounded visual coordinates while leaving money exact',()=>{
  expect(plotFraction(6977416000n,75897616000n)).toBeGreaterThan(.09);
  expect(plotFraction(0n,1n)).toBe(0);expect(plotFraction(1n,1n)).toBe(1);
  expect(()=>plotFraction(-1n,1n)).toThrow();expect(()=>plotFraction(1n,0n)).toThrow();
 });
 it('formats rounded billion labels without changing underlying bigint',()=>{
  const v=75897616000n;expect(formatBillions(v)).toBe('Rp75.898 billion');expect(v).toBe(75897616000n);
  expect(formatBillions(6977416000n)).toBe('Rp6.977 billion');
 });
});
describe('isolated research-side extraction (T23–T26/T31)',()=>{
 it('defaults to source-checked baseline',()=>expect(extraction(dataset,false)).toMatchObject({selectedBpd:5833200000n,pool:488419120n,gap:0n,status:'PASS',evidenceType:'DERIVED'}));
 it('replays only the flawed research BPD and labels apparent mismatch',()=>{
  const s=extraction(dataset,true);expect(s).toMatchObject({selectedBpd:5532000000n,verifiedBpd:5833200000n,pool:509503120n,gap:21084000n,ledger:488419120n,status:'APPARENT_MISMATCH',evidenceType:'RESEARCH_EXTRACTION_TEST'});
 });
 it('restores exact baseline and never changes source or awards',()=>{
  const before=JSON.stringify(dataset);extraction(dataset,true);expect(extraction(dataset,false).gap).toBe(0n);expect(JSON.stringify(dataset)).toBe(before);expect(Object.isFrozen(dataset.awards[0])).toBe(true);
 });
});
