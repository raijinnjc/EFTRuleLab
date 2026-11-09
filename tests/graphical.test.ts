import {createElement} from 'react';
import {it,expect} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import {dataset} from '../src/evidence/dataset';
import {ResearchExperience} from '../src/components/ResearchExperience';
it('puzzle renders two distinct denominators and twenty equal published award buttons from data',()=>{const html=renderToStaticMarkup(createElement(ResearchExperience,{data:dataset}));expect(html).toContain('Gross scale');expect(html).toContain('Residual scale');expect(html.match(/class="award-mark"/g)).toHaveLength(20);expect(html).toContain('Rp75,897,616,000');expect(html).toContain('Rp488,419,120');expect(html).toContain('Recipient decision trail');});
it('initial puzzle inspection derives exact residual from passed dataset, without baseline constants',()=>{const d=structuredClone(dataset);(d.fiscal.gross as {value:string}).value='75897626000';const html=renderToStaticMarkup(createElement(ResearchExperience,{data:d}));expect(html).toContain('Rp6,977,426,000');expect(html).toContain('DISCREPANCY');});
it('accepted zero residual data keeps scale geometry bounded and never implies a matching ledger',()=>{const d=structuredClone(dataset);(d.fiscal.gross as {value:string}).value='68920200000';const html=renderToStaticMarkup(createElement(ResearchExperience,{data:d}));expect(html).toContain('DISCREPANCY');expect(html).not.toContain('NaN');expect(html).not.toContain('Infinity');});
it('mobile currency labels are display-only exact-integer abbreviations',async()=>{const {compactRupiah}=await import('../src/domain/format');expect(compactRupiah(68920200000n)).toBe('Rp68.92bn');expect(compactRupiah(488419120n)).toBe('Rp488.42m');expect(compactRupiah(0n)).toBe('Rp0');});
