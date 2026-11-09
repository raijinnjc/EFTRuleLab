# Final UX consolidation — actual React application

Date:9 November2026 (Asia/Jakarta). Branch `feat/focused-research-workspaces`, parent `e59c7c0` (main, merged graphical PR #8). No new theme, research feature, financial calculation, dataset or evidence finding.

## What changed

Puzzle, Rule Shift and Evidence Gap are now the complete primary graphical interface. The permanently stacked Research Workbench has been removed from the visible page. On a graphical route, all8 detailed tool frames are hidden. Opening a tool hides the graphical scenes and displays exactly one focused workspace.

Detailed components remain mounted so filters, selected rules, chart display settings, native disclosures, ARP selection, experiment state, source queries and export snapshots survive navigation. This is production React routing/visibility, not a screenshot-only mockup or test-only mode.

Explicit actions open the full allocation, fiscal envelope, published awards, extraction experiment, ARP workflow, evidence records and audit exports. A small header directory provides all legacy destinations on demand. A return toolbar leads back to the most recently invoking graphical scene and stays visible when a tool opens, including on mobile. The photo appears only on the overview; logo, fonts, slate/bone/periwinkle/apricot and attribution remain unchanged.

The20-row ledger remains complete and source-linked, but now scrolls locally with sticky column headings instead of lengthening the whole page. Full and filtered totals remain distinct. Printing removes this screen-only height limit.

## Before-implementation affected-interaction inventory

The full inventory was recorded before product changes in [the implementation plan](../../superpowers/plans/2026-11-09-focused-workspaces.md). Every existing P0 interaction was mapped:

| P0 | Focused home / preserved interaction |
| --- | --- |
|F01|`#overview`: photo, required headline, research terms, independent context, exact baseline/disclaimers |
|F02|`#policy`: rule/component selection, Rp/% labels, reset, exact table, deltas, fixed-base assumption, derivation and provenance; shared selected year still reaches graphical comparison and exports |
|F03|`#funds`: exact/billion display, gross waterfall, five deduction disclosures and sources, distinct residual split/table |
|F04|`#awards`: all20 records, village/kecamatan search, kecamatan filter, all sorts, empty state, exact filtered/full totals, selectable complete ledger, source links; local scroll retains all records |
|F05|`#verification`: both independent tracks, all inspectable nodes, exact source inputs, missing records, transcript and qualifiers |
|F06|`#extraction`: opt-in/restore, isolated wrong-versus-verified values, exact mismatch, immutable baseline and mandatory government-error disclaimer |
|F07|`#protocol`: all8 steps, SVG/native alternatives, selected step/context, proposed roles, withheld roster, outcome definitions and printable transcript |
|F08|`#sources` and contextual inspector: full categories/query/relationships, locators/pages, inherited hashes and limits, safe links, citation copying, modal containment/Escape/visible focus restoration |
|F09|Global demo entry:5 target workspaces, Previous/Next/Exit, arrows/Escape/progress/no timers, preserved analytical state, origin route and entry-focus restoration; browser Back/manual departure exits the active tour without a hidden panel |
|F10|`#exports`: real JSON/CSV/Markdown, selected rule/experiment, exact monetary strings, all20 immutable recipients, provenance/missing limits/version/timestamp, copyable fallback and citations |
|F11|Single visible workspace, meaningful page heading, public hash deep links/reload/history, preserved local state, nearby menu, source focus,320–1440 reflow,200%text/reduced motion, keyboard-accessible table-local scrolling |

The existing graphical routes `#puzzle`, `#rule-shift`, `#evidence-gap` and all legacy tool hashes continue working. `#main` remains a skip-link target without changing the active view. No test-only all-tools route exists.

## Validation

- **70 unit/presentation/integrity tests passed**, including the new route-classification test. [Actual unit output](UNIT_TESTS.log).
- **65 production Playwright tests passed**: all50 previous tests plus15 consolidation regressions. [Actual browser output](BROWSER_TESTS.log).
- **Strict TypeScript/Vite build passed**. [Actual build output](BUILD.log).
- Original browser tests retain their substantive assertions; setup now explicitly opens each public workspace instead of assuming simultaneous visibility. For example, Policy/Funds/Awards are inspected sequentially; export tests select policy, activate extraction and then open Exports; source/verification assertions navigate to the requested tool. No forced visibility, removed tests or weakened fiscal checks.
- New regression coverage includes: absent stacked tools; all8 deep links and refresh; one visible frame; filter/rule/experiment/export persistence; all5 demo destinations and exit restoration; return-scene focus; browser Back from source dialog and demo; five responsive widths; same-route menu focus; complete ledger keyboard scroll; mobile return-link visibility.
- Existing keyboard, source-modal containment,200%text, reduced-motion, exact downloads and fallback checks still run. Styling/printing follow-up explicitly verified that ledger print max-height is none and overflow visible.

## Debugging and review record

New classifier test first failed because the module did not exist; the no-stack browser test then failed against the original interface as intended. After implementation,70unit/54browser/build passed. Expanded focus/history/responsive checks passed63 tests. A fresh read-only review found one Important issue: activating the directory link for the already-open tool left focus on BODY because no hash event was emitted. Reproduced with keyboard and corrected to restore Navigation focus; regression retained. No other concrete P0/state/demo defects found by reviewer; reviewer browser startup itself was sandbox-blocked, so browser evidence above comes from the executed primary suite.

Visual inspection then improved the full ledger's page length without removing records, giving64 passing checks. A mobile return toolbar could be partly above the viewport (observed top−121px); navigation now scrolls the toolbar into view while focusing the heading without another scroll. Final suite65passes. Noninteractive destination headings are programmatically focusable and announced without decorative focus boxes; all interactive controls retain visible keyboard focus.

No original research dataset, source manifest, fiscal engine, evidence-status model or PRD content changed. Test runs refreshed existing screenshot/export sample paths; those generated artifacts are retained rather than discarded.

## Actual application screenshots

| View | Desktop | Mobile |
| --- | --- | --- |
|Graphical Puzzle, no workbench below|[Full page](puzzle-1440.png)|[Full page](puzzle-390.png)|
|Published awards, focused tool|[Full page](awards-1440.png)|[Full page](awards-390.png)|
|Awards entry viewport|[Viewport](awards-focused-1440.png)|[Viewport](awards-focused-390.png)|
|Guided demo opening Funds|[View](demo-1440.png)|[View](demo-390.png)|
|On-demand tool directory|[View](directory-1440.png)|[View](directory-390.png)|
|Source inspector|[View](source-open-1440.png)|[View](source-open-390.png)|

Additional focused Policy/Funds/Awards/ARP/Sources/Exports full-page screenshots are stored for320/390/768/1024/1440. Desktop and mobile rendered views visually inspected. [Render checks](RENDER_CHECKS.json) record custom focus, ledger clipping boundary and print behavior. These are actual application renders, not conceptual mockups. No formal screen-reader/cross-browser or timed comprehension study is claimed.

## Rendered Hallmark audit

The graphical view and all8 detailed workspaces were rendered separately. Raw per-route `HALLMARK-<route>.json` and [audit summary](AUDIT_SUMMARY.json) preserve exact counts. Static findings repeat between routes; counts must not be summed as unique defects. The initial test-managed server stopped during one Exports capture; that failed capture was rerun on the persistent preview. The final audit rejects operational render failures rather than treating them as a pass.

Common retained findings:

- FAIL19 / FAIL63: accurate source page-range punctuation and mandatory independent-research disclaimer. Scientific wording remains authoritative.
- FAIL49a in Policy/Extraction: descriptive reset/extraction labels reflow at320px. Readable full text and touch/keyboard operation take priority over a generic single-line-control rule.
- FAIL26a in Policy/ARP: checker looks for focus on SVG rect/group itself, while the implemented indicators are a visible sibling underline or descendant dashed circle. Real keyboard renders and computed styles confirm `underline:visible` and `2.5px / 3px,2px` dashed stroke; native full-size alternatives remain. [Policy focus](policy-keyboard-focus.png), [ARP focus](protocol-keyboard-focus.png).
- FAIL73 in Awards: geometric overlap heuristic includes rows clipped inside the scroll region. Actual region bottom and qualification top have a24px gap at desktop and mobile, with no rendered overlap; screenshot and RENDER_CHECKS.json retained. No row is painted over the research limitation.
- REFLEX7b/22: approved Dusk white/neutral tokens. REFLEX39b: context-rich stage/ARP targets exceed generic button-height range. REFLEX49b: full source links may wrap. REFLEX72: long/scroll-contained descendant geometry; tested pages do not globally overflow.
- WARN3: semantic evidence/tour/selection markers. WARN29: approved single hero glass panel. WARN40: static base selectors are overridden by explicit contrasting Dusk skip-link/primary/active rules. WARN41: existing slate panels inherit light text. WARN49: explicit action labels reflow. F4: sorting/selected protocol controls are not promotional primary actions. F6: tabular figures inherited by monetary text. F16: platform selection/scrollbars retained. F19: analytical emphasis retains the existing weight hierarchy.

This is **not a clean Hallmark pass**. Real usability/focus/visibility defects were fixed with regression evidence; scientific copy and verified custom focus/scroll behavior are documented exceptions.

## Working acceptance preview

Actual loopback app: `http://127.0.0.1:4173/#puzzle` (workspace browser only, not a public deployment). To reproduce: `npm ci`, `npm run build`, `npm run preview -- --host 127.0.0.1 --port 4173 --strictPort`. Or `npm run dev -- --host 127.0.0.1`.

Review: open Puzzle, inspect an award/source; open Published awards, filter, open another workspace and return; compare a rule then export it; complete/exit the demo; use browser Back from an open source inspector; confirm one visible workspace and exact evidence boundaries throughout.

No merge or deployment. Git delivery details recorded after push.

### Final per-route rendered counts

|Route|FAIL|REFLEX|WARN|Render|
|---|---:|---:|---:|---|
|puzzle|2|7|21|ran|
|policy|4|5|21|ran|
|funds|2|4|21|ran|
|awards|3|4|21|ran|
|verification|2|7|21|ran|
|extraction|3|4|21|ran|
|protocol|3|5|21|ran|
|sources|2|5|21|ran|
|exports|2|4|20|ran|

All nine captures completed with no operational render failure. Findings are dispositioned above; these are not nine independent clean-pass claims.
