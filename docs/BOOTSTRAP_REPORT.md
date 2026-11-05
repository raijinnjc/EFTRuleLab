# Repository bootstrap and design-system report

Date: 5 November 2026 (Jakarta). Scope: Git baseline, supplied documents, skill verification and proposed design direction. No application implementation, dependency installation, deployment or merge.

## Baseline and branch state

Initial history: `f512bb7` (design-skill installation), then `d931bbe91b8cfa6b4391545166cf52afd65bdf99` (installation report). Initial remote advertised only `chore/install-design-skills`.

Created `main` at `d931bbe91b8cfa6b4391545166cf52afd65bdf99` and pushed it normally. Both existing commits and all installed skills are preserved; no branch deleted, no force push, no unrelated history. Documentation branch `docs/bootstrap-design-system` starts at that same baseline.

Attempted `gh api --method PATCH repos/raijinnjc/EFTRuleLab -f default_branch=main`; the API returned `Forbidden`. Subsequent `git ls-remote --symref origin HEAD` still advertised `chore/install-design-skills` as GitHub's default. Main exists remotely but is not confirmed as the default.

Manual action for an administrator: open the GitHub repository → **Settings → General → Default branch**, use the branch switch control, select **main**, choose **Update**, and confirm. This changes the default branch; it does not merge the documentation branch.

## Actual research material

| Requested material | Initial checkout | This branch |
| --- | --- | --- |
| EFT_RuleLab_PRD_v1.0_Codex.md | Absent | Copied unchanged from the supplied attachment to `docs/product/` |
| EFT_RuleLab_Codex_Handoff.md | Absent | Copied unchanged from the supplied attachment to `docs/product/` |
| Verified FY2022 fiscal dataset | No standalone file | Still absent; PRD §§2/7/9 provide inputs/schema/fixtures, not independently checked JSON/CSV |
| Published recipient ledger | No standalone file | PRD §8 contains the supplied 20-entry transcription; no separate verified ledger file created |
| Supporting research source register | No standalone file | PRD §10 excerpt saved to `docs/research/PRD_SOURCE_MANIFEST.md`; V4/V5/V7 register/audit material remains absent |

Original legal PDFs, historical assessment and decision records were not supplied or independently inspected here. No source hash from earlier research is claimed as recalculated. `data/README.md` records the missing inputs and future provenance requirements. The copied PRD is the product source of truth; the design document cannot replace it.

Attachment SHA256 verification:

- PRD: `e0aa537dc25b59c4b88c028cb9c15353b5dafa116732e674e4431d45adced317`.
- Handoff: `78a60981a369d1e7e1441564b0402bf4b86097bddd85438bcd52d8ff4f8cfe54`.

Both repository copies match their corresponding attachment bytes.

## Engineering and design skills

Superpowers is available **in the active chat's cloud plugin system**, package root `skill://plugins~Plugin_60aea7460bd4819199fd97a9553a5e12`. `skills.list` returned 15 `superpowers:*` entries with no warnings. Reads succeeded for using-superpowers, brainstorming, writing-plans, test-driven-development, systematic-debugging, requesting-code-review, receiving-code-review and verification-before-completion. These verify access to design discussion, implementation planning, TDD, debugging, review and verification. No reinstall or restart is needed for this chat.

The official obra/superpowers README was checked from a temporary clone: Codex App uses **Plugins → Coding → Superpowers → +**; Codex CLI uses **/plugins → search Superpowers → Install Plugin**, via the official Codex marketplace. No installation was performed because the active chat already exposes the skills. The shell CLI is separate: `codex plugin marketplace list` found no marketplace in scope, and `codex plugin list` could not query the remote catalog. Cloud availability does not establish installation in another local CLI session or give a verified installed plugin version/commit. Recheck discovery if moving environments.

Codex app-server `skills/list` separately confirms:

| Name | Scope | Enabled | Parse errors |
| --- | --- | --- | --- |
| hallmark | repo | true | none |
| ui-ux-pro-max | repo | true | none |

Their paths remain `.agents/skills/hallmark/SKILL.md` and `.agents/skills/ui-ux-pro-max/SKILL.md`. `git diff main -- .agents skills-lock.json` is empty; installation payloads and provenance lock are unchanged. Earlier browser-tooling limitations in `DESIGN_SKILLS.md` still apply. Superpowers workflow checks here demonstrate readable workflows, not execution of an application TDD/debugging cycle.

## Design direction and review

`docs/design/DESIGN_SYSTEM.md` proposes an editorial evidence workbench: precise sans typography, aligned monetary tables, PRD color semantics, restrained white/navy surfaces, and a parallel two-test diagram as the signature object. It covers tokens, spacing, grids, charts, component anatomy, state handling, flow diagrams and accessibility. `DESIGN.md` points design skills to this project specification; `AGENTS.md` records engineering boundaries and PRD authority.

UI UX Pro Max queries run locally:

```sh
python3 .agents/skills/ui-ux-pro-max/scripts/search.py 'academic public finance policy research analytics source verification Swiss editorial' --design-system -p 'EFT RuleLab'
python3 .agents/skills/ui-ux-pro-max/scripts/search.py 'government public finance data analysis dashboard' --design-system -p 'EFT RuleLab'
python3 .agents/skills/ui-ux-pro-max/scripts/search.py 'Swiss typography grid' --domain style --max-results 2
python3 .agents/skills/ui-ux-pro-max/scripts/search.py 'Swiss Modernism 2.0' --domain style --max-results 1
python3 .agents/skills/ui-ux-pro-max/scripts/search.py 'comparison stacked bar waterfall' --domain chart --max-results 3
python3 .agents/skills/ui-ux-pro-max/scripts/search.py 'keyboard focus not obscured' --domain ux --max-results 2
```

The generator's generic portfolio/single-CTA layouts and remote font suggestions were rejected. Only relevant guidance was incorporated, with reasons recorded. Hallmark guidelines were read as critique; no random theme, automated redesign, product screenshot or completed browser audit is claimed. A fresh read-only builder check of the design and PRD returned **“nothing important left.”** The proposal remains subject to user review before application work.

## Validation and limitations

Checks: preserved baseline ancestry; main and original branch exist remotely; exact attachment-byte comparisons; unchanged installed skills and lock; current cloud skill discovery; local Codex skill parsing; source-manifest excerpt equality; local Markdown links; numeric token contrast; whitespace check on new documentation; documentation-only diff.

Contrast calculations use WCAG sRGB luminance. All specified normal-text roles exceed 4.5:1 against white and paper. Gold is explicitly restricted to graphics and paired with a darker text token. Browser layout, keyboard behavior, chart accuracy and P0 functional acceptance are future checks; no UI exists to test yet. No application tests are claimed. The full whitespace check flags original Markdown hard-break spaces and a final blank line in the byte-preserved attachments/source excerpt; these are intentionally retained. The check restricted to newly authored guidance and design documents passes.

GitHub API calls are blocked by `Forbidden` in this environment. The documentation branch can be pushed using the existing Git proxy; default-branch configuration and Pull Request creation require usable API access or manual GitHub controls. Do not infer that successful Git access establishes API authorization. No automatic merge.
