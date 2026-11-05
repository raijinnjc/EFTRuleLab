# Phase 2A core analytical experience

5 November 2026 (Jakarta). Scope F01–F06 only. No deployment, automatic merge, P1/P2 or Phase 2B implementation.

## Baseline and branch dependency

Main remains d931bbe. Approved Phase 1 is 97adb74562a16f257a6d14b4b386f4ff159fe8e4 on `feat/evidence-foundation`, not integrated into main. New branch `feat/core-analytical-experience` descends from that exact commit. Target the Phase 1 branch for this stacked review; retarget only after Phase 1 is integrated. No unrelated merge/rebase or history overwrite occurred.

Before application changes, the baseline was rerun: **43 unit tests passed, 10 production Chromium browser tests passed, strict TypeScript/Vite build passed**. The original fiscal JSON, legal source manifest, PRD, handoff, design specification and installed skills are preserved.

## Implemented scope

| Feature | Experience |
| --- | --- |
| F01 | Required headline, pool/20 positive entries/Rp0, independent PASS/INCOMPLETE, research terminology and evidence fork as first signature visual |
| F02 | Interactive documented-rule selection, paired equal-envelope stacks, focus/hover inspection with equivalent full-sized component selector, exact-value and percentage labels, exact component/delta table, 60/40 interpretation, derivation, reset and rule provenance |
| F03 | Labeled gross-scale running-balance waterfall, five exact deductions, residual and separately labeled residual-scale component view, full/billion formatting, exact transcript and individual source inspections |
| F04 | Accent/case-insensitive village/kecamatan search, nine-kecamatan filter, keyboard-sortable village/kecamatan/amount/page/row headers, full total separate from filtered subtotal, source page/row, clear/empty state and copyable full transcription |
| F05 | Existing independent evidence tracks extended with keyboard-operable pool, ledger, unavailable replay, decision comparison and result disclosures; available/required evidence, interpretation boundaries and sources; text transcript preserved |
| F06 | Separate opt-in research extraction workspace, immutable source-checked vs selected BPD, scenario pool, unchanged published ledger, apparent-mismatch result, exact restoration, mandatory researcher-side caveat and source inspection |

The selected Policy Studio rule does not change the historical ledger. The extraction state is local to the experiment; historical PASS/INCOMPLETE and source data remain unchanged and explicitly labeled as baseline. No historical selection or eligibility calculation exists.

## Calculation and provenance evidence

- Source inputs retained: gross75,897,616,000; deductions68,920,200,000; residual6,977,416,000; FY2022 component split75/18/7 and FY2021 rule85/12/3 on the same FY2022 base.
- Derived policy deltas remain −697,741,600 / +418,644,960 / +279,096,640; net0 and destinations60%/40%.
- Isolated experiment: source-checked BPD5,833,200,000; flawed research BPD5,532,000,000; scenario pool509,503,120; apparent gap21,084,000; published ledger remains488,419,120; reset gap0.
- New `data/research-extraction-case.json` carries only the PRD-reported flawed input and its research provenance. Source-checked BPD comes from the unchanged historical package. No derived results were stored as new source constants.
- Monetary computations stay BigInt. Billion labels use integer rounding only for display; bounded Number conversion is used only for chart geometry/percentage display, never monetary calculation.
- V4 and original official PDFs remain unavailable. This phase preserves PRD-reported source/page/row references and inherited verification notes; no fresh primary-source or PDF-hash verification is claimed.

## Test history

TDD added11 domain tests: initial missing implementations failed; completed helpers passed after correcting one erroneous combined-search expectation. The original fixture searched “sungai” while filtering Sungai Kakap and incorrectly expected one record, despite the required kecamatan search matching all three. The corrected test searches the unambiguous village fragment “kupah”; production search behavior was retained.

New browser interactions were written before UI implementation and observed failing. Initial implemented suite:18 passed,2 failed. Diagnosis found an ambiguous substring label in the new ledger test and legacy content guard triggered by uppercase FAIL in an explanatory negation. The filter now has an explicit accessible name and the test targets its combobox; explanatory copy now says “selection failure or certification” without changing the INCOMPLETE status. Existing assertions were preserved. Subsequent production run:20 passed.

