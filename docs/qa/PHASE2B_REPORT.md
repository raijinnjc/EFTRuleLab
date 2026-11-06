# Phase 2B: P0 acceptance review

Delivery date: 6 November 2026 (Asia/Jakarta). Research prototype for user acceptance review; not a public deployment approval.

## Implementation

- F07: eight inspectable ARP steps, accessible SVG and native button alternatives, contextual evidence, proposed responsibilities, independent-recipient reconstruction with target roster withheld, general MATCH / DISCREPANCY / INCOMPLETE definitions and printable transcript. Historical decision replay remains INCOMPLETE.
- F08: searchable, categorized research register; source IDs, titles where supplied, institutions, years, locators, links, inherited hashes and inspection limits. Native source drawer with keyboard containment, Escape and opener focus restoration; retained inline provenance and copyable citations. Literature cited only as context, without inventing full titles or full-text inspection.
- F09: five-step, user-controlled demonstration alongside real sections. Previous/Next/Exit, progress, panel-scoped arrow keys and Escape; no timers. Selections, experiment and ledger filters remain unchanged. Approximately 45–60 seconds is a reading estimate, not a timed usability claim.
- F10: working JSON, CSV and Markdown downloads with exact decimal monetary strings; historical, counterfactual and extraction states kept distinct. Full immutable ledger, selected rule, inputs, calculations, statuses, source references, missing records, versions and local generation time. CSV repeats complete context JSON in a named column to preserve the 20-row ledger shape. Copyable fallback, source citations and figure caption.
- F11: responsive reflow, visible focus, keyboard controls, source-dialog containment, table-local scrolling, 200% text and reduced-motion checks.

## Complete P0 acceptance matrix

| PRD | Delivered behavior | Verification / boundary |
| --- | --- | --- |
| F01 | Research question, FY2022 pool and independent-research context | Foundation rendering, fiscal tests; ADD distinct from Dana Desa |
| F02 | Historical 85/12/3 versus 75/18/7 comparison on fixed FY2022 base | Exact deltas and net-zero tests, browser selection/reset; no actual FY2021 spending inference |
| F03 | Source-linked fiscal envelope | Gross/deductions/residual arithmetic, waterfall/data table, deduction provenance tests |
| F04 | Searchable/sortable 20-entry published ledger | Integrity, normalized search, filtering, sorting, full/filtered total and source-page tests |
| F05 | Two logically independent verification tracks | Evidence/status tests and node inspection; Test 1 PASS/Rp0, Test 2 INCOMPLETE |
| F06 | Isolated research extraction experiment | Wrong/verified BPD, gap and reset tests; unchanged ledger and government-error disclaimer |
| F07 | Proposed ARP workflow, roles, outcomes and transcript | Unit definitions, keyboard SVG, available/required states, historical INCOMPLETE; print transcript measured visible |
| F08 | Source library, categories/search, source drawer and copyable citations | Catalog reference consistency, search/empty state, unknown metadata, keyboard close/focus and mobile dialog tests |
| F09 | Five-step guided research path | Previous/Next/arrows/exit, progress, preserved counterfactual/experiment, mobile rendering and focus tests |
| F10 | JSON/CSV/Markdown, exact values, metadata, fallback | Unit serialization/isolation tests, actual browser downloads, independent Python csv/json parse, source-locator regression |
| F11 | Responsive and accessible P0 interactions | All legacy tests retained; 320/390/768/1024/1440, 200% text, reduced motion, keyboard and local table overflow |

The unchanged PRD remains the authority for each feature’s formal acceptance criteria.

## Actual validation results

- Baseline before changes: 56 unit tests; 21 production-browser tests; strict TypeScript/Vite build passed. Initial browser startup failed with sandbox `listen EPERM`; authorized local-server execution resolved it without app changes.
- Final: **65 unit/presentation/integrity tests passed across 5 files**. Includes values above Number.MAX_SAFE_INTEGER, immutable scenario isolation, source relationships and extraction provenance.
- Final: **36 production-browser tests passed**. All 21 Phase 1/2A assertions retained; only their screenshot destination prefix changed to preserve historical captures.
- Strict TypeScript plus Vite production build passed. No new dependencies. `git diff --check` passed.
- Real downloads inspected: 20 CSV rows parse with Python's csv module; exact sum 488419120; historical gap 0; counterfactual performance 209322480; selected flawed BPD 5532000000; verified BPD 5833200000; PRD extraction locator retained. JSON and Markdown contents inspected. Textarea newline normalization does not change downloaded CSV bytes or monetary values.
- Print media check: full ARP transcript has `display:block`, positive measured height and the withheld-roster instruction.
- Fresh read-only review found one export-provenance omission. Although reviewer rated it Minor, treated as Important for scientific traceability. Regression failed, then passed after adding PRD §2.3; F06; T23–T26 and its note to the export record and Markdown. No deferred review findings.
- Early integrated browser runs exposed restored source-access regressions and long-ID overflow at 200% text; fixed without weakening legacy assertions. New-test locator ambiguity and CRLF/LF expectations were corrected separately. Final counts above are observed, not inferred.
- Tested with system Chromium, Node 24.22.1 and existing pinned dependencies. No manual screen-reader certification or cross-browser certification is claimed. Clipboard-denied copy instructions are implemented; real download failure was tested by making the Blob URL API unavailable. Browser save completion cannot be detected reliably, so fallback text remains available after every request.

## Rendered Hallmark audit

