# EFT RuleLab — Product Requirements Document (PRD)

**Versi:** 1.0 · **Tanggal penyusunan:** 5 November 2026 · **Status:** Perencanaan / implementation-ready, belum merupakan kode aplikasi

**Produk:** EFT RuleLab — *Trace the allocation. Test the evidence.*  
**Kasus:** Kabupaten Kubu Raya, Alokasi Dana Desa (ADD), Tahun Anggaran 2022  
**Konteks:** Prototipe penelitian pendamping esai International Academic Writing Competition (IAWC) 2026, Social Humanities.  
**Pemilik keputusan substantif:** Peneliti/peserta. **Pelaksana teknis berikutnya:** Codex.  
**Dokumen input:** V4 *EFT RuleLab: data recovery and MVP decision*; V5 `ACADEMIC-MEMO.md` dan `VALIDATION.md`; V6 essay planning; V7 essay, source audit dan daftar referensi; guidebook IAWC.

> **Aturan tertinggi:** Ini adalah alat untuk menelusuri data alokasi yang dipublikasikan, menghitung counterfactual komposisi anggaran, dan menjelaskan standar pembuktian keputusan. **Bukan** simulator untuk merekonstruksi skor desa yang tidak tersedia, bukan sistem penyaluran, dan bukan klaim tentang kesalahan/ketidakjujuran pemerintah.

---

## 1. Executive product brief

### 1.1 Masalah yang hendak dipecahkan

Peraturan resmi memuat formula pembiayaan dan daftar 20 alokasi kinerja positif. Total alokasi positif TA 2022 dapat dicocokkan persis dengan pagu kinerjanya, **selisih Rp0**. Namun kumpulan dokumen penelitian yang tersedia belum menyediakan data penilaian dan penghubung keputusan yang memungkinkan pihak luar menurunkan sendiri *mengapa* 20 desa tersebut tercantum. Pemeriksaan angka dan pemeriksaan seleksi penerima adalah dua pertanyaan yang berbeda.

Secara terpisah, struktur dana residual berubah dari **85/12/3 (aturan TA 2021)** ke **75/18/7 (aturan TA 2022)**. Ketika kedua struktur diaplikasikan pada **basis residual TA 2022 yang sama**, penurunan alokasi dasar dialihkan 60% ke komponen formula dan 40% ke komponen kinerja. Ini merupakan *counterfactual of policy composition*, bukan perubahan kas riil antar tahun.

### 1.2 Product vision

Membuat analisis tata kelola transfer fiskal yang **dapat ditelusuri dari klaim → sumber → perhitungan → keterbatasan**, serta mengubah protokol auditabilitas (ARP) menjadi alur yang dapat dipahami pengguna tanpa menyamakan ketidaklengkapan bukti dengan pelanggaran.

### 1.3 Value proposition dan unique contribution

- **Traceable fiscal arithmetic:** setiap angka kunci dapat diperiksa hingga halaman peraturan dan rumusnya.
- **Fixed-envelope policy counterfactual:** pembaca melihat *opportunity cost* komposisi pendanaan tanpa mencampurkan dua tahun dengan pagu berbeda.
- **Two-test accountability architecture:** Test 1 (rekonsiliasi pagu dan daftar alokasi) = **PASS**; Test 2 (rekonstruksi keputusan seleksi dari input historis yang tersedia) = **INCOMPLETE**.
- **Versioned research correction:** menampilkan bagaimana salah satu kesalahan ekstraksi *research-side* dapat menimbulkan selisih semu Rp21.084.000.
- **Operational policy blueprint:** flow diagram ARP menunjukkan dokumen, tanggung jawab, dan konsekuensi *match / discrepancy / incomplete*.

**Batas originality:** konsep rekonsiliasi, transparency, performance grants, dan sensitivitas sudah dikenal. Kontribusi yang diklaim hanya penerapan spesifik, jejak verifikasi, dan rancangan *withheld-target decision replay*; tidak mengklaim algoritma baru, bukti dampak lingkungan, atau adopsi institusional.

### 1.4 Sasaran pengguna

| Persona | Pekerjaan yang ingin diselesaikan | Kebutuhan penting |
|---|---|---|
| Juri/pembaca esai internasional | Memahami research puzzle dalam <45 detik | Narasi English, source links, 2 hasil utama yang jelas |
| Peneliti/mahasiswa | Mengulang perhitungan dan memeriksa sumber | Rumus dapat diekspor, angka presisi, ledger dan source page |
| Reviewer fiskal/pemerintahan daerah | Memahami bukti yang cukup untuk dua tes | Assessment vs allocation dipisahkan; prosedur ARP eksplisit |
| Publik/pemerintah desa | Mengetahui mana yang bisa dan belum bisa dijelaskan | Bahasa sederhana, keterbatasan tidak menyalahkan pihak tanpa bukti |

### 1.5 Success metrics yang dapat diuji

- **100%** input angka dan jumlah desa publikasi yang digunakan aplikasi punya provenance (sumber, halaman, status).
- **0** hasil aritmetika meleset dari fixtures V4/V5 untuk seluruh tes wajib.
- Pengguna baru dapat menyebutkan perbedaan Test 1 vs Test 2 setelah *guided demo* 45–60 detik (uji kualitatif, bukan klaim sudah diukur).
- Tidak ada UI yang menyebut “allocation error”, “corruption”, “failed eligibility”, “ecological impact”, atau “cash disbursed” sebagai temuan historis.
- Dashboard tidak mengalami page-wide horizontal overflow di 320, 390, 768, 1024, dan 1440 CSS px.
- Link sumber, sumber data, perhitungan dan batas inferensi tetap dapat ditemukan tanpa membaca dokumen pendamping.

### 1.6 Non-goals (tegas)

Tidak membangun: skor kinerja desa fiktif; model pemilihan top-20 tanpa dokumen; penilaian fairness otomatis; prediksi konservasi; GIS atau remote-sensing; crawling live ke portal pemerintah; rekomendasi penerima bantuan; portal pengaduan aktif; audit legal; pembuktian transfer kas aktual; login/database; chatbot generatif; AI scoring.

---

## 2. Evidence charter — wajib dipatuhi Codex

### 2.1 Jenis label evidensi (ditampilkan konsisten)

| Kode | Label Inggris UI | Arti |
|---|---|---|
| `OFFICIAL_SOURCE` | **Published source record** | Tertulis dalam instrumen yang diacu; historis sesuai tahun dan versi |
| `DERIVED` | **Reproduced calculation** | Dihitung deterministik dari data sumber, dapat diverifikasi ulang |
| `FIXED_BASE_COUNTERFACTUAL` | **Counterfactual · same FY2022 base** | Aturan tahun lain diterapkan pada basis residual TA2022 yang sama |
| `RESEARCH_EXTRACTION_TEST` | **Research-side extraction test** | Ilustrasi dari kesalahan ekstraksi yang terdokumentasi dalam workflow riset; bukan perubahan input pemerintah |
| `NOT_OBTAINED` | **Not obtained for this study** | Penelitian belum memiliki input; tidak berarti input tidak ada di pemerintah |
| `PROPOSED_PROTOCOL` | **Proposed verification procedure** | Desain normatif ARP; bukan prosedur historis yang sudah diverifikasi |
| `CONTEXTUAL_RESEARCH` | **Published research / guidance** | Literatur akademik atau petunjuk teknis; tidak otomatis membuktikan fakta lokal |

