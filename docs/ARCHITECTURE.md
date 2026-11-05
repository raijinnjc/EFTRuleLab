# Phase 1 application architecture

## Data and trust boundary

`data/*.json` → `src/evidence/validate.ts` → readonly `Dataset` → deep freeze in `dataset.ts` → pure domain → React presentation.

Input monetary strings must match a canonical nonnegative integer representation. Source identities, fiscal scope, known pages, shares, unique villages, complete deduction keys, coverage counts/subtotals and explicit null evidence are validated before use. Empty FY2022 rule page lists intentionally preserve the PRD's unknown exact Annex I page; the section locator remains available.

`SourceRecord.inspection` distinguishes inherited PRD transcription from the locally read document. Previously reported PDF hashes are not fresh verification. S1 and S2 are preserved legal identifiers; the source model and all amounts are local and require no runtime government API, secrets or backend.

## Domain interfaces

- `parseRupiah(string): bigint` rejects malformed and decimal money.
- `allocate(bigint, RuleSet): Components` applies basis-point integer arithmetic, rejecting a nonzero division remainder rather than inventing rounding.
- `reconstruct(Dataset): FiscalResult` validates inputs, then derives deduction sum, residual, 2022 components, immutable ledger sum and gap.
- `compareRules(Dataset)` uses the same FY2022 base and returns component deltas labeled `FIXED_BASE_COUNTERFACTUAL`; it has no historical reconciliation or recipient-award output.
- `verifyHistorical(Dataset)` yields Test 1 PASS only on valid inputs and zero gap; invalid inputs yield INCOMPLETE, nonzero gap yields DISCREPANCY. Independent Test 2 remains INCOMPLETE because no selection records were obtained. The discrepancy model is not an allegation about the supplied historical baseline.
- `formatRupiah(bigint)` formats the exact value without a Number conversion. Presentation never writes to the dataset. BigInt outputs are not directly JSON-serializable; the next phase's export layer must use explicit decimal strings.

## Presentation boundary

`App` accepts a dataset for reproducible presentation tests and defaults to the immutable validated package. `EvidenceBadge`, `Amount`, `Section` and native `Disclosure` are reusable primitives. `SourceReference` resolves source IDs and known page locators to safe links. `TwoTestDiagram` has two independent articles with their own ordered steps, SVG connectors, disclosure controls and a separate text transcript. Dashed unavailable connectors never join a PASS result to historical selection.

Central tokens live in `src/styles/tokens.css`, subordinate to the PRD and approved design document. Layout uses real reflow and shrinkable grid tracks, not clipping to suppress overflow. Navigation exposes only the three implemented sections; it does not pretend that remaining P0 features already work. Native details/summary provide keyboard-operable inspection without a modal focus trap.

## Extension boundaries

This is the foundation for F01/F05/F08/F11 plus the F02/F03/F04 data/domain layers, not the full P0 release. Next phase: Policy Studio controls/charts, full fiscal trace, searchable award ledger, extraction test, ARP, source inspector expansion, tour and exports. P1/P2 are excluded. There is no assessment selection engine, live data integration, authentication, analytics, external fonts or deployment.

Keep the real PRD and source data authoritative; do not adopt third-party style recommendations that remove evidence qualifications. Each later feature needs its own tests and observed browser behavior before a completion claim.
