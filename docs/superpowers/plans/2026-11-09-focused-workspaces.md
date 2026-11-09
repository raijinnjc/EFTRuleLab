# Final UX consolidation plan and affected-interaction inventory

Parent origin/main e59c7c0 (merged graphical PR #8). Actual React implementation; no new theme/research features.

## Before-implementation P0 inventory
- F01: photo/attribution/headline, research terms, independent PASS/INCOMPLETE baseline.
- F02: shared rule/component selection, exact/% chart labels, reset, tables/deltas, derivation/provenance. Graphical selected year must reach full tool and exports.
- F03: fiscal display switch, exact table, all five deduction sources and separate scales.
- F04: search/kecamatan filter, all sort keys, empty state, filtered/full totals, copyable20-entry ledger; returning to Awards must retain all.
- F05: both independent verification tracks, all disclosure nodes, source links and transcript.
- F06: opt-in extraction/revert, immutable baseline, exact gap and required disclaimer; active state survives navigation/export.
- F07: all8 ARP steps, selected step/context, proposed roles, outcomes, printable transcript.
- F08: categories/query, source claims/locators/hashes/inspection limits, dialog keyboard containment, Escape/opener focus and copyable citations.
- F09: global entry,5step Previous/Next/Exit, keyboard arrows/Escape/progress, no timers; opens each target workspace and restores start location/focus on exit without resetting state.
- F10: JSON/CSV/Markdown, complete immutable ledger, selected rule/experiment, exact money, versions/timestamp, provenance, fallback/copy.
- F11: one visible workspace, semantic heading, old hash links/history/reload, focus on navigation, source inspector,320–1440,200%text/reducedmotion and local table scrolling.

## Architecture
Mounted hidden workspace frames preserve local React state. A single hash-driven route owns visibility. Main graphical scenes remain mounted and are shown only on graphical routes. The photographic introduction appears only on overview. Detailed components retain original IDs. Header has a nearby optional tool directory, never a permanent stacked workbench. Explicit actions in scenes open the corresponding frame; back actions return to the invoking graphical scene. Source dialog closes on route change and restores focus to a visible trigger or active heading. GuidedDemo uses the same route controller, remembers its origin and owns tour focus.

## Execution
1. Write failing visibility/deep-link/history/state/demo regressions. Unit-test route classification.
2. Implement route context/frames, scene actions, compact header directory and focused workspace toolbar; no monetary/data changes.
3. Route-aware guided demo and source focus. Preserve all original tests/assertions; migrate only setup/navigation assumptions where stacked visibility is intentionally removed.
4. Run full unit/build/Playwright suites; render desktop/mobile graphical/workspace/demo/source states; Hallmark audit with dispositions; document every failure/fix and preservation matrix; commit/push review branch without merge/deploy.

Review focus: browser Back during source dialog/demo; returning from a hidden workspace must preserve filters/disclosures; menu focus near its trigger; unknown/legacy hashes; stateful exports; no hidden focus/blank view. Existing tests may navigate explicitly to each workspace, never force visibility or use a test-only all-tools mode.

## Execution ledger
- Before product changes, complete P0 interaction inventory above recorded. Missing route classifier observed RED; new no-stacked-workbench browser acceptance failed against original application as intended.
- Route classification/frame/context implemented. Existing components remain mounted; visibility driven by public hash routes, without a test-only all-tools mode. Header directory stays near trigger. Photo shown on overview only.
- Guided demo uses route controller, remembers origin, opens each target workspace, closes on manual/browser history departure, restores origin/start focus on exit. Source dialog closes on route change; hidden opener falls back to visible heading. Return action remembers invoking graphical scene. Graphical/workspace headings adapt semantic level.
- Existing50browser tests retained with public workspace-navigation setup where simultaneous stack assumptions no longer apply. No assertions/test removal. First70unit/54browser/build passed.
- Fresh read-only reviewer found same-route directory selection lost focus to BODY. Reproduced using keyboard; added regression and returns focus to Navigation. Expanded63browser tests passed, including return-scene/source-dialog/browser-back/demo/five-width checks.
- Visual refinement: programmatic noninteractive heading focus does not draw a box; keyboard-interactive focus remains. Full20-row ledger now scrolls locally with sticky header, unchanged records and source columns. Final extra ledger keyboard regression brings suite to64.
- Final64browser run passed including ledger keyboard scroll. Manual mobile check found return toolbar partly above viewport (top−121px); navigation now scrolls toolbar into view while focusing heading without scrolling. Added explicit return-link viewport regression; final suite65tests.
- Root + all8detailed workspaces each rendered through Hallmark, not merely static checks of hidden content. Multi-route raw JSON and summary retained. Final70unit/build passed; final65browser run pending.
- Delivery complete:70unit/65browser/strictbuild pass. All9 rendered audits completed on persistent preview; scientific copy, custom SVG focus and clipped-scroll geometry exceptions documented with screenshots/DOM evidence. Code pushed69ebb57; PR API returned GraphQL Forbidden, manual compare recorded. No merge/deploy or environment publication.