Jangan menggunakan istilah **verified recipient eligibility**, **actual payment**, **environmental outcome**, **government error**, atau **officially validated by Kubu Raya**.

### 2.2 Fakta yang sudah dapat menjadi baseline

Semua nilai nominal integer rupiah; daftar sumber dan batasnya ada pada Bagian 10.

| ID | Variabel | Nilai |
|---|---|---:|
| `gross_add_2022` | Gross ADD TA 2022 | 75,897,616,000 |
| `deduction_fixed_income` | Penghasilan tetap kepala/perangkat desa | 34,851,000,000 |
| `deduction_rt_rw` | Insentif RT/RW | 18,986,400,000 |
| `deduction_bpd` | Tunjangan BPD, hasil periksa scan | **5,833,200,000** |
| `deduction_other_allowances` | Tunjangan kepala/perangkat desa | 7,905,600,000 |
| `deduction_preparatory` | Bantuan operasional desa persiapan | 1,344,000,000 |
| `deductions_total` | Total lima potongan | **68,920,200,000** |
| `residual_add` | Dana ADD residual | **6,977,416,000** |
| `rule_2021` | Proporsi dasar/formula/kinerja TA2021 | **85% / 12% / 3%** |
| `rule_2022` | Proporsi dasar/formula/kinerja TA2022 | **75% / 18% / 7%** |
| `performance_pool` | 7% × residual | **488,419,120** |
| `positive_awards` | Jumlah alokasi kinerja positif yang tercantum | **20** |
| `award_per_positive_entry` | Nilai tiap alokasi kinerja positif | **24,420,956** |
| `published_award_sum` | Total 20 alokasi positif | **488,419,120** |
| `pool_to_ledger_gap` | Selisih | **0** |
| `published_alloc_rows_2022` | Jumlah baris desa dalam tabel ADD | **118**, bukan bukti 118 peserta asesmen |
| `subdistricts_covered` | Jumlah kecamatan dalam tabel ADD | **9** |

**Terminologi:** Gunakan `ADD (district-to-village transfer)` dan bedakan dari `Dana Desa (national village fund)`. Pagu kinerja 7% **dari residual**, sekitar **0,644% dari gross ADD**, bukan 7% dari gross ADD. Bobot ekologis 45% adalah **bobot indikator penilaian**, bukan earmark dana ekologi.

### 2.3 Skenario terkontrol

**Struktur TA2021 pada residual TA2022 (counterfactual):**
- Basic: 5,930,803,600;
- Formula: 837,289,920;
- Performance: 209,322,480.

**Struktur TA2022 pada residual TA2022 (baseline):**
- Basic: 5,233,062,000;
- Formula: 1,255,934,880;
- Performance: 488,419,120.

**Perubahan fixed-base:**
- Basic: −697,741,600;
- Formula: +418,644,960;
- Performance: +279,096,640;
- Net change: **0**.

**Dimensi bobot penilaian kinerja TA2022:** ecology/climate 45%, BUMDes 10%, gender-responsive development 15%, village financial governance 30%. Total = 100%. Jangan mengonversi bobot penilaian menjadi estimasi penyaluran dana berdasarkan dimensi.

**Observed research-extraction test:** BPD terbaca salah sebagai **5,532,000,000**; dengan input salah pool terhitung **509,503,120** dan selisih semu terhadap published awards **21,084,000**; setelah koreksi kembali **0**. Angka salah **hanya** hidup di test mode, tidak pernah menimpa dataset publikasi.

### 2.4 Yang tidak dapat disimpulkan

- Dua puluh penerima memang tercantum dengan alokasi positif, **tetapi** ambang/ranking/exception/score dan mekanisme final yang menurunkannya belum direproduksi.
- Tanda dash atau nol alokasi positif di lampiran tidak boleh diterjemahkan menjadi skor nol, peserta asesmen yang gagal, atau ketidaklayakan.
- Alokasi yang dipublikasikan bukan bukti penyaluran kas atau belanja aktual.
- Pembandingan 2021/2022 di dalam aplikasi tidak boleh dipresentasikan sebagai perubahan aktual antar tahun.
- Ketidakterolehan assessment register tidak membuktikan pemerintah tidak menyimpannya atau melanggar aturan.

---

## 3. Product scope dan prioritas rilis

### 3.1 Definisi milestone

- **P0 / Research MVP:** seluruh alur evidensi utama dan demonstrasi berhasil; ini batas rilis minimum.
- **P1 / Competition-quality:** peningkatan interaksi, visualisasi, ekspor dan presentasi setelah P0 terbukti benar.
- **P2 / Future research:** fitur terpisah yang menuntut sumber baru, izin, atau waktu tambahan; tidak boleh menghambat pengiriman MVP.

### 3.2 Feature backlog ringkas

| ID | Feature | Prioritas | Output / alasan |
|---|---|---|---|
| `F01` | Narrative overview + evidence status | P0 | Pemahaman research puzzle pada first screen |
| `F02` | Fixed-base Fiscal Policy Studio | P0 | Dua rule set + perbandingan nilai dan 60/40 redistribution |
| `F03` | Fiscal Envelope Trace | P0 | Gross → potongan → residual → 3 komponen |
| `F04` | 20 Positive-Award Ledger | P0 | Search, filter, subtotal dan sumber per entri |
| `F05` | Two-Test Verification Flow | P0 | PASS vs INCOMPLETE tanpa false allegation |
| `F06` | Research-Side Source Correction | P0 | Angka BPD salah/benar, dua state terpisah |
| `F07` | ARP Protocol Flow & Decision States | P0 | Prosedur usulan: match/discrepancy/incomplete |
| `F08` | Source Library + Evidence Inspector | P0 | Claim-to-source/page/status |
| `F09` | Guided 45–60s Demo | P0 | Alur juri jelas dan dapat dipakai tanpa fasilitator |
| `F10` | Audit Notes + JSON / CSV / Markdown export | P0 | Artefak reproducibility; jangan mengubah published inputs |
| `F11` | Responsive + keyboard + chart accessible data table | P0 | Aksesibilitas dan reliabilitas |
| `F12` | Awards-by-Kecamatan Chart | P1 | 9 wilayah; 20 alokasi positif; bukan skor lingkungan |
| `F13` | Assessment Weight Explainer | P1 | 45/10/15/30; bukan earmarking |
| `F14` | Figure export PNG / SVG | P1 | Untuk esai, lampiran dan presentasi |
| `F15` | Custom Composition Sandbox | P1 | Kontrafaktual 100% sum, tanpa desa/seleksi |
| `F16` | Bilingual English/Indonesian UI | P1 | English default; angka tetap label konsisten |
| `F17` | Print-friendly appendix / report | P1 | Mempermudah dokumentasi dan sitasi |
| `F18` | Presentation/focus mode | P1 | Layar lebar, keyboard step-through |
| `F19` | Full 118-row annex transcription | P2, data gated | Hanya setelah seluruh entri source verified |
| `F20` | Real historical decision replay | P2, evidence gated | Hanya jika register + keputusan + aturan diperoleh |
| `F21` | Historical amendment/payment verification | P2, evidence gated | Perlu sumber tambahan dan pencocokan versi |

**Penting:** `F20` bukan fitur yang boleh dibangun dengan angka atau desa sintetis lalu ditampilkan sebagai hasil TA2022.

---

## 4. Information architecture & navigation

