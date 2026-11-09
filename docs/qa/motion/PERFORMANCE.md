# Chromium interaction measurements

Production build, Chromium 155.0.8059.79, two viewport widths (1440/390), height1000,4× synthetic CPU throttle, three repetitions per interaction/viewport.54 samples per version. Same scripts and timing windows. Recordings are separate at normal CPU speed. Raw measurements and compressed DevTools traces are in before/ and after/.

Values below are **medians across six samples**, not INP, not individual handler latency. ScriptDuration covers a600ms observation window. rAF column is the median of per-run p95 intervals; it is not GPU presentation/dropped frames. Three repetitions and shared cloud resources limit statistical confidence.

| Interaction | Script before → after (ms) | rAF p95 before → after (ms) | Long Tasks before → after (six runs) |
|---|---|---|---|
| fiscal-stage | 36.24 → 54.41 | 16.80 → 16.75 | 5 → 5 |
| published-award | 36.69 → 42.33 | 16.80 → 16.75 | 5 → 4 |
| missing-requirement | 44.89 → 40.99 | 16.70 → 16.80 | 5 → 3 |
| chapter-navigation | 103.12 → 53.92 | 25.05 → 16.80 | 11 → 7 |
| rule-selection | 116.62 → 62.24 | 25.05 → 16.80 | 7 → 5 |
| workspace-navigation | 96.63 → 51.97 | 16.75 → 16.80 | 8 → 8 |
| source-open | 44.33 → 49.49 | 16.80 → 16.80 | 6 → 7 |
| source-close | 10.78 → 22.99 | 16.70 → 16.75 | 0 → 2 |
| ledger-filter | 20.63 → 28.91 | 16.80 → 16.70 | 0 → 3 |

The table deliberately retains regressions and variability. Reduced script work in shared-state navigation/rule changes is consistent with stable view boundaries. Motion adds small style/animation costs; no claim that every action became cheaper. Rendering continuity and responsiveness are separate questions.

Detailed viewport values, layout/style durations, rAF gaps and layout-shift entry counts: comparison.json. Layout-shift entries during intended user interaction are retained including hadRecentInput; they are not a measured page CLS score.

The selected headless trace categories did not expose reliable presentation/DroppedFrame counters. No zero-dropped-frame claim is made. No Safari or physical mobile hardware was available; viewport emulation does not establish those performance results.

To inspect a trace in Chrome DevTools Performance, decompress its .trace.json.gz and load the JSON. Each trace also includes setup/reload/warmup outside the marked interaction windows; do not compare whole-trace totals as if all events were user actions.
