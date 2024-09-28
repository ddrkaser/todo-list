Here’s an improved version of your message:

I also looked into the KPMC, and I believe the metric has more issues. 

For instance, the MO calculates CURR_MONTH_PERC as CURR_NUM_OF_KEYS / CURR_MONTH_TOTAL. CURR_NUM_OF_KEYS represents the number of keys in one population group, and CURR_MONTH_TOTAL is the number of keys across all population groups.

If we examine CURR_MONTH_PERC for each population group, most of them are below 1%. Yet, our criteria state that if the absolute difference (|CURR_MONTH_PERC - PREV_MONTH_PERC|) is less than 15%, the status will be green. 

This threshold makes it almost impossible to breach!
