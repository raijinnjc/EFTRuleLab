# Evidence Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Deliver a tested React foundation with immutable source-referenced research data, exact fiscal arithmetic and a rendered two-test evidence diagram.

**Architecture:** Local JSON seeds cross a runtime validator into readonly TypeScript models. A pure BigInt domain engine computes allocation/reconciliation independently from presentation. Accessible React primitives and native disclosure controls compose a responsive evidence workbench.

**Tech Stack:** React, TypeScript, Vite, Vitest, Playwright with system Chromium. Node 24 in this environment; pin package versions through npm lockfile.

**Spec:** `docs/product/EFT_RuleLab_PRD_v1.0_Codex.md`, approved `docs/design/DESIGN_SYSTEM.md`, current Phase 1 user task.

## Global Constraints

- No synthetic scores, selection logic, payment or ecological-outcome data. Test 2 remains INCOMPLETE.
- PRD transcription is available; V4 and original PDFs are not. Report inherited scan verification explicitly.
- Preserve original documents, installed skills and branch ancestry. No worktree, deployment or merge.
- Money is decimal-string JSON and BigInt computation; reject malformed/negative/decimal input and unsupported rules. No silent rounding.
- Phase 1 foundations only: F01 introduction, F02/F03/F04 data/domain foundations, F05 initial two-test diagram, F08 source model/basic inspection, F11 responsive accessible primitives. F06 extraction UI, F07 ARP, F09 tour, F10 exports and remaining P0 interactions stay for next phase. No P1/P2.

## Review Focus

1. Malformed or dangling provenance must fail validation before presentation (Task 1 tests).
2. A changed/nonzero or unavailable fiscal input must not display a false PASS (Task 2 tests).
3. Same-base 2021 calculations must not be mistaken for historical reconciliation (Task 2 tests).
4. Missing historical decisions must stay unavailable independently of a fiscal match (Task 2 and browser tests).
5. Long citations, small screens and keyboard disclosure must remain reachable (Task 3 browser tests).

## Task 1: Evidence package and typed boundary

Files: package.json, lock/config files, data/{source-manifest,fiscal-inputs-2022,rule-sets,positive-awards-2022,kecamatan-coverage-2022,evidence-register}.json; src/evidence/{types,dataset,validate}.ts; tests/evidence.test.ts.
Interfaces: `validateDataset(input: unknown): Dataset`; `dataset: Readonly<Dataset>` with readonly source/fiscal/rule/award/coverage/missing-record models. `Provenance` carries sourceId, fiscalYear, pdfPages, locator, evidenceType and note.

- [x] Configure pinned test/build tooling; write integrity tests for exact PRD values, 20 unique awards and coverage, all references/pages, null missing records, immutable package and invalid input rejection.
- [x] Run tests RED against a minimal throwing validator, observing assertions fail rather than import errors.
- [x] Transcribe PRD records to JSON and implement strict runtime validation/deep freeze without source fetches.
- [x] Run `npm test` GREEN and commit evidence foundation.

## Task 2: Pure exact fiscal engine and evidence status

Files: src/domain/{fiscal,evidence,format}.ts; tests/fiscal.test.ts.
Interfaces: `parseRupiah(value: string): bigint`, `allocate(residual: bigint, rule: RuleSet): Components`, `reconstruct(dataset): FiscalResult`, `compareRules(dataset): Comparison`, `verifyHistorical(dataset): Verification` and `formatRupiah(value: bigint): string`.

- [x] Write RED tests for PRD T01–T22 calculations, 2021-rule counterfactual labeling, gap changes, malformed money, noninteger division, invalid shares, missing input handling and independent INCOMPLETE replay. Literal expected amounts come only from the PRD.
- [x] Implement exact basis-point calculations, validation, evidence states and BigInt-safe presentation; do not expose a recipient selection function.
- [x] Run `npm test` GREEN; commit.

## Task 3: Responsive shell and signature diagram

Files: index.html, src/{main,App}.tsx, src/components/{primitives,TwoTestDiagram,SourceReference}.tsx, src/styles/{tokens,app}.css; tests/browser/foundation.spec.ts; playwright.config.ts.
Consumes: frozen dataset, domain verification/results and source locators.
Produces: semantic application shell, introductory evidence narrative, independent diagram tracks with keyboard-operable native disclosure, exact data transcript and source manifest view.

- [x] Write browser tests first: required headline, PASS/Rp0 and INCOMPLETE together, unavailable decision input text, disclosure/source links, anchors/history, no runtime errors, no page overflow at 320/390/768/1024/1440. Capture RED on initial empty Vite shell.
- [x] Use UI UX guidance for disclosure/focus and the approved design; implement tokens, reusable primitives and two separate SVG-backed evidence tracks with HTML controls/transcripts. Show implemented sections only, no false placeholder features.
- [x] Run unit tests, TypeScript/production build and browser suite; capture screenshots at all five widths and inspect desktop/mobile. Do not claim Hallmark audit from static source checks.
- [x] Record actual tests/limits and run instructions; commit.

## Task 4: Final review and delivery

- [x] Perform fresh whole-branch review; fix substantive findings using RED→GREEN regressions.
- [x] Run `npm test`, `npm run build`, `npm run test:browser`; verify unchanged skill payloads and original documents, clean tracked diff.
- [x] Update QA report and plan checkboxes, push feature branch, attempt PR against main. Report permissions accurately; do not merge.

## Execution ledger

User explicitly authorizes planning directly followed by implementation in this task; execute inline without a separate approval pause. Main is d931bbe, unmerged approved docs are 1d1686c; feature branch retains their ancestry. Workflow scripts from cloud skill references are not local executables here; record task progress in this plan and QA report instead. No interface conflicts in preflight: Tasks 2/3 consume the validated dataset defined by Task 1.

Execution results: Task 1 complete in 207791f (22 initial integrity tests); Task 2 complete in 6b1a242 (37 initial combined tests); Task 3 complete in 460fa31 plus reviewed corrections (production rendering and five screenshots). Task 4 review identified cross-year provenance and unavailable-input presentation; regressions failed then fixes passed. Final verification counts and PR result are recorded in docs/qa/PHASE1_REPORT.md.

Rulings: use the current isolated checkout, retaining unmerged approved docs history; V4/PDF verification is unavailable and explicitly inherited from PRD; preserve PRD-required white tokens, source ranges and footer despite Hallmark's style objections; treat misleading changed-input prose as substantive and fix it alongside review findings. These decisions preserve source truth at the cost of an inherited-doc PR diff and an intentionally non-clean third-party style report. No deferred review findings.
