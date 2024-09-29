MRMC notes that the Model Owner (MO) submitted an NMMC [M7] in October 2022 to update the recurrence period from 14 days to 15 days, aligning it with structuring rules across models (SAM CB and SAM FS). This change affected rule PRJ-STR-CCE-INN-P-D01-DST. During the previous revalidation period, no alerts were generated from April 2022 to March 2023. As a result, MRMC recommended further testing of the new thresholds for this rule to ensure its effectiveness and raised Issue 15. Extending this review to the current revalidation period, no alerts were generated from April 2022 to October 2023—a span of 19 months.

For issue closure, the MO stated that "Rule PRJ-STR-CCE-INN-P-D01-DST was tested as part of the latest BTL exercise. No further threshold adjustment is recommended for any of the rules. Additionally, the Model Owner tested the new threshold (Recurrence Period) by increasing it from 15 days to 20 days, and no alerts were generated. Please refer to [MM-12] PRJ-STR-CCE-INN-P-D01-DST_Recurrence_Period_Analysis.xlsx." However, no base population was generated, and no samples were reviewed in the BTL testing. 

In the current [ES-7] UBS CUSO Tuning and Optimization Methodology Document v1.2 [M5], there is no guidance on what actions to take if the initial threshold drop fails to generate a BTL base population. However, in the previous version [ES-7] UBS CUSO Tuning and Optimization Methodology Document v1.1 [Section 2.3.4], it is stated: 

"For the first population group, the 15% adjusted threshold lies beyond the 100th percentile of the parameter value distribution. Therefore, if BTL testing were to be performed, no BTL population would be generated for this population group. To ensure representation of every relevant population group within the testing population for such edge cases, the median value of the population distribution may be considered as the appropriate adjusted threshold for testing."

MRMC suggests that a similar approach should be applied when an insufficient BTL base population is generated, ensuring that an additional population is created for further review.

Additionally, [ES-7] UBS CUSO Tuning and Optimization Methodology Document v1.2 [M5, Section 2.3] specifies: 

"For the rules where historical productivity data is not available, conceptual and statistical analysis will be driven by other listed analyses, such as descriptive statistics and sensitivity analysis. These rules may also be treated as new rules, such that IQR and Jump Analysis may be additionally performed to determine appropriate threshold drops."

In this case, no historical productivity data was available, and no additional conceptual or statistical analysis was performed.

After a detailed review of [MM-5] RuleSheets [071], MRMC noted that the maximum number of recurrences across all population groups is 2, while the score for 3 recurrences is 10 and the score for 9 recurrences is 40. This means that, without considering the learning module, a party would need 9 recurrences within 15 days to score 40 points for an alert break. Since the maximum recurrences observed were 2, the appropriateness of the scoring parameters must also be assessed. 

Therefore, this issue remains open.

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
