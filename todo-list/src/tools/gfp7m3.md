### 1. Removal of Learning Module

FCP has requested the removal of the Interactive Learning module’s negative scoring functionality for the following three rules: (Transfer to High-Risk Destinations), (Transfer to Sensitive Countries List), and (Transfer to High-Risk Destinations - International ATM). The rationale behind this decision is to increase the model's efficiency and effectiveness while ensuring that identified AML risks continue to be captured and mitigated.

The MO has assessed the impact based on three months of data from the impact analysis conducted between January 2024 and March 2024, estimating an increase of approximately 200 alerts. MRMC acknowledges that the removal of negative scoring in the TSD rules aims to mitigate AML risk associated with changes in customer high-risk jurisdiction transactional activity.

MRMC agrees that the removal of the learning module for these three rules, as supported by FCP, will improve the model’s effectiveness and ensure continuous monitoring and mitigation of AML risks in high-risk destinations and sensitive countries. However, it is noted that the impact analysis was conducted on only two rules for the SAM/FSI BUSA model, and no impact analysis was provided for the rule "PRJ-TSD-ATM-OUT-A-S01-CTY."

### 2. Above the Line (ATL) Test Rule Adjustment

Out of 46 rules, 13 were considered eligible for ATL testing. M&M recommended an initial 15% threshold increase, except in instances where the threshold value of the lowest escalated case was the lesser of the two values. This 15% increase will then be tested below the line (BTL) in the next tuning cycle to continuously assess the model’s efficiency and effectiveness.

The impact analysis was based on one month of data from October 2023, with an estimated monthly alert reduction of 202, leading to an overall model-level decrease of 3.8%. FCP has decided to proceed with this 15% increase as per Option 1.

### 3. Assessment

Regarding the impact and materiality assessment, MRMC finds the MO’s evaluation inappropriate. The MO has compared the alert volume increase from the Learning Module scoring changes (conducted on two out of three impacted rules using three months of data between January 2024 and March 2024) with the alert volume decrease from the ATL tuning exercise (conducted on 13 rules using one month of data in October 2023). There are several reasons why these impacts are not comparable:

- The changes in alert volume are driven by different factors: ATL testing aims to improve model efficiency by reducing non-productive alerts, while the removal of the Learning Module focuses on enhancing model effectiveness in capturing and mitigating AML risks. These changes stem from different components of the model.
- The impact of ATL testing is based on one month of data (October 2023), while the removal of the Learning Module is based on three months of data (January to March 2024).
- The ATL testing impact is evaluated on 13 rules, whereas the impact of removing the Learning Module is evaluated on only two of the three impacted rules.

### 4. Conclusion

MRMC concludes that the 15% threshold increase across all population groups lacks sufficient statistical analysis. Additionally, the increase in alert volume from the Learning Module scoring changes and the decrease from the ATL tuning exercise cannot be considered as offsetting one another. The impact of these changes should be assessed separately.