**Rekomendasi:** aplikasi web statis bergaya **editorial research narrative**, bukan grid KPI administratif. Hindari semua konten berupa kartu-kartu seragam. Gunakan ruang putih, visual utama lebar, panel penjelas tipis, angka tabular, dan alur naratif yang bertahap.

### 4.1 Route / section map

| Route | Nama layar (English UI) | Pertanyaan pengguna |
|---|---|---|
| `/` | **The Research Question** | What can the records actually prove? |
| `/policy` | **Policy Studio** | What shifts within a fixed budget? |
| `/trace` | **Follow the Funds** | How do the published pool and awards reconcile? |
| `/awards` | **The Award Ledger** | Which 20 positive amounts were published, and where? |
| `/verify` | **Verification Lab** | Why do two accountability tests give different statuses? |
| `/protocol` | **ARP: From Records to Decisions** | How should a future reviewer reproduce selection? |
| `/sources` | **Sources & Method** | Where did every number come from and what is missing? |

Implementasi boleh memakai satu halaman dengan anchor sections **jika** URL/hash, deep links, browser history, dan navigation state tetap jelas. Hindari library routing berlebihan jika manfaatnya kecil.

### 4.2 Persistent application chrome

- Brand wordmark `EFT RuleLab`; subline `Kubu Raya · FY2022 · Research Prototype`.
- Navigation: Overview / Policy / Funds / Awards / Verification / Protocol / Sources.
- Context chip yang selalu terlihat: `Historical source`, `Fixed-base counterfactual`, `Extraction test`, atau `Proposed protocol` sesuai layar/state.
- `Start Guided Demo` action; `Sources` direct link.
- Footer: *Independent research demonstration · Not an official Kubu Raya system · No actual payments or ecological outcomes verified.*

### 4.3 First-fold content (harus dapat dipahami dalam 5 detik)

**Hero headline:** `The numbers reconcile. Can the decision be reproduced?`

**Subline:** `Kubu Raya's published FY2022 performance allocation balances exactly. Reconstructing why these 20 villages received positive awards requires different records.`

Side-by-side editorial results, bukan 6 decorative KPI boxes:
- **Rp488.42m** — Published performance allocation pool. `Reproduced from FY2022 residual`.
- **Rp0** — Pool-to-ledger discrepancy. `Test 1: PASS`.
- **INCOMPLETE** — Recipient decision replay. `Test 2: historical assessment records not obtained`.

Di bawah hero tampil satu visual ringkas yang menghubungkan *allocation* dan *decision*, lalu CTA `Explore the evidence`.

---

## 5. Full functional requirements / user stories

### F01 — Overview / Narrative Gateway (P0)

**User story:** Sebagai juri, saya ingin mendapatkan inti persoalan penelitian dan keterbatasan bukti tanpa harus memahami regulasi Indonesia terlebih dulu.

**Elemen UI:** editorial hero; dua verifikasi yang dibedakan; definisi `ADD`, `performance allocation`, `reconciliation`, dan `recipient decision replay`; ringkasan metode (historical documentary reconstruction); CTA ke demo dan sumber.

**Acceptance criteria:**
1. Tidak ada kesan pemerintah telah melakukan salah alokasi.
2. Figure kecil menunjukkan Test 1 PASS / Test 2 INCOMPLETE secara bersamaan.
3. Penjelasan `Test 2` eksplisit menyebut *records obtained for this research*.
4. Semua angka berasal dari verified seed dataset, bukan hard-code terpisah.

### F02 — Policy Studio / Fixed-base Comparison (P0)

**User story:** Saya dapat membandingkan dua struktur aturan yang berbeda pada **satu basis pendanaan yang sama**.

**Komponen:** dua 100% horizontal stacked bars (85/12/3 vs 75/18/7); strip delta rupiah tiga komponen; directional *allocation shift* visual; 60/40 interpretation; tabel data accessible; source annotations; label “FY2021 rule applied counterfactually to FY2022 residual”.

**Interactions:** hover/focus segment → percentage, rupiah, status; toggle `Show values in Rp / %`; compare rules tanpa mengubah dataset; `View derivation` membuka formula panel. Tombol `Reset to documented comparison`.

**Rumus:** `component = residual * percent / 100` dengan bilangan bulat dan validasi persis. `delta = value_2022rule - value_2021rule`.

**Acceptance criteria:**
1. Ketiga nilai di kedua rule set sesuai fixtures.
2. Selisih basic −697,741,600; formula +418,644,960; performance +279,096,640.
3. Jumlah semua delta = 0.
4. Komposisi pengalihan basic 60% formula, 40% performance.
5. TIDAK ada label `actual FY2021 spending` atau `villages that gained/lost`.
6. Ketika pengguna memilih FY2021 rule, published 2022 recipient ledger tidak ditampilkan sebagai hasil FY2021 counterfactual.

### F03 — Fiscal Envelope Trace (P0)

**User story:** Saya ingin mengikuti uang dari pagu gross hingga pool kinerja dengan mengetahui semua potongan.

**Diagram:** horizontal/vertical **funding waterfall** / connected steps:
`Gross ADD 75,897,616,000` → `Five deductions −68,920,200,000` → `Residual 6,977,416,000` → `Basic 75% / Formula 18% / Performance 7%`.

**Interactions:** expand five deductions; select item → source inspector (official PDF page 17); switch number format `Full Rp` / `Rp billion` with unit written; inspect formula with substitution. **No arbitrary editing** of official figures in this module.

**Acceptance criteria:** all sums exact; prevent rounding ambiguity; performance 7% visibly described as residual share; 0.644% gross distinction in note. Waterfall scale honest and not imply residual funding is extra money beyond gross.

### F04 — Published Positive-Award Ledger (P0)

**User story:** Saya ingin menemukan suatu desa, melihat alokasi positif yang tercantum dan membuka baris dokumen sumber.

**Data:** 20 `positive allocation` entries; 9 kecamatan coverage totals/positive counts; page/row source locators.

**UI:** searchable/sortable table; filter by kecamatan; contextual count `20 positive entries in the published allocation annex`; total always full-ledger sum when unfiltered; filtered subtotal labelled separately; source column with page/row; list can be copied/exported; `No matching village` empty state.

**Acceptance criteria:**
1. Search di `village_name` dan `kecamatan`, case/accent-insensitive.
2. `20` positive entries unique by kecamatan+village; every value Rp24,420,956.
3. Source PDF `p.17–21` and row shown for each.
4. Filtered subtotal tidak mengganti global total.
5. 118 hanya disebut `allocation-table rows`, bukan assessed population.
6. Blank/dash outside 20 positive entries tidak disulap menjadi `failed` atau `0 score`.

### F05 — Two-Test Verification Flow (P0 — centerpiece)

**User story:** Saya ingin memahami mengapa sebuah angka yang benar tidak menjelaskan mekanisme keputusan.

**Flow diagram 1: `Two Different Tests`** (utama; interaktif via click/focus)

- **Evidence track A:** Gross ADD + 5 deductions + documented 7% rule → computed pool → compare with sum of published positive entries → **Test 1: PASS / Rp0**.
- **Evidence track B:** Approved historical assessment values + actual assessed universe + implemented eligibility/selection/award function + signed decision records → independently derived recipient set/amounts → compare with published ledger → **Test 2: INCOMPLETE** (*inputs not obtained by this research*).
- Visual **tidak** menempatkan Test 2 sebagai langkah yang sudah dieksekusi; tampil sebagai *unavailable evidence branch*, bukan panah seolah-olah datanya telah diproses.

