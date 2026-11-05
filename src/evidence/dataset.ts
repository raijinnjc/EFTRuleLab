import sources from '../../data/source-manifest.json';
import fiscal from '../../data/fiscal-inputs-2022.json';
import rules from '../../data/rule-sets.json';
import awards from '../../data/positive-awards-2022.json';
import coverage from '../../data/kecamatan-coverage-2022.json';
import missing from '../../data/evidence-register.json';
import { validateDataset } from './validate';
import type { Dataset } from './types';
export const rawDataset = {version:'2022-prd-1.0-transcription-1',sources,fiscal,rules,awards,coverage,missing};
function freeze<T>(value:T):T {
  if(value && typeof value==='object') { Object.values(value).forEach(freeze); Object.freeze(value); }
  return value;
}
// Only a validated, deeply immutable package crosses into the application.
export const dataset:Dataset = freeze(validateDataset(rawDataset));
