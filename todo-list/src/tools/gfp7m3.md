

In analyses 12 and 26, MRMC identified a misalignment between the re-calibration trigger and KMPI 0.3. Specifically, the re-calibration trigger was defined for each control where true positives are below 2% for two consecutive months. However, KMPI 0.3 monitors only the overall model output inquiry ratio, rather than tracking the inquiry ratio for each individual control separately. This design oversight failed to adequately justify why re-calibration was not triggered for the Frequent Trading and Moving The Grid controls.

The MO provided the  file, which contains detailed information about KMPI 0.3. The file indicates that each report is monitored separately and has an individually calculated inquiry ratio.

Additionally, the MO updated the model documentation regarding the model check procedure for Calibration and Parameterization. The conditions for re-calibrating parameters now align with the latest version of KMPI 0.3. Specifically, the re-calibration trigger for approach calibration based on performance was revised. The previous criteria of "True positives are less than 2% for two consecutive months" was updated to "True positives are less than 2% (individual inquiry ratio for each report) for two consecutive quarters."

Consequently, MRMC considers the updated re-calibration trigger to be in alignment with the new KMPI 0.3. This design now provides a clear indicator for recalibrating rules that consistently produce an inquiry ratio below the recalibration threshold of 2%. As such, MRMC finds the submitted remediation adequate to close this issue.



Based on the information provided by the MO regarding KMPI 0.3 and the changes made to the model documentation, particularly the revision of the re-calibration trigger, MRMC considers the remediation satisfactory to close this issue.
