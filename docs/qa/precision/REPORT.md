# Dusk Precision Puzzle — Step 3 approval checkpoint

Implemented in React from **fc6783a**, main's merged PR #9, on `design/dusk-precision-puzzle`. Completed supplied Steps1–3; **Steps4–6 rollout not authorized by this checkpoint**. No merge/deployment/environment publication.

## Review the real interface

Production preview: `http://127.0.0.1:4173/#puzzle` inside this cloud environment. It is loopback-only, not a public deployment. From a checkout:

```sh
npm ci
npm run build
npm run preview -- --host 127.0.0.1 --port 4173 --strictPort
```

Choose a fiscal row, an equal award mark, or an unavailable requirement. The inspector changes to that exact record. Open source, press Escape and verify restored focus. Research tools expose original focused workspaces; their state, deep links, history and guided demo are retained.

| Review | Desktop1440 ×1000 | Mobile390 ×1000 |
|---|---|---|
| Before (actual application) | [Before](before/puzzle-1440.png) | [Before](before/puzzle-390.png) |
| After (actual application) | [After](after/puzzle-1440.png) | [After](after/puzzle-390.png) |
| Side-by-side | [Comparison](comparison-1440.jpg) | [Comparison](comparison-390.jpg) |
| Puzzle composition | [Canvas](after/canvas-1440.png) | [Canvas](after/canvas-390.png) |
| Selected published award | [Award](after/award-1440.png) | [Award](after/award-390.png) |
| Selected missing evidence | [Missing input](after/missing-1440.png) | [Missing input](after/missing-390.png) |

Full-page screenshots retain their original viewport widths and show content beyond the fold; these are rendered application captures, not conceptual layouts. Five-width captures and enlarged mobile text are in [after/](after/). The [baseline audit](VISUAL_AUDIT.md) covers nine views at both required sizes.

## What changed

- Replaced the four monetary tiles/two detached mini-bars with a continuous gross-scale waterfall, explicit residual denominator reset, FY2022 composition and equal-award field.
- Added individual deduction inspection, including its own exact amount and provenance; preserved stage selection and all20 published award controls.
- Added inspectable missing requirements within Puzzle. Their inspector explains why replay is not run. Test1 PASS/Rp0 and Test2 INCOMPLETE stay independent.
- Desktop uses compact navigation / dominant bone canvas / contextual inspector. Mobile puts figure first, inspector second, tools third. Native controls, live selection announcement, exact source disclosure and source modal retain keyboard access.
- Reused bundled Wix fonts/Dusk semantic palette; introduced shared presentation primitives and documented typography/spacing/control rules. No additional photography, gradients, shadows or nested cards.
- Corrected the existing wordmark's nowrap overflow at320px/200% text; normal logo/assets remain unchanged.

The [Dusk Precision System](../../design/DUSK_PRECISION_SYSTEM.md) is a review candidate, not permission to restyle the rest of the product.

## Actual verification

| Check | Result |
|---|---|
| Unit suite | **71 passed**,7files; [output](unit-results.txt) |
| Strict TypeScript/Vite production build | **Passed**; [output](build-results.txt) |
| Full production Playwright suite | **68 passed**,1.9minutes; [output](browser-results.txt) |
| New coverage | Exact individual deduction, award/source focus roundtrip, missing requirement explanation,44px equal award targets, five widths,200% text at every width, reduced motion, mobile keyboard order |
| Existing coverage retained | All65 prior browser and70 prior unit tests; fiscal fixtures, route/history/state, ledger filters/sort, source dialog, guide, extraction and exact exports |
| Foreground/background contrast | **13 semantic pairings pass**; text minimum5.39:1, meaningful graphic edge minimum3.82:1; [measurements](contrast.json) |
| Untouched views | **12/12 pixel-identical** at1440/390: Rule Shift, Evidence Gap, Awards, Policy, Funds, ARP; [record](UNCHANGED_VIEWS.json) |
| Scientific diff | No changes to `src/domain`, `data`, or official product documents. Fiscal engine remains BigInt. No new primary-source inspection claimed. |
| Fresh code/visual review | No scientific/scope defects. Mobile focus-order finding corrected and covered. |

