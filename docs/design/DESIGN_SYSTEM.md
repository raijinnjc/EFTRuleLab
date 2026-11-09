# EFT RuleLab design system

Status: proposed specification for review, 5 November 2026 (Jakarta). No application UI has been implemented or browser-tested. Product authority: [PRD](../product/EFT_RuleLab_PRD_v1.0_Codex.md), especially §§2, 4–9. This document supplies visual decisions; it cannot change fiscal facts, evidence states, scope or acceptance criteria.

## Intent and approach

An academic evidence workbench for judges, researchers and fiscal reviewers: trace a published allocation, inspect its provenance and understand why reconciling amounts does not reproduce recipient selection. The defining visual object is the parallel two-test evidence diagram, supported by an exact, source-linked ledger. White space organizes analysis rather than serving as decoration.

Approaches considered:

| Approach | Benefit | Tradeoff and decision |
| --- | --- | --- |
| Editorial evidence workbench | Narrative entry, precise tables, inspection beside calculations | Requires care when moving between reading and exploration; recommended proposal because it matches the requested PRD direction |
| Dense fiscal terminal | Fast repeated numeric comparison | Too much initial cognitive load for a competition reader; retain its numeric alignment, not its density |
| Report as a linear illustrated essay | Strong presentation sequence | Weak filters, deep links and evidence inspection; retain the guided narrative, not a locked reading order |

These are author proposals, not a claim of user approval. No random Hallmark theme is selected. No application bootstrap, dependency installation or product implementation is part of this document.

## Research and critique

UI UX Pro Max was consulted locally using its design-system generator, then explicit style, chart and keyboard-accessibility searches. The first query returned Swiss Modernism 2.0 but also a portfolio grid and dual-serif Google Fonts. The refined public-finance query returned Accessible & Ethical but a generic single-CTA landing page. Neither generator output is accepted as a complete design system. Relevant style records are `minimalism-and-swiss-style` and `editorial-grid-magazine`; adopt alignment, readable measure and hierarchy, not masonry, contact forms, parallax or drop caps. The waterfall and comparison records support additive arithmetic, zero baselines, direct labels and accessible tables. Reject generic red/green budget coding, descending sorts that disrupt fiscal component order, and multiple hues per village.

Hallmark critique uses `SKILL.md`, `references/flow.md` (app screens), `references/data-viz.md`, `references/direction.md` and `references/redesign.md`. Useful constraints: tabular figures, exact alignment, no invented metrics, one focal figure, chart/table pairing, focus and reduced motion. Risks and resolutions:

- A split headline beside numbers can become a generic dashboard. Make the evidence fork the signature object, with accounting and unavailable decision inputs visibly distinct; avoid a repeating card grid.
- Hallmark's one-accent recommendation yields to the PRD's meaningful fiscal and evidence color roles. Colors encode stable concepts; they are not decorative variety.
- Hallmark's short-screen copy budget must not remove provenance or qualifications. Analytical screens use progressive disclosure, with evidence boundaries always visible.
- System fonts are appropriate to an app and the PRD's offline requirement. Do not fetch fonts to satisfy a theme preference.
- Uppercase `PASS` and `INCOMPLETE`, the required headline, context wording and regulatory terms remain as specified, despite style preferences against capitals or metadata separators. No tracked capitals or decorative eyebrow labels are introduced.
- Do not use `overflow-x: clip` as a substitute for fixing an inaccessible layout. Reflow content and contain genuine table overflow. Full evidence text and focus must remain reachable.
- This is a document critique, not a completed rendered Hallmark audit. Run the latter against actual interfaces during implementation.

## Color tokens

All colors belong in the future token layer. Components use semantic roles, never guessed hex values. Light mode is the P0 proposal; do not inherit an untested dark palette from OS preferences.

| Token | Value | Role |
| --- | --- | --- |
| `color-paper` | `#FAFBFC` | Page ground |
| `color-surface` | `#FFFFFF` | Reading and inspection surface |
| `color-ink` | `#102B4E` | Main text; basic allocation marks |
| `color-ink-secondary` | `#244B72` | Secondary navy surfaces and links |
| `color-muted` | `#596B7E` | Secondary copy and citations |
| `color-rule` | `#DCE3EA` | Decorative separators only |
| `color-control-border` | `#748394` | Essential control boundaries |
| `color-verified` | `#126B70` | Verified calculation states; formula marks |
| `color-performance` | `#B8832E` | Performance chart fill, not small text |
| `color-performance-ink` | `#805B20` | Performance-related small text if needed |
| `color-incomplete` | `#9C6421` | Incomplete and extraction-test state labels |
| `color-discrepancy` | `#A23D35` | Proposed protocol discrepancy only; never historical Test 2 |
| `color-on-dark` | `#FFFFFF` | Text on navy or teal |
| `color-focus` | `#244B72` | Focus ring with white separation gap |

