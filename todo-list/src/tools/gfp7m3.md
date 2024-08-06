Based on my understanding:

A risk appetite of 3% is used for sample size calculation and for determining whether to conduct threshold tuning for rules. If suspicious activity aligns with the intent of the individual rule (i.e., it is rule-relevant or responsive), the alert will be deemed productive and included in the risk appetite percentage. Conversely, if the alert does not align with the intent of the individual rule, it is excluded from the productive events.

The risk tolerance is set at 10% for SARs. While a SAR outcome from a productive testing or tuning perspective may not directly relate to model testing, it may contribute to further threshold decisioning. The FCP review identifies and excludes SARs from threshold decisioning if they are not relevant to any rules.