The Phase 1 screenshot outputs now use `phase2a-overview-*` paths. Original `foundation-*` screenshots remain unchanged, preserving the historical QA record. Responsive analytical screenshots deliberately expand BPD provenance and filter to Sungai Kupah; overview screenshots retain the default full ledger.

## Rendered Hallmark audit

Executed against the production app with system Chromium, `/tmp/eft-design-audit` puppeteer-core and:

```sh
HALLMARK_PUPPETEER=/tmp/eft-design-audit CHROME_PATH=/usr/bin/chromium \
node .agents/skills/hallmark/scripts/sloplint.mjs src --scope app --url <local-production-url> --json
```

The actual raw result is `PHASE2A_HALLMARK.json`: **3 FAIL,15 REFLEX,10 WARN; render ran**. It made five fold/full-page captures and examined controls at multiple widths. This is **not a clean audit**. The rendered audit was rerun on the final reviewed production build, after caption/selected-input and accessibility corrections; the raw report is from that final run. No automated Hallmark disposition was falsified.

| Finding | Disposition and authority |
| --- | --- |
| FAIL19: page range dash | Retain source locator notation, PRD F04/F08 and §8 pp.17–21. Source accuracy outranks a generic punctuation ban. |
| FAIL63: metadata separators in footer | Preserve the required PRD §4.2 independent-research disclaimer verbatim. |
| FAIL49a / WARN49: long experiment/reset labels wrap | Permit wrapping while retaining full explicit action text and ≥44px targets; PRD F06 activation/reset wording and F11 font scaling, plus WCAG1.4.10/1.4.12 reflow/text spacing. Do not clip or shrink labels to satisfy a single-line rule. |
| REFLEX7b: white surfaces/text | Retain approved DESIGN_SYSTEM color-surface/on-dark tokens, PRD §6.2. Their contrast is deliberate; no arbitrary tint is substituted. |
| REFLEX49b: long legal/missing-evidence citations wrap | Preserve readable source names and known/unknown page qualifications: PRD F08 source integrity and F11 reflow. Wrapping is preferable to truncation/hidden evidence. |
| REFLEX71: heading proximity heuristic | Retain PRD §6.3 narrative/analytical section hierarchy; screenshots show sections bounded by rules and deliberate space. The heuristic is not an observed content overlap. Future visual refinement may adjust rhythm without changing facts. |
| WARN3: caution stripe | Semantic amber boundary for a counterfactual/research qualification, not decorative panel chrome; PRD §2.1 and F02/F06 require persistent distinct analytical-state labeling. |
| WARN F4: two filled control recipes | Table sort controls are white, border-underlined controls, not multiple filled primary actions. Native labeled sorting follows F04/F11. |
| WARN F6: table/status numeric selectors | Amounts use tabular figures and table/status rules inherit explicit later-cascade declarations. Preserve numeric alignment under PRD §6.2. |
| WARN F25: exact comparison table off-screen columns | Deliberate labeled local horizontal scroll region, visible scroll hint and keyboard access; PRD F11 and §9.2 explicitly allow table-local scrolling. No page-wide overflow was observed at the five required widths. |

UI UX Pro Max local waterfall/table/focus guidance was used. Generic red/green budget coding, fabricated rankings and theme selection were rejected in favor of PRD semantic roles. Additional visual inspection opened desktop Policy Studio/funding and active phone experiment screenshots. This is not an exhaustive screen-reader/WCAG certification or actual browser-zoom claim.

## Changed files and architecture

- `src/domain/analysis.ts`: pure ledger query/sort/subtotal, running balances, display helpers and isolated extraction calculation.
- `data/research-extraction-case.json`: documented research-only override and provenance.
- `src/components/PolicyStudio.tsx`, `FiscalEnvelope.tsx`, `AwardLedger.tsx`, `ExtractionExperiment.tsx`: analytical sections.
- `ProvenanceInspector.tsx`, `VerificationContext.tsx`, `TwoTestDiagram.tsx`: inline source/evidence inspection.
- `src/App.tsx`, `src/styles/analysis.css`: integration, navigation, terminology and restrained responsive styling.
- `tests/analysis.test.ts`, `tests/browser/analysis.spec.ts`, screenshot-path update in the unchanged Phase 1 assertion suite.
- Plan, QA reports, README and screenshots. No application dependencies added.

