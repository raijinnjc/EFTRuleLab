# Codex Implementation Handoff — EFT RuleLab

## Instruction for Codex

You are implementing a **working interactive research prototype**, not another planning report or a static mockup.

1. **Read `EFT_RuleLab_PRD_v1.0_Codex.md` completely first.** Its evidence charter, source limits, feature IDs, exact fixtures, and acceptance checks are authoritative for this build.
2. The primary research case is Kubu Raya **FY2022 ADD**. DO NOT conflate ADD with national Dana Desa. The existing V4/V5/V6/V7 research files may be supplied as supporting material; verify consistency if you have them.
3. **Implement P0 F01–F11**, then run unit + browser tests. Do not build P1/P2 at the expense of P0. If time/resources allow after P0, add P1 F12/F13/F14 in that order; defer custom sandbox unless it will be precisely separated from history.
4. Recommended approach: **Vite + React + TypeScript**, locally bundled validated JSON, deterministic BigInt-based fiscal engine, SVG figures and flow diagrams, responsive editorial design, Vitest and Playwright. You may choose an equivalent implementation if justified. No backend, live data integration or AI scoring.
5. Follow the **no-fabrication rule**: no invented assessment scores, recipient ranking, ecological impact, government misconduct, cash payments or 2021 actual monetary results. Test 1 should PASS with Rp0 gap; Test 2 is INCOMPLETE because historical assessment/selection records are not obtained. A 2021 rule applied to the 2022 residual is labelled counterfactual in every view and export.
6. The research-side BPD extraction experiment must be opt-in, isolated and reversible; default to the verified source value. Never present Rp21,084,000 as an official budgeting mistake.
7. Make the UI compelling and polished without generic box grids. Use an editorial evidence narrative, two interactive flow diagrams, a fiscal allocation comparison, funding waterfall, positive-award ledger, and citations/source inspector.
8. Ensure **all numbers come from source-referenced seed JSON** and are computed in a pure domain layer. Never use search-engine/OCR snippets to override the verified source ledger.
9. Execute and document actual tests: exact calculations in PRD §9, routes/keyboard/export controls, responsive views 320/390/768/1024/1440 CSS px. Include screenshots and truthful QA report. Do not claim browser/offline/download testing you have not performed.
10. Deliver all code, the runnable web app, README, data manifests, test scripts, actual output from test commands, and screenshots. Do not deploy the site externally unless separately authorized. Record incomplete features explicitly.

## Execution order

- First report: implementation plan tied to `F01–F11`, short dependency choice and exact data schema.
- Then create the functional project, tests and figures.
- Then run/build/test and repair failures.
- Final report: features completed, how to run, validation evidence, screenshots, known limitations and any P1 work actually done.

## Required opening view

**Headline:** `The numbers reconcile. Can the decision be reproduced?`  
**Baseline:** `Rp488,419,120` published performance pool; `20` positive entries; `Rp0` reconciliation gap.  
**Evidence boundary:** `Test 1: PASS` vs `Test 2: INCOMPLETE — approved assessment/selection records not obtained for this study`.

## Final hard stops

If missing official records prevent an interaction, show an **INCOMPLETE** evidence state instead of substituting synthetic data. If a feature would imply verified recipient selection or ecological outcomes, do not implement it. Never modify the published 20-entry ledger in scenario mode.
