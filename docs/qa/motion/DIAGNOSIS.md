# Motion diagnosis — before implementation

Baseline: latest main **ca39c31**, merged PR #10. Production build, Chromium155,1440×1000 and390×1000,4× CPU throttle, three repetitions of nine interactions per viewport (**54 samples**). Raw CDP traces and measurements are in before/. Recordings run separately at normal CPU speed so video encoding does not contaminate timing samples. See scripts/profile-motion.mjs for exact instrumentation.

## Confirmed

- WorkspaceFrame and chapter panels synchronously change native hidden. No entrance/inspector motion exists. This is intentional instantaneous presentation, not itself evidence of dropped frames.
- Chapter navigation records **two instant scrollIntoView calls to research-experience** per interaction: App and ResearchExperience both own scrolling. Anchor fragment scrolling can additionally reposition the browser before those calls.
- Workspace navigation records one instant toolbar scroll. Source open/close use native immediate showModal/close; selection text and pressed state change synchronously.
- Baseline medians across both widths: fiscal-stage script36.24ms; awards36.69; missing requirement44.89; chapter103.12; rule selection116.62; workspace96.62; source open44.33; source close10.78; ledger filter20.63. These are CDP ScriptDuration totals during each600ms observation window at4× CPU, **not handler latency or INP**.
- Chapter/rule selection median rAF p95 approximately25.05ms; most other interactions16.7–16.8ms. rAF gaps and Long Task entries are retained per sample. This establishes main-thread stalls under synthetic throttle, not a measured GPU dropped-frame count or real-device claim.
- App state changes re-execute hidden tools because their React component boundaries are not memoized. Rule selection updates App and all eight mounted workspace elements; the hidden Puzzle/Evidence Gap also execute. The trace confirms expensive script work; component re-execution follows directly from the component tree (no fabricated React Profiler timing).
- SourceProvider recreates its context callback on each selected-source update, invalidating all source-button consumers. sourceEntries also rebuilds its immutable catalog on every source opening.
- Selection/ledger changes produce Layout Instability entries, many marked hadRecentInput. Inspector text naturally changes height; ledger filtering removes rows. They must not be reported as a page CLS score. Exact per-sample entries are retained.

## Suspected / deliberately not changed without evidence

- The one approved hero panel uses22px backdrop blur. It is static and confined to the photographic intro, hidden in the measured analytical routes. No evidence here establishes it as the bottleneck; retain its appearance and do not animate its filter.
- Rule chart hover uses brightness filters. It paints only small segments; traces do not isolate its cost. Replace the hover filter with lightweight opacity feedback as a motion consistency choice, not a claimed benchmark win.
- Inspector height differences are real content differences. Do not reserve arbitrary new layout space or animate height to hide them.
- GPU dropped frames, Safari performance and real-device mobile responsiveness have not been measured. Chromium mobile viewport emulation is not Safari or hardware testing.

## Implementation decision

Use CSS finite entrances for newly visible workspaces/chapters, native smooth scroll only for user route transitions, one scroll owner, and a small cancellable WAAPI emphasis for inspector content. Native hidden remains immediate for outgoing panels; no exit overlap and no delay before URL/state/focus updates. Source dialog uses progressive CSS discrete display/overlay transitions with immediate inert/ARIA closure and native focus restoration; unsupported browsers retain immediate native closing. Memoize only immutable/view boundaries implicated above. No animation library, counters, bar growth, geometry animation, new blur or global will-change.

## Implementation findings

New behavior tests failed against baseline for duplicate instant chapter scrolling, absent inspector emphasis and absent inert dialog-exit semantics. A production-build regression then caught CSS token minification (`210ms` → `.21s`) being parsed as0.21ms. Added unit coverage for both time units and corrected conversion; the four focused production motion tests now pass. Reduced-motion behavior was retained rather than newly invented.

The first video attempt found Playwright's private FFmpeg path absent, despite system /usr/bin/ffmpeg being installed. Used a temporary /tmp/eft-playwright/ffmpeg-1013/ffmpeg-linux symlink to that installed binary and PLAYWRIGHT_BROWSERS_PATH=/tmp/eft-playwright; no repository/runtime dependency installation or environment publication. Recordings were then completed separately from profiling.

## Fresh review and corrections

Fresh code review found that intercepting current-route links suppressed their existing target/focus behavior. Reproduced with a failing test, then added coordinated same-route focus/scroll without pushing a duplicate history entry. The current workspace-directory action deliberately keeps its existing focus return to Navigation.

A second test reproduced a smooth scroll continuing when reduced motion changed mid-flight. Added a short-lived scroll watcher: finish instantly at the target on a reduction request, release listeners on scrollend, new navigation, unmount or user interruption. No recurring JavaScript animation loop. A follow-up trace showed Chromium delivers matchMedia's change event asynchronously after the emulation command returns; the test now waits for that event before measuring whether scrolling has stopped. Event recording confirmed instant scrolling occurs in that same change handler, not after an animation delay.

The first final comparison also exposed a genuine avoidable cost: fiscal-stage ScriptDuration median36.24→60.23ms and LayoutDuration5.29→31.29ms at4× throttle. The selection hook read root computed styles in useLayoutEffect after each DOM update, creating an avoidable synchronous flush risk; the trace does not isolate that call as the sole cause of the increase. Moved the fixed-theme timing-token read to inspector initialization; interaction animation uses that cached timing. Functional behavior/durations remain covered by the same production tests. Final measurements are rerun rather than presenting the intermediate numbers as final.
