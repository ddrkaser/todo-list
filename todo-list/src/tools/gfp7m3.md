In this test, MRMC evaluated the significance of infraction scores for alert generation by examining the frequency of infractions with scores below 40 within the period between April 2022 to March 2023. Figure 65 illustrates how often rules generated infractions with scores lower than 40.

Key observations made by MRMC include:

1. In total, 37% of all infractions contain scores lower than 40.

2. 29 out of 38 rules (76%) produced at least one infraction below 40. Although a significant number of rules generated infractions with scores below 40, the percentage of infractions (2%) contributed by these rules is considered insignificant, implying that only a small percentage of alerts are below the specified threshold.

3. Four CDD Deviation in Anticipatory Profile (AML_QR) rules have 0% of infractions below 40. This is because AML_QR rules detect deviations in Expected/Anticipated Activity and only return a score of 40 when triggered.

4. Five Entity Focus Classification (EFC) rules have 100% of infractions below 40. EFC rules trigger based on specific attributes, such as whether the party is a Politically Exposed Person (PEP) or the risk level of the account. These rules are non-detection rules and cannot generate alerts on their own. They return a score of 5 when triggered.

5. The rule with the ID "PRJ-RND-SLL-ALL-A-S14-SST" contains 100% of infractions below 40. Further investigation revealed that all 2094 out of 2094 (100%) infractions have a score of 20. This indicates that the rule break scores or parameters are not properly tuned, resulting in a failure to assign scores based on risk factors like transaction value, recurrence, and prior history.

Overall, the analysis suggests that while some rules generate infractions with scores below 40, their contribution to the total alert count is relatively small. Additionally, for specific rules, score assignment and tuning require attention to better reflect the underlying risk factors.
