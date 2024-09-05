The thresholds were increased by 15% by the model owner (MO); however, this change lacks support from any accompanying statistical analysis.

The change in thresholds, where they were increased by 15% across all population groups, lacks statistical analysis because there is no evidence or documented rationale that this adjustment was based on a thorough analysis of the data or underlying statistical distributions. Without such an analysis, it's unclear whether the increase is justified for each group, as different population groups might exhibit varied behaviors, risk profiles, or alert patterns. This type of blanket adjustment can lead to significant model risks, such as:

1. **Over-simplification of Group-Level Variances**: Each population group may have unique characteristics, and applying a uniform 15% increase disregards these differences. Some groups may not need an increase, while others might require a more nuanced adjustment. This lack of customization can distort the model's performance.

2. **Increased False Positives/Negatives**: If thresholds are arbitrarily increased, especially for groups where the threshold is already high (e.g., at the 100th percentile), it might not reduce false positive alerts effectively. For groups with lower thresholds, the increase might lead to more false positives, overwhelming resources with unnecessary alerts, or conversely, result in missed suspicious activities (false negatives).

3. **Regulatory Non-Compliance**: The regulator has already highlighted the need for tailoring thresholds to the specific population of affected customers. Applying a one-size-fits-all threshold adjustment directly contradicts these expectations and may result in regulatory scrutiny, especially if no statistical justification is provided.

4. **Model Drift and Performance Degradation**: Without regular, data-driven tuning of thresholds, the model risks drifting from optimal performance. Arbitrary threshold changes may compromise the detection of important risk factors, leading to inefficiencies in the model’s operation and overall degradation in its predictive power.

5. **Inadequate Response to Population Group Distribution**: Different population groups likely have different alert distributions, and the 15% increase doesn’t take into account how these distributions behave. For some population groups, a smaller or larger adjustment may be more appropriate. The lack of statistical backing could mean that the thresholds are either too strict or too lenient for certain groups, leading to skewed model outcomes.

In conclusion, without a statistical basis for these threshold changes, the model may not effectively identify high-risk cases and could be exposed to operational and regulatory risks, ultimately reducing its effectiveness in monitoring for suspicious activity.