Calculated WCAG sRGB contrast against white / paper: ink 14.21 / 13.72; secondary copy 5.48 / 5.29; teal 6.24 / 6.03; amber 4.93 / 4.76; performance-ink 6.11 / 5.90; control-border 3.88 / 3.74. Gold fill is 3.32 / 3.21: adequate against these grounds for graphical marks, inadequate for normal-size text. Keep chart labels in ink and add swatches. Gold beside teal or navy needs a white separator and text labels; contrast against white alone does not validate adjacent colored segments. Essential borders cannot use the pale separator token. Every new color/background combination requires measurement.

Never communicate status only through color. Verified: solid border plus explicit result. Incomplete: dashed outline plus the missing-record explanation. Extraction experiment: visible `Research-side extraction test` heading and reset control. Counterfactual: explicit same-base subtitle in every relevant figure and export. Proposed protocol: persistent proposal label.

## Typography

- Default family: `Arial, Helvetica, sans-serif`, locally available; this is the chosen proposal for predictable offline operation. No CDN imports. Use the same sans family for narrative, controls and captions.
- Weights: 400 for prose, 600 for section labels/controls, 700 for headline and primary result. Do not rely on tiny text or very light strokes for hierarchy.
- Body 16px / 1.6; secondary copy 14px / 1.5; table values 14–16px / 1.5; control text 16px. No required source qualification below 14px.
- Reading-page headline 36px on phones, 48px at 768px, 64px at 1024px+, line-height 1.06–1.15. Analytical page title 28/32px; section title 24px; subheading 20px. These are responsive steps, not an instruction to force line breaks.
- Numeric results 32/48px as space permits. `font-variant-numeric: tabular-nums lining-nums`; right-align numeric table columns and keep consistent units. Do not assume every platform font supports tabular figures: inspect alignment during browser QA.
- Prose measure 60–70ch, maximum 72ch. Avoid fully justified copy, all-caps navigation and tracked captions. Long source URLs and identifiers wrap safely; amounts may use localized nonbreaking units only when they still fit 320px.
- English P0; introduce Indonesian regulatory terms precisely. Compact amounts always have an adjacent route to exact integer rupiah. No abbreviated display becomes a computation input.

## Space, grid and surfaces

Spacing scale in CSS px: 4, 8, 12, 16, 24, 32, 48, 64, 96. Rem-based implementation should respect text scaling. Use 8/12 within controls, 16/24 within evidence groups, 32/48 between analytical blocks, 64/96 between narrative sections. Border 1px; radius 0 for tables/charts, 4px for controls, up to 8px for the source drawer. No chart shadows, gradients or glass surfaces.

| Viewport | Grid | Gutter | Layout |
| --- | --- | --- | --- |
| 320–767px | 4 columns | 16px | One reading column; evidence tracks stacked with separate identities |
| 768–1023px | 8 columns | 24px | Main visual then full-width annotation; two-track diagram only if labels fit |
| 1024px+ | 12 columns | 32px | 8-column analytical object and 4-column evidence annotation; overview may use 7/5 |

Grid gap 16px on mobile, 24px thereafter. Center container capped at 1280px. At 1440/1920 the gutters grow rather than stretching prose. Tables can span the container. All grid children need shrinkable tracks (`minmax(0, 1fr)`) and `min-width: 0`. No global horizontal scrolling. Table scrolling remains inside a labeled, keyboard-operable region with a visible scroll affordance; never shrink 20 entries into unreadable text.

## Page and component anatomy

Header: wordmark, research context, seven PRD destinations, guided-demo action and direct source access. At narrow widths use a labeled menu button with expanded state; do not compress seven links into tiny targets. Current route has text plus underline and `aria-current`. A persistent analytical-state label stays near each page title and inside exports. Sticky chrome must never obscure focus.

Overview: exact PRD headline; a short research statement; two editorial verification results; the evidence fork; one clear route into exploration. The pool and ledger count are context, not unrelated KPI cards. Keep the required independent-research footer and evidence qualifications.

