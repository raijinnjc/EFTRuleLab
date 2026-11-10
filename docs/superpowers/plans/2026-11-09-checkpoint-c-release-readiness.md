# Checkpoint C release-readiness implementation plan

> **For agentic workers:** Use superpowers:executing-plans inline, with one fresh whole-branch review.

**Goal:** Consolidate all P0 research tools into the approved Dusk Precision system and prepare a reviewable release candidate.
**Architecture:** Preserve routing, mounted component state and immutable domain/data. Shared surface aliases cover all workspaces/dialog. Small composition changes pair analytical figures with existing contextual controls; ledger and sources retain appropriate record density.
**Tech Stack:** Existing React, TypeScript, BigInt, Vite, Vitest, Playwright/Chromium; no product dependency additions.
**Spec:** docs/superpowers/specs/2026-11-09-checkpoint-c-design.md; docs/qa/checkpoint-c/ASSESSMENT.md; approved A/B documents.

## Global constraints
- Main baseline b0e7883. Dedicated feature branch, no force push, automatic merge or deployment.
- No changes to domain, evidence seed/model, source data, official PRD/handoff or approved assets. No P1/P2.
- Historical Test1 PASS/Rp0; independent Test2 INCOMPLETE; ARP proposed; counterfactual same FY2022 base; extraction researcher-side.
- Keep all public hashes, browser history, guided demo, keyboard/focus, native alternatives, exact exports and mounted analytical state.

## Review focus
- Bone aliases must cover nested charts/statuses/dialog without low-contrast light accents on bone.
- Selected FY2021 SVG inspection must show matching exact source even if global rule choice remains2022 until click; selected-state semantics stay clear.
- Bounded source records and ledger remain fully keyboard-scrollable, all records available, missing fields explicit.
- Narrow/enlarged layouts must not create document overflow or clip exact figures; local table scroll is allowed.
- Source modal focus/history and guide navigation must survive changed composition; no hidden control becomes focusable.

### Task 1 — Shared surface and analytical composition
Files: navigation.tsx, PolicyStudio.tsx, FiscalEnvelope.tsx, SourceLibrary.tsx, ResearchExports.tsx, ExtractionExperiment.tsx, ResearchRuleShift.tsx, App.tsx; new styles/consolidation.css. Tests: tests/browser/release.spec.ts.
- [x] Write regression cases for shared surfaces/focus, selected Policy context/source and all-tool five-width200% reflow; run targeted against baseline and observe expected failures.
- [x] Add shared bone surface/context grammar. Recompose Policy/Funds around existing figures/selectors/provenance, preserve ledger/verification/ARP functionality. Compact source register and format actions, keep all metadata/caveats.
- [x] Run targeted regression + full units + strict build; inspect actual renders and fix concrete defects. Commit.

### Task 2 — Interaction, academic and release QA
Files: scripts/profile-release.mjs, scripts/capture-release-candidate.mjs, tests/browser/release.spec.ts, docs/qa/checkpoint-c/*, docs/design/DUSK_PRECISION_SYSTEM.md, README.md.
- [x] Capture baseline/after Chromium traces and measurements for representative interactions; distinguish script/style/layout from rAF intervals and GPU frames. Only fix confirmed new defects.
- [x] Run complete unit/strict build/production-browser suite, rendered accessibility/visual audit, exact source/export checks, offline behavior where tested; retain all original cases.
- [x] Capture full desktop/mobile comparison gallery and enlarged text at five widths. Write claim checklist, P0 matrix, first-visitor script, known limitations and final release checklist.
- [x] Fresh whole-branch review, required fixes and verification; commit/push and create review PR where permitted. Stop for final acceptance, no merge/deploy.
