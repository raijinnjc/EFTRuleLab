# Research story — Checkpoint B review

Implemented the approved Checkpoint A storyboard in the existing React application. **Stop here for visual and narrative acceptance.** Remaining tool-wide design consolidation and release-candidate work are Checkpoint C and have not started. No merge, deployment or environment publication.

## Running application and review gallery

Local production preview: `http://127.0.0.1:4173/`. This is a loopback-only application, not a public website. To reproduce:

```sh
npm ci
npm run build
npm run preview -- --host 127.0.0.1 --port 4173 --strictPort
```

Start at the photographic introduction, open “Sources and study limits,” then use the three question tabs. Select a fiscal stage, expand the five deductions, inspect an equal award, inspect a missing record and change an ARP step. “Research tools” and contextual actions retain every supporting workspace.

| Actual React view | Desktop 1440 × 1000 | Mobile 390 × 1000 |
|---|---|---|
| Photographic introduction | [Introduction](current/overview-1440.png) | [Introduction](current/overview-390.png) |
| 01 — What can we prove? | [Reconstruction](current/puzzle-1440.png) | [Reconstruction](current/puzzle-390.png) |
| 02 — What can't we reproduce? | [Missing evidence](current/evidence-gap-1440.png) | [Missing evidence](current/evidence-gap-390.png) |
| 03 — How could verification improve? | [Proposed ARP](current/protocol-1440.png) | [Proposed ARP](current/protocol-390.png) |
| Source inspector | [Sources](current/source-inspector-1440.png) | [Sources](current/source-inspector-390.png) |
| Normal-motion walkthrough | [Desktop recording](story-1440.webm) | [Mobile recording](story-390.webm) |

These are rendered application captures, not a standalone HTML prototype. Full-page screenshots show offscreen content too; `*-viewport-*` images retain the initial viewport. Stable stills use reduced motion; walkthroughs use normal motion. Five-width captures and render observations are in [current/](current/).

## Narrative and interaction changes

- One shared three-question navigator replaces duplicate chapter controls. The introduction no longer stacks the full Puzzle under the photograph.
- Reconstruction groups deductions initially but preserves all five individual values, controls and source locators. It compares the computed performance pool against the independently published ledger sum, then retains twenty equal inspectable award marks. The two monetary denominators remain explicit.
- Evidence Gap centers four unavailable record categories and an independently unavailable recipient set. Its compact Test 1 reference does not suggest that Test 2 follows from passing fiscal arithmetic.
- ARP centers “derive before revealing the roster.” Four review phases lead to the same eight inspectable steps, original interactive map, full transcript, proposed responsibilities and conditional outcome classifications. The public demonstrator does not implement a blind replay or withhold public records.
- Supporting Rule Shift remains accessible through contextual actions and Research tools. The five-stop guide begins with funds, awards, verification and ARP; the counterfactual comparison is the final optional stop.
- Existing Dusk photo, attribution, bundled fonts, brand assets and motion tokens remain unchanged. New primary scenes reuse the bone canvas and contextual inspector grammar. Supporting workspaces have not received the later Checkpoint C restyling.

The approved research-to-interface mapping and complete copy remain in [Checkpoint A](../../research/checkpoint-a/README.md). Implementation decisions and corrected defects are in [IMPLEMENTATION_NOTES.md](IMPLEMENTATION_NOTES.md).

## P0 preservation checklist

