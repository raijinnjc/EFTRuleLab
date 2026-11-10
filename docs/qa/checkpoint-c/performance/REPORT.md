# Chromium interaction/rendering measurements

Actual production Chromium traces and metrics, before/after,1440/390 viewport widths ×1000high, three repetitions per interaction,4×synthetic CPU throttle,600ms observation windows. Six representative interactions give36samples per version. Raw measurements and compressed DevTools traces are retained in [before/](before/) and [after/](after/). No simultaneous browser-suite or screenshot load during measurement.

Values below are medians across six samples. They are **not INP**, GPU presentation times, or direct handler latency. rAF p95 is a scheduling-interval proxy, not measured dropped frames. Shared cloud execution and three repeats limit inference.

| Interaction | Script ms before→after | rAF p95 ms before→after | Long tasks before→after, six runs |
|---|---:|---:|---:|
| Chapter navigation |61.70→59.48|16.80→16.80|6→7|
| Ledger filter |37.72→27.48|16.70→16.70|1→0|
| Policy selection |25.67→23.68|16.75→16.80|2→0|
| Source close |22.57→25.16|16.75→16.75|0→1|
| Source open |49.42→43.89|16.80→25.05|6→7|
| Workspace entry |49.83→77.81|16.80→33.30|7→6|

[Complete comparison](comparison.json) includes layout/style medians. The regressions are deliberately retained. Policy selection now emphasizes its exact contextual inspector; layout/style work increased. Workspace composition and source-dialog restyling have costs under throttle. No evidence establishes hero blur as their cause: it remains confined to the inactive introduction, and no blur/filter animation was added. No new animation library, global will-change or numerical/proportion tween.

To distinguish artificial-throttle sensitivity from a confirmed ordinary-use stall, a separate **normal CPU** follow-up tested only workspace entry/source opening:12samples, three repeats per interaction and viewport. [Raw evidence/traces](followup/).

| Interaction | Width | Median script ms | Median per-run rAF p95 ms | Long tasks, three runs |
|---|---:|---:|---:|---:|
| Workspace entry |1440|9.48|16.80|0|
| Workspace entry |390|8.33|16.70|0|
| Source open |1440|8.48|16.70|0|
| Source open |390|6.33|16.80|0|

No ordinary-speed long task was confirmed in that limited follow-up. This does not erase the4×regression, establish performance on slow hardware/Safari, or justify claiming every interaction became cheaper. Low-end-device validation remains a release-owner consideration.

The existing140/210/280ms motion tokens,8px entrances, synchronous URL/state updates, reduced-motion handling and one-scroll-owner system remain. New Policy inspector feedback reuses the existing cancellable selection hook. Exact financial outputs update immediately; no fictional value animation, loader or delayed navigation was introduced. Layout-shift entries include deliberate user-action geometry and are retained in raw records, not presented as a CLS score.

Reproduce with a local production preview running and Chromium installed:

```sh
node scripts/profile-release.mjs before
node scripts/profile-release.mjs after
node scripts/profile-release.mjs followup
```

Use different checked-out builds for before/after; these labels do not switch Git automatically. Decompress `.trace.json.gz` and load in Chrome DevTools Performance for inspection. No physical device, Safari run, GPU dropped-frame claim or real-user smoothness measurement was made.