**Interaction:** klik node membuka panel `What we have`, `What we need`, `What follows / does not follow`, `Source`. Connector arrows jelas, keyboard/focus operable, transcript teks tersedia.

**Acceptance criteria:** Test 2 selalu INCOMPLETE pada historis seed 2022. Tidak ada kalkulasi seleksi. Test 1 PASS bukan bukti Test 2 PASS. Untuk research-error mode Test 1 berubah menjadi **apparent mismatch in extracted input**, bukan FAIL of government.

### F06 — Document Extraction Integrity (P0)

**User story:** Saya ingin melihat dampak salah transkripsi satu input terhadap hasil analitis dan pentingnya memeriksa scan asli.

**States:** verified official scan **default** vs `Replay observed research-side extraction` (explicit opt-in); side-by-side BPD amount 5,833,200,000 vs 5,532,000,000; calculated pool 488,419,120 vs 509,503,120; gap 0 vs +21,084,000. CTA `Restore verified source value`.

**Copy wajib:** `This scenario corrects a researcher-side document extraction discrepancy; it does not indicate an error or overpayment by the government.`

**Acceptance criteria:** verified baseline immutable, loaded first; the test never overwrites source JSON; `test mode` header amber/neutral; source page link; always show the **published awards remain Rp488,419,120**; restore resets gap zero.

### F07 — ARP Protocol Workflow (P0)

**User story:** Reviewer melihat prosedur verifikasi yang diusulkan, syarat evidensi dan keputusan lanjutan yang proporsional.

**Flow diagram 2: `Proposed Allocation Reproducibility Protocol`**:

1. Identify dated legal instrument and budget version.
2. Confirm gross envelope, five deductions and component shares.
3. Recalculate pool and reconcile published amounts (**Test 1**).
4. Retrieve approved assessment register, source years, assessed universe and verification status.
5. Retrieve implemented eligibility/selection, exception, tie and rounding rules.
6. **Withhold target roster** and independently derive identities + amounts (**Test 2**).
7. Compare derived result with published ledger.
8. Route to `MATCH` / `DISCREPANCY` / `INCOMPLETE`.
9. Log source versions, missing evidence, reviewer and responsible office; decide whether existing documents can simply be indexed or a small export is justified.

**Copy:** `A proposed reviewer workflow, not a reconstruction of the 2022 administrative procedure.`

**Three outcome panels:**
- **MATCH:** Both recipient identity set and amounts match within documented rounding rules; not proof fairness/outcomes.
- **DISCREPANCY:** Show the record/amount causing disagreement, request authoritative clarification; not automatic culpability.
- **INCOMPLETE:** Name the absent necessary inputs, stop the affected replay; no manufactured success or failure.

**Interaction:** stepper, expand records, `Who would be responsible?` proposed roles labelled pending institutional confirmation. Do not let users claim 'certified ARP pass' for actual Kubu Raya historical selection.

**Acceptance criteria:** flow diagram rendered as accessible SVG and printable; links between nodes correct; statuses semantic and non-accusatory. Direct SVG/PNG file download is P1 (`F14`).

### F08 — Sources, Provenance and Evidence Inspector (P0)

**User story:** Saya bisa membuka dokumen primer, halaman yang relevan, dan membaca alasan status suatu angka atau klaim.

**UI:** global source drawer accessed from each number/figure; full research source register; filter `Official regulations`, `Academic research`, `Technical guidance`, `Research artifact`; search field/ID. Show source title, institution/year, fiscal-year scope, page/annex/section, stable URL, SHA256 where known, nature of inspection, limitations.

**Acceptance criteria:**
1. All fiscal data fields have `source_id`, `pdf_page`, `status`, `note`.
2. Sources launch in new tab with safe `rel="noopener noreferrer"`; `#page=` appended only for actual PDF URL if useful and supported.
3. Do not infer source pages that have not been recorded.
4. Legal/source status is historical, not current implementation claim.
5. Build runs without fetching official PDFs at runtime.

### F09 — Guided Demo (P0)

**User story:** Juri melihat proposisi utama secara mandiri dalam 45–60 detik.

**Flow:**
- **0–10s:** overview, `Rp488.42m / Rp0 / incomplete`.
- **10–22s:** policy split change (85/12/3 vs 75/18/7), 60/40 destination of released basic funds.
- **22–34s:** funding source → 20 entries → Test 1 PASS.
- **34–45s:** Test 2 INCOMPLETE and difference between accounting and recipient decision.
- **Optional 45–60s:** extraction-error correction and proposed ARP to resolve the *research evidence requirement* in future.

**Features:** guided next/back step buttons; `Exit tour`; keyboard arrows; reduced-motion support; progress indicator; no timed auto-skip required. Tour works without internet once app assets load.

**Acceptance criteria:** tour never misrepresents counterfactual as actual; no unnecessary scroll-jank; all tour text visible on mobile.

### F10 — Research Audit Exports (P0)

**User story:** Saya dapat memperoleh laporan perhitungan dan provenans yang dapat dipakai dalam lampiran penelitian.

**Exports:**
- **JSON**: schema version, source references, inputs, formulas, selected analytical state, output, evidence statuses, missing fields, local export timestamp (not fabricated audit date).
- **CSV**: immutable 20 positive-award ledger, UTF-8 BOM optional for Excel, headers clearly labelled.
- **Markdown**: concise audit note (inputs, computations, Test 1, Test 2 unavailable, counterfactual status, sources, limitations).
- `Copy Citation` for source links and figure caption; source metadata accurate (APA-style only if bibliographic fields verified).

**Acceptance criteria:** deterministic file content except generated timestamp; no secret or personal data; export of counterfactual includes disclaimer; extraction test export preserves wrong and verified values as separately labelled states. Download failure -> on-screen copyable text and explicit status.

### F11 — UX, accessibility and performance (P0)

- Text/charts understandable without colour, tooltip accessible via focus/click.
- Chart data tables available for screen readers and source inspection.
- No content depends on hover only.
- Keyboard navigation, visible focus, ARIA text for flow diagrams, target size ≥ 40px where feasible.
- WCAG AA contrast target, font scaling works, `prefers-reduced-motion` respected.
- No loading spinners for bundled static local data; explicit errors if asset/parse fails.
- Navigation and source citation open via semantically correct links/buttons.
- Responsive 320, 390, 768, 1024, 1440 px; table horizontal overflow contained in its region.

### F12 — Awards by Kecamatan (P1)

Nine horizontal bars with count of positive published entries: Sungai Raya 5; Kuala Mandor B 1; Sungai Ambawang 0; Terentang 2; Batu Ampar 5; Kubu 3; Rasau Jaya 1; Teluk Pakedai 0; Sungai Kakap 3. Optional subtle labels `allocation-table rows` separately (20,5,15,10,15,20,6,14,13) but never plot `success rate` because assessed universe unknown. Source: transcribed Annex II coverage check in V4.

### F13 — Performance Assessment Weight Explainer (P1)

Composition diagram 45/10/15/30 (ecology, enterprise, gender, financial governance), includes short descriptions from legal criteria. Mandatory banner `Assessment weights — not expenditure shares or measured outcomes`. Distinguish assessment architecture from actual scores and disbursement.

### F14 — Chart exports (P1)

Allow download current Figure 1 comparison and Figure 2 verification flow as SVG/PNG with descriptive caption, source and counterfactual note embedded or adjacent in export. Ensure SVG no external fonts/assets. Optional visual `copy link to view` route/hash without persisting mutable hidden state unless query validated.

