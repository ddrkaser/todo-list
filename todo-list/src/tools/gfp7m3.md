There was a lack of clarity regarding how risk tolerance was applied during the BTL tuning process. In the document [BM-5(FINAL) CUSO FCP AML TM Risk Appetite and Tolerance Methodology_v1.0 (approved)], specifically in APPENDIX E - Risk Tolerance Decision Artifact (Sample), risk tolerance is described as the False Negative Rate but is calculated as 10% of the total number of SARs filed from the model in the previous calendar year. MRMC has identified several issues with this definition of risk appetite:

* The False Negative Rate (FNR) should be calculated as FNR = FN/(FN+TP), where FN represents the number of false negatives and TP represents the number of true positives (FN+TP being the total number of positives).

* The total number of SARs is aggregated for the previous calendar year, but the current BTL testing period covers November 2022 to October 2023, which spans two calendar years and does not align with the defined risk tolerance period.

* Risk tolerance is defined at the model level, with no clear translation to the rule level. There are no clear guidelines on where and how the threshold should be adjusted based on BTL testing results. Threshold tuning decisions should be more transparent, especially when risk tolerance is exceeded.

* There is no established success criterion for threshold finalization. MRMC considers the decision process for adjusting thresholds or parameters to be highly subjective, with no clear criteria documented in formal documentation.

* The choice of 10% of the total number of SARs filed from the model in the previous calendar year is purely qualitative and lacks justification. Risk tolerance depends on the total number of SARs filed from the model in the previous calendar year. During BTL testing, a sampling approach was used, meaning the number of productive events identified is highly dependent on the sample size. There is insufficient elaboration on the comparability between these two values. For example, according to the current sampling methodology, the theoretical sample size is fixed at 82 for all tunable rules, but the number of SARs filed in a calendar year could vary significantly year by year.

* Although the Model Owner (MO) has added risk tolerance usage and differentiated it from risk appetite, the definition and subjective nature remain unchanged from previous revalidation efforts.


Certainly. The concern regarding the choice of 10% of the total number of SARs filed from the model in the previous calendar year being purely qualitative and lacking justification can be further articulated as follows:

The decision to set the risk tolerance at 10% of the total SARs (Suspicious Activity Reports) filed from the model in the previous calendar year is not grounded in any quantitative analysis or empirical evidence. Instead, this percentage appears to be arbitrarily selected without a clear rationale that connects it to the actual risk management objectives or performance metrics of the model.

Here are some specific issues with this approach:

1. **Lack of Empirical Basis**: The selection of 10% does not seem to be supported by historical data analysis, statistical reasoning, or industry benchmarks. Without a detailed explanation of why 10% is an appropriate threshold, this figure appears to be a subjective choice rather than a data-driven decision.

2. **Inconsistency with Sampling Methodology**: During the BTL testing process, a sampling approach was used, meaning that the detection of productive events depends heavily on the sample size. If the sample size is small or not representative, the comparison between the sample results and the total number of SARs filed in the previous year becomes problematic. The risk tolerance, based on an arbitrary percentage, may not accurately reflect the model's performance under different sampling conditions.

3. **Variability in SAR Filings**: The number of SARs filed can fluctuate significantly from year to year due to various factors, such as changes in external conditions, model updates, or shifts in the underlying data. Setting a fixed percentage without accounting for this variability could lead to inconsistent risk management outcomes. For instance, a year with an unusually high or low number of SARs could skew the risk tolerance, making it either too lenient or too strict.

4. **No Consideration of Model Performance Metrics**: The choice of 10% does not take into account key model performance indicators such as precision, recall, or the balance between false positives and false negatives. A more robust approach would involve setting the risk tolerance based on a comprehensive evaluation of the model's effectiveness in detecting true suspicious activities while minimizing false negatives.

5. **Qualitative Decision-Making**: Since the 10% threshold lacks quantitative backing, the decision-making process surrounding its implementation becomes largely qualitative. This subjectivity introduces a potential risk of inconsistent application or bias, particularly if the rationale for this choice is not well-documented or understood across different stakeholders.

In summary, setting risk tolerance as 10% of the total SARs filed from the model in the previous year is problematic because it is not grounded in a clear, objective, and quantifiable rationale. A more rigorous approach would involve defining risk tolerance through a combination of historical performance data, statistical analysis, and alignment with broader risk management goals.
