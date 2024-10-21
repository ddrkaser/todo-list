I have reviewed the email chain, and it appears that Eckhard has led the conversation in the wrong direction. The example he provided illustrates how the model works in an ideal scenario. However, he has not demonstrated that his model consistently works in a way that ensures the rules generate scores cohesively, thereby maximizing productivity and efficiency.

In the NMMC submission, the Model Owner (MO) conducted a lookback analysis using data from February 2021 to January 2024. For the 12 impacted rules, all transaction values that triggered an evaluation or detection were examined, and it was observed that no alerts were missed due to any scoring gaps. This suggests that the new scoring scale does not affect alert generation. 

However, the justification for the appropriateness of the scoring scale is absent from any of the model documentation. This justification should either be provided or assessed by subject matter experts (SMEs). 

In the 2022 BTL, the MO tested the alert scores and concluded that they were appropriate. If the old scores indeed created a monitoring gap and the BTL test failed to identify this gap, then the design of the BTL test is flawed and should not be relied upon to assess the appropriateness of alert scores.

To illustrate, if I have a car that I send to an inspector annually to check for malfunctions, and the inspector assures me everything is in order, but I later experience a car accident due to brake failure—when I get a new car of a similar model, should I trust the same inspector to check it? Definitely not.

MO should engage with the FCP to review how the new scores align with the intended functionality of the rules. The previous BTL test concluded that the scoring parameters were appropriate, which may indicate that the current BTL design is not capable of properly evaluating the appropriateness of the scoring parameters.