### F15 — Optional Policy Composition Sandbox (P1, separate mode)

A **strictly segregated normative counterfactual**: user adjusts basic/formula/performance shares while they sum exactly to 100% (integer percentages or basis points). Show only allocation **component totals** and opportunity cost; **never** generate a hypothetical 20-village award distribution or ecological results. Label `Exploratory policy mix — not Kubu Raya's 2022 rule`. Provide reset button to historical rules; exclude from core guided demo. Prevent `published allocation reconciles` status from being applied to this sandbox.

### F16–F18 — Presentation polish (P1)

- UI English by default; Indonesian localisation with separately reviewed wording; never translate regulatory names inaccurately.
- Research report print stylesheet; optional PDF export via browser print rather than heavy client-side converter.
- Presentation mode for projector 16:9 with a short guided path; no need for auto-presentation or animated theatre effects.

### F19–F21 — Future, explicitly blocked (P2)

- Full 118-row dataset only with reliable transcription and human checks.
- True recipient decision replay only after authoritative scored register + universe + executed rule + decision version acquired and independently reconciled.
- Payment claims only after transfer/execution data obtained.

---

## 6. UX design system & visual specification

### 6.1 Design direction

**Visual character:** academic research journal × institutional decision-support tool × restrained consulting visualization. Spacious editorial layout, one focal message per section, limited panels, purposeful rules/dividers, not a mosaic of rounded cards.

**Default language:** English; Indonesian terms introduced precisely (ADD, BPD, BUMDes, Dana Desa). Currency displays `Rp` with full precision when needed.

### 6.2 Design tokens (starting values, may be tuned for contrast)

| Role | Token | Hex |
|---|---|---|
| Primary text / authoritative fiscal structure | `navy-900` | `#102B4E` |
| Secondary navy | `navy-700` | `#244B72` |
| Verified analytical result | `teal-700` | `#126B70` |
| Performance allocation accent | `gold-600` | `#B8832E` |
| Incomplete / caution | `amber-700` | `#9C6421` |
| Secondary ink | `slate-600` | `#596B7E` |
| Dividers | `slate-200` | `#DCE3EA` |
| Background | `paper` | `#FAFBFC` |
| Surfaces | `white` | `#FFFFFF` |
| Genuine discrepancy only | `red-700` | `#A23D35` |

Aksesibilitas warna harus diuji ulang; jangan menggunakan gold kecil sebagai text low-contrast di atas putih tanpa adjustment.

**Typography:** Inter/Arial atau system sans untuk interface (tanpa CDN), tabular-nums untuk nominal, serif opsional hanya pada headline editorial. Maksimal 2 keluarga font; prefer sistem tanpa asset font eksternal. Mobile body ≥ 14px, konten utama ideal 16px; judul responsif.

**Charts:** Basic = navy; Formula = teal/light blue; Performance = gold. **Incomplete** = amber outline/dashed, bukan red. Label counterfactual selalu terlihat, bukan tersembunyi di tooltip.

### 6.3 Visual hierarchy / layouts

- Header editorial tipis + top-level navigation.
- Landing hero menggunakan split asymmetric layout: headline dan research statement kiri, slender evidence rail kanan; pada mobile di-stack.
- Policy Studio: figur stacked compare besar di tengah, 3-delta rail di bawah, notes sebagai margin annotation.
- Fiscal Trace: connected waterfall/steps atas, 5 deductions expandable di bawah, ledger link.
- Verification Lab: **forked parallel flow** bukan timeline linear yang mengimplikasikan Test 2 sudah berhasil.
- ARP: full-width process graphic dengan decision nodes, drill-down inspector di samping/overlay yang bisa diakses keyboard.
- Sources: tabel akademik rapat tapi berjarak, filter kategori dan membuka provenance drawer.
- Jangan gunakan foto stok atau peta untuk Kubu Raya: tidak memperkuat kasus dan bisa mengimplikasikan informasi spasial yang tidak dianalisis.

### 6.4 Diagram definitions

**Diagram D1 — Two-Test Evidence Architecture (main interactive flow)**

```text
      OFFICIAL FISCAL INPUTS                         HISTORICAL DECISION INPUTS
      ┌───────────────────────────┐                ┌────────────────────────────┐
      │ Gross ADD, deductions, 7% │                │ Assessment register        │
      │ and published award ledger│                │ Universe, scores, rule,    │
      └─────────────┬─────────────┘                │ approved decision         │
                    ▼                              └──────────────┬─────────────┘
          Recalculate funding pool                               ▼
                    ▼                                  Withhold target roster;
          Compare 20 published awards                   independently derive awards
                    ▼                                            ▼
           TEST 1: PASS · Rp0                          TEST 2: INCOMPLETE
                                                          (inputs not obtained)
```

**Diagram D2 — Proposed ARP workflow (method/procedure)**

```text
Source & version registry
       ↓
Budget reconstruction ──→ TEST 1: match / difference / incomplete
       ↓
Retrieve approved assessment records
       ↓
Verify universe, transformations and selection rule
       ↓
Withhold published target roster and compute independent result
       ↓
Compare identity set + individual amounts
       ↓
   ┌───────────┬────────────────┬──────────────────┐
   │ MATCH     │ DISCREPANCY    │ INCOMPLETE       │
   │ document  │ investigate    │ request records  │
   └───────────┴────────────────┴──────────────────┘
       ↓
Versioned explanation + record owner + correction/response log
```

**D2 is proposed only.** UI default for Kubu Raya 2022 must show Test 2 as incomplete, not a simulated result of this flow.

### 6.5 Copy / terminology guardrails

Use: `published positive performance allocations`, `FY2022 residual`, `counterfactual rule composition`, `not obtained for this study`, `unable to independently replay`, `proposed verification step`, `source-checked research input`.

Avoid: `winners based on environmental performance`, `98 villages failed`, `equal scores`, `government misallocated Rp21.08m`, `misused money`, `cash delivered`, `proven sustainability benefits`, `guaranteed compliance`, `real-time data`, `official audit`.

---

## 7. Data contract — schema, immutability, calculations

### 7.1 Data organization (recommended)

Treat dataset as immutable versioned static assets bundled into the app. Separate source transcript, formulas and UI states:

```text
src/data/source-manifest.json
src/data/fiscal-inputs-2022.json
src/data/rule-sets.json
src/data/positive-awards-2022.json
src/data/kecamatan-coverage-2022.json
src/data/research-extraction-case.json
src/data/evidence-register.json
src/data/scientific-context.json
src/domain/fiscal-engine.ts
src/domain/evidence-status.ts
src/domain/export-model.ts
```

Names are guidance, not literal files that already exist.

### 7.2 Type contracts (conceptual, implementation may evolve)

