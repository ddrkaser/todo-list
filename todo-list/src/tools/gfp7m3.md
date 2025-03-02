Here’s your improved text with clearer structure and readability:  

---

1. **BTL Testing and Rule Break Scoring Adjustments:**  
   During the BTL test, as part of establishing the baseline for CB rules, the rule break score must also be adjusted to ensure that when an entity meets the pre-set conditions (detection thresholds), it receives a sufficient score for evaluation. In Actimize, each rule has distinct rule break scoring components, each with its own configurable scoring scale, adding both flexibility and complexity.  

   To eliminate the influence of rule break scoring in BTL testing, the model owner applied a score of 40 to the tunable detection parameters—such as amount, standard deviation, and recurrence—when the detection scoring parameter is not applicable. This approach prevents any bias during baselining. Meanwhile, secondary detection rules retain a maximum score of 20 to align with their monitoring intent.  

   MRMC has determined that setting the activity value score to 40 for all tested thresholds will remove the impact of the scoring parameter on BTL testing and ensure that entities in the below-infraction region are included in the BTL base population. A detailed assessment of BTL execution is available in analyses 19 and 20.  

2. **Tuning and Optimization Adjustments in 2024:**  
   Following the tuning and optimization efforts in 2024, the model owner proposed applying a score of 40 to one of the tunable detection parameters (amount, standard deviation, or recurrence, when the detection scoring parameter is not applicable) for non-SB/non-secondary rules. This ensures that any rule break triggers an alert with a minimum score of 40.  

   MRMC has reviewed the sensitivity assessment in Appendix E of [MM-11] 9448_SAM CB_FCP AML TM Tuning and Optimization 2024_V12 [M69] and confirmed that the volume increase/decrease is within acceptable limits as determined by FCP.  

3. **Implementation and Future Assessment:**  
   Given that entities in the below-infraction region have already been included in the BTL base population (as mentioned in point 1) and a score of 40 will be implemented upon revalidation completion (as noted in point 2), the existing scoring scale will be replaced with the new one. The appropriateness of this new scoring scale will be reassessed in the next revalidation cycle.  

---

This version improves clarity, structure, and readability while maintaining technical accuracy. Let me know if you need any refinements!
