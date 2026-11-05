# Phase 1 validation report

Date: 5 November 2026 (Jakarta). This is an application-foundation report, not a full P0 release assertion.

## Repository and evidence origin

Remote main exists at d931bbe and now advertises as GitHub's default. The approved design-document commit 1d1686c is unmerged; feature branch `feat/evidence-foundation` descends from it, retaining its history and files. No main update, force push, unrelated merge or deployment is part of this phase. A PR against main will include the retained documentation commit as well as this foundation.

Seeds were transcribed from the supplied PRD §§2/7/8/10. All 20 village/kecamatan identities, source rows and PDF pages were independently compared with the PRD table during this task and matched. V4 and the original annex PDFs were unavailable: no new primary-source inspection, source-hash recalculation, assessment replay or payment/outcome verification is claimed. S1/S2 legal identities and fiscal years remain explicit. Source manifests distinguish inherited inspection from the locally read PRD.

## Acceptance coverage

| PRD area | Phase 1 result | Still reserved for next phase |
| --- | --- | --- |
| F01 | Required research headline, baseline and two evidence statuses | Full narrative gateway/glossary polish |
| F02 | Exact same-FY2022-base comparison domain and tests | Policy Studio controls, charts and scenario views |
| F03 | Fiscal reconstruction, source-linked input disclosure | Full funding waterfall and format controls |
| F04 | Complete typed immutable 20-entry seed and coverage checks | Search, sorting, filters and full ledger view |
| F05 | Separate accessible fiscal/replay tracks, disclosures and transcript | Further node-by-node inspection content |
| F06 | No extraction UI or source mutation | Explicit opt-in extraction experiment |
| F07 | Not implemented | Proposed ARP diagram and interactions |
| F08 | Source/provenance models, legal source list and inspection notes | Full source search/filter/drawer and contextual bibliography UI |
| F09/F10 | Not implemented | Guided tour, audit exports and fallback |
| F11 | Tokens, responsive shell, keyboard controls and fiscal table | Full P0 screen/feature accessibility validation |

No P1/P2 features were implemented. T01–T22 arithmetic/ledger/coverage checks are represented in the unit suites; T27–T32/T34 have foundation-level validation/status/immutability coverage. T23–T26 extraction-state interaction and T33 export behavior remain for their later features; no full T01–T35 release claim is made.

## Test execution and repair history

- Evidence RED: permissive boundary produced 16 assertion failures and six passes; implementing runtime integrity checks produced 22 passes.
- Domain RED: missing arithmetic/status behavior produced nine failures; the completed evidence/domain suite passed 37 tests. Invalid-input rejection tests also ran.
- Presentation regression: an altered valid gross amount initially left an incorrect hardcoded overview PASS. It failed first, then passed after overview status was derived from the same domain result. Suite: 38 tests at that stage.
- Browser RED: initial empty React shell failed all eight acceptance tests.
- First rendered foundation: seven of eight passed; 200% text enlargement overflowed to 444px at a 390px viewport. DOM measurement traced the cause to implicit grid min-content sizing. Explicit shrinkable tracks and bounded content corrected it to 390px without global clipping. Production browser rerun: eight passed.
- A further regression checks current-section `aria-current` and narrow expanded evidence/source details. At that stage the production browser suite contained nine tests, captures all five target-width screenshots and uses the built bundle rather than Vite development output.
- Initial production type check diagnosed missing Node and Vite CSS declarations; adding the actual type prerequisites restored the strict build. A presentation test needed explicit React createElement generic typing under TypeScript 7; assertions were unchanged.

## Rendered design critique

UI UX Pro Max local disclosure/focus guidance was applied under the approved design system. Desktop (1440px) and phone (320px) screenshots were visually inspected: distinct evidence tracks, readable figures/citations, no decorative card grid, no invented chart data. Browser tests render at 320/390/768/1024/1440px, check page width and runtime errors, operate disclosures with keyboard, exercise hash history/refresh, reduced motion and 200% text size. This is not a manual screen-reader or exhaustive WCAG audit; actual browser zoom and offline/download behavior are not claimed.

Hallmark **was actually rendered** against the production app via local URL using external `/tmp/eft-design-audit` puppeteer-core and system Chromium. It made five additional fold/full-page captures; the raw report from the pre-review rendered version is `hallmark-report.json`. Summary: **2 FAIL, 8 REFLEX, 2 WARN; render ran**. This is not a clean Hallmark pass:

