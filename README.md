# EFT RuleLab

A research-oriented evidence workbench for Kubu Raya FY2022 ADD, distinct from national Dana Desa. P0 includes the fixed-base Policy Studio, fiscal waterfall, published ledger, two-test diagram, isolated extraction experiment, proposed ARP, research source library, guided demonstration and exact audit exports. It is an independent research prototype, not an official government system.

The supplied source baseline reconciles a **Rp488,419,120** performance pool with **20** positive allocations: **Rp0 gap**. Recipient decision replay remains **INCOMPLETE** because approved assessment and selection records were not obtained for this study. Published allocations do not verify actual payments or ecological outcomes.

## Graphical research experience

The working React application follows three primary questions: **What can we prove?**, **What can't we reproduce?**, and **How could verification improve?** Complete analytical/evidence tools open as focused, on-demand workspaces. Policy Studio, Funds, Awards, Verification, Extraction, proposed ARP, Sources and Exports share the Dusk Precision analytical surface. Rule Shift remains a discoverable supporting fixed-base comparison.

All original deep links, exact-data inspection, browser history and mounted analytical state remain available. See the [Checkpoint C release-candidate report](docs/qa/checkpoint-c/REPORT.md), [desktop/mobile comparison gallery](docs/qa/checkpoint-c/GALLERY.md), [P0 preservation matrix](docs/qa/checkpoint-c/P0_MATRIX.md) and [first-time-visitor acceptance script](docs/qa/checkpoint-c/FIRST_VISITOR_ACCEPTANCE.md). A/B research story remains approved; final release-candidate acceptance is pending.

## Run locally

Requires Node >=22.20.0 and npm. Validated with Node 24.22.1. No application credentials or backend services required.

```sh
npm ci
npm run dev
```

For the production bundle and local preview:

```sh
npm run build
npm run preview
```

Static output is in `dist/`. No public deployment was performed. If JavaScript is disabled, the page gives an explicit notice; interactive functionality requires JavaScript.

## Validate

```sh
npm test
npm run build
npm run test:browser
```

Browser tests build the production app and launch their own local preview. They use `/usr/bin/chromium` by default; set `CHROMIUM_PATH` to an installed compatible Chrome/Chromium executable on another machine. Screenshots are written to `docs/qa/screenshots/`. A browser is needed only for browser checks, not unit tests or builds. Python 3 is needed only for the installed UI UX Pro Max research tool.

See [Phase 2B acceptance matrix, results and limitations](docs/qa/PHASE2B_REPORT.md), [export samples](docs/qa/export-samples/), [Phase 2A QA results](docs/qa/PHASE2A_REPORT.md) and [Phase 1 QA](docs/qa/PHASE1_REPORT.md), [Phase 2A implementation plan](docs/superpowers/plans/2026-11-05-core-analytical-experience.md) and [architecture](docs/ARCHITECTURE.md).

## Project authority and layout

- [PRD](docs/product/EFT_RuleLab_PRD_v1.0_Codex.md) and [handoff](docs/product/EFT_RuleLab_Codex_Handoff.md): original supplied documents, unchanged.
- [Design system](docs/design/DESIGN_SYSTEM.md): visual authority subordinate to the PRD; `DESIGN.md` is the skill entry point.
- [Evidence package](data/README.md): seed provenance, fiscal-year boundaries and unavailable records.
- `src/evidence/`: runtime validation, readonly types, immutable package.
- `src/domain/`: exact BigInt arithmetic, evidence statuses and display-only formatting.
- `src/components/`, `src/App.tsx`, `src/styles/`: accessible primitives, diagram and responsive shell.
- `tests/`: unit/integrity/status tests and Chromium responsive/interaction smoke checks.
- `.agents/skills/`: unchanged UI UX Pro Max and Hallmark. Superpowers is supplied by the current cloud plugin session; availability elsewhere must be rechecked.

V4 and original annex PDFs were not available for fresh verification. Seed records are transcribed from the source-referenced PRD, with legal citations and inherited inspection limits preserved. No synthetic research data is used.

Checkpoint C starts from merged `main` commit `b0e7883` (A/B included) and targets `main` from `feat/checkpoint-c-release-readiness`. F01–F11 are preserved for final acceptance; no automatic merge or deployment. All P1/P2 work is excluded.
