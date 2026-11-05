# Repository design skills

Installation-only change. No application, PRD, fiscal data or formulas were created or changed.

## Installed payloads

- UI UX Pro Max: `.agents/skills/ui-ux-pro-max/SKILL.md`, with Python scripts, local CSV/JSON catalogs and bundled tests. Official npm CLI `ui-ux-pro-max-cli@2.15.0` (tarball SHA1 `c19bf89b591770420b75a333b1dd0b6449d5e3dd`). Installation documentation reviewed at upstream commit `b7d5353e0130feb8c5574ef1251f8a1db1873ccb`; this is not a claim that npm payload equals that Git commit. MIT license included from that source.
- Hallmark v2.0.0: `.agents/skills/hallmark/SKILL.md`, references, 50 themes and images, scripts, fixtures, agent metadata and license. Upstream inspected at `407fa689f4a276f2fd389208d271d0fef08f5058`; installed payload compared against this checkout. Official `skills@1.7.6` installer; generated provenance in `skills-lock.json`.

## Runtime and install

Validated Node v24.22.1, npm 11.9.0 and Python 3.12.14. UI UX requires Python 3 (standard library only). Hallmark requires Node >=18; the selected skills installer requires Node >=22.20.0. Git is needed for remote installation.

From the repository root, equivalent pinned commands:

```sh
npx --yes ui-ux-pro-max-cli@2.15.0 init --ai codex --offline
DISABLE_TELEMETRY=1 npx --yes skills@1.7.6 add https://github.com/Nutlope/hallmark --skill hallmark --agent codex --copy --yes
```

Actual execution used npm-pack tarballs unpacked under `/tmp/design-installers`, reviewed before execution:

```sh
node /tmp/design-installers/uipro/package/dist/index.js init --ai codex --offline
DISABLE_TELEMETRY=1 node /tmp/design-installers/skills/package/bin/cli.mjs add https://github.com/Nutlope/hallmark --skill hallmark --agent codex --copy --yes
```

No global install, force flag, lifecycle scripts, hooks or application dependency changes. The UI UX CLI also generated six companion skills (banner-design, brand, design, design-system, slides, ui-styling); only those newly generated directories were removed to limit scope. Re-running that CLI regenerates them. Do not remove pre-existing skills on subsequent runs.

Hallmark's optional rendered audits require Chrome/Chromium plus puppeteer-core. Chromium exists here; puppeteer-core is not installed in the project. Browser audit readiness is not claimed. A future audit can install puppeteer-core in an external tools directory and set HALLMARK_PUPPETEER to that directory; no need to change application dependencies.

## Validation

- Codex app-server `skills/list` with this repository cwd: both skills parsed without errors, `enabled: true`, `scope: repo`.
- UI UX local accessibility catalog search: one valid result returned.
- UI UX bundled unittest discovery: 130 passing tests; two module import errors from upstream development-only tests (`test_catalog_refresh`, `test_relevance_evaluator`) that search for the upstream source repository and its development scripts. Those files are not part of the installed CLI runtime payload. No tests modified or disabled.
- Hallmark `node .agents/skills/hallmark/scripts/refcheck.mjs --errors`: clean across 101 reference files. It requires subprocess permission in this sandbox; the restricted attempt produced subprocess errors, the permitted rerun passed.
- Hallmark `theme.mjs validate` on all 50 theme Markdown files: all pass.
- Hallmark editorial exemplar `sloplint.mjs --json`: zero FAIL, REFLEX or WARN; one ANSWERED finish finding. Use JSON summary: the human-output command returns 1 for this answered finding.
- Product designs and browser rendering were not tested or changed.

## Preservation and collaboration

The supplied checkout was unborn, with no tracked or untracked project files and no remote refs. No repository AGENTS.md, Codex configuration, Superpowers installation or project skills existed to overwrite. No user-level skill or configuration was modified. Superpowers was not visible in the inspected locations or Codex discovery response; this environment cannot confirm its installation elsewhere.

The two skills share `.agents/skills` but have separate directory names. There is conceptual overlap in visual/accessibility guidance, not a file collision. Do not let third-party style rules override the EFT RuleLab PRD, evidence labels, source ledger, exact arithmetic, accessibility requirements or no-fabrication constraints.

## Invoke and future workflow

Start/reload Codex in this repository, then explicitly name:

- `$ui-ux-pro-max` to consult visual design, typography, spacing and accessibility recommendations.
- `$hallmark audit <interface-path>` for an audit report. Use `$hallmark redesign <interface-path>` only when redesign is authorized.

Future sequence: Superpowers governs engineering planning, tests and implementation; UI UX Pro Max informs a PRD-compatible visual system; Hallmark audits the resulting interface and suggests refinements. The PRD and verified fiscal research remain authoritative. Resolve style disagreements in favor of those project requirements. No product implementation is authorized by this installation document.

Use the existing checkout; do not create worktrees unless explicitly requested.

## Git delivery status

Dedicated branch: `chore/install-design-skills`, pushed successfully. The original remote advertised no branches, so no `main` base was available. GitHub API metadata access returned `Forbidden`; PR creation was attempted using existing authentication and could not complete. No PR URL or merge is claimed. Establish the intended base branch and permit GitHub API access before retrying PR creation; do not merge automatically.

`git diff --check` reports whitespace already present in upstream vendored Python/CSV payloads. Those third-party assets were retained unchanged rather than reformatted during installation.