- FAIL 19 objects to the source-page range “17–21”; preserve the citation notation.
- FAIL 63 objects to the PRD's exact independent-research footer; preserve the required wording.
- Eight REFLEX findings object to white surfaces/on-dark text required by the approved token system; preserve those colors.
- Two F6 warnings overlook later cascade declarations of tabular numerals on table/status selectors. Amounts and table numbers use explicit tabular-figure styling.

Useful audit findings on spacing tokens, pressed/disabled states and wrapping were addressed. PRD source truth and accessibility outrank third-party aesthetic preferences. No public preview was created. Hallmark scratch screenshots are ignored; the five reproducible Playwright screenshots are committed under `screenshots/`.

## Commands and retained evidence

```sh
npm test
npm run build
npm run test:browser
```

`npm run test:browser` builds and serves the production bundle and uses system Chromium (override `CHROMIUM_PATH` elsewhere). Screenshot files: foundation-320.png, foundation-390.png, foundation-768.png, foundation-1024.png, foundation-1440.png. No test count is inferred from a process exit alone; test summaries and actual rendering were inspected. Logs under `/tmp/eft-*.log` were used for diagnosis; final counts and substantive review corrections are recorded below before delivery.

Environment: Node 24.22.1, npm 11.9.0, Python 3.12.14, Chromium 155.0.8059.79. Package versions are pinned by package.json/package-lock.json. Test runner emitted inherited NO_COLOR/FORCE_COLOR warnings; no application page errors were observed in the responsive suite.

## Whole-branch review and corrections

A fresh read-only reviewer examined the complete foundation range and ran the unit suite/build. Two Important issues were independently reproduced and fixed in one regression pass:

1. A FY2022 fiscal/coverage record could cite S2/FY2021, or unscoped PRD/null provenance. Three new tests failed first, then passed after each record's required fiscal year was enforced at the trust boundary.
2. The shell/standalone diagram reconstructed before checking unavailable-input status. Two presentation regressions failed first, then passed after adding explicit INCOMPLETE states without monetary output. A browser test additionally corrupted the actual bundled gross input: the original startup blanked, the guarded lazy import now presents an accessible unavailable-evidence message. The test waits for the evidence chunk rather than assuming a lazy request finishes with the initial navigation.

The review also identified unconditional “balances/reconciles exactly” prose under changed-input testing. Regraded as an evidence-truthfulness issue and corrected in the same pass; the existing changed-input presentation regression now rejects those assertions outside PASS. The PRD-required baseline headline is unchanged. No review finding is deferred.

Review boundaries and rulings: remaining P0/P1/P2 interfaces stay excluded; fresh legal PDF verification and remote availability cannot be established without the original materials/access; unknown exact FY2022 rule pages remain explicitly empty; equal-award multiplication is valid only for the supplied immutable equal-amount ledger; manual assistive-technology evaluation remains outstanding. These limits do not establish future historical selection, payouts or ecological findings. Same-base counterfactual semantics, independent Test 2 and exact arithmetic remain tested. Branching from the approved unmerged docs preserves that history rather than merging it silently; a PR against main includes that earlier documentation commit.

## Final observed results

- `npm test`: **3 files passed, 43 tests passed** (final run).
- `npm run build`: **passed**, strict TypeScript check and Vite production bundle; rerun successfully by final browser suite's web-server startup.
- `npm run test:browser`: **10 tests passed** against built production assets, including corrupted-seed startup.
- `git diff --check`: passed for the phase changes. Original PRD/handoff, approved design specification, installed skills and skills lock remain unchanged relative to 1d1686c.
- All 20 seed identities/rows/pages matched supplied PRD §8; exact primary-source verification remains unavailable.
- Five screenshots refreshed after the final corrections. Hallmark's earlier rendered critique is retained with its nonzero findings; no clean audit or post-review Hallmark rerun is claimed.
- Dependencies were installed using exact-version npm installs and a lockfile; `npm ci` is the documented fresh-checkout command, not an additional execution claim in this report.

No application defects remain from the fresh review; limits above remain explicit. Manual screen-reader review, actual browser-zoom testing, remaining P0 features and primary-source research reconciliation are not silently marked complete.

## Git delivery

Feature branch `feat/evidence-foundation` was pushed successfully using existing Git authentication. Pull Request creation against `main` was attempted with `gh pr create` and failed with `Post https://api.github.com/graphql: Forbidden`. No PR URL is claimed. Use the repository's comparison view with base `main` and compare `feat/evidence-foundation` to create it manually, or restore GitHub API access and retry. No token was requested, no automatic merge performed, and the existing branches were preserved.
