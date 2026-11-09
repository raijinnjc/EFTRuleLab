# Rendered Hallmark review — Checkpoint B

Actual production Chromium audits, not a static-only claim:

```sh
HALLMARK_PUPPETEER=/tmp/eft-design-audit CHROME_PATH=/usr/bin/chromium \
node .agents/skills/hallmark/scripts/sloplint.mjs src --scope app \
  --url 'http://127.0.0.1:4173/#puzzle' --json
```

Repeated sequentially for `#evidence-gap` and `#protocol`. Each run rendered five captures, retained in [hallmark-shots/](hallmark-shots/). The temporary audit dependency is outside the application; no package changes.

| Route | FAIL | REFLEX | WARN | Raw result |
|---|---:|---:|---:|---|
| Puzzle | 11 | 7 | 27 | [JSON](HALLMARK-puzzle.json) |
| Evidence Gap | 6 | 7 | 26 | [JSON](HALLMARK-evidence-gap.json) |
| Proposed ARP | 6 | 6 | 27 | [JSON](HALLMARK-protocol.json) |

**This is not a clean automated Hallmark pass.** The checker scans all 33 source files, including hidden supporting tools. Manual dispositions below do not alter its raw grades.

## Findings and dispositions

- **15, focus-ring fade:** static selector association is not the behavior of the selected controls. `precision.css` supplies an immediate outline on the actual button, with `box-shadow:none`; the animated shadow belongs to an award mark's pseudo-element selection indicator. Actual focused award, missing-record and ARP controls have a 2px outline and transitions limited to background, border and color. [Computed styles](current/RENDER_STYLE_CHECKS.json). No focus-visibility defect confirmed.
- **49a/49b, wrapped labels:** retain the approved question labels and precise source/tool descriptions. They wrap deliberately on narrow screens and in Puzzle's navigation column. Forcing nowrap would undermine 320px and enlarged-text reflow. All five widths and 200% text passed. These are explicit readability exceptions, not truncated controls.
- **19, dash in the retained TwoTestDiagram; 63, middle-dot footer:** inherited editorial findings. Neither changes evidence meaning or blocks interaction. Deferred to the approved Checkpoint C consolidation rather than expanding this story-only checkpoint.
- **7b/22, white and zero-chroma base aliases:** inherited tokens overridden by locked Dusk theme aliases. No new palette was introduced. Retained for existing tools; palette cleanup is outside B.
- **39b, large controls:** financial rows and methodological phases contain labels, exact values and/or qualifiers. They are interactive figures, not short marketing buttons. Larger hit areas are deliberate; retaining their contents is preferable to forcing a 40px height.
- **72, negative bottom distance:** the checker sees content below a viewport/scroll container. Full-page renders and responsive checks do not show clipped text or overlapping inspectors. The original real grid overlap was fixed before these captures. No additional padding is added solely to satisfy the viewport heuristic.
- **3, side rules:** retained semantic selection/evidence/tour treatments; no new decorative stripe pattern. **29, glass:** only the approved photographic hero uses smoked glass.
- **40/41, static contrast/inheritance warnings:** these operate on individual declarations without resolving Dusk overrides and inherited theme context. Rendered audits did not produce a contrast FAIL. Computed controls retain dark text on bone/periwinkle and immediate visible outlines. This is not a claim that every possible product state received a new exhaustive contrast measurement.
- **49, long action labels:** intentional research-specific actions, allowed to wrap rather than truncate. **F1, straight apostrophe:** consistent with the approved question copy, no functional issue.
- **F4/F7, recipes:** scanned supporting tables, controls and hidden workspaces have different functions. The primary scenes use one shared navigation, canvas and contextual-inspector grammar. Remaining tool-wide consolidation is explicitly Checkpoint C.
- **F6, numeric selectors:** the list includes text statuses/captions rather than only monetary figures. Exact amounts retain their original formatted BigInt values and tabular display. No source-value animation or numeric truncation was introduced.
- **F16, unthemed browser surfaces:** native selection/scrollbars retained for platform familiarity and accessibility; no new styling required for this checkpoint.
- **F19, four weights:** inherited semantic hierarchy, not additional font families or a typography redesign. Consolidation remains subject to B acceptance.

## Actual visual review

Reviewed real desktop reconstruction, desktop Evidence Gap, mobile hero and mobile ARP captures, plus a frame of the mobile normal-motion recording. Test 1 and Test 2 remain explicitly labeled and independent. Exact comparison is visible earlier on desktop; all twenty awards and five deduction details remain inspectable. Shared chapter navigation stays visible at the route entry position. The source dialog and research limitations remain available.

Fixed confirmed defects during implementation: inherited grid-area overlap, enlarged-text navigation overflow, ambiguous disclosure names, aggregate deduction source attribution and the omitted introductory source action. These are documented in [implementation notes](IMPLEMENTATION_NOTES.md) and covered by regressions.

No user comprehension study, Safari run, new performance profile or fresh primary-PDF verification was performed. The user must accept the narrative and composition before Checkpoint C.
