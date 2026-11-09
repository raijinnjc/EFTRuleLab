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
- `formatRupiah(bigint)` formats the exact value without a Number conversion. Presentation never writes to the dataset. The export layer recursively maps BigInt outputs to exact decimal strings.

## Presentation boundary

`App` accepts a dataset for reproducible presentation tests and defaults to the immutable validated package. `EvidenceBadge`, `Amount`, `Section` and native `Disclosure` are reusable primitives. `SourceReference` resolves source IDs and known page locators to safe links. `TwoTestDiagram` has two independent articles with their own ordered steps, SVG connectors, disclosure controls and a separate text transcript. Dashed unavailable connectors never join a PASS result to historical selection.

Central tokens live in `src/styles/tokens.css`, subordinate to the PRD and approved design document. Layout uses real reflow and shrinkable grid tracks, not clipping to suppress overflow. Navigation exposes the implemented research, analysis, ARP, source and export sections. Native details/summary provide keyboard-operable inspection without a modal focus trap.

## Phase 2A analytical interfaces

`src/domain/analysis.ts` extends, rather than replaces, the pure fiscal engine:

- `queryAwards` combines normalized village/kecamatan search, exact kecamatan filter and stable sort on copied rows; source arrays are never sorted in place.
- `subtotal` adds exact integer amounts for either the immutable full ledger or the visible query result.
- `envelope` emits source-referenced running-balance rows for a common gross-scale waterfall. A separate residual-scale split is explicitly labeled.
- `plotFraction` uses bounded integer scaling only for SVG coordinates; a zero base/value has zero extent. `formatBillions` rounds only the displayed label with BigInt integer operations.
- `extraction` uses the independently labeled PRD research-case seed for the flawed BPD, computes an isolated residual/pool/gap, and never writes to the historical dataset. Inactive state derives the baseline. No scenario values are fed into recipient decisions.

Policy, funding, awards and experiment are independent React sections. Policy rule selection emphasizes a documented rule and its source while both bars remain on one FY2022 base. Historical ledger and verification retain baseline labels; filtering only changes a visible subtotal. Full-sized native selectors provide an alternative to small chart segments. The SVG uses group semantics so its focusable button marks remain exposed to assistive technology. Native node/source disclosures have no modal focus trap.

## Phase 2B research interfaces

`src/domain/research.ts` defines the proposed protocol and a searchable catalog. Official records preserve the immutable manifest. Context citations come only from PRD §10; missing full titles, issuing institutions and page locations stay null. Local catalog IDs never imply new primary verification. Claim relationships resolve through the fiscal/rule/award provenance already in the dataset.

`src/domain/exports.ts` builds an audit snapshot from the dataset plus `{ruleYear, experimentActive}`. Historical calculations, selected fixed-base components and extraction values remain separate. JSON carries schema/application/dataset versions, timestamp, provenance and missing evidence. CSV contains 20 immutable award rows and a repeated `audit_context_json` column with complete context. Markdown provides an audit narrative and explicit extraction-source locator. Monetary fields are strings, including verification gaps. CSV uses standard quote doubling and CRLF; textarea fallback normalizes line endings only, not values.

`App` owns the selected rule and experiment flag for exports. Other controls retain local state. `GuidedDemo` places an annotation in each real section via portals; it changes neither analysis nor filters, uses no auto-advance, and restores entry-button focus on exit. Arrow keys operate only inside the tour panel. Each step is roughly ten seconds of reading, not a measured or enforced completion time.

`SourceProvider` uses a native modal dialog for containment/Escape behavior and explicit opener focus restoration. Existing inline provenance disclosures remain usable. Clipboard failure leaves selectable citation text. `ProtocolWorkflow` offers eight SVG buttons, full-size native alternatives, inspectable records/roles, general outcome definitions and a print-visible transcript. No assessment-to-award engine is introduced.

## Extension boundaries

F01–F11 form the P0 acceptance-review candidate. All P1/P2 remain excluded. There is no live data integration, authentication, analytics, external fonts or deployment. ARP roles require institutional confirmation. Actual payments and ecological outcomes remain unavailable.

## Graphical research layer

ResearchExperience keeps three native-tab panels mounted: ResearchPuzzle, ResearchRuleShift and ResearchEvidenceGap. Hash navigation restores chapters without resetting local inspection state. The original workbench and anchors remain mounted. App owns the rule year shared by graphical comparison, PolicyStudio and ResearchExports; PolicyStudio synchronizes its inspector when this controlled year changes.

Puzzle derives stages with reconstruct and gross with parseRupiah; plotFraction is used only for bounded geometry. Each award mark binds to a real award record. Scales identify their separate gross and residual denominators. compactRupiah rounds only a display label with BigInt arithmetic, never feeding a domain input. Exact accessible labels, inspector outputs, table values and exports remain unchanged. EvidenceGap consumes verifyHistorical and its missing IDs and does not add recipient replay logic. Existing SourceProvider owns dialog focus.

No new fiscal dataset or alternate research engine. All P0 components remain directly navigable; the graphic layer is a compact entry point, not a deletion of research depth.
