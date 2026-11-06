# Phase 2B + approved Dusk integration

Normal merge on existing `feat/accountability-research-p0`.

Parents: Phase 2B `c2c4ea88c57ea447abbf5babc1e38e1e50ac355f`; updated origin/main `d588617691eab5b2935df817b006e299d316844d` containing merged PR #5. No rebase, force push, branch replacement, PR merge or deployment.

## Conflicts resolved

Only `src/App.tsx` had textual merge conflicts, in three regions:

1. Imports/navigation: Dusk stylesheet retained after core styles; all Phase 2B navigation entries retained.
2. Overview/research terms: Dusk photographic hero and single glass reconciliation panel retained, alongside the guided demo entry and all existing disclosures. Hero eyebrow now explicitly identifies independent fiscal research; source identities remain in analytical provenance and library.
3. Footer/root closure: Dusk Thomas Bresson/CC BY 3.0 attribution and ecological/location qualification retained, along with Phase 2B status text and SourceProvider closure.

Auto-merged Dusk tokens, fonts, photo assets, typography and design documentation retained. ARP, source library/drawer, controlled demo and audit exports retained. Additional Dusk rules style the new research sections, give available protocol numbers dark-on-periwinkle contrast and use a dark modal backdrop. Mobile glass-panel padding and internal result spacing reduced, without hiding evidence. Photograph remains a child of overview only.

## Validation

Unit tests:65 pass. Strict TypeScript/Vite build passes (initial build identified an unused eyebrow import, then corrected). Final browser result and rendered audit below. No financial/data/domain changes made during integration. Historical result PASS/Rp0; recipient replay INCOMPLETE.

Final results: **65 unit tests, 38 production-browser tests, strict TypeScript/Vite build pass**. Browser suite covers responsive widths320/390/768/1024/1440,200% text, reduced motion, keyboard/source dialog, guided demo preservation/exit, real JSON/CSV/Markdown downloads and fallback, bundled Dusk assets and offline interactions after load. No unmerged paths remain.

## Rendered audit and remaining issues

Hallmark render tier ran: **5 FAIL / 10 REFLEX / 22 WARN**, raw [HALLMARK.json](HALLMARK.json). This is not a clean Hallmark pass.

- FAIL19: accurate source-page range dash retained. FAIL63: required independent-research disclaimer punctuation retained. FAIL49a(3): full mobile reset, PDF sorting and extraction labels wrap; retain readable reflow rather than truncate required meaning.
- REFLEX7b(3)/22: approved Dusk neutral/white tokens. REFLEX39b: full ARP step labels need taller targets. REFLEX49b(4): source links reflow without losing citations. REFLEX71: research-section hierarchy retained.
- WARN3(3): evidence/tour/selected-step markers carry semantic states. WARN29: one explicitly approved Dusk glass panel. WARN40(3): static scan reads earlier base selectors; Dusk's later explicit skip-link/primary/active overrides control actual colors. WARN41(3): research panels inherit light body/button text on slate; no missing rendered text color. Available ARP number contrast was an actual integration issue and was corrected to dark ink on periwinkle.
- WARN49(4): descriptive actions may wrap. F4: sorting and selected protocol controls are not promotional primary actions. F6(4): tabular figures inherited by monetary values. F16: native selection/scrollbar behavior retained. F19: analytical emphasis retains four weights. F25: intentional labeled keyboard-operable local table scroll.

No known blocking functional defects remain in the executed tests. No fresh primary-source verification or screen-reader/cross-browser certification claimed. Historical input and provenance files unchanged. Test reruns refreshed existing screenshot/export sample paths; automatic review rejected discarding them, so generated results are retained alongside dedicated final integration captures.

## Final rendered screenshots

- [Desktop full application](full-1440.png) / [Mobile full application](full-390.png)
- [Desktop hero](hero-1440.png) / [Mobile hero](hero-390.png)
- [Desktop ARP](protocol-1440.png) / [Mobile ARP](protocol-390.png)
- [Desktop tour](tour-1440.png) / [Mobile tour](tour-390.png)
- [Desktop source inspector](source-1440.png) / [Mobile source inspector](source-390.png)

Desktop/mobile hero and ARP rendered captures visually inspected. PR #4: https://github.com/raijinnjc/EFTRuleLab/pull/4 . Commit is a normal two-parent merge from the two parent SHAs above. No automatic PR merge/deployment.