Red/green evidence: new unit test first failed for absent missing-input inspection; existing navigation regression caught collapsed analytical links; new320px/200% test failed for inherited logo overflow then passed after the correction. [Execution decisions](DECISIONS.md).

## Hallmark: rendered results and disposition

Actual command:

```sh
HALLMARK_PUPPETEER=/tmp/eft-design-audit CHROME_PATH=/usr/bin/chromium \
node .agents/skills/hallmark/scripts/sloplint.mjs src --scope app \
  --url 'http://127.0.0.1:4173/#puzzle' --json
```

[Raw output](HALLMARK.json): **6 FAIL /7 REFLEX /24 WARN**, render ran successfully with five captures and zero render errors. **Not a clean automated pass.** Fixed the actual navigation link contrast defect found in the first render; final render has no contrast FAIL in Puzzle.

| Finding | Assessment / action |
|---|---|
| FAIL49a ×4 | Narrow navigation links wrap to two readable lines. Intentional compact left-rail composition; retained full action names, adequate line height/hit area and keyboard access. No clipping; not an actual usability defect. |
| FAIL19,63 | Inherited page-range punctuation in TwoTestDiagram and mandatory footer metadata. Outside Puzzle's visual scope; preserve academic wording rather than claim clean lint. |
| REFLEX7b ×3,22 | Inherited token definitions include white/zero-chroma for light text/hero; not a new white dashboard. Existing Dusk tokens retained. |
| REFLEX39b | Fiscal row buttons exceed a conventional52px control ceiling because direct exact labels and waterfall bars share one target. Meaningful figure interaction; readable enlarged text takes priority. |
| REFLEX49b | Citation wraps; source identity/page locator remains complete. Intentional. |
| REFLEX72 | Geometry check flags a parent with nested figure content. Actual screenshots and overflow checks show no clipped Puzzle content; no forced fixed-height canvas. |
| WARN3,29 | Existing semantic evidence stripes and the one approved smoked-glass photohero. No new glass/stripes added. |
| WARN40,41 | Static checks of inherited skip-link/protocol selectors. Existing Dusk runtime overrides and existing keyboard/browser regressions retained; new Puzzle pairings measured independently. |
| WARN49,F4,F6,F7 | Inherited rich controls, wrapped qualified labels and broad static selector heuristics across the whole application. Not authority to restyle unapproved workspaces. |
| WARNF16,F19 | Native browser chrome/inherited four font weights. No new font family or browser chrome redesign introduced. |

These dispositions are review explanations, not suppressed/raw-lint passes. The general marketing-page preference for approximately80 words or no repeated marks yields to scientific disclosure and20 actual equal published records.

## Preservation and limits

Gross/deductions/residual/pool,20recipient records, source IDs/pages/years, extraction disclaimer, fixed-base counterfactual, statuses and unavailability semantics are unchanged. No assessment-to-award algorithm, scores, ranks, payments or ecological outcome claims added. Official PDFs/V4 remain unavailable for fresh inspection.

The mobile composition is longer than the prior Puzzle because it now draws all five deductions and preserves full-size award targets plus in-flow inspection. It is not a one-screen mobile summary. This is a visual-review tradeoff, not something passing tests can approve. Other screens intentionally retain existing visual differences until subsequent approval. No first-time-user comprehension study or full assistive-technology audit was performed; keyboard/browser checks do not establish human comprehension or full WCAG certification.

Existing browser tests also refreshed historical QA screenshots and timestamped export samples. Those are QA artifacts, not changes to research data. The CSV sample's line endings were normalized in the artifact only.

**Stop here: approve or revise the rendered Puzzle before applying this system to Rule Shift, Evidence Gap or detailed workspaces.**