```ts
type EvidenceType =
  | 'OFFICIAL_SOURCE' | 'DERIVED' | 'FIXED_BASE_COUNTERFACTUAL'
  | 'RESEARCH_EXTRACTION_TEST' | 'NOT_OBTAINED'
  | 'PROPOSED_PROTOCOL' | 'CONTEXTUAL_RESEARCH';

type AmountRp = string; // nonnegative decimal integer, no separators

interface SourceRecord {
  id: string;
  title: string;
  issuingBody: string;
  publicationYear?: number;
  fiscalYear?: number;
  url: string;
  relevantPages?: number[];
  articlesOrSections?: string[];
  sha256?: string; // only if inherited/verified from source report
  accessNote: string;
}
interface FiscalInput {
  id: string;
  label: string;
  amountRp: AmountRp;
  sourceId: string;
  pdfPage: number;
  evidenceType: 'OFFICIAL_SOURCE';
  note?: string;
}
interface AwardRecord {
  fiscalYear: 2022;
  kecamatan: string;
  village: string;
  amountRp: AmountRp;
  sourceId: string;
  pdfPage: number;
  sourceRow: number;
  recordType: 'published_positive_allocation';
}
interface CoverageRecord {
  kecamatan: string;
  allocationTableRows: number;
  positiveAllocationRows: number;
  performanceSubtotalRp: AmountRp;
}
interface RuleSet {
  ruleFiscalYear: 2021 | 2022;
  sourceId: string;
  shares: {basicBp: number; formulaBp: number; performanceBp: number};
}
interface ScenarioContext {
  kind: 'HISTORICAL_2022' | 'FIXED_BASE_2021_RULE'
    | 'RESEARCH_EXTRACTION_ERROR' | 'EXPLORATORY_POLICY_MIX';
  dataVersion: string;
}
```

Keep `performance_scores_2022`, `assessment_universe_2022`, `executed_selection_rule`, `payment_execution` explicitly `null`/`not_obtained` in evidence registry, not a zero or empty array construed as a known fact.

### 7.3 Financial engine constraints

- Prefer JavaScript **BigInt** for rupiah integer arithmetic. JSON numeric seed values stored as decimal strings, parsed strictly; no JS floating money arithmetic.
- Percentages as basis points (`7500/1800/700` etc.) with integer scale 10,000; when dividing validate remainder, or use explicit documented rounding convention only when necessary.
- Fiscal engine is pure deterministic function. Same dataset/version/state → same calculation.
- Reject malformed strings, negative values, duplicate source IDs, duplicate village composite IDs, missing required inputs, unsupported rule years and percentages not adding to 100%.
- Do not silently invent rounding to paper over discrepancies.
- Derived fields computed from source values, not separately hardcoded for production display. Fixtures hardcoded *only inside tests*.
- Source record cannot be modified from the UI; toggled extraction value is a scenario override in memory.
- No official database update or API call.

### 7.4 Reconciliation rules

**Budget:** `F = Σ five deductions`, `R = P − F`, `K = R × 7 / 100`.

**Published ledger:** `L = Σ 20 positive allocations`.

**Test 1:** `gap = K − L`; `PASS iff gap === 0`, all required inputs available and valid. (Known source rounding is exact in this bounded check.)

**Test 2:** no historical assessment inputs, hence `INCOMPLETE`; do not use a test-engine `FAIL`, `PASS`, or synthetic fixture as historical result.

**Research extraction test:** rerun only affected calculation, keep `L` unchanged, label `apparent mismatch based on erroneous research extraction`.

**Policy counterfactual:** same residual R and percentages 85/12/3 vs 75/18/7; `Σ delta=0` and all 2021-rule amounts explicitly `counterfactual`. No village-level counterfactual.

---

## 8. Seed dataset — 20 positive allocations (full ledger)

Sumber: V4 Lampiran A, rujukan Perbup Kubu Raya 94/2021 Lampiran II, kolom 27, PDF pp.17–21. Nominal seluruh baris **Rp24,420,956**. `sourceRow` adalah nomor baris **dalam kecamatan**, bukan kode desa resmi.

| # | Kecamatan | Desa | Source row | PDF page |
|---:|---|---|---:|---:|
| 1 | Sungai Raya | Arang Limbung | 3 | 17 |
| 2 | Sungai Raya | Sungai Asam | 6 | 17 |
| 3 | Sungai Raya | Sungai Bulan | 10 | 17 |
| 4 | Sungai Raya | Limbung | 11 | 17 |
| 5 | Sungai Raya | Parit Baru | 17 | 18 |
| 6 | Kuala Mandor B | Sungai Enau | 5 | 18 |
| 7 | Terentang | Sungai Radak Satu | 6 | 18 |
| 8 | Terentang | Teluk Bayur | 9 | 19 |
| 9 | Batu Ampar | Batu Ampar | 2 | 19 |
| 10 | Batu Ampar | Sungai Jawi | 8 | 19 |
| 11 | Batu Ampar | Nipah Panjang | 9 | 19 |
| 12 | Batu Ampar | Sumber Agung | 13 | 19 |
| 13 | Batu Ampar | Medan Mas | 15 | 19 |
| 14 | Kubu | Kubu | 1 | 19 |
| 15 | Kubu | Pinang Luar | 5 | 19 |
| 16 | Kubu | Sungai Terus | 17 | 19 |
| 17 | Rasau Jaya | Rasau Jaya Tiga | 4 | 20 |
| 18 | Sungai Kakap | Jeruju Besar | 3 | 20 |
| 19 | Sungai Kakap | Sungai Kupah | 4 | 20 |
| 20 | Sungai Kakap | Punggur Besar | 10 | 21 |

**Cakupan tabel alokasi menurut kecamatan** (jumlah baris alokasi; jumlah alokasi kinerja positif; subtotal Rp):

| Kecamatan | Allocation rows | Positive entries | Performance subtotal Rp |
|---|---:|---:|---:|
| Sungai Raya | 20 | 5 | 122,104,780 |
| Kuala Mandor B | 5 | 1 | 24,420,956 |
| Sungai Ambawang | 15 | 0 | 0 |
| Terentang | 10 | 2 | 48,841,912 |
| Batu Ampar | 15 | 5 | 122,104,780 |
| Kubu | 20 | 3 | 73,262,868 |
| Rasau Jaya | 6 | 1 | 24,420,956 |
| Teluk Pakedai | 14 | 0 | 0 |
| Sungai Kakap | 13 | 3 | 73,262,868 |
| **Total** | **118** | **20** | **488,419,120** |

Dataset ini adalah **positive-award ledger dan coverage counts**, bukan full 118-row village scores/eligibility data. Jangan membuat 98 baris lain dengan `0 score` untuk melengkapi chart.

---

## 9. Testing, acceptance criteria, definition of done

### 9.1 Automated domain tests (harus hijau)

| Test ID | Test case | Expected |
|---|---|---|
| T01 | Lima deduction menjumlah | 68,920,200,000 |
| T02 | Gross − deductions | 6,977,416,000 |
| T03 | 2022 75% basic | 5,233,062,000 |
| T04 | 2022 18% formula | 1,255,934,880 |
| T05 | 2022 7% performance | 488,419,120 |
| T06 | 2021 rule 85% × base2022 | 5,930,803,600 |
| T07 | 2021 rule 12% × base2022 | 837,289,920 |
| T08 | 2021 rule 3% × base2022 | 209,322,480 |
| T09 | Σ 2021 rule components | 6,977,416,000 |
| T10 | Σ 2022 rule components | 6,977,416,000 |
| T11 | FY2022 − FY2021rule basic | −697,741,600 |
| T12 | FY2022 − FY2021rule formula | +418,644,960 |
| T13 | FY2022 − FY2021rule performance | +279,096,640 |
| T14 | Σ deltas | 0 |
| T15 | Basic reduction destination | formula 60%, performance 40% |
| T16 | Positive unique award pairs | 20 |
| T17 | Published award each | 24,420,956 |
| T18 | Σ positive awards | 488,419,120 |
| T19 | Pool-to-ledger verified gap | 0 |
| T20 | Σ 9 kecamatan allocation rows | 118 |
| T21 | Σ kecamatan positive count | 20 |
| T22 | Σ 9 kecamatan performance subtotals | 488,419,120 |
| T23 | Bad research extraction BPD | 5,532,000,000 |
| T24 | Extraction state calculated pool | 509,503,120 |
| T25 | Extraction state apparent gap | 21,084,000 |
| T26 | Correction restored | gap 0 |
| T27 | Missing assessment | `NOT_OBTAINED`, not zero |
| T28 | Duplicate village pair | dataset validation error |
| T29 | Negative/decimal/missing monetary input | validation error |
| T30 | Share sum != 100% | validation error |
| T31 | State reset after test | source dataset unchanged |
| T32 | Independent Test2 historical state | only `INCOMPLETE` |
| T33 | Export preserves evidence labels | pass |
| T34 | Counterfactual never triggers historical ledger reconciliation | pass |
| T35 | No ecological/payout inference from chart fields | content guardrail tests/manual |

