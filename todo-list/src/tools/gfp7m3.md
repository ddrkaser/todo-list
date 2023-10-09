MRMC identified two rules that were not documented in the model documentation:

1. "" generated 78 alerts. The model owner explained that these are manual alerts created manually, and the rule ID "MAS" is used to differentiate manual alerts from automated alerts.

2. "" produced 9 alerts. According to the model owner, in October 2022, there were upgrades in the test environment, and the "ADR-SLL" rule was mistakenly activated in FS production, resulting in these 9 alerts. Eight of these alerts were standalone "ADR-SLL" alerts and were subsequently "soft deleted." However, one alert is a mixed rule alert involving TSD, ACH, and EFC rules. This incident was escalated to FC for assessment. MRMC confirms that the "ADR-SLL" rule is not currently active in production.
