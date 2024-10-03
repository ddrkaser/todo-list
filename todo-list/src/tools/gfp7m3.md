Issue: The model's productivity definition includes non-relevant factors, leading to inadequate BTL sample sizes and an overestimation of ATL performance metrics.

MRMC has identified a risk that the model's productivity definition, used in assessing ATL and BTL alerts, is not fit for purpose. The current definition allows alerts to be deemed productive for reasons unrelated to the model, such as SARs filed due to adverse media or non-rule-relevant activities. As a result, MRMC finds that the model's productivity definition overestimates its true ATL performance and provides an inaccurate estimate of BTL performance.

This issue was discovered during BTL testing (refer to analysis 8), where evidence from the model owner  shows that in 2023, 33% of false negatives were deemed irrelevant to the model's calibration. Additionally, MRMC notes that this finding indicates a similar risk for ATL alerts, which are evaluated for productivity using the same criteria as BTL alerts , as confirmed by FCP .

MRMC has identified the following specific risks arising from the current model productivity definition:

1. **BTL Sample Size Risk**: The model’s BTL sample sizes are insufficient to accurately assess its calibration. MRMC observes that key parameters used to calculate BTL sample sizes—expected BTL productivity, risk appetite, and margin of error (see —are overestimated due to the inclusion of adverse media and non-rule-relevant alerts in the productivity definition.

2. **ATL Performance Metric Risk**: The model's ATL performance metric is overestimated and not accurate. The inclusion of non-relevant alerts in the productivity definition distorts the true measure of the model’s performance. This misalignment violates of the Governance of Models policy, posing a risk of stakeholders making decisions based on incorrect performance metrics.


MRMC has noted that, according to [ES-6] Productivity Definition, SARs filed due to negative news/adverse media should not be considered productive. However, these SARs are still included under Status ID: . 

Additionally, MRMC observes that in MRMP, KMPI 5.1 and 5.2, both model productivity and rule productivity are calculated based on the definition outlined in the Model documentation, which includes SARs filed due to adverse media. MRMC identifies a risk that this approach inflates the model's production performance metric, leading to an overestimation of the true production performance of the model.
