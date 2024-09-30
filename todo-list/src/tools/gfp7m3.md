Thank you for the clarification. Here's an updated explanation incorporating the meaning of **BTL (Below the Line)** testing:

### Potential Negative Impact When No Base Population is Generated and No Samples Are Reviewed in BTL Testing

1. **Inability to Validate Model Accuracy and Effectiveness**  
   - BTL testing is designed to test scenarios that fall "below the line" or threshold of triggering alerts. If no base population is generated and no samples are reviewed, the model's ability to capture and assess these lower-risk or borderline cases cannot be validated. This means the model’s performance in detecting transactions that might fall slightly below the defined thresholds is untested, leaving a significant gap in its accuracy and effectiveness.
   - Without a base population, there's no way to determine whether the model is overly strict (missing real risks) or too lenient (allowing too many borderline cases to pass without further investigation).

2. **Misrepresentation of Risk**  
   - The absence of BTL samples can lead to a misrepresentation of risk, particularly at the thresholds where transactions might not trigger alerts but still pose risk. By not testing these edge cases, the institution may unknowingly allow borderline suspicious activities to slip through the cracks, undermining the model's objective of risk detection.
   - The model may fail to identify trends or behaviors that would only be evident when analyzing "below the line" transactions, potentially leading to an underestimation of financial crime risk, such as money laundering.

3. **Lack of Data to Support Model Adjustments**  
   - BTL testing helps assess whether the thresholds and rules are appropriate and whether they capture risk effectively across all levels of transaction behavior. Without sample data, the model owner (MO) has no empirical foundation for making necessary adjustments to thresholds, recurrence periods, or other scoring parameters.
   - It also limits the ability to fine-tune the model, which could result in thresholds that are either too low (creating unnecessary false positives) or too high (allowing real risks to go undetected).

4. **Increased Regulatory and Compliance Risk**  
   - Regulatory bodies often require comprehensive testing, including BTL testing, to ensure that models are robust and can detect a broad spectrum of risks. A failure to generate and review a sufficient BTL population could lead to gaps in risk coverage, leaving the model non-compliant with regulatory standards.
   - Missing BTL validation could lead to regulatory penalties, sanctions, or forced model redevelopments, which could be costly in both financial and reputational terms.

5. **Failure to Identify Potential Weaknesses**  
   - BTL testing is crucial for identifying weaknesses in the model's thresholds and rules. When no BTL population is generated, it becomes impossible to evaluate if the rules and thresholds are tuned correctly for lower-level risks. This can lead to missed opportunities for improving model performance or identifying potential weaknesses that may later be exploited by malicious actors.
   - Without these insights, the institution may be exposed to hidden risks that would only be revealed through a thorough BTL analysis.

6. **Inability to Justify Changes in Thresholds or Scoring**  
   - Without data from BTL testing, the MO cannot provide a robust justification for adjusting thresholds or scoring. Any proposed changes to the model's settings would be based on theoretical assumptions rather than actual data-driven insights, making it difficult to prove that the model is conceptually sound.
   - This lack of evidence could delay or prevent necessary improvements to the model, further exacerbating its limitations.

7. **Inefficient Model Performance**  
   - By not generating BTL test populations, the institution risks running a model that is not optimized to its fullest potential. The inability to validate or tune "below the line" thresholds can result in inefficient model performance, with either too many false negatives (failing to detect risky transactions) or an excessive number of false positives (flagging too many benign transactions).

In summary, failing to generate a base population and conduct sample reviews in BTL testing can severely impact the model's ability to detect borderline risks, reduce its operational efficiency, and increase regulatory exposure. A lack of BTL validation leaves critical gaps in understanding how the model handles transactions that fall below thresholds, limiting its overall effectiveness in managing risk.


To keep the total alert count under control, certain activities may fall below the alert threshold, yet still pose risks. While the SBA rule has a significant conversion rate, non-promoted or below-infraction entities may not trigger alert breaks, but can still represent substantial risks. Without thoroughly examining these entities, the model might unknowingly allow "less-apparent" suspicious activities to go unnoticed. As a result, the SBA rule may fail to detect trends or behaviors that only become evident when testing these non-promoted or below-infraction entities. This oversight could lead to missed opportunities to strengthen the model, ensuring it is robust enough to detect a wide range of risks. Such gaps may later be exploited by bad actors engaging in borderline suspicious activities, thereby undermining the model's overall risk coverage.



The decision to set the risk tolerance at 10% of the total number of SARs (Suspicious Activity Reports) filed from the model in the previous calendar year is purely qualitative and lacks a well-founded justification. This 10% threshold does not seem to be based on any quantitative analysis or empirical evidence; rather, it appears to have been arbitrarily selected without a clear rationale. 

During the BTL (Below the Line) testing process, a sampling approach was used, meaning that the detection of productive events heavily relies on the sample size. If the sample size is small or not representative of the broader population, comparisons between the sample results and the total number of SARs filed in the previous year can become unreliable. This presents a key issue: during post-BTL testing, the risk tolerance, set at an arbitrary percentage, may not accurately reflect the model's performance under varying sampling methodologies.

For instance, if 200 SARs were filed in the previous calendar year, the 10% risk tolerance would be 20 SARs. If the SAR rate in the samples is 0.01%, using the current sampling methodology (which generated samples over 12 months) would result in approximately 3 SARs. However, under a previous sampling methodology that generated 19,394 samples over 6 months (equivalent to about  samples over 12 months), the result was 39 SARs. These differences highlight how changes in sampling methodology—resulting in different sample sizes—can significantly affect whether the model passes or fails in meeting the risk tolerance threshold.

In conclusion, this variability calls into question the reliability of using an arbitrary percentage like 10% as the risk tolerance, especially when different sampling methodologies can yield widely divergent results. To ensure an accurate assessment of the model's performance, a more data-driven and quantitatively justified risk tolerance should be adopted, taking into account the impact of sample size and methodology on SAR detection.
This oversight could lead to missed opportunities to ensure that the model is robust enough to detect a broad spectrum of risks. These gaps could potentially be exploited by bad actors engaging in borderline suspicious activities, thereby undermining the model's risk coverage and effectiveness.
