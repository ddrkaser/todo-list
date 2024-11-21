**Issue:**  
For some parameters, the selected thresholds are not consistent across population groups, as they vary in positioning within the distributions of each group. Additionally, the thresholds lack consistency across clusters, which are categorized based on transaction value and volume into three clusters (1, 2, and 3). Notably, there are instances where the threshold for Cluster 2 is higher than for Cluster 3. For example, in rule "PRJ-TSD-EFT-ALL-A-S01-CTY," the thresholds for INDSOF1LR, INDSOF2LR, and INDSOF3LR are set at 11,500, 57,500, and 34,500, respectively. This inconsistency, where Cluster 2 has the highest threshold, raises concerns about the logic and rationale behind the threshold setting.

**Proposed Resolution:**  
The MRMC team has reviewed Sections 5.6.1, 5.6.2, and 5.6.3 of the updated model documentation ([M4]). The Model Owner (MO) conducted a clustering assessment using transaction data spanning November 2022 to October 2023, with the test results documented in [MI-23] STDEV_STATS [0105].  

The analysis revealed no clear hierarchy among Clusters 1, 2, and 3, as the clusters are driven by both transaction value and volume. Further assessment showed that institutional clients (INSCRNC), IRA accounts, and trust accounts (TRSTIRV) exhibit transaction behaviors distinct from individual client segments. When these behaviors were compared against the current clustering parameter values, the alignment across all segments was confirmed.  

Additionally, the findings in [MI-22] ACCOUNT_POP_GRP [061] demonstrated the stability of cluster assignments and a minimal impact of any cluster re-assignments. Therefore, no material risk to the model arises from the current population group assignment approach or the existing thresholds.  

Upon reviewing Table 57, MRMC confirmed that the cluster parameters also lack a clear hierarchy between Clusters 1, 2, and 3, which explains the inconsistencies originally flagged in the issue. It is important to note that these cluster parameters were last updated in 2021. MO has proposed an annual recalibration process for the clustering parameters. This process involves recalculating the values, comparing them to the previous year's parameters, and evaluating their overall impact on the model output.  

Given the alignment of segments with their corresponding clusters, the stability of the clustering approach, and the proposed annual recalibration process, the issue can now be considered resolved.
