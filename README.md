# EFT RuleLab

A research-oriented evidence workbench for Kubu Raya FY2022 ADD, distinct from national Dana Desa. P0 includes the fixed-base Policy Studio, fiscal waterfall, published ledger, two-test diagram, isolated extraction experiment, proposed ARP, research source library, guided demonstration and exact audit exports. It is an independent research prototype, not an official government system.

The supplied source baseline reconciles a **Rp488,419,120** performance pool with **20** positive allocations: **Rp0 gap**. Recipient decision replay remains **INCOMPLETE** because approved assessment and selection records were not obtained for this study. Published allocations do not verify actual payments or ecological outcomes.

## Graphical research experience

The working React application uses **The puzzle**, **The rule shift** and **The evidence gap** as its primary experience. Complete analytical/evidence tools open as focused, on-demand workspaces; the old permanently stacked workbench is gone. New chapter links coexist with all original deep links. Stage, award, rule and missing-record inspection use the validated local dataset and BigInt engine. No prototype fiscal constants are imported.

See [graphical QA and P0 preservation checklist](docs/qa/graphical/REPORT.md). Start at `#puzzle`, `#rule-shift` or `#evidence-gap`; original tools remain mounted to preserve state, with only the requested workspace visible. See [consolidation QA and P0 interaction inventory](docs/qa/consolidation/REPORT.md).

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

Phase 2B branches from integrated `main` commit `5580c445c988b6e64b6e78e70dd8b86e682465fa` and targets `main`. F01–F11 are available for final user acceptance review; no automatic merge or deployment. All P1/P2 work is excluded. See the QA acceptance matrix and review checklist.
