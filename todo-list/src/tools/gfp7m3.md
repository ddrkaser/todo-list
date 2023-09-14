
This assessment involves a review of the model's output to evaluate if it generates useful alerts that lead to account inquiries. MRMC specifically examined the inquiry ratio for each control and assessed the appropriateness of the recalibration threshold.

To evaluate the model's recalibration threshold, MRMC gathered alert data from Actimize spanning from August 2022 to May 2023. Figure 1 illustrates the monthly inquiry ratio for each control.

Based on the information presented in Figure 1, MRMC has made the following observations:

1. For the Frequent Trading control, there were zero inquiries generated in September 2022, December 2022, and March 2023, and no alerts were generated in the remaining months.
2. Moving The Grid control converted zero inquiries for ten consecutive months.

These observations raise concerns that potential issues with the model's calibration are not being addressed promptly, leading to a significant number of false positive alerts.

MRMC has noted that the re-calibration process primarily focuses on historical inquiry ratios. Many of the thresholds used in the model are determined by expert judgment and lack quantitative assessment to determine if the recalibration trigger is sufficient.

In conclusion, MRMC has observed that the re-calibration threshold remains consistent across all controls, triggering when less than 2% of alerts generated lead to account inquiries in two consecutive months. While the primary aim of the parameter review process is to identify controls that breach this threshold, investigate root causes, and review the control to ensure the model's ongoing suitability, there is insufficient evidence of recalibrations occurring during the sampled period. This leads to the raising of Issue 3.

Furthermore, this assessment also contributes to Issue 5, where it is highlighted that the design of KMPI 0.3 fails to provide a clear mandate for recalibrating certain rules that consistently produce an inquiry ratio below the re-calibration threshold of 2%.


