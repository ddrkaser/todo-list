Below is a **validation-ready rewrite** of your section, followed by a **formal validation conclusion paragraph** that clearly articulates residual gaps, reliance on alternative controls, and issue implications. The content is framed to meet MRMC standards and support defensible issue articulation.

---

Objective

The objective of this assessment is to evaluate the **impact of unmapped transaction types**, specifically **Journal transfers and Security transfers**, on overall monitoring coverage and to validate whether **alternative detection controls** (e.g., SBA and FTF rules) provide effective and demonstrable coverage for these transaction types in the absence of direct QR rule monitoring.

---

Validation Analysis

While the majority of removed or unmapped transaction types were addressed as part of Analysis 49-b, **Security Transfers (SECXFR)** remain excluded from the redesigned QR rule framework due to the following unresolved constraints.

First, **MDI-281** relates to incorrect valuation of securities trades within the Dharma / AMLSAM process for two FI product types. This issue results in **inflated transaction values** for securities transfers, materially distorting observed transaction activity. Although the Model Owner indicated that mitigation is tracked under **NFRi (ISSUE-0080046087)**, MRMC was unable to independently locate or validate MDI-281 within the supporting documentation provided. As a result, the data reliability limitation remains unresolved for validation purposes.

Second, as part of First Line of Defense (1LoD) onboarding changes, **trade buy/sell anticipated activity questions were consolidated into a single securities transfer (ACATS) question**. However, the transaction monitoring query rules are currently configured to monitor **ACATS transactions only**, rather than the full population of securities buy/sell activity. This design change introduces additional uncertainty regarding the completeness and effectiveness of securities transfer monitoring under the QR framework.

FCP has indicated that **security transfers will be reconsidered for inclusion in QR query rules once the underlying data and design issues are resolved**. In the interim, security transfers are monitored through **primary detection rules**, including **FTF (Flow-Through-of-Funds)** and **SBA (Security Blanket – Account)**.

MRMC reviewed alert volumes and productivity metrics between **January 2025 and September 2025** for FTF, SBA, and ADR (Activity in Dormant Account). While these rules do capture securities transfers, they are **broad-based rules covering multiple transaction types**, and no metrics were provided that allow for **segregation or direct attribution of alert effectiveness specific to securities transfers**. As a result, MRMC is unable to independently conclude that these alternative controls provide equivalent or sufficient coverage for securities transfers relative to a dedicated QR-based Change-in-Behavior control.

Additionally, the effectiveness of FTF and SBA rules is **also impacted by MDI-281**, as inflated transaction values may increase alert generation. MRMC acknowledges that such inflation may be considered **conservative from a risk-detection perspective**, but it materially reduces monitoring efficiency and increases false-positive risk, thereby limiting the reliability of these rules as compensating controls.

---

Validation Conclusion

MRMC concludes that the continued exclusion of **security transfer transactions** from the QR rule framework represents a **residual monitoring coverage limitation**, notwithstanding the existence of alternative primary controls. While FTF and SBA rules provide some level of coverage for securities transfers, MRMC was unable to validate the **effectiveness or completeness of this coverage** due to the absence of transaction-type-specific metrics and the ongoing impact of unresolved data quality issues (MDI-281). Accordingly, MRMC assesses reliance on these alternative controls as **partially compensating but not fully substantiated**. This condition constitutes a **validation issue** related to coverage transparency and control effectiveness, which should remain open until underlying data issues are remediated, QR rule eligibility is reassessed, and demonstrable evidence of effective securities transfer monitoring is provided.

---

Below is a **formal validation issue statement**, structured in **Condition–Cause–Impact–Recommendation** format and written to align with MRMC issue documentation standards and SR 11-7 expectations. This can be inserted directly into the *Issues & Findings* section.

---

## Validation Issue: Incomplete Coverage and Insufficiently Substantiated Compensating Controls for Security Transfer Transactions

**Condition**
MRMC identified that **security transfer transactions (SECXFR)** remain excluded from the redesigned QR rule framework and are not directly monitored under Change-in-Behavior query rules. While alternative primary detection rules (e.g., **FTF** and **SBA**) are cited as compensating controls, MRMC was unable to validate the **effectiveness, completeness, or transaction-type–specific coverage** of these rules for security transfers. Specifically, no metrics were provided to isolate alert generation, productivity, or risk outcomes attributable solely to security transfer activity. In addition, the effectiveness of these alternative controls is impacted by an unresolved data quality issue (**MDI-281**) that inflates transaction values for certain securities trades.

**Cause**
The identified condition is driven by a combination of unresolved **data quality limitations** and **design changes**. MDI-281 affects the accuracy of transaction value calculations for securities transfers, rendering these transactions ineligible for inclusion in QR rules. Further, First Line of Defense changes consolidated anticipated buy/sell activity into a securities transfer (ACATS) onboarding question, while transaction monitoring rules continue to monitor ACATS transactions only, limiting alignment between anticipated and observed activity. Although remediation is reportedly tracked in NFRi, MRMC was unable to independently validate the status or completeness of this remediation based on the documentation provided.

**Impact**
As a result, MRMC cannot conclude that security transfer activity is **fully and effectively monitored** for Change-in-Behavior risk. Reliance on broad-based rules without transaction-specific evidence limits transparency into actual coverage and impairs MRMC’s ability to assess compliance with Alert Generation Standards. While inflated transaction values may result in more conservative detection, they also increase false-positive risk and reduce monitoring efficiency, thereby weakening the effectiveness of compensating controls. This condition introduces a **residual monitoring coverage risk** for securities transfers.

**Recommendation**
MRMC recommends that the Model Owner, in coordination with FCP and relevant data owners, (i) remediate and formally validate resolution of MDI-281, including independent evidence of corrected transaction valuations; (ii) reassess the eligibility of security transfer transactions for inclusion in QR rules following data remediation; and (iii) provide quantitative evidence demonstrating the effectiveness of alternative controls (e.g., FTF and SBA) specific to security transfer activity, including transaction-type–level alert volumes and productivity metrics. Until these actions are completed, this issue should remain **open and tracked to closure**, with interim compensating controls subject to enhanced oversight.