Final raw output: [PHASE2B_HALLMARK.json](PHASE2B_HALLMARK.json). Render tier **ran** against the reviewed production bundle using installed Hallmark, temporary external puppeteer-core, and system Chromium. Five audit screenshots were generated. Final result: **3 FAIL, 20 REFLEX, 13 WARN**. This is not a clean Hallmark pass.

First pass: 20 FAIL / 20 REFLEX / 13 WARN. Fixed actionable raw-spacing token duplication, redundant long source action labels and unclear available-node fill. Final dispositions cover every reported gate:

| Gate | Count / grade | Disposition and authority |
| --- | --- | --- |
| 19 | 1 FAIL | Retain exact source page range punctuation in TwoTestDiagram, PRD F04/F08 source accuracy. |
| 49a | 1 FAIL | Long extraction action wraps at 320px. Retain explicit research-side wording and flexible height; F06 meaning and F11/WCAG text reflow take priority over single-line controls. |
| 63 | 1 FAIL | Retain required independent-research footer disclaimer and metadata separators, PRD §4.2. |
| 7b | 13 REFLEX | Approved white surfaces and white-on-navy text use centralized tokens; DESIGN_SYSTEM.md color authority. |
| 39b | 1 REFLEX | ARP step controls include full step and evidence-state labels and exceed generic button height. F07 inspectability and F11 touch/reflow require readable content. |
| 49b | 5 REFLEX | Source locators/record links wrap on narrow screens; preserve citations and reflow rather than truncate them (F08/F11). |
| 71 | 1 REFLEX | Section proximity heuristic includes existing full-width section rules. Retained established F01–F06 hierarchy; added spacing before ARP outcome heading. |
| 3 | 3 WARN | Stripes denote evidence caution, active tour and selected protocol step, with text/pressed-state alternatives; semantic rather than decoration (F05/F06/F07/F09). |
| 49 | 4 WARN | Long explicit action/reset labels are allowed to reflow. No clipped text or global overflow observed (F06/F09/F11). |
| F4 | 1 WARN | Table sorting, protocol selection and general buttons are different semantic controls, not competing promotional actions. |
| F6 | 4 WARN | Monetary values already use tabular numeric styling; status/headings do not need numeric alignment. Exact-value table remains accessible. |
| F25 | 1 WARN | Wide exact-value comparison is intentionally locally scrollable with visible guidance and keyboard region; PRD F11 permits table-local overflow. |

Desktop protocol and mobile source/tour captures were visually inspected. No stock imagery, decorative dashboard cards, new theme or source-qualification removal was introduced.

## Artifacts

- [Desktop ARP](screenshots/phase2b-protocol-desktop.png)
- [Desktop source library](screenshots/phase2b-sources-desktop.png)
- [Mobile guided step](screenshots/phase2b-tour-mobile.png)
- [Mobile source inspector](screenshots/phase2b-source-mobile.png)
- Full-page captures: `screenshots/phase2b-{320,390,768,1024,1440}.png`; regression captures have `phase2b-regression-` prefix.
- Actual downloaded samples: [JSON](export-samples/phase2b-sample.json), [CSV](export-samples/phase2b-sample.csv), [Markdown](export-samples/phase2b-sample.md). Samples intentionally capture FY2021 counterfactual plus active research extraction, showing isolation. Their timestamps are actual local export times.

## Evidence limitations and scope

No new fiscal evidence was invented or acquired. Original V4 memorandum and official annex PDFs remain unavailable for fresh inspection. S1/S2 source checks and PDF hashes remain inherited. Assessment scores, assessed universe, selection rules and signed decisions remain unavailable; actual payments and ecological outcomes remain unavailable. No assessment-to-award function exists. Literature full titles, page locations and full-text/abstract access are explicitly unavailable where the supplied PRD does not record them. Institutional responsibilities are proposals pending confirmation.

The PRD, handoff, approved design document, all historical datasets, installed design skills, AGENTS.md and dependency lockfile are byte-identical to the parent. No P1/P2 features, public deployment or automatic merge.

## Branch ancestry and delivery

- Remote main was inspected and already integrated PR #1 documentation, #2 Phase 1 and #3 Phase 2A.
- Exact parent: `5580c445c988b6e64b6e78e70dd8b86e682465fa` (merge PR #3), containing Phase 2A `0411705391644cec5edaf699509fd4ece3d6c6a2` and Phase 1 `97adb74562a16f257a6d14b4b386f4ff159fe8e4`.
- Branch: `feat/accountability-research-p0`; intended PR base: `main`. No history rewrite, force push or unrelated merge.
- PR delivery status recorded below after push/API attempt.

## Local run and user acceptance

`npm ci`, then `npm run dev`. Validate with `npm test`, `npm run build`, `npm run test:browser`; the latter requires Chromium or CHROMIUM_PATH. No application secrets/backend required.

Review the two independent tests, switch policy weights, activate/restore extraction, inspect all ARP steps, search and open a source, complete/exit the tour, and download each format. Confirm that historical amounts and missing evidence never change. This is the final user acceptance candidate; acceptance and any later deployment remain separate decisions.

## Implementation rulings

1. In-flow tour panels preserve analytical state and source visibility; the trade-off is a longer reading page, rather than a compact overlay.
2. CSV repeats the full audit context per immutable award row to satisfy both the 20-row ledger requirement and complete export context; the cost is a larger file. JSON is the more compact structured format.
3. Missing bibliography fields stay explicitly unavailable; the cost is less polished citations until verified metadata is supplied.
