
MRMC acknowledges the appropriateness of the selection of potential independent variables for model development. However, MRMC has identified the following observations:

1. In the model documentation [M4, Section 5.1.6.], LIBOR rates were excluded due to decommissioning. Despite this, LIBOR rates were included as part of the candidate variables during the model selection process. Additional safeguards might be necessary to ensure the selection of suitable variables.

2. In the model documentation [M4, Section 5.1.7.], it is noted that "For all interest rate variables, the absolute values of first differences are taken since a potential stress scenario can be characterized both by an increase as well as a decrease in interest rate levels." However, employing absolute differencing removes directional information and might introduce bias into models, particularly in situations where economic conditions can lead to both positive and negative rate changes. Querying the MO in Question 2 reveals that using absolute differencing assumes the same regression coefficient applies for both directions of changes.