| Component | Anatomy and behavior |
| --- | --- |
| Evidence badge | Visible status + evidence type + nearby explanation; icon is supplementary; source link remains distinct |
| Exact amount | Formatted Rp amount, unambiguous unit, calculation/source action and accessible full-value label; no fake animated counters |
| Rule comparison | Labeled rule selector, persistent same-FY2022-base note, paired bars, exact table, signed delta rail and 60/40 explanation |
| Source inspector | Title, issuing institution/year, source ID, fiscal scope, recorded page/row, safe external link, inspection status, caveats and close action |
| Award table | Caption, search label, kecamatan filter, sortable headers, exact amount and page/row columns, full total separate from filtered subtotal, explicit empty state |
| Extraction control | Opt-in action, wrong and source-checked inputs separately labeled, unchanged published ledger amount, apparent-gap explanation, restore control |
| Audit export | JSON/CSV/Markdown choice, state/disclaimer preview, download action, announced success/failure and selectable-text fallback |
| Guided demo | Named step, progress, previous/next/exit, keyboard support without capturing arrows inside inputs; no timed auto-advance |

Prefer inline disclosure for short evidence; use the source inspector for cross-cutting provenance. Desktop inspector can be a nonmodal adjacent panel without a focus trap. Mobile modal must use dialog semantics, label, initial focus, contained tab sequence, Escape/close, background inertness and focus restoration. Implement one pattern explicitly, not a visual overlay with ambiguous modal behavior.

## Charts and exact figures

Every figure has a title, analytical-state label, units, direct labels, a concise takeaway, source locator and accessible exact-value table. Use local SVG without remote fonts/assets. Figure text, captions and exported values derive from validated seed data and the pure domain layer in the later application; fixture constants do not become separate UI truth.

- Policy composition: two equal-length horizontal stacked bars on the same FY2022 residual base. Order basic (navy), formula (teal), performance (gold) stays fixed. Add outside labels for narrow segments and white segment separation. On mobile preserve the shared scale and place values below. A 2021 rule is always `Counterfactual · same FY2022 base`; never an actual-year trend or village-level gain/loss chart.
- Delta comparison: signed amounts around a shared zero, with a textual net-zero statement. Show the 60/40 redistribution as labels and an arithmetic explanation; no invented flow to individual villages.
- Envelope: gross, five deductions, residual, then three components. A waterfall uses a common monetary axis and running-total table. Component split is a separate view of the residual, not new money added to gross. Where the full gross scale makes performance tiny, use a separate clearly labeled residual-scale inset; never silently change scale.
- Awards: ledger first; no rank or environmental score. P1 kecamatan bars use one neutral/teal series, nine labeled rows including zero-positive entries. Counts describe positive allocations, not success rates or assessment populations.
- Weights (P1 only): 45/10/15/30 labeled assessment composition, never expenditure shares or outcomes. No decorative donut wall, gauge, dual-axis chart, 3D or unsupported time series.

Money remains exact integer rupiah in the future calculation engine (BigInt/rational operations). Rounding is display-only, sign is explicit, and the export preserves exact values. Test 1 compares the source-checked performance pool with the immutable published ledger; policy counterfactuals cannot inherit historical reconciliation status.

## Flow-diagram specifications

Two-test diagram: two separate evidence tracks. Track A: fiscal inputs and rule → pool reconstruction → published ledger comparison → `Test 1: PASS`, Rp0 under the PRD baseline. Track B: historical assessment register, assessed universe, executed selection rules and signed decisions → unavailable replay → `Test 2: INCOMPLETE — records not obtained for this study`. Dashed unavailable connectors and explicit text prevent the appearance of an executed selection. Do not draw historical recipient scores, eligibility results or rankings.

ARP diagram: versioned instrument → reconstruct budget/Test 1 → approved assessment register → universe and implemented rule checks → withhold target roster and independently derive recipients/amounts → compare identities and amounts → MATCH / DISCREPANCY / INCOMPLETE → versioned response log. All steps are `Proposed verification procedure`; proposed office roles need institutional confirmation. Incomplete branches stop affected replay; discrepancies request clarification, not culpability. Match proves neither fairness nor ecological outcome.

Desktop may show two parallel columns and branched protocol outcomes. Mobile stacks each complete evidence track and presents protocol steps vertically; labels and connector meaning survive without sideways panning. Interactive nodes use at least 44px hit targets, 16px labels, text wrapping and visible focus. Connectors sit behind nodes, never through labels. Purely decorative SVG paths are hidden from assistive technology. Provide SVG title/description plus an equivalent ordered text transcript; use native HTML buttons/links for node inspection when possible. DOM focus order follows the evidence reading order, not arbitrary SVG coordinates. No drag/hover-only navigation or animated marching arrows.

## Interaction and accessibility contract

