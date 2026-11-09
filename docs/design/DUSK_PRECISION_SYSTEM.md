# EFT RuleLab — Dusk Precision System

Status: **Step 3 review candidate**, applied only to The Puzzle. PRD remains the authority for research. Original DESIGN_SYSTEM.md remains preserved. No new theme or product requirements.

## Composition

Use Navigation / Graphical Canvas / Context Inspector on desktop. Navigation is a compact instrument index, not monetary tiles. The bone canvas holds one composed figure; the selected context is separated by a hairline rather than another card. Three columns at ≥1200px, canvas + inspector at ≥900px, canvas then inspector below 900px. Grid uses minmax(0,1fr) and a capped existing application container. Tool navigation uses a native disclosure, initially expanded to preserve direct analytical actions; it follows the inspector on narrower screens. Existing global chapter tabs stay untouched until later approval; the chapter-navigation primitive is available but not duplicated in this milestone.

Puzzle: a gross-scale waterfall shows the five exact deductions, residual and running-position geometry against the gross denominator. A visible scale break resets the denominator to residual ADD. The 75/18/7 strip and the equal-award field belong to that same figure. Awards are equal published amounts, not ranks, scores or paid transfers. A separately headed decision-evidence boundary exposes four missing records; no arrow implies that arithmetic PASS creates decision replay.

## Semantic palette

All colors reference existing Hallmark Dusk tokens, with explicit ink/surface aliases in precision.css. No third accent. Slate navigation; bone analytical stage; neutral deductions/basic allocation; periwinkle residual/formula/selection/PASS; apricot performance/unavailable evidence. Every signal is also named. Selected award stays periwinkle; apricot never means “chosen recipient”. Status text uses dark periwinkle or apricot ink on bone, never light accent text on bone. Chart fills have contrasting edges where adjacent fills lack 3:1 contrast. Measured foreground/background pairings are recorded in QA contrast.json, including focus/selected/hover states; chart fill pairs are treated as graphics, not body text.

## Typography

Bundled, OFL-licensed Wix Madefor Display for headings/large figures, Wix Madefor Text for body/controls/citations. Existing system fallbacks preserve offline operation.

| Role | Size / line height | Weight |
|---|---|---|
| Page / chapter | clamp(1.75rem, 2.6vw, 2.5rem) / 1.15 | 500 |
| Analytical section | 1.125rem / 1.35 | 500 |
| Selected exact money | clamp(1.25rem, 1.8vw, 1.75rem) / 1.3 | 500 |
| Chart money / labels | .875rem / 1.5 | 400 or 500 |
| Body / controls | 1rem / 1.5 | 400 |
| Citation / status / captions | .875rem / 1.5 | 400 or 500 |

Tabular lining figures for money. Exact inspector values remain whole, wrapping only at narrow/enlarged layouts; abbreviations are not calculation values. Never convert money to floating point for calculations. Graphics use bounded plotFraction only for geometry.

## Spacing, controls and primitives

Use existing 4/8/12/16/24/32/48/64px rem spacing scale. Desktop figure gap32, mobile16; inspector24 desktop/16 mobile. Figure rows use44px hit areas, 12px minimum visible deduction bars, 44px award buttons. The thin visible bars are deliberately inside full-size controls; horizontal geometry encodes magnitude, vertical thickness does not. Awards use equal marks and equal hit areas. Graphical mark radius4px; control radius10px; outer canvas18px inherited. No interior card radii/shadows/gradients.

Reusable primitives in `src/components/precision/`: ChapterNavigation, GraphicalCanvas, ContextInspector, Money, ChartLegend, FigureCaption, SourceAction, EvidenceStatus, ResearchLimitation, AnalyticalControl. They accept semantic content/children; no research fixtures or calculated amounts inside primitives. Actual fiscal amounts come exclusively from the existing domain and typed dataset. Future adoption is gated, not automatic.

Controls: native buttons, aria-pressed for selections, visible focus ring (instant), underline for links/source actions, hover surface/ink changes. No hover-only information, no automatic animation. Inspector polite live region gives a short update; full details remain separately navigable. A mobile “Read selected detail” link follows the figure. Source dialog retains focus trap, Escape and trigger restoration. Native details retain keyboard behavior.

## Evidence and scientific boundaries

Test 1 is the exact fiscal comparison; status derives from verifyHistorical and can become DISCREPANCY under changed inputs. Test 2 is independently INCOMPLETE. Inspector states reflect selected stage, individual deduction, published village or missing requirement. Exact source ID, fiscal year, available pages and locator stay accessible. Empty page arrays stay unavailable. Official-source identification describes the underlying document; the obtained record is inherited PRD transcription, not new primary verification. Missing scores, universe, executed rule and signed decision records are not synthesized. Payments, eligibility, fairness and ecological effects remain unverified.

## Responsive and accessibility acceptance

Verify320/390/768/1024/1440, 200% root text size, reduced motion and keyboard source roundtrip. No document-level horizontal scroll. Exact input table may scroll locally. Canvas/inspector source order is preserved. Labels have4.5:1 normal-text contrast, meaningful graphic edges/focus3:1. All status meanings have explicit text; selection also uses pressed state and shape/edge cues. Keep photo confined to approved intro with unchanged Thomas Bresson CC BY3.0 credit. No photography inside fiscal evidence.

## Scope and remaining approvals

Step 3 stops at a working Puzzle, before/after screenshots and tests. Rule Shift/Evidence Gap require Step4 approval, detailed workspaces Step5 approval. Full-screen consistency is a staged goal, not a claim achieved by this one milestone.

## Motion continuity pass

The [shared motion language](MOTION_SYSTEM.md) adds restrained feedback and entrances without changing this composition, exact figures or evidence boundaries. Reduced motion and immediate interaction semantics take precedence over visual transitions.
