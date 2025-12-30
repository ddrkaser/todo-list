Below is a **refined, validation-ready rewrite** of your content, structured and phrased to meet MRMC documentation standards. The technical substance is preserved; the language is tightened for clarity, traceability, and audit defensibility.

---

## Validation Objective

The objective of this validation is to ensure that **all in-scope transactions are comprehensively and accurately mapped** to the group transaction codes monitored by the QR rules. Specifically, MRMC assessed the **completeness and appropriateness of transaction type–to–group code mappings**, evaluated alignment with rule design intent, and determined whether any changes introduce gaps in monitoring coverage.

---

## Validation Analysis

MRMC developed a **comparative transaction mapping matrix** across legacy and redesigned QR rules using *New_Query_Rule_Mapping* and *QUERY_RULE_MAPPING_VI*. This analysis compared individual transaction types against their corresponding group codes to assess consistency, coverage, and alignment with monitoring intent.

As illustrated in *Table: QR Comparison*, MRMC identified several transaction types and transaction groups that are either **no longer directly monitored** or **not mapped to the new QR rules**. These changes were driven by a combination of:

* Financial Crime Program (FCP) interpretations of Alert Generation Standards
* Identified data quality limitations
* First Line of Defense (1LoD) changes to anticipated activity questions and value/volume ranges collected during onboarding

Additional clarification on these changes was obtained through documented discussions in *SAM FS – CDD*.

---

## Removed or Unmapped Transaction Types

**CRD_CE (Quasi Cash Card Purchase – ATM or ATM-like Activity)**
This transaction type was removed from legacy rules AML_QR_ACC_PTY_MON_4_1 and AML_QR_ACC_PTY_MON_4_2 in July 2024. GitLab evidence confirms that CRD_CE represents **ATM or ATM-like cash withdrawals**, which are debit activities. As the referenced QR rules are designed to monitor **credit-side activity**, inclusion of this debit transaction was conceptually inconsistent. Its removal aligns rule logic with monitoring intent.

---

**RFND_TRF_I / RFND_TRF_O (Incoming / Outgoing Related Transfers of Funds)**
These transaction types were removed in accordance with Alert Generation Standards, which state that **intra-client transfers within the same legal entity do not represent a change in beneficial ownership** and therefore pose limited AML risk. Their removal is consistent with broader QR rule optimization efforts aimed at reducing false positives without materially impacting risk coverage.

---

**SECR_IN / SECR_OUT (Security Transfers In / Out)**
Security transfers are not monitored by the redesigned QR rules due to an open data issue (MDI-281) affecting transaction value calculations, which materially overstate actual values. MRMC confirmed that these transaction types were **planned but never effectively monitored** under the legacy QR framework. Prior to remediation, security transfer onboarding questions were incorrectly mapped to the **UBSJ** group in the KYC table, resulting in the absence of anticipated security transfer value/volume benchmarks. Following remediation, security transfer and buy/sell questions have been consolidated and correctly mapped to the **SECR** group; however, monitoring remains deferred pending resolution of the underlying data issue.

---

**UBSJ_C / UBSJ_D (Journal Transfer Credit / Debit)**
Under the legacy QR framework, the **UBSJ** transaction group was monitored but incorrectly compared against anticipated security transfer values due to KYC mapping errors. Following the mapping correction, journal-related onboarding questions are now appropriately mapped to the **UBSJ** group in the KYC table, restoring conceptual consistency between anticipated and observed activity.

---

**CA_D (Cash – All Debits)**
Legacy QR rules monitored the **CA_D** transaction group but lacked a corresponding anticipated activity benchmark because cash-related onboarding questions were not mapped to the **CA** group in the KYC table. Under the revised mapping, cash-related questions are now correctly associated with **CA**, enabling proper comparison between expected and actual debit cash activity.

---

**CA_C (Cash – All Credits)**
The **CA_C** transaction group was not monitored under the legacy QR framework, resulting in a monitoring gap for credit-side cash activity. The redesigned QR rules address this gap by explicitly including CA_C within the updated transaction group mapping, thereby improving completeness of coverage.

---

## Summary Assessment

Overall, MRMC concludes that the observed removals and remappings are **primarily attributable to conceptual corrections, data quality constraints, and alignment with updated Alert Generation Standards**, rather than unintended reductions in monitoring scope. Where transaction types are currently unmapped or excluded, compensating rationale is documented, and in certain cases remediation dependencies have been formally identified. The redesigned mapping framework demonstrates improved conceptual integrity and transparency relative to the legacy design.

---

If you would like, I can next:

* Draft a **formal validation conclusion paragraph** for this mapping assessment,
* Add a **risk and limitation statement** suitable for the Issues & Observations section, or
* Produce a **table-ready executive summary** highlighting key removals, rationale, and residual risks.

Below is a **formal validation conclusion paragraph** suitable for the *Conclusion* or *Overall Assessment* section of an MRMC validation report and aligned with SR 11-7 style language.

---

## Validation Conclusion

Based on MRMC’s review of the transaction type–to–group code mapping across the legacy and redesigned QR rule frameworks, MRMC concludes that the updated mapping is **largely complete, conceptually sound, and aligned with rule design intent and Alert Generation Standards**. The identified removals and unmapped transaction types primarily reflect **intentional design decisions**, **corrections of legacy mapping inconsistencies**, and **documented data quality limitations**, rather than unintended reductions in monitoring scope. Where transaction types are excluded from direct monitoring, MRMC verified that the rationale is supported by regulatory guidance, risk-based interpretation by Financial Crime Program stakeholders, or formally tracked remediation items. Notably, the redesigned mapping resolves several legacy misalignments between anticipated and observed activity, improves coverage of previously unmonitored transaction groups (e.g., credit-side cash activity), and enhances overall conceptual integrity. Accordingly, MRMC concludes that the revised transaction mapping does **not introduce a material gap in monitoring coverage**, provided that outstanding data issues remain subject to ongoing remediation tracking and that compensating controls continue to operate as designed.

Based on MRMC’s review of the transaction type–to–group code mapping across the legacy and redesigned QR rule frameworks, MRMC concludes that the updated mapping is conceptually sound and more complete relative to the legacy design. Notwithstanding these improvements, MRMC identified multiple monitoring gaps and misalignments in the legacy QR framework that warrant formal validation issues. Specifically, MRMC identified: (i) the absence of monitoring for certain in-scope transaction groups (including credit-side cash activity), resulting in an explicit monitoring gap; (ii) a conceptual misalignment whereby the UBSJ transaction group was monitored but incorrectly compared against anticipated security transfer values due to KYC mapping errors, undermining the effectiveness of Change in Behavior detection; and (iii) security transfer transactions that were planned for monitoring but were not effectively monitored due to onboarding question mis-mapping and unresolved data quality limitations.
MRMC assesses these deficiencies as control design weaknesses within the legacy QR framework, as they impair the rules’ ability to reliably compare expected and observed activity in accordance with Alert Generation Standards. While MRMC notes that the redesigned QR rules materially address these issues through corrected KYC mappings, improved transaction-type segmentation, and documented remediation dependencies, the identified legacy gaps remain validation issues that require formal tracking to closure. These issues are assessed as legacy in nature and are not expected to materially impact the residual risk of the proposed QR framework, provided that remediation actions and compensating controls continue to be implemented and monitored as designed.
