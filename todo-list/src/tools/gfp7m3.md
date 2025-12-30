Below is a refined, validation-ready version of your content, rewritten for clarity, precision, and alignment with MRMC / SR 11-7 documentation standards. The substance is unchanged; the focus is on structure, control language, and audit defensibility.

---

## Validation Objective

The objective of this validation is to assess the alignment between **Monitoring Intent**, **Risk Coverage**, and **Global Minimum Standards** following the proposed change in rule criticality—specifically, the impact of reclassifying the QR rules from **primary** to **secondary** monitoring controls. The validation aims to determine whether the revised QR framework continues to provide sufficient coverage of relevant regulatory red flags and typologies, consistent with internal Alert Generation Standards (AGS) and regulatory expectations.

---

## Validation Scope and Approach

MRMC reviewed the **Alert Generation Standards for Automated Transaction Monitoring** documentation and the associated typology standards to evaluate whether the newly proposed QR rules provide adequate coverage of applicable regulatory red flags. The assessment included:

* Review of the **rule-to-typology mapping** provided by the Model Owner
* Review of the **coverage analysis** mapping regulatory red flags to rule typologies, as documented in *Red Flag Coverage Analysis (2024 v1.1)*
* Evaluation of conceptual alignment between monitoring intent and implemented rule logic, with a focus on **Change in Behavior** detection

---

## Typology Coverage Assessment

The QR rules are designed to address the **Change in Behavior** typology (AGS 4.1), which seeks to identify discrepancies between **expected activity** (as disclosed during onboarding/KYC) and **actual transactional behavior** observed post-account opening.

### Legacy QR Rules (4 Rules)

The legacy QR framework consists of four rules that generate alerts when a new account (aged less than 365 days) exhibits transactional behavior that materially deviates from expected activity disclosed during onboarding. Specifically, alerts are generated when observed value or volume exceeds **1.25% of the aggregated expected value or volume across all disclosed transaction types**.

The four legacy rules are:

* **AML_QR_ACC_PTY_MON_4_1 (All Credit Value)**
  Detects deviation from expected KYC credit value at the account level.

* **AML_QR_ACC_PTY_MON_4_2 (All Credit Volume)**
  Detects deviation from expected KYC credit volume at the account level.

* **AML_QR_ACC_PTY_MON_4_3 (All Debit Value)**
  Detects deviation from expected KYC debit value at the account level.

* **AML_QR_ACC_PTY_MON_4_4 (All Debit Volume)**
  Detects deviation from expected KYC debit volume at the account level.

These rules apply aggregation across all transaction types and do not distinguish between different transactional behaviors or payment categories.

---

## New QR Rule Framework (20 Rules)

The proposed QR framework replaces the four aggregated rules with **20 more granular rules**, segmenting monitoring by **transaction type groups** while retaining the same underlying monitoring intent of identifying deviations from expected KYC behavior.

The new rule set is structured as follows:

### Credit-Side Monitoring

* **Credit Value by Transaction Type (AML_OR_ACC_PTY_MON_4_1 – 4_5)**
  Detects deviation from expected KYC credit value by grouped transaction types at the account level.

* **Credit Volume by Transaction Type (AML_OR_ACC_PTY_MON_4_6 – 4_10)**
  Detects deviation from expected KYC credit volume by grouped transaction types at the account level.

### Debit-Side Monitoring

* **Debit Value by Transaction Type (AML_OR_ACC_PTY_MON_4_11 – 4_15)**
  Detects deviation from expected KYC debit value by grouped transaction types at the account level.

* **Debit Volume by Transaction Type (AML_OR_ACC_PTY_MON_4_16 – 4_20)**
  Detects deviation from expected KYC debit volume by grouped transaction types at the account level.

---

## Preliminary Validation Observations (Context for Downstream Sections)

At a conceptual level, the new QR rules maintain coverage of the **Change in Behavior** typology while introducing enhanced granularity through transaction-type segmentation. This design change is expected to improve risk specificity and diagnostic value of alerts; however, it also necessitates reassessment of:

* Aggregate versus segmented risk coverage
* Potential dilution of signal strength at the individual rule level
* Whether the cumulative coverage of secondary rules remains equivalent to, or exceeds, the prior primary control framework

These considerations are further evaluated in subsequent sections covering conceptual soundness, risk coverage sufficiency, and monitoring implications.

---

Based on MRMC’s review, the redesigned QR rule framework remains conceptually aligned with its stated monitoring intent and continues to provide coverage of the Change in Behavior typology (AGS 4.1) as defined in the Alert Generation Standards. The transition from four aggregated, account-level QR rules to twenty transaction-type–segmented rules enhances monitoring granularity and improves the ability to identify deviations between expected KYC activity and observed transactional behavior. While the reclassification of the QR rules from primary to secondary reduces their standalone criticality within the overall monitoring framework, MRMC concludes that the cumulative coverage provided by the new QR rules, in conjunction with other primary monitoring controls, is not materially diminished relative to the legacy design. Accordingly, the proposed rule redesign and change in rule importance do not introduce a material gap in regulatory red flag coverage or Global Minimum Standards, provided that ongoing performance monitoring and aggregation-level oversight are maintained to ensure that risk signals are not fragmented or diluted at the individual rule level.