- WCAG 2.2 AA target: normal text ≥4.5:1, large text ≥3:1, essential control/graphic boundaries ≥3:1. Targets aim for 44×44 CSS px; document any exception rather than confusing native pt/dp with web pixels.
- Focus ring: 2px navy with 2px white gap; fully visible is the design goal. Offset sticky headers with scroll padding. No focus transitions. Skip link, landmarks, sequential headings, labeled inputs and meaningful button names are required.
- URL and browser history preserve section navigation; analytical controls must have explicit reset and visible state. Never persist an extraction override as official source data. Deep links must validate state and label counterfactual/test mode.
- Immediate state updates; optional 120ms control-color and 180ms panel-opacity transitions. Never `transition: all`, animated width/height/top/left, decorative reveals or content initially hidden pending animation. Reduced motion removes nonessential transitions.
- Sort headers expose `aria-sort`; result-count updates use a restrained contextual live region. Filtering must not move focus or replace the immutable global total. No color-only legends or icon-only source actions.
- Local data is bundled: no pretend loading spinner. Handle empty search, invalid/missing input, failed export and missing historical assessment separately. Missing assessment is `NOT_OBTAINED`, never zero and never a red historical FAIL.
- Test at 320, 390, 768, 1024 and 1440 CSS px; inspect 200% zoom and text reflow at 400%, reduced motion, keyboard-only operation and screen-reader names. Check 1280×800 opening-view comprehension; do not conceal mandatory evidence text merely to meet a fold target.
- Tables, diagrams, inspector and tour remain usable without a pointer. External source links identify the destination and use safe new-tab attributes. Source access failures do not erase stored citations or invent inspection claims.

## Acceptance before P0 implementation is called ready

PRD F01–F11 and T01–T35 remain the acceptance authority. Future work must demonstrate domain tests, functional browser interactions, real downloads/fallback, route/history behavior, immutable-source restoration and viewport screenshots. The design document alone proves none of these.

Critical design review questions: Can a reader find PASS and INCOMPLETE together? Is 7% visibly residual-based? Is every 2021-rule view labeled counterfactual? Can the full amount and source page be inspected? Does an extraction experiment leave the ledger untouched? Are missing decisions described without allegations? Can the same workflow be completed with keyboard and at 320px?

This task validates document integrity, token contrast and repository scope only. Visual fit, actual fonts, assistive-technology behavior and browser rendering await application implementation and its tests.

## Dusk visual revision (6 November 2026)

The user-selected Hallmark Dusk replaces the earlier white/navy visual direction for the Phase 2A redesign. Scientific content, status semantics, exact arithmetic and accessible interactions above remain authoritative.

Actual Dusk OKLCH tokens are copied into tokens.css: slate paper 17.5%/0.014/268, layered surfaces 21% and 25%, periwinkle 77%/0.10/274, apricot 83%/0.095/62, bone well 95.5%/0.008/75. Wix Madefor Display 500 for headings and numerical statements; Wix Madefor Text for body/controls, bundled under OFL. Existing semantic verified/incomplete aliases map to periwinkle/apricot, always accompanied by explicit status text. Basic component uses muted slate; formula periwinkle; performance apricot.

A locally bundled real Thomas Bresson valley photograph carries the hero only. Desktop/mobile WebP crops and a fog scrim give readable quiet space; a single smoked-glass reconciliation panel sits alongside the headline. Attribution links CC BY 3.0 and records cropping/compression. No Kubu Raya location or ecological implication is asserted. The glass panel uses a stronger 88% dark base than the reference's 58% for reliable analytical text contrast. No continuous photo drift or breathing indicators: fiscal reading takes priority, reduced motion is entirely still.

Below the hero, open slate sections, hairline rules, restrained controls and a bone waterfall well replace repeated white containers. Preserve disclosure text, table scroll regions, exact numbers and source locators. Responsive layout retains the existing 320–1440 coverage and 200% text behavior.

## Graphical research experience (9 November 2026)

The photographic introduction is followed by one active graphical research scene: Puzzle, Rule Shift or Evidence Gap. A bone analytical stage sits in the slate shell; periwinkle/apricot marks retain Dusk identity, with deep periwinkle and a darker apricot text role for contrast on bone. Twenty equal published allocations use equal marks and no visual ranking. Separate gross and residual denominators are visibly labeled. Native full-size controls supplement narrow chart segments. Exact-value disclosures/provenance remain adjacent to the figures; compact currency labels are display-only.

Primary navigation follows the three research questions. Complete P0 tools and original anchors remain in the supporting research workbench. Mobile text enlargement changes the stage grid rather than shrinking text or clipping amounts. Keyboard chart focus remains restrained; source modal focus restoration is preserved. This implementation follows the supplied V2 interaction reference, not the rejected static UX rescue mockup.
