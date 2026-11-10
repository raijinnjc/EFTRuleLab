# Checkpoint C execution record

Plan: docs/superpowers/plans/2026-11-09-checkpoint-c-release-readiness.md. Existing checkout is isolated under AGENTS.md; no worktree created. Inline implementation with one fresh final review.

Step1 gate passed expert assessment; user conditionally authorized consolidation when no material story issue was found. Preserve approved story rather than ask for a redundant design approval. Shared alias surface and contextual composition are engineering choices within the approved Dusk Precision design.

Pre-flight: Task1 produces tool surface/context DOM consumed by Task2 tests/captures. Preserve all IDs, handlers, values and source actions; no shared-interface conflict identified.

TDD: three new targeted browser regressions failed on baseline: tool/dialog surface, contextual Policy source/amount and bounded source register. Existing75units passed; strict baseline build passed. Full78 browser cases retained for final run. New all-tool enlarged-text case adds coverage beyond the story-only five-width test.

Confirmed enlarged-text defect: Sources at320px/200% had a518px document. Browser geometry isolated the two labels/input/select at454px intrinsic width inside a narrow implicit grid track. Set explicit minmax(0,1fr) inspector/control tracks and min-width:0 on their labels. No page overflow clipping was used to conceal it.

Rendered axe-core4.14.0 at26desktop/mobile route/dialog states found two target-size flags on narrow proportional chart segments (Puzzle7%, Rule Shift7%). Their equivalent full-size native controls are already present on the same page; WCAG2.5.8's Equivalent exception applies. Retain truthful proportions and all original segment interactions; document raw findings and verify the alternative controls explicitly. Do not inflate segments or suppress the audit rule. Some color-contrast/ARIA results require manual review; no complete accessibility certification is claimed.

Policy provenance defect: SVG focus/hover sets inspected.year without committing global ruleYear. The old source disclosure used global selected rule, so a FY2021 amount could show S1 instead of S2. Context now uses inspectRule.provenance. The regression verifies FY2021 Formula Rp837,289,920, S2 title/pages11–12 and unchanged global2022 choice.

Product code preserves all handlers/values. Source list removes only duplicate official-title text when identical to the visible heading; all full titles remain in source details and missing titles stay explicitly unavailable. Register/table scrolling is local, keyboard focusable and fully expanded for print. Required record limitations remain visible.

Fresh review: no Critical issues; Important raw Funds caption overflow at320px/200% and Minor S1/S2 action adjacency. Both new browser regressions failed first. Extended emergency wrapping to figcaption; explicitly laid out the source action container. Source spacing is part of the user's requested citation-presentation consolidation, so corrected within the same final fix pass. No research narrative, amount or handler changed. A second dispatched reviewer was interrupted when the original result arrived; no duplicate review was performed.

Performance:36before/36after4×CPU samples retain workspace/source rAF scheduling regressions. Normal-speed follow-up12samples has no long tasks and medians6.33–9.48ms script,16.7–16.8ms rAF p95 for those two interactions. No blanket speedup or dropped-frame claim. Existing static hero blur/motion architecture retained because no trace established it as cause; low-end-device validation remains a limitation.

Review spacing assertion initially sampled the two bounds in separate Playwright calls during the workspace's280ms translation, yielding7.9609375px for a real8px gap. Both bounds are now measured atomically in one browser evaluation, preserving the8px threshold and normal-motion coverage. No CSS/application change was made for this test timing issue.

Manual axe incomplete review identified three aria-label attributes on generic div figures (Rule Shift comparison/redistribution and the two-test diagram). Added a failing semantic-group regression, then explicit group roles; no content, chart behavior or calculations changed. These audit follow-ups are included in the final production build and full suite. Remaining incomplete contrast items predominantly concern obscured/offscreen scroll records, hero photo treatment and symbolic characters; retained for honest manual scope reporting.