### 9.2 Browser interaction tests (Playwright recommended)

- Route/section deep links; back/forward nav; refresh; ESC/close drawer.
- Intro + 45s tour next/previous/exit; keyboard arrow navigation.
- Policy rule values and notes; bar scale; accessible table.
- Search known village, unknown search, subdistrict filter, clear filter, filtered subtotal vs full total.
- Source drawer opens correct link and page label.
- Extraction toggle changes BPD and derived pool only; reset works; published ledger unchanged.
- Test2 always reports missing data; does not show red FAIL.
- Exports JSON, CSV, Markdown have parsable content and referenced sources; with download failure, fallback works.
- Flow nodes operable by mouse and keyboard; no focus trap; accessible transcript.
- Responsive visual snapshots: 320, 390, 768, 1024, 1440 px. No global overflow. Table local scrolling allowed.
- Reduced motion, zoom 200%, dark OS settings if used, browser offline after initial load if offline claim made.

### 9.3 Quality gates

**Gate A — Evidence integrity:** sources/status per field; historical/counterfactual/test/proposed distinct. **Block release** on fail.

**Gate B — Fiscal correctness:** T01–T34 all pass. **Block release** on fail.

**Gate C — Usability and truthfulness:** new reader can find research question, Test1, Test2, counterfactual note and sources. **Block release** on misleading claims.

**Gate D — Product and accessibility:** mobile, keyboard, colour/contrast and exports pass. Noncritical polish may be deferred to P1.

**Gate E — Delivery:** static production build works; build/test instructions and actual executed checks documented; no fabricated QA claim.

### 9.4 Definition of Done for P0

- [ ] F01–F11 implemented end-to-end.
- [ ] English UI, precise source labels and disclaimers present in each relevant mode.
- [ ] Two flow diagrams implemented with accessible text alternatives.
- [ ] Exact fiscal engine and ledger tests pass.
- [ ] All required pages and data states function, not placeholders.
- [ ] Source link/page and audit export operate.
- [ ] Verified state is the default; only documented test states can change input in P0.
- [ ] Visual checks passed at target viewports.
- [ ] README states setup, run, build, deploy, scope, sources, limitations.
- [ ] Screenshots and test summary included as release evidence.
- [ ] No known major content misinterpretation or missing public evidence falsely claimed as available.

---

## 10. Source manifest / authoritative inputs

### 10.1 Primary legal records

**S1 — TA2022 regulation:** Kabupaten Kubu Raya, *Peraturan Bupati Nomor 94 Tahun 2021*, governing FY2022. Official local JDIH: https://jdih.kuburayakab.go.id/produkhukum/peraturan-bupati/2251 ; PDF: https://jdih.kuburayakab.go.id/produkhukum/peraturan-bupati/2251/unduh ; BPK record: https://peraturan.bpk.go.id/Details/268962/perbup-kab-kubu-raya-no-94-tahun-2021 . Relevant: Arts.3–6, Annex I; Annex II PDF pp.17–21. This version's scan inspected in V4. *Beware machine extraction inconsistencies; do not auto-populate fiscal data from OCR or search result snippets.*

**S2 — TA2021 regulation:** Kabupaten Kubu Raya, *Peraturan Bupati Nomor 101 Tahun 2020*, governing FY2021. Local JDIH: https://jdih.kuburayakab.go.id/produkhukum/peraturan-bupati/2357 ; PDF: https://jdih.kuburayakab.go.id/produkhukum/peraturan-bupati/2357/unduh . Relevant: Annex I pp.11–12, 85/12/3. Do not use its actual-year monetary base for fixed-base comparison.

**Previously reported source PDF SHA256 fingerprints** (from V4; must not claim recalculated here):
- S1: `7466570493403de6160f00ad6b0c1a155bd340fe14b6891327a699c3b67d2c54`
- S2: `d7dac53dede693d98dba4fbb17354210a78afce264ee8de87bab2cd452cc2581`

### 10.2 Administrative/public context

- Kubu Raya local announcement, 25 Feb 2022 (20 positive recipient context): https://www.kuburaya.go.id/seputar-kuburaya/berita/kubu-raya-kabupaten-pertama-di-indonesia-terapkan-take-responsive-gender
- Indonesian ecology-based performance-incentive technical guide (2024; **postdates FY2022**, guidance, not retrospective legal finding): https://pinus.or.id/wp-content/uploads/2024/11/Juknis-Tata-Cara-Penerapan-Insentif-Kinerja-Berbasis-Ekologi-di-Daerah_31Mei24_Rev-2.pdf

### 10.3 Selected academic context (not raw fiscal data)

- Firdaus, Patriani & Nafi'ah (2025), local case study, DOI: https://doi.org/10.33005/jdg.v15i3.5345
- Fox (2007), transparency/accountability, DOI: https://doi.org/10.1080/09614520701469955
- Busch et al. (2021), global EFT review, DOI: https://doi.org/10.1038/s41893-021-00728-0
- Busch, Kapur & Mukherjee (2020), India response study, DOI: https://doi.org/10.1088/2515-7620/ab817c
- Holmström (1979), observability, DOI: https://doi.org/10.2307/3003320
- Steffensen (2010), performance-based grants, UNCDF: https://www.uncdf.org/download/file/127/1422/pgbs1pdf

Display literature as conceptual context, with proper distinction between reviewed full texts vs abstracts where research notes disclose access limits. App must not imply any paper independently verified FY2022 village scores.

### 10.4 Research files / caveat

V4 has detailed source transcription; V5 reports actual test execution and browser checks for an **earlier** app version. **The full source code of that V5 app has not been provided to this PRD author.** Codex must not claim to reuse or extend prior code without receiving it. If existing code is supplied later, audit it against this PRD before deciding to modify versus rebuild.

---

## 11. Technical delivery architecture — recommendation for Codex

### 11.1 Recommended stack

- **Vite + React + TypeScript** for maintainable UI, deterministic state, testability.
- Local static JSON modules committed to repository; no runtime backend or remote data requests.
- Responsive CSS with design tokens; Tailwind optional if it improves consistency, not mandatory.
- SVG-based charts and process diagrams; library optional but all dependencies bundle locally.
- Pure fiscal calculation module, independent UI state, reusable provenance drawer.
- **Vitest** for domain calculations; **Playwright** for browser interactions and responsive screenshots where available.
- Static hosting target (GitHub Pages/Vercel/Netlify) without server actions, credentials or live government integrations.

**Fallback stack:** A single-file HTML/CSS/JS app can work if implementation speed and offline portability dominate, but require modular logical structure and automated tests. Don't add complexity merely for trendiness.

