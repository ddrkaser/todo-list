Here’s a refined version of your message:

I wasn’t the one who originally raised the issue, but I’ve reviewed the analysis and the issue description. Here’s my understanding: MRMC raised this issue specifically to request that the MO track changes only at the CRR level. Currently, KMPI 3.2 monitors percentage changes within population groups, which are a combination of Segment Type, Cluster Value, and CRR.

From the MO’s response, they indicated that the CRR team will notify the MO when there’s a perceived risk rating miscalculation by the CRR engine. At that point, the MO will perform an impact analysis (as referred to in MI-20).

In my view, if we’re monitoring changes in a population group that’s affected by multiple factors, the changes should be more apparent. For example, if we have 100 entities and 2 of them change their CRR, that’s a 2% change. If, in addition, 2 entities also change their cluster value, that’s another 2% change. Combining both changes (CRR and cluster value), the overall change should be at least 2% and, at most, 4%. So, I’m okay with not monitoring at the CRR level alone.

What do you think? Am I understanding KMPI 3.2 correctly?
