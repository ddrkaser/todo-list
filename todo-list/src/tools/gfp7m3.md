In the 2023 revalidation cycle, the MO hasn't completed the FCP qualitative review and approvals by the end of the revalidation process. There are several key missing components:

1. Final results from the FCP qualitative review are absent.
2. Additional hypothesis testing results indicate that two rules failed the initial hypothesis test.
3. The final conclusion from the MO regarding the model's performance within the desired risk appetite is still pending.

Regarding the BTL threshold drop strategy, there are a couple of concerns:

1. The strategy doesn't guarantee that the BTL test region remains meaningful for all parameter/population segment threshold levels. Some segments in detection rules have thresholds set so high that even lowering them by 15% fails to capture the maximum parameter value.
2. In security blanket rules, some population segments have thresholds set very close to the median. Lowering them to the median creates an extremely small BTL region.

Furthermore, MRMC has identified weaknesses in performance monitoring oversight and periodic tuning methodology related to the alert suppression of the negative scoring functionality of the learning module. The procedures and processes were inadequate in capturing and providing insights for the affected customer population, such as the duration of suppressed parties and the volume impacted. Additionally, there were no criteria established for testing during model performance monitoring and tuning in this dimension.
