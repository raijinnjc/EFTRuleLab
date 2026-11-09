# Dusk motion and interaction continuity

Baseline: **ca39c31**, latest main including merged PR #10. Branch: `feat/dusk-motion-continuity`. No application layout redesign, research-domain/data/PRD changes, new dependency, merge or deployment.

## Delivered behavior

- Shared140ms micro /210ms chart-inspection /280ms entrance tokens and cubic-bezier(0.22,1,0.36,1), documented in [Motion System](../../design/MOTION_SYSTEM.md).
- One App route-scroll owner. Plain research links update the hash immediately without a competing native fragment jump. Refresh/deep links, Back/Forward, current-route activation and guided-demo routing remain functional. Initial/reduced-motion scroll is instant; ordinary navigation uses interruptible native smooth scrolling.
- Native hidden still removes outgoing tools immediately from display, tab order and assistive technology. Workspaces stay mounted; only newly visible content enters using opacity and an8px vertical offset. No delayed navigation, crossfaded stale screens or artificial loader.
- Fiscal stages, waterfall rows, equal award marks, missing requirements and Rule Shift retain immediate exact-value/pressed feedback. Inspector content gets a short cancellable3px emphasis. Award sizes and financial proportions never animate.
- Native source modal opens/visually closes with a brief transition. Native close/inert/aria-hidden and focus restoration happen immediately; unsupported CSS retains native immediate closing. No delayed accessibility-tree removal.
- Reduced-motion changes cancel inspector effects and finish a pending route scroll instantly. Focus appearance stays immediate. No animation library, geometry/financial-number interpolation, new blur or global will-change.
- Stable React view boundaries, source catalog/callback and cached motion timing avoid unrelated hidden-tool calculations and repeated token reads during selection.

## Before / after evidence

| Viewport | Before | After |
|---|---|---|
| Desktop1440×1000 | [Before recording](before/interaction-1440.webm) | [After recording](after/interaction-1440.webm) |
| Mobile390×1000 | [Before recording](before/interaction-390.webm) | [After recording](after/interaction-390.webm) |

Recordings show real production React interactions, not mockups. They run separately at ordinary CPU speed. Playwright records25fps: useful for reviewing continuity, not a60fps performance measurement. The sequence selects a fiscal stage, published award and missing requirement, changes chapter/rule, opens a full workspace, and opens/closes its source. Setup route resets are preserved in the videos.

[Diagnosis](DIAGNOSIS.md) distinguishes confirmed static/interaction behavior from suspected rendering causes. [Performance comparison](PERFORMANCE.md) includes all nine interaction types, gains and regressions. [Detailed comparison](comparison.json) includes each viewport; raw54-sample measurements and compressed CDP traces are in before/ and after/. An intermediate token-read profile is retained separately, not substituted for final evidence.

Benchmarks use production Chromium155 at4× synthetic CPU throttle, three repetitions per interaction at each width,600ms observation windows. ScriptDuration totals are not INP or single-event latency. rAF intervals are not GPU dropped frames; selected headless traces expose no reliable presentation/drop counters. Layout Instability entries include hadRecentInput and are not a measured CLS score. Shared cloud scheduling and small sample counts limit statistical confidence. Safari/physical mobile hardware was unavailable.

## Verification

Final executed results: **74 unit tests passed** across8files ([log](unit-results.txt)); **strict TypeScript/Vite production build passed** ([log](build-results.txt)); **74 production Playwright tests passed** in2.9minutes ([log](browser-results.txt)). The existing68 browser /71 unit tests remain; motion adds6 browser /3 unit cases. Six focused production motion tests also passed ([log](targeted-results.txt)).

At4× CPU throttle, median600ms-window script work for chapter navigation changed103.12→53.92ms, rule selection116.62→62.24ms and workspace navigation96.63→51.97ms. Fiscal-stage selection increased36.24→54.41ms; source close10.78→22.99ms. All gains/regressions remain in PERFORMANCE.md. These are bounded synthetic samples, not a universal speed or60fps claim.

Recordings were inspected through extracted desktop/mobile frame sequences; no blank intermediate workspace or changed monetary proportions were introduced. Confirmed25fps,12.08/12.36seconds for desktop before/after and11.80/11.84seconds mobile before/after. Browser performance timings were collected separately.

New cases cover a single route scroll, immediate hidden state, finite entrances, exact inspector content/duration/cancellation, source inert close/reopen/focus, preference changes, and same-route history/focus. Original cases cover P0 arithmetic/evidence/source integrity, all detailed workspaces, filters/sorting, rule/extraction/export synchronization, demo, Back/refresh, five responsive widths,200% text and keyboard navigation.

Fresh review found two navigation edges; both were reproduced and fixed. Review details, production CSS time-unit conversion and computed-style investigation are recorded in DIAGNOSIS.md. No deferred review findings. Scientific diff check confirms no changes in src/domain/, data/, official docs/product/, package.json or package-lock.json. Existing browser tests refreshed historical QA screenshots and timestamped export examples; those are verification artifacts, not source-data changes.

## Limits and deliberate choices

- Natural inspector height changes and ledger row removal are retained. No height animation or arbitrary new layout reservation was added. Motion does not erase real content changes.
- Native smooth scrolling uses browser timing, not an artificial280ms JavaScript scroll loop. A finite watcher is released at completion/interruption; no always-running production frame loop.
- The one approved hero backdrop blur remains static. The analytical profile does not establish it as the bottleneck; its removal would change the approved visual treatment without evidence.
- Some local interaction script costs can increase when emphasis/paint is added; all final numbers are reported rather than selecting only improvements.
- No Safari/WebKit engine was installed in this environment. Native/CSS fallback is designed, not claimed browser-tested there. No public preview deployment or environment publication was performed.

## Reproduce

```sh
npm ci
npm test
npm run build
npm run test:browser
npm run preview -- --host 127.0.0.1 --port 4173 --strictPort
```

With that production preview running, `node scripts/profile-motion.mjs before` or `after` records traces/timings and videos; run on the corresponding baseline or feature checkout. For recording in this environment, the existing system FFmpeg was exposed through a temporary Playwright cache (see DIAGNOSIS.md), using `PLAYWRIGHT_BROWSERS_PATH=/tmp/eft-playwright`. No app package was added. `node scripts/summarize-motion.mjs` creates the comparison. Do not profile concurrently with tests/build/video encoding; the script records its videos after timing samples complete.

For Chromium DevTools, decompress a .trace.json.gz and load the JSON in Performance. Only marked interaction windows correspond to recorded user actions; setup and warmup also appear in the trace.
