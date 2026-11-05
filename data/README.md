# Research data package

Local immutable seed files are transcribed from the supplied [PRD](../docs/product/EFT_RuleLab_PRD_v1.0_Codex.md), §§2, 7–10. They are source-referenced research records, not a claim of fresh primary-source inspection.

- `source-manifest.json`: S1 (94/2021, FY2022), S2 (101/2020, FY2021), and the supplied PRD, with years, sections, recorded pages, inherited PDF fingerprints and inspection notes.
- `fiscal-inputs-2022.json`: gross ADD and five source-referenced deductions; money is decimal-string integer rupiah.
- `rule-sets.json`: documented 85/12/3 and 75/18/7 shares expressed in basis points. No actual FY2021 monetary base is supplied.
- `positive-awards-2022.json`: the exact 20-entry positive-allocation transcription from PRD §8, including kecamatan, village, column/row/page locator and amount. Row numbers are within kecamatan, not official village codes.
- `kecamatan-coverage-2022.json`: nine coverage counts and positive-allocation subtotals. The 118 rows describe the allocation table, not an assessed universe.
- `evidence-register.json`: explicitly null/not-obtained historical assessments, assessed universe, selection rules, signed decisions, payment execution, ecological outcomes and original research records.

Derived deduction totals, residual, pool, ledger sum and gap are calculated at runtime in `src/domain/fiscal.ts`, not duplicated as production constants. JSON crosses `validateDataset` into readonly types and a deep-frozen object. Every fiscal/award/rule/coverage record carries a source ID, fiscal year, recorded PDF pages (empty only when the PRD did not record an exact page), locator, evidence type and note. Official-source labels denote the type of underlying record; inspection metadata states the supplied transcription path.

No OCR, search snippets or synthetic financial data were used. V4, the original official annex PDFs and V5/V6/V7 materials remain unavailable. The PDF SHA256 values are inherited from PRD §10, not recalculated here. The PRD Markdown hash is checked against the file in this repository. The complete source-context list remains in `docs/research/PRD_SOURCE_MANIFEST.md`.

Assessment-to-award selection is not implemented. Published amounts do not verify eligibility, cash delivery or ecological impact. A 2021-rule calculation uses the same FY2022 residual and is labeled counterfactual; it does not reconcile the historical recipient ledger or create village-level awards. The extraction experiment and additional P0 research interactions are reserved for the next phase.
