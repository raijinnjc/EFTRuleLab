# Dusk Motion Continuity Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans; implement inline and request one fresh final review.

**Goal:** Improve interaction continuity without layout or research changes.
**Architecture:** Semantic CSS tokens + finite CSS entrances, a cancellable selection-emphasis hook, and central route/scroll coordination. Keep native hidden/mounted state and native dialogs; memoize stable presentation boundaries, never change the fiscal engine.
**Tech stack:** Existing React/TypeScript/Vite, browser WAAPI/CSS, Vitest/Playwright/CDP. No dependency additions.
**Spec:** User Motion Design & Interaction Smoothness Pass; docs/qa/motion/DIAGNOSIS.md.

## Constraints and review focus

- Latest main ca39c31; branch feat/dusk-motion-continuity. No layout redesign, data/domain/PRD changes, merge or deployment.
- Immediate pressed/value/focus updates; hidden controls absent to keyboard and assistive technology.
- Route hash, Back/Forward, refresh, deep links, mounted state and demo must survive central navigation.
- Rapid selection/navigation and reduced-motion changes cancel transient effects; no stale presentation.
- Exact money and chart geometry never interpolate. No width/height/top/left/filter animation, timer delays or global will-change.
- Native dialog close semantics and focus remain correct during visual exit, immediate fallback on unsupported CSS.

## Tasks

- [x] Record baseline CDP traces,54 samples, source diagnosis and separate before recordings.
- [x] Write failing tests for semantic motion, single navigation scroll owner, immediate hidden state, dialog inert exit and reduced-motion cancellation.
- [x] Implement shared motion tokens/styles, useSelectionMotion, route coordination and inspector integrations.
- [x] Memoize stable view/source boundaries implicated by code and traces; preserve mounted state.
- [x] Run targeted regressions, then unit/strictbuild/fullproductionbrowser suites.
- [x] Repeat identical profiling/recordings, document measured changes and uncertainty.
- [x] Fresh code review, review fixes, final evidence report and dedicated review branch. No merge/deployment.
