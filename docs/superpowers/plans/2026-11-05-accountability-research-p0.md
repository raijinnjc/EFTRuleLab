# Phase 2B accountability and research implementation plan

> **For agentic workers:** Use superpowers:executing-plans for inline implementation, TDD and a fresh final review.

**Goal:** Complete F07–F11 while retaining F01–F06 and all fiscal evidence boundaries.
**Architecture:** Extend the React workbench with a protocol stepper and accessible SVG, a source register derived from supplied metadata, an in-flow guided demonstration and pure lossless export builders. Lift only selected rule and extraction state to App so downloads describe the actual analytical state. Keep historical data immutable.
**Tech Stack:** Existing React/TypeScript/Vite, BigInt, Vitest and Playwright. No new dependencies.
**Spec:** Supplied Phase 2B request and docs/product/EFT_RuleLab_PRD_v1.0_Codex.md F07–F11; existing DESIGN_SYSTEM.md.

## Global constraints
- Parent 5580c445c988b6e64b6e78e70dd8b86e682465fa (remote main; PRs #2/#3 merged). PR base main.
- Historical recipient replay remains INCOMPLETE. No invented assessments, recipients, titles, page locations or source inspection.
- Exact decimal monetary serialization; source ledger unchanged under experiments and counterfactuals.
- No P1/P2, merge or public deployment.

## Review focus
- Tour started with active experiment and a counterfactual must preserve those controls and explain historical narrative separately.
- Download API unavailable must leave a readable, selectable fallback and explicit status.
- Source metadata absent in supplied research stays explicitly unavailable, including full literature titles.
- Narrow screens and 200% text must retain all protocol and source qualifications.
- Nonzero and zero-residual accepted datasets must not produce invented pass statements.

## Tasks
1. Research domain and exports: create src/domain/research.ts and exports.ts; tests/research.test.ts. Test protocol missing-state definitions, source search/relationships, exact JSON/CSV/Markdown, unsafe integer preservation, selected rule/experiment isolation. Watch RED, implement, run suite, commit.
2. Protocol and sources: create ProtocolWorkflow.tsx, SourceLibrary.tsx, SourceDrawer.tsx and research.css. Extend existing provenance inspectors to open the shared drawer. Test all eight steps, outcome definitions, keyboard SVG, metadata/search/filter/empty state, citations and dismissal. Watch browser RED, implement, verify.
3. Guided demonstration and downloads: create GuidedDemo.tsx and ResearchExports.tsx. App owns ruleYear (2021|2022) and experimentActive; existing controls accept optional controlled props. Tour renders beside real section content, uses explicit next/previous/exit, arrows only in tour, no timers/state changes. Test navigation, preserved state, real download bytes and fallback. Watch RED, implement, verify and commit.
4. Full P0 verification: run all unit/browser/build checks at 320/390/768/1024/1440, text scaling/reduced motion, capture desktop/mobile, rendered Hallmark and final fresh review. Fix material defects with regression tests. Write acceptance matrix, audit dispositions, samples and ancestry in docs/qa/PHASE2B_REPORT.md. Commit and push feature branch; attempt PR, report exact blocker if needed.

## Execution ledger
- Baseline: 56 unit tests and strict build pass. Browser server startup blocked in sandbox; investigate before claiming browser results.
- Design choice: preserve established layout; in-flow tour annotations avoid overlays obscuring source qualifications. Source drawer is a native modal dialog with focus restoration. Literature titles not supplied in PRD are explicitly unavailable; supplied descriptive labels are not presented as official titles.
- Baseline browser root cause: listen EPERM under sandbox. Authorized execution with local server access passes all 21 tests; no app change required.
- Task 1 complete: new missing modules observed RED; serialization tests then caught an unconverted BigInt in verification.gap. Converted through the shared lossless mapper; all 62 unit tests pass.
- Task 2/3: initial browser test observed missing protocol heading RED. Implemented eight-step SVG plus full native-button labels/transcript, native source dialog, context categories, in-flow portal tour, controlled export state and real downloads.
- Ruling: CSV keeps exactly 20 immutable award rows and repeats full context JSON in a clearly labeled column. This preserves the PRD ledger shape and the newer request's full export context, at the cost of a larger CSV.
- Browser first integrated run: 19 passed, seven failed, one interrupted, seven not run. Actual regressions were removed source access points and 200% overflow from long unbroken IDs; restored original heading/disclosures and shrinkable wrapping. New-test selectors corrected for full label text and duplicated transcript text.
- Second integrated browser run: 32 passed, two failed. Remaining failures were test ambiguity between two status regions and browser textarea CRLF normalization; named download status and compare normalized fallback line endings while keeping real CSV bytes intact.
- Added tested copyable figure citation, sourced to S1 and explicit historical statuses. Unit suite now 64 passed; strict production build passed.
- Fresh review: no Critical/Important findings assigned by reviewer; one Minor export provenance omission. Regraded Important for source-first scientific exports. Regression test failed on absent extraction.provenance, then passed after preserving PRD §2.3; F06; T23–T26 and note in all formats. 65 unit tests pass.
- Hallmark first rendered pass: 20 FAIL / 20 REFLEX / 13 WARN. Fixed raw spacing token use, simplified redundant action labels while retaining full accessible names, and clarified available protocol marks. Citation ranges and required footer language remain governed by PRD.
- Tasks 2/3 complete: production/browser interactions and real downloads pass; all legacy source access preserved.
- Task 4 complete: 65 unit tests, 36 browser tests, strict production build, independent JSON/CSV/Markdown sample parsing and print transcript check pass. Final Hallmark rendered audit: 3 FAIL / 20 REFLEX / 13 WARN, all dispositions in PHASE2B_REPORT.md. No primary-source verification claimed.
