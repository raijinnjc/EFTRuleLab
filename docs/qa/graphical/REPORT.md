# Graphical research experience — actual React application

Parent: `b859ab4ee49b2bc26898a8c1fee453d2be7a8b39` (main, merged PR #7). Dedicated branch `feat/graphical-research-experience`. No application code from the rejected UX rescue prototype is used.

## Reference and implementation

Both supplied HTML documents, supplied README and integration prompt were read as user-supplied reference material. The38KB document identifies itself as V2; its three chapter interaction is the composition reference. Its hardcoded research amounts were not imported. [Supplied V2 rendered reference](supplied-v2-reference.png) documents the comparison.

The delivered work is mounted in the existing React application. New ResearchExperience, ResearchPuzzle, ResearchRuleShift and ResearchEvidenceGap components consume the existing validated Dataset, reconstruct, compareRules, verifyHistorical and bounded plotFraction helpers. Compact mobile monetary labels use tested BigInt-only formatting. Original exact fiscal calculations, dataset and evidence rules are unchanged.

- **Puzzle:** stage selection, exact inspectable amounts, all five deduction inputs/provenance, gross-scale90.81/9.19 and separately labeled residual-scale75/18/7,20 equal native-button award marks bound to real village records, exact totals and explicit independent recipient-decision boundary.
- **Rule shift:** equal-length bars with dataset-derived shares, inspectable native segment buttons, full-size rule/component selector, exact output, signed deltas,60/40 redistribution and zero net change. Shared selected rule reaches full Policy Studio and audit exports. The 2021 rule is always a fixed-FY2022-base counterfactual.
- **Evidence gap:** separate Test1 and Test2 articles. Four missing-record buttons reveal precise research limits. No assessment or recipient-selection computation exists. Both historical statuses remain derived/faithful to the research package.

The compact photographic introduction remains Dusk. Bone carries one graphical analytical scene at a time; slate contains the navigation and supporting workbench. Primary navigation follows the research sequence; supporting P0 tools remain mounted, reachable and stateful. This is intentionally an evidence-led layer above the complete tools, not removal or replacement of the workbench.

## Working preview

Run `npm ci` if dependencies are absent, then `npm run dev -- --host 127.0.0.1`. Production preview: `npm run build` then `npm run preview -- --host 127.0.0.1 --port 4173 --strictPort`.

Scenes: `http://127.0.0.1:4173/#puzzle`, `#rule-shift`, `#evidence-gap`. Original `#overview`, `#policy`, `#funds`, `#awards`, `#verification`, `#extraction`, `#protocol`, `#sources`, `#exports` remain functional. Scene and workbench components stay mounted. Hash history/back/refresh opens the selected scene; source-dialog focus returns to its trigger. Mobile Navigation intentionally brings research-tool links into view and focuses them. Preview is loopback-local, not deployed publicly. Shared desktop control tools were unavailable in the session tool catalog; actual Chromium/Playwright rendering was available and used.

## P0 preservation checklist

| Feature | Preserved application functionality / evidence |
| --- | --- |
| F01 | Required research headline, independent context, fiscal summary, terminology and disclaimers; original attributed photo/fonts retained |
| F02 | Full Policy Studio rule/component selectors, exact/% labels, chart marks, reset, table, deltas and source inspection; linked rule state synchronized |
| F03 | Full fiscal waterfall, gross-scale deductions, distinct residual split, display choices and exact data/provenance |
| F04 | All20 published entries, village/kecamatan search, kecamatan filter, supported sorting, filtered subtotal versus full total, empty state and copyable ledger |
| F05 | Complete original two-test diagram/transcript/disclosures; new graphical tracks additionally expose independent evidence needs |
| F06 | Original opt-in extraction experiment, restore, immutable baseline, exact gap and government-error disclaimer |
| F07 | All8 ARP steps, accessible diagram and native alternatives, withheld roster, proposed roles, outcome definitions and transcript |
| F08 | Full source register/categories/search, source relationships, source drawer, inherited hash qualifiers, missing pages explicit and copyable citations |
| F09 | Original five-step demo with Previous/Next/Exit, keyboard/progress, no timers and state preservation; actual real-section portals unchanged |
| F10 | Real JSON/CSV/Markdown downloads, selected analytical state, exact decimal money, immutable full ledger, extraction provenance and text fallback |
| F11 | Existing focus/semantic controls, source-modal focus, responsive reflow, local table scrolling,200% text and reduced motion; new chapter keyboard/selector alternatives |

The original38 production-browser tests and65 unit tests remain present, with no assertion weakening or test removal. QA screenshots and actual downloaded samples are refreshed by existing test paths.

## Executed verification and fixes

Final unit suite: **69 passed across6 files**. Strict TypeScript/Vite build passed. Final browser count recorded below after completion. New checks cover separate scales,20 equal award geometry, dynamic/zero residual rendering, exact source inspection/focus, rule selector/segment interaction, scene state/history, shared rule/export state, missing records, responsive320/390/768/1024/1440, keyboard tabs, mobile navigation and200% text. Browser tests build/serve production through loopback.

Test history is explicit: new component absence observed RED; .tsx test discovery initially excluded by repository configuration, corrected to existing .test.ts/createElement pattern. First full browser44passed/3newfailed; corrected hidden-inspector test ambiguity, missing-record accessible name and nonwrapping legend. Second run48passed. Fresh read-only review found two Important defects: stale full Policy Studio inspection after graphical rule change, and mobile tool navigation opening offscreen. Added regressions, observed both fail, fixed both. Subsequent49-test run passed. Mobile display abbreviation then exposed existing200% reflow regressions (47pass/2fail); text-size-aware stage grid fixed them and49passed. No failures omitted or fabricated audit passes.

The30-second understanding goal guided the condensed introduction and graphical chapter sequence. It has not been measured with first-time users. No usability-study, formal screen-reader or cross-browser certification is claimed. No primary PDFs or V4 memorandum were newly verified.

## Review/artifacts

Desktop/mobile captures are actual working application scenes, not standalone HTML mockups. Capture names `puzzle`, `rule-shift`, `evidence-gap` with widths320/390/768/1024/1440. Additional full-app, source-open and interaction screenshots below.

Money remains exact in computation, accessible labels, inspectors, tables and exports; rounded bn/m labels are display-only. No synthetic scores, rankings, assessed universe, payments or outcomes introduced. No P1/P2 work, merge or public deployment.

## Final rendered Hallmark audit and dispositions

Raw [HALLMARK.json](HALLMARK.json): **5 FAIL / 11 REFLEX / 22 WARN**, render tier ran against the production bundle. Not a clean audit pass. Real findings fixed include768px source-button wrapping, raw off-scale gaps and text measure; inherited contrast overrides and required scientific labels are explicitly distinguished below.

| Gate | Final count | Disposition |
| --- | --- | --- |
|19|1 FAIL|Keep accurate citation page-range punctuation in original diagram; PRD source fidelity.|
|49a|3 FAIL|Original mobile reset, PDF-sort and extraction labels wrap. Retain full wording and readable reflow/keyboard targets rather than clip research meaning.|
|63|1 FAIL|Retain required independent-research footer disclaimer punctuation. New decorative arrow label removed.|
|7b/22|3+1 REFLEX|Approved Dusk white/neutral tokens, not unthemed new surfaces.|
|39b|1 REFLEX|Large stage and protocol controls contain exact values/context; full targets deliberately exceed generic button-height heuristics.|
|49b|4 REFLEX|Source locators/links wrap at narrow widths; no citation truncation.|
|71|1 REFLEX|Original supporting research section hierarchy retained. New primary graphical composition uses one object per scene.|
|72|1 REFLEX|Ancestor/descendant-edge heuristic on a long document. Rendered scenes have no fixed-height clipping;320–1440 and200% reflow checks pass.|
|3|3 WARN|Semantic evidence, selected-step and tour markers, all accompanied by text/pressed state.|
|29|1 WARN|Single photographic intro glass panel is explicitly approved Dusk; analytical scenes use bone, not glass.|
|40|3 WARN|Static scan reads earlier base skip-link/primary/active selectors; later explicit Dusk overrides supply contrasting foreground/background. No corresponding rendered contrast FAIL.|
|41|3 WARN|Existing slate protocol/tour/selected-step panels inherit light text; static rule omission is not absence of rendered color.|
|49|4 WARN|Explicit action/reset labels may reflow.|
|F4|1 WARN|Neutral table sorting and protocol controls are not competing promotional primary actions.|
|F6|4 WARN|Tabular-figure styling inherited for money; nonnumeric status/headings do not require it.|
|F16|1 WARN|Native scrollbar/selection behavior retained.|
|F19|1 WARN|Four weights retained for analytical hierarchy and inherited emphasis.|
|F25|1 WARN|Labeled, keyboard-operable local table scrolling is intentional for exact-value comparisons.|

All new scene captures were generated from the live React production build. Desktop Puzzle and mobile Puzzle/Rule Shift visually inspected, including currency reflow and separate denominators. Browser/DOM checks supplement visual inspection; these are not a blanket WCAG claim.

## Delivery verification

Final exact delivery code: **69 unit tests passed;50 production-browser tests passed; strict TypeScript/Vite production build passed**. [Actual final browser log](BROWSER_TESTS.log). Earlier failures and fixes above are retained for honesty; final50includes all38original tests plus12new checks. No original assertion was removed or weakened.

Screenshots: [Puzzle desktop](puzzle-1440.png) / [Puzzle mobile](puzzle-390.png); [Rule shift desktop](rule-shift-1440.png) / [Rule shift mobile](rule-shift-390.png); [Evidence gap desktop](evidence-gap-1440.png) / [Evidence gap mobile](evidence-gap-390.png). Full range320/390/768/1024/1440 is present. Additional introduction and open-source captures are saved beside these.

Scientific evidence limits remain unchanged: inherited PRD transcription, no fresh primary-PDF or V4 check, no assessment scores/universe/implemented rules/signed decisions obtained, no actual payment or ecological-outcome verification.30-second comprehension remains an unmeasured acceptance target for user review.

Final visual verification also corrected stylesheet ordering so the compact introduction wins over inherited Dusk rules. New graphical styles load last in App. No domain/data changes were needed. Fresh reviewer findings are both resolved with failing-then-passing regressions; no deferred Important findings.

A final primary-header navigation check found that activating a previously hidden scene did not bring it into view. The hash handler now scrolls to the chapter workspace (keeping tabs visible), with an additional browser regression. Full final suite includes this check.

## Git delivery

Implementation commit `ac5968ebc6e8082c4bfff3ac72b6319cae2ecbbb`, dedicated branch `feat/graphical-research-experience`, pushed successfully. Parent `b859ab4ee49b2bc26898a8c1fee453d2be7a8b39` is integrated main (PR #7). Working tree clean after delivery commits; no force push or unrelated merge.

`gh pr create --base main --head feat/graphical-research-experience` returned `Post "https://api.github.com/graphql": Forbidden`. No PR was created by this task. Manual action: open https://github.com/raijinnjc/EFTRuleLab/compare/main...feat/graphical-research-experience?expand=1 , confirm base `main`, compare `feat/graphical-research-experience`, then Create pull request. Suggested title: Build the graphical fiscal research experience. Do not automatically merge.

Live loopback preview retained in the execution workspace at http://127.0.0.1:4173/#puzzle . This URL requires the workspace browser; it is not a public deployment. Restart instructions above reproduce the same actual React application locally.