## Review checklist

- [ ] Compare both rules and check same-FY2022-base labels, exact component values, signed deltas and reset.
- [ ] Inspect the five deductions and PDFp.17 links; confirm full and billion displays preserve exact transcript.
- [ ] Search Sungai Kupah; inspect page20/row4; filter Kubu; sort with keyboard; clear and try no-match.
- [ ] Confirm full total stays488,419,120 while the filtered subtotal changes.
- [ ] Inspect both evidence tracks and their missing-record limitations; Test2 must stay INCOMPLETE.
- [ ] Activate the research experiment, confirm apparent gap21,084,000 and unchanged published ledger; restore to0.
- [ ] Inspect phone/desktop screenshots and keyboard scroll regions; review Hallmark dispositions above.

## Remaining limits

No F07 ARP, F09 tour, F10 general audit exports or complete F08 source-library/drawer expansion; those remain Phase2B. No P1/P2 or real assessment replay. Source PDFs/assessment records/payment/outcome data remain unavailable. Required source context and limitations are never replaced with synthetic records. No automatic progression to Phase2B.

## Fresh review and regression pass

A fresh read-only review independently reran54 unit tests and reported two Important findings: a validator-accepted zero residual could divide by zero in redistribution percentages/plotting, and altered valid fiscal inputs could display a discrepancy while node prose still claimed an exact match. Both were reproduced with failing presentation tests, then fixed in one pass. Zero-base geometry now has a defined zero extent, the redistribution explanation handles no reduction, and interpretation/experiment copy follows the actual gap.

The review's chart semantics and missing input-node contexts were treated as substantive accessibility/F05 requirements, rather than deferred polish: the interactive SVG is a labeled group exposing six button segments, equivalent full-sized component selectors remain available for narrow marks, and both original input disclosures now contain the complete available/required/interpretation/source context. Browser regression coverage was added. No review finding is deferred.

The reviewer explicitly considered and accepted the separate historical baseline during the isolated experiment, the distinct full/filtered totals, BigInt monetary sorting and accent-insensitive search. No Phase2B, fresh-PDF or visual-redesign requirements were introduced. The original published seed files remain byte-identical to Phase1.

## Final observed results

- `npm test`: **4 files passed;56 tests passed**, including all43 Phase1 tests and the zero-base/nonzero-gap rendering regressions.
- `npm run build`: **passed**, strict TypeScript and Vite production bundle; the browser suite also builds the tested assets.
- `npm run test:browser`: **21 tests passed**, including all10 Phase1 tests, five analytical responsive checks and the accessible-chart/node-structure regression.
- Required widths320/390/768/1024/1440: no page-wide overflow in tested default/expanded states; keyboard/source/history/reduced-motion and200% text-scaling checks pass. This is not an exhaustive manual screen-reader or browser-zoom audit.
- Final rendered Hallmark: **3 FAIL/15 REFLEX/10 WARN**, with all deliberate exceptions cited above. No clean-audit claim.
- Original PRD/handoff/design, historical fiscal/rule/award/coverage/source/evidence files and installed skill payloads are unchanged from97adb74. `git diff --check` passes.
- Screenshots: `phase2a-{width}.png` (expanded BPD provenance + filtered ledger), `phase2a-overview-{width}.png` (default state), and focused policy/funding desktop and active-experiment phone captures. Original Phase1 screenshots are preserved.

Commands run against Node24.22.1 and system Chromium155; existing pinned application dependencies are unchanged. Test runner emits inherited NO_COLOR/FORCE_COLOR warnings. No application page errors occurred in the responsive checks. No unexecuted download, offline, assessment-replay, primary-source or deployment checks are described as passed.
