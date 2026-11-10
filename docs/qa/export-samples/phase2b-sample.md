# EFT RuleLab research audit

Generated locally: 2026-11-10T01:38:32.356Z
Dataset: 2022-prd-1.0-transcription-1; application 0.1.0; schema eft-rulelab-audit/1.

## Analytical state

FY2021 weights applied counterfactually to the fixed FY2022 residual; not actual FY2021 expenditure.
All amounts below are exact decimal integer rupiah.

## Historical fiscal inputs

Gross: 75897616000
- Fixed income for village heads and staff: 34851000000 (S1; Annex II, fiscal envelope)
- RT/RW incentives: 18986400000 (S1; Annex II, fiscal envelope)
- BPD allowances: 5833200000 (S1; Annex II, fiscal envelope)
- Village heads and staff allowances: 7905600000 (S1; Annex II, fiscal envelope)
- Preparatory-village operating assistance: 1344000000 (S1; Annex II, fiscal envelope)

Residual: 6977416000
Historical components: {"basic":"5233062000","formula":"1255934880","performance":"488419120"}
Selected components: {"basic":"5930803600","formula":"837289920","performance":"209322480"}

## Verification

Figure citation: EFT RuleLab FY2022 fiscal reconciliation PASS, gap 0 rupiah; recipient decision replay INCOMPLETE. S1 (Perbup 94/2021), Annex II PDF pp.17–21, inherited PRD transcription; dataset 2022-prd-1.0-transcription-1. No primary PDF inspection here.

Test 1: PASS; gap 0.
Test 2: INCOMPLETE.

## Published positive ledger

- Arang Limbung, Sungai Raya: 24420956; S1, PDF pp. 17, row 3
- Sungai Asam, Sungai Raya: 24420956; S1, PDF pp. 17, row 6
- Sungai Bulan, Sungai Raya: 24420956; S1, PDF pp. 17, row 10
- Limbung, Sungai Raya: 24420956; S1, PDF pp. 17, row 11
- Parit Baru, Sungai Raya: 24420956; S1, PDF pp. 18, row 17
- Sungai Enau, Kuala Mandor B: 24420956; S1, PDF pp. 18, row 5
- Sungai Radak Satu, Terentang: 24420956; S1, PDF pp. 18, row 6
- Teluk Bayur, Terentang: 24420956; S1, PDF pp. 19, row 9
- Batu Ampar, Batu Ampar: 24420956; S1, PDF pp. 19, row 2
- Sungai Jawi, Batu Ampar: 24420956; S1, PDF pp. 19, row 8
- Nipah Panjang, Batu Ampar: 24420956; S1, PDF pp. 19, row 9
- Sumber Agung, Batu Ampar: 24420956; S1, PDF pp. 19, row 13
- Medan Mas, Batu Ampar: 24420956; S1, PDF pp. 19, row 15
- Kubu, Kubu: 24420956; S1, PDF pp. 19, row 1
- Pinang Luar, Kubu: 24420956; S1, PDF pp. 19, row 5
- Sungai Terus, Kubu: 24420956; S1, PDF pp. 19, row 17
- Rasau Jaya Tiga, Rasau Jaya: 24420956; S1, PDF pp. 20, row 4
- Jeruju Besar, Sungai Kakap: 24420956; S1, PDF pp. 20, row 3
- Sungai Kupah, Sungai Kakap: 24420956; S1, PDF pp. 20, row 4
- Punggur Besar, Sungai Kakap: 24420956; S1, PDF pp. 21, row 10

## Extraction experiment

Research source: PRD §2.3; F06; T23–T26. Observed researcher-side extraction reported in the supplied PRD. The source-checked BPD remains in fiscal-inputs-2022.json; this experiment does not modify it or indicate government error.

Active: true; verified BPD 5833200000; selected BPD 5532000000; experimental pool 509503120; gap 21084000.
This scenario corrects a researcher-side document extraction discrepancy; it does not indicate an error or overpayment by the government.

## Methodology

Residual = gross ADD minus five deductions. Component = residual × basis points / 10000, exact integer arithmetic; reject fractional rupiah without an approved rounding convention. Historical gap = FY2022 performance pool minus immutable published award total. Extraction uses FY2022 weights in a separate workspace, independently of selected comparison rule.

## Missing evidence

- Approved historical assessment values: NOT_OBTAINED. Not obtained for this study; does not establish absence from government records.
- Actual assessed universe: NOT_OBTAINED. Not obtained for this study; does not establish absence from government records.
- Implemented selection, eligibility, exceptions, ties and rounding rules: NOT_OBTAINED. Not obtained for this study; does not establish absence from government records.
- Signed recipient-selection decisions: NOT_OBTAINED. Not obtained for this study; does not establish absence from government records.
- Actual payments: NOT_OBTAINED. Not obtained for this study; does not establish absence from government records.
- Ecological outcomes: NOT_OBTAINED. Not obtained for this study; does not establish absence from government records.
- V4 memorandum and original official annex PDFs: NOT_OBTAINED. Not obtained for this study; does not establish absence from government records.

## Sources and provenance

- S1: Peraturan Bupati Kubu Raya Nomor 94 Tahun 2021. Kabupaten Kubu Raya, 2021; FY 2022. https://jdih.kuburayakab.go.id/produkhukum/peraturan-bupati/2251
  Transcribed from supplied PRD; source scan check reported by prior V4 research, not repeated in this task. Recorded PDF pages: 17, 18, 19, 20, 21. SHA256 7466570493403de6160f00ad6b0c1a155bd340fe14b6891327a699c3b67d2c54; recalculated here: false.
- S2: Peraturan Bupati Kubu Raya Nomor 101 Tahun 2020. Kabupaten Kubu Raya, 2020; FY 2021. https://jdih.kuburayakab.go.id/produkhukum/peraturan-bupati/2357
  Transcribed from supplied PRD; source scan check reported by prior V4 research, not repeated in this task. Recorded PDF pages: 11, 12. SHA256 d7dac53dede693d98dba4fbb17354210a78afce264ee8de87bab2cd452cc2581; recalculated here: false.
- PRD: EFT RuleLab PRD v1.0. Researcher-supplied specification, 2026; FY not applicable. docs/product/EFT_RuleLab_PRD_v1.0_Codex.md
  Supplied Markdown read locally; no independent primary-source inspection. Recorded PDF pages: unavailable. SHA256 e0aa537dc25b59c4b88c028cb9c15353b5dafa116732e674e4431d45adced317; recalculated here: true.

Original V4 memorandum and official annex PDFs unavailable for fresh inspection; inherited PRD transcription.

Recipient decision replay remains INCOMPLETE; no inferred scores, selection rules or recipient set.

Published allocations do not establish payments, eligibility, fairness or ecological outcomes.