| PRD feature | Preserved interaction and boundary |
|---|---|
| F01 Narrative gateway | Required headline/photo, independent PASS/INCOMPLETE, research context, source action and primary navigation |
| F02 Policy Studio | `#policy` and `#rule-shift`, both rules, fixed FY2022 base, segment/full-size selection, exact deltas and 60/40 redistribution |
| F03 Fiscal envelope | `#funds`, five deductions, exact waterfall inspection and individual source locators |
| F04 Award ledger | `#awards`, all twenty published records, search, district filter, sorting, subtotals and exact full total |
| F05 Two-test verification | `#verification`, separate arithmetic and recipient-decision questions, transcripts, explicit PASS/INCOMPLETE |
| F06 Extraction experiment | `#extraction`, flawed research-side transcription comparison, reset and original disclaimer |
| F07 ARP | `#protocol`, all eight steps, native selector, interactive map/transcript, three conditional outcomes, proposed status |
| F08 Provenance | `#sources`, search/status filtering, source drawer, inherited transcription status, missing pages and focus return |
| F09 Guided demo | All five original destinations, Next/Previous, keyboard, exit focus, supporting-tool origin and mounted state |
| F10 Audit exports | `#exports`, exact CSV/JSON/Markdown, counterfactual flags and unavailable evidence disclosures |
| F11 Accessibility | Keyboard chapter navigation, selected state, native chart alternatives, source-dialog focus, reduced motion, history and responsive layouts |

All public hashes remain: `#overview`, `#puzzle`, `#rule-shift`, `#evidence-gap`, `#policy`, `#funds`, `#awards`, `#verification`, `#extraction`, `#protocol`, `#sources`, `#exports`. Analytical components remain mounted; hidden panels stay inaccessible. Protocol is now a primary destination while preserving its existing workspace wrapper and URL. Sources opened from it return to Proposed verification.

## Verification evidence

Final results: **75 unit tests passed** ([log](unit-results.txt)); **strict TypeScript/Vite production build passed** ([log](build-results.txt)); **78 production Chromium tests passed in 2.9 minutes** ([log](browser-results.txt)). The timing regression also passed three repeated targeted runs ([log](motion-repeat-results.txt)). All original 74 unit and 74 browser cases are retained. Changes to existing tests update approved headings, navigation, disclosure entry actions, protocol return origin and guided-demo order. Four new browser cases and one SSR contract case cover the new journey, all eight ARP steps, introduction provenance and five-width enlarged-text layouts.

An intermediate run exposed a duplicate disclosure name and a concurrent artifact-directory collision. The disclosure now has a distinct name and targeted runs use a separate temporary output directory. A short animation assertion could run after its 210ms animation ended; the test now forwards the real browser animation and records its actual timing instead of racing the observation window. Strict TypeScript caught and corrected a recorder type mismatch. No product motion or monetary calculations changed to satisfy these tests.

## Scientific and acceptance limits

No changes to `src/domain`, `src/evidence`, `data`, official product documents, assets or dependencies. Gross ADD, five deductions, residual, both rules, exact BigInt calculations and all twenty published allocations remain unchanged. No scores, rankings, recipient-selection function, payments, fairness finding or ecological outcome has been invented.

Original official PDFs and the V4 memorandum are unavailable in this checkout. Source status, hashes and page references remain inherited metadata; this task did not freshly verify a primary source. ARP remains a proposed reviewer procedure, not a historically executed system. Missing records mean not obtained for this study, not proven absent within government.

The screenshots and scripted walkthrough demonstrate rendered behavior; they do not establish that a real first-time reader understands the finding within 45–60 seconds. That comprehension target and the visual/narrative acceptability remain for user review. Chromium is tested; Safari/WebKit is unavailable here. No new performance measurement is claimed.

## Rendered Hallmark audit

All three primary routes were actually rendered. Raw results are Puzzle **11 FAIL / 7 REFLEX / 27 WARN**, Evidence Gap **6 / 7 / 26**, and proposed ARP **6 / 6 / 27**. This is **not** a clean automated pass. [Review and dispositions](HALLMARK_REVIEW.md) distinguish approved wrapping/large figure controls, static selector heuristics, inherited editorial findings and the concrete defects fixed during B. Broader supporting-tool cleanup remains gated by Checkpoint B acceptance.

## Git baseline and delivery

Branch: `feat/research-story-checkpoint-b`. Latest fetched `origin/main` is `7cbcb91`; approved Checkpoint A commit `1add318` sits above it and is preserved in this branch. That approved documentation is not silently dropped or automatically merged. Test-generated screenshots/export samples in existing QA folders are refreshed by the retained suite; their generated CSV uses normalized repository line endings only. No historical dataset is changed.
