# Core Analytical Experience Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement task-by-task with TDD and final fresh review.

**Goal:** Complete Phase 2A F01–F06 on the approved Phase 1 foundation.
**Architecture:** Preserve immutable source seeds and BigInt arithmetic; add pure ledger query, running-envelope and extraction-scenario functions. Compose independent React sections with accessible charts/tables, inline provenance and inspectable verification nodes. Counterfactual and research-test state never rewrites historical data.
**Tech Stack:** Existing React/TypeScript/Vite, Vitest, Playwright/system Chromium; no new application dependencies.
**Spec:** Current Phase 2A brief; docs/product/EFT_RuleLab_PRD_v1.0_Codex.md F01–F06; docs/design/DESIGN_SYSTEM.md.

## Global constraints

Main remains d931bbe; approved Phase 1 is 97adb74, not merged. Branch from Phase 1; target feat/evidence-foundation for stacked PR. Preserve all existing commits, source files and fiscal assumptions. No worktree, merge, deployment, P1/P2 or Phase 2B. Decimal-string source values and exact BigInt calculation remain authoritative. No actual-year 2021 spending claims, synthetic scores, recipient selection, payments or ecological outcomes. V4 and original PDFs remain unavailable.

## Review focus

- Search is accent/case-insensitive over village and kecamatan; filtered subtotal never replaces the immutable global total (Task 1 and 3).
- Share selection must not turn the published ledger into counterfactual village results (Task 2 browser tests).
- Source lookup preserves known page/row without inventing unknown rule pages (Task 2/3).
- Wrong BPD extraction affects only scenario computation and restores precisely; no government-error status (Task 1/4).
- Narrow layouts, expanded citations, chart focus and keyboard sorting remain reachable (browser suite).

## Task 1: Pure analysis helpers and isolated extraction fixture

Files: data/research-extraction-case.json; src/domain/analysis.ts; tests/analysis.test.ts.
Interfaces: queryAwards(awards, {search,kecamatan,sort,direction}) -> readonly Award[]; subtotal(awards)->bigint; envelope(dataset)->running rows with signed change and balance; extraction(dataset, active)->scenario result with historical and selected BPD/pool/gap, immutable ledger, evidence type and apparent-mismatch state.

- [x] Write literal PRD fixture tests for flawed BPD 5532000000, pool509503120, gap21084000 and restoration; data freeze/snapshot; conservation; search/filter/sort and source locators.
- [x] Run RED against minimal stub interfaces, then implement pure helpers and a source-referenced PRD extraction seed.
- [x] Run complete unit suite GREEN; commit.

## Task 2: Policy Studio and Fiscal Envelope

Files: src/components/{PolicyStudio,FiscalEnvelope,ProvenanceInspector}.tsx, src/styles/analysis.css; browser tests.
Consumes: compareRules/reconstruct, envelope, frozen seeds.

- [x] Write browser tests before UI: FY2021/FY2022 rule choice, exact values/deltas, same-base disclaimer, percent/Rp labels and reset, source inspection; gross/deductions/residual scale, full/billion formatting, page17 sources.
- [x] Run RED; build paired equal-scale stacks and signed delta strip, derivation and source panels; true running-balance waterfall with separate residual component split and exact-value transcript.
- [x] Run unit/build/browser checks GREEN; commit.

## Task 3: Published ledger and overview integration

Files: src/components/AwardLedger.tsx, src/App.tsx; tests/browser/analysis.spec.ts.

- [x] Add RED browser tests for Sungai Kupah, accent/case search, kecamatan narrowing, sortable headers, unknown/clear states, full total versus filtered subtotal, correct PDF page20 row4.
- [x] Implement labeled search/filter, aria-sort controls, local table scrolling and explicitly historical immutable ledger with copyable text. Integrate six working nav destinations and brief terminology overview; keep two-test flow as the opening signature.
- [x] Run complete suites GREEN; commit.

## Task 4: Inspectable verification and extraction experiment

Files: src/components/{TwoTestDiagram,ExtractionExperiment}.tsx; browser tests.

- [x] Write RED tests for keyboard-operable node inspection with available/required/missing/interpretation/source sections; isolated wrong-BPD activation, apparent mismatch, unchanged ledger and historical test, baseline reset.
- [x] Implement native disclosure nodes; add a separate opt-in experiment, exact before/after values and mandatory researcher-side disclaimer. No historical selection function.
- [x] Run all tests, production build and screenshots at320/390/768/1024/1440; inspect phone/desktop. Execute rendered Hallmark and record findings/PRD overrides.

## Task 5: Review, QA and stacked delivery

- [x] Fresh read-only whole-branch review; fix substantive findings using RED→GREEN regression tests.
- [x] Record actual results, changed files, remaining Phase2B boundaries and concise review checklist in docs/qa/PHASE2A_REPORT.md. Update README scope.
- [x] Push branch and create PR against feat/evidence-foundation, or report precise API/manual compare instructions. Do not merge.

## Execution ledger

User requests continuing implementation directly. Execute inline from the existing isolated checkout; no separate plan approval pause. Baseline reverified:43 unit tests and production build pass. Existing ten browser checks will be rerun before new UI implementation. Cloud workflow helper scripts are not local executables; use this plan and QA report for progress. Tasks share Dataset and pure helpers; no conflicting interfaces found.

Execution ledger: baseline43 unit/10 browser/build reverified; Task1 completed with11 new domain tests (one initially incorrect search fixture corrected in follow-up commit); Tasks2–4 implemented and observed20-browser/54-unit passes before final review. Review regressions reproduced zero-base rendering and unconditional exact-match claims; fixed alongside complete node contexts and SVG grouping. Final results, audit and Git delivery are recorded in docs/qa/PHASE2A_REPORT.md.

Rulings: preserve the unmerged approved Phase1 dependency and target a stacked PR; keep extraction state isolated with historical verification explicitly baseline; preserve exact source/evidence text and reflow over Hallmark's single-line/one-accent preferences, citing PRD/accessibility in QA; regrade chart semantics and missing F05 context as substantive and fix them now. No deferred findings. These choices cost an explicit stacked-branch dependency and a deliberately non-clean third-party style report, not a change to fiscal research.
