# Final rendered Hallmark audit and dispositions

Actual command: `HALLMARK_PUPPETEER=/tmp/eft-design-audit CHROME_PATH=/usr/bin/chromium node .agents/skills/hallmark/scripts/sloplint.mjs src --scope app`, with twelve `--url http://127.0.0.1:4173/#<route>` arguments for overview, Puzzle, Rule Shift, Evidence Gap and all eight tools. Source tree34files; render ran and produced60captures, retained in [hallmark-shots/](hallmark-shots/).

Raw final result: **50 FAIL /21 REFLEX /36 WARN**, no automated waivers. [Full JSON](HALLMARK.json). **Not a clean automated pass.** Manual interpretation below does not change raw grades. User research/approved-copy requirements take precedence over marketing-layout heuristics.

## FAIL findings

| Gate | Count | Evidence and disposition |
|---|---:|---|
|49a|45|Precise question/action/record labels wrap at narrow widths and in contextual columns. Retain readable wording rather than truncate or force nowrap. All-tool five-width/200% reflow and within-figure containment pass. This is an intentional research/readability exception.|
|15|1|Static selector association mistakes the award pseudo-element's selection-shadow transition for the actual focus indicator. Real controls use instantaneous outlines; the shadow animation does not replace them. Existing keyboard/reduced-motion suite is retained.|
|19|1|An inherited em dash joins missing-record name and status in the detailed transcript. Cosmetic punctuation is retained; not a research or usability defect.|
|26a|1|Policy SVG controls use an adjacent visible2px underline instead of a rectangular halo on each rect. The linter inspects the rect alone. [Actual focus evidence](RENDER_DISPOSITIONS.json) confirms `:focus-visible`, visible dark-periwinkle stroke; [focused screenshot](after/policy-keyboard-focus-1440.png).|
|73|2|The linter compares offscreen clipped ledger/source text with following notes as though those records were painted outside their scroll regions. Actual measured gaps are16px after the ledger and32px after source records, with no box overlap. Scroll regions intentionally clip offscreen records, remain keyboard focusable, retain all records and expand for print. [Bounds](RENDER_DISPOSITIONS.json).|

## REFLEX / WARN dispositions

- **7b/22:** legacy white/zero-chroma aliases are overridden by approved Dusk/bone theme blocks. No new pure-white palette introduced.
- **25:** source-context prose can use up to85ch, and a small technical note can be longer than marketing-copy guidance. Exact disclosures are not cut to meet a word/measure heuristic. Human acceptance of density remains pending.
- **39b:** analytical row and methodology controls contain values/status/context and deliberately exceed a short-button height. Native/full-size targets remain accessible.
- **49b/49:** source references, chapter labels and exact research actions wrap intentionally. Local table scroll is explicitly documented.
- **72:** below-fold or scroll-container content produces negative viewport-edge distances; full-page/reflow/figure-containment checks do not establish additional clipping defects.
- **3/29:** evidence selection rules and the one approved hero glass panel are semantic/approved treatments. No broad glass/card system, new photograph or animated blur.
- **40/41:** static declaration analysis misses final Dusk/analytical aliases and inherited ink. Actual solid foreground/background measurements are in [CONTRAST.json](CONTRAST.json); photograph coverage is separately a manual limitation. Rendered axe did not report text-contrast violations; incomplete photo/scroll/symbol checks are retained.
- **F1:** approved straight-apostrophe English question copy retained.
- **F4/F7:** scanned hidden workspaces and different analytical/table functions are not a visible dashboard-card grid. Primary/shared surface and figure/inspector treatment are consistent; ledger/register remain purposefully denser.
- **F6/F19:** tokenized tabular numbers and inherited semantic hierarchy remain. Status/caption selectors are often textual rather than numerical. No new font family or asset.
- **F16:** native browser scroll/selection appearance is retained; no custom chrome needed.
- **F25:** dense ledger/source tables extend horizontally inside labeled keyboard-scroll regions. Full exact monetary/source columns are retained, with explicit narrow-screen instructions, rather than turned into repeated cards or removed.

## Actual defects fixed and visual scope

The initial expert assessment, browser regressions and fresh reviewer found concrete issues: selected Policy provenance mismatch; intrinsic-width source overflow; a raw caption amount escaping its figure; run-together source actions; labels on generic rather than semantic figure containers. All were corrected and verified in the final87-case suite. No such finding is dismissed merely to improve a score.

Inspected actual desktop Policy/Funds/Sources/Evidence Gap/ARP and mobile introduction/Puzzle/Exports/source dialog plus the enlarged320px Funds capture and focused Policy figure. The full gallery includes every experience at both sizes, with all supporting tools tested at five widths/200% text. Not every image was independently reviewed by a second human; first-time-reader comprehension and final visual acceptance remain pending.