### 11.2 Separation of concerns

```text
[Versioned, source-referenced seed JSON]
              ↓ validated read-only
        [Pure fiscal engine]
              ↓ derived state
         [UI visualization]
              ↘
     [Provenance & evidence labels]
              ↘
      [JSON/CSV/MD exporter]

[Extraction scenario] → controlled override of ONE research input → recalc
[ARP proposal]        → explanatory flow only; no historical selection engine
```

### 11.3 Quality/security requirements

- No API keys or secrets.
- Avoid injecting unsanitized HTML from data, Markdown or labels.
- External sources via safe anchors; no embedding untrusted interactive PDF inside app by default.
- JSON import (future P2) not allowed in P0; static fixture validated at build/test time.
- No analytics/telemetry without user approval; no user accounts.
- If using a PDF viewer/3rd-party library, it must not make implicit network calls when app is used.
- Build must be reproducible and work without remote fonts, scripts or styles.
- Check `npm run build`, `npm run test`, browser tests and bundle contents before claiming ready.

### 11.4 Suggested repository structure

```text
eft-rulelab/
  README.md
  docs/
    PRD.md
    METHODS.md
    SOURCE_REGISTER.md
    TEST_REPORT.md
  public/
    favicon.svg
  src/
    app/
    components/
      EditorialHeader/
      EvidenceBadge/
      SourceInspector/
      FlowDiagram/
      FiscalChart/
      AwardsTable/
      AuditExport/
    pages/
      Overview/
      PolicyStudio/
      FiscalTrace/
      Awards/
      Verification/
      Protocol/
      Sources/
    data/
    domain/
    styles/
    tours/
  tests/
    unit/
    e2e/
  assets/
    figures/
```

### 11.5 Implementation sequence (reduce rework)

**Milestone 0 — Source & schema lock:** digitize seeds from this PRD/V4, create source manifest and critical tests before visual styling.

**Milestone 1 — Core engine and narrative shell:** amount engine, rule compare, ledger sums, evidence statuses, header/overview and routes.

**Milestone 2 — Full MVP flows:** policy studio, fiscal trace, ledger, extraction test, verification diagram, proposed ARP flow, source inspector.

**Milestone 3 — Demonstration and outputs:** guided demo, JSON/CSV/MD export, responsive/accessibility QA, documentation.

**Milestone 4 — Optional enhancements:** subdistrict chart, performance weights, chart exports, bilingual, strictly segregated policy sandbox.

**Do not** prioritize optional animations, maps, AI widgets or dark mode over exact evidence/content accuracy.

---

## 12. Handoff protocol, decisions, risks

### 12.1 What Codex must deliver at P0

1. Working static web app, source code, reproducible local setup/build instructions.
2. Versioned static dataset with source metadata and the 20-entry award ledger.
3. Fiscal engine + passing tests (include command output summary).
4. Main visual comparison, waterfall, two-test flow, ARP workflow and source inspector.
5. Guided demo, search/filters, research-side extraction test, audit exports.
6. Screenshots at desktop + mobile, plus actual interactive browser test report.
7. Documentation: methods, source list, limitations, exact evidence status.
8. Optional deployable static build for later hosting; deployment only if separately authorized.

### 12.2 Nonnegotiable checkpoints

- **Checkpoint A:** data ledger and calculations match V4; no use of mangled OCR fields.
- **Checkpoint B:** Test 2 remains INCOMPLETE historically, no invented algorithm.
- **Checkpoint C:** all user-facing money/counterfactual labels are correct.
- **Checkpoint D:** source navigation and export work; no screenshot-only mock interface.
- **Checkpoint E:** UI is persuasive and polished **without** visual inflation.

### 12.3 Risk register

| Risk | Probability / impact | Mitigation |
|---|---|---|
| OCR source differs from scanned regulation | Medium / critical | Source-locked JSON + scan reference + checksum/QA; do not scrape numbers |
| 2021-rule scenario confused with 2021 real fiscal amounts | High / high | Persistent counterfactual banner, same-base in title/tooltip/export |
| 20 equal awards confused with equal performance scores | High / critical | Explicit explanation and UI content guardrail tests |
| `INCOMPLETE` seen as malpractice | Medium / critical | Label `not obtained for this study` on diagram, status, export |
| Financial math floating rounding | Medium / high | BigInt/rational basis-point engine + exact tests |
| Source URLs inaccessible when opened | Medium / medium | Store full citations, page refs and static provenance; graceful note |
| Excessive screens reduce story clarity | Medium / medium | Guided demo, progressive disclosure, one key visual per screen |
| Visual components too boxy/monotonous | Medium / medium | Editorial asymmetric hierarchy, limited cards, whitespace, restrained accents |
| Appendix or prototype cannot be submitted | Unknown / high for submission | Keep essay independent; application is a research/presentation companion unless organizers permit |
| Lack of V5 HTML source creates false reuse claim | Medium / medium | Start from this validated specification; audit imported prior code if supplied |

### 12.4 Open decisions that require author signoff (not blockers to start)

- Confirm hosting destination, if any. Default: local and statically deployable, not deployed.
- Confirm whether bilingual launch is essential. Default: English only for P0.
- Confirm if P1 custom policy mix belongs in competition demo. Default: no, preserve historical/rule-only comparison.
- Confirm whether the organizer accepts a prototype/appendix link. Default: essay independent, app shown separately.
- Verify primary regulation rows and any relevant amendments personally before public claims of final allocation.

### 12.5 Suggested timeline (planning only, not a promised delivery)

| Date (Jakarta) | Desired checkpoint |
|---|---|
| 5 Nov 2026 | PRD and evidence scope frozen |
| 6 Nov | Data/schema + mathematical tests |
| 7–8 Nov | P0 UI, interactive charts, source inspector, diagrams |
| 9 Nov | Browser/end-to-end test and fixes |
| 10 Nov | Exports, demo, academic language, visual QA |
| 11 Nov | Freeze research prototype and essay references |
| 12 Nov | Competition submission according to organizer's rules |

### 12.6 Final release assertion template

Codex should only call the release **ready** when it can state which features it actually built, tests it actually ran, viewport/browser it actually inspected, and where the existing evidence limits are displayed. It must report incomplete work without inventing test results.

---

## 13. Acceptance walkthrough — what a judge should experience

1. Open `/`: read headline `The numbers reconcile. Can the decision be reproduced?`; see 20 positive entries, Rp488.42m, Test1 PASS and Test2 INCOMPLETE.
2. Click `Explore the policy`: compare share bars under same FY2022 base; identify the 60/40 destination of basic reduction, with values and explicit counterfactual label.
3. Click `Follow the funds`: expand BPD and other deductions; see 7% of residual, not 7% of gross.
4. Click `View awards`: search `Sungai Kupah`, see Rp24,420,956 and PDF p.20 row 4, without any invented score.
5. Click `Verification`: inspect the twin streams; read missing assessment+selection inputs; no allegation of government wrongdoing.
6. Click `Replay extraction test`: apparent gap Rp21.084m; restore verified BPD; gap zero, original award ledger unchanged.
7. Click `ARP`: see how reviewer would use actual signed inputs with published roster withheld, and the match/discrepancy/incomplete decision routes.
8. Export `Audit note`: artifact includes sources and qualifications, and opens/copies as expected.

**Product promise:** A reader can trace what the records establish, what a valid counterfactual shows, and exactly where a defensible accountability claim must stop.

