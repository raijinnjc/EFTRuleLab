# Dusk Precision Puzzle Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement task-by-task.

**Goal:** Complete supplied Steps1–3 and stop for visual approval.
**Architecture:** Keep existing React state-preserving routing and BigInt domain. Scope reusable presentation primitives and style aliases to Puzzle; compose one waterfall/scale-change/award figure with exact contextual inspection.
**Tech stack:** React19, TypeScript7, Vite8, Vitest, Playwright/Chromium.
**Spec:** docs/design/DUSK_PRECISION_SYSTEM.md; supplied design consistency rebuild prompt.

## Global constraints

- Baseline fc6783a, merged PR9. Dedicated design/dusk-precision-puzzle branch.
- No changes to fiscal/evidence domain, data, PRD or other chapters/workspaces.
- No merge, deployment or environment publication. Stop after Step3.

## Review focus

- Different gross input/zero residual must not produce NaN or false PASS.
- Selection must preserve exact source locator, especially individual deductions and awards.
- Missing input selection cannot suggest fabricated replay or imply government fault.
- Mobile/200% text must preserve controls, money, local tables and independent statuses.
- Source focus, browser history, hidden workspace state and guided demo must remain intact.

## Task 1 — Audit and define system
- [x] Render nine actual views at1440/390 before visual edits; inspect captures.
- [x] Document observable matrix and proposed system; explicit staged scope.

## Task 2 — Puzzle and shared primitives
Files: ResearchPuzzle.tsx; precision/Primitives.tsx; precision.css; graphical.test.ts; browser/precision.spec.ts.
- [x] Add failing behavioral tests for missing requirement inspection and individual deduction/source inspection.
- [x] Run red; ensure failure is absent functionality.
- [x] Implement generic primitives and one composed fiscal figure using reconstruct/verifyHistorical/plotFraction, preserve award-mark/accessibility contracts.
- [x] Verify new tests green; no baseline fiscal constants in UI.

## Task 3 — Verification and review checkpoint
- [x] Run unit tests, strictbuild and full production browser suite.
- [x] Capture identical-size before/after, selected award/missing/context states, five-width and enlarged-text checks.
- [x] Run rendered Hallmark; distinguish true defects from research constraints and inherited findings.
- [x] Review diff and science invariants; record actual results, limits, preview instructions.
- [x] Commit/push review branch where allowed. Stop for Step3 visual approval; no Steps4–6 implementation.
