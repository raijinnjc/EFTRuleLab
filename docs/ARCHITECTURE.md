# EFT RuleLab application architecture

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

## Phase 2A analytical interfaces

`src/domain/analysis.ts` extends, rather than replaces, the pure fiscal engine:

- `queryAwards` combines normalized village/kecamatan search, exact kecamatan filter and stable sort on copied rows; source arrays are never sorted in place.
- `subtotal` adds exact integer amounts for either the immutable full ledger or the visible query result.
- `envelope` emits source-referenced running-balance rows for a common gross-scale waterfall. A separate residual-scale split is explicitly labeled.
- `plotFraction` uses bounded integer scaling only for SVG coordinates; a zero base/value has zero extent. `formatBillions` rounds only the displayed label with BigInt integer operations.
- `extraction` uses the independently labeled PRD research-case seed for the flawed BPD, computes an isolated residual/pool/gap, and never writes to the historical dataset. Inactive state derives the baseline. No scenario values are fed into recipient decisions.

Policy, funding, awards and experiment are independent React sections. Policy rule selection emphasizes a documented rule and its source while both bars remain on one FY2022 base. Historical ledger and verification retain baseline labels; filtering only changes a visible subtotal. Full-sized native selectors provide an alternative to small chart segments. The SVG uses group semantics so its focusable button marks remain exposed to assistive technology. Native node/source disclosures have no modal focus trap.

## Extension boundaries

F01–F06 are the implemented Phase 2A experience. F07 ARP, F09 guided tour, F10 audit exports and full F08 source-library/drawer expansion remain Phase 2B; all P1/P2 remain excluded. There is no assessment selection engine, live data integration, authentication, analytics, external fonts or deployment.

Keep the real PRD and source data authoritative; do not adopt third-party style recommendations that remove evidence qualifications. Each later feature needs its own tests and observed browser behavior before a completion claim.
