# EFT RuleLab — Dusk Precision Motion

Motion preserves the approved composition. It communicates a newly active workspace or selected evidence; it never simulates financial change. Implemented with CSS and one small cancellable WAAPI hook, no new dependency.

| Token | Value | Use |
|---|---|---|
| `--motion-micro` |140ms| Small control feedback, source closing |
| `--motion-chart` |210ms| Selected mark/underline emphasis, inspector update |
| `--motion-workspace` |280ms| Workspace/chapter entrance, source opening |
| `--motion-ease` |`cubic-bezier(0.22, 1, 0.36, 1)`| Shared deceleration |
| `--motion-enter-offset` |8px| Entrance displacement only |

Declared centrally in src/styles/motion.css. Computed CSS durations may be serialized in seconds by Vite; motionDurationMs handles both units, covered by unit and production browser regression tests.

## Navigation and visibility

Native hidden changes immediately and outgoing tools remain mounted. Newly visible workspaces/chapter panels enter from8px below with restrained opacity for280ms, using only transform/opacity. No outgoing workspace animation, overlapping tools, fake loader or delay before URL/state/focus changes. No remount/key trick that would reset filters, assessment disclosures or analytical selections.

App is the only route scroll owner. Plain unmodified same-document research links push the hash immediately without native anchor scrolling, then coordinate one scroll. Modified/external/local-detail/skip links retain their native behavior. Back/Forward are native history entries with existing hash listeners. Initial deep links and reduced-motion navigation scroll instantly; ordinary route navigation and guided steps use native smooth scrolling. Browser smooth scrolling uses its own duration/easing, is interruptible, and is not forced into the280ms CSS token. A short-lived watcher finishes at the target instantly if reduced motion is requested mid-scroll; scrollend, new navigation, unmount or user input releases the watcher. Same-route chapter/home actions scroll and focus without adding history; the current directory action retains its Navigation focus return. History scroll restoration is manual while App is mounted to avoid a competing browser restore; its previous setting is restored on unmount.

## Analytical selection

Pressed state, exact values, missing-record semantics and source identity update synchronously. The inspector briefly emphasizes its new content using a3px translation and opacity for210ms; old content is never retained/cross-faded. Rapid updates cancel the prior effect; changing reduced-motion preference cancels an effect in flight. Same selection does not replay the effect, initial rendering does not animate the inspector. Hidden inspectors do not animate.

Award marks keep identical dimensions. Selected-state rings/color changes are small control paints, never geometric resizing. Rule underlines fade; keyboard focus underline/ring appears immediately. Chart hover uses bounded opacity instead of brightness filters. No bar widths, SVG geometry, monetary text, numerical counters or data values interpolate.

## Source dialog

Use native showModal/close and Escape. Opening may move8px/fade for280ms. Closing immediately calls native close, marks the dialog inert and aria-hidden, and returns focus without a second scroll; a140ms CSS discrete display/overlay transition retains only the visual exit. Fast reopen restores native modal focus, removes inert/ARIA hiding, and reverses the transition. Unsupported CSS browsers keep immediate native closing. No timers retain a closed dialog in the accessibility tree.

## Performance and accessibility

No global will-change, persistent animation loop, animated blur or layout-property animation. The one approved static hero blur is retained; no profile establishes it as the analytical bottleneck. Immutable source catalog/context callback and stable memoized React view boundaries avoid unrelated hidden-tool recalculation; local state is preserved and context-driven active headings still update.

Reduced motion disables CSS entrances, transitions and native smooth scrolling, including dynamic preference changes. Focus remains visible; exact input tables may scroll locally. Original P0/browser/200% text tests remain. Chromium emulated mobile is tested; Safari/hardware performance is not claimed where the engine/device is unavailable.

Profile method, raw traces, before/after recordings and limitations live in docs/qa/motion/. A functional test pass is not a subjective motion-quality verdict.
