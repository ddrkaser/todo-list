Here’s an improved version of your script with enhanced flow, clarity, and professionalism:

---

**Hi everyone, this is Xiang.**  
Today, I’ll be sharing the findings and challenges we encountered during this revalidation process.  

In 2024, we identified 19 new issues, primarily in the following areas:  

1. **Input Data Quality Control**:  
   We observed significant gaps in the quality control measures for input data.  

2. **Customer Segmentation**:  
   Customer segmentation helps us apply tailored thresholds for different population groups. For instance, we use lower thresholds to monitor high-risk customers and higher thresholds for low-risk customers. However, we found inconsistencies in some threshold settings. In certain cases, thresholds were either misaligned with the actual distribution or set at overly high levels, such as the 100th percentile, which undermines the segmentation’s effectiveness.  

3. **Risk Tolerance and Risk Appetite**:  
   The choice of risk tolerance and risk appetite remains highly subjective. For example, a risk appetite of 3% means we are comfortable with no more than 3% productivity in below-the-line (BTL) testing. Yet, in production, some rules show productivity rates above 20%, while others are below 1%. Despite this disparity, the model owner applied the 3% threshold uniformly across all rules, which raises concerns about its appropriateness.  

4. **Sampling**:  
   Sampling size is another significant issue. For one rule, the model owner sampled just 82 cases out of a base population of 4.5 million, which accounts for a mere 0.0018%. This sample size is far too small to draw meaningful conclusions.  

5. **ATL and BTL Testing**:  
   Regarding above-the-line (ATL) testing, the model owner increased certain thresholds by 15%. When we asked for an explanation, they provided an email from FCP, the risk owner, with a single word: “Approved.” Clearly, this lacks the necessary articulation or justification.  

These are the main issues we identified during revalidation.  

---  

**Now, let’s talk about the challenges.**  
Thanks to MRA, we had to navigate multiple stakeholders, including the M&M Oversight Manager, FCP (the risk owner), and the Head of AML Models (the model owner).  

As mentioned earlier, the model owner frequently emphasized that this is a risk-based approach. While we agree, it’s important to note that the model cannot rely solely on subjective or empirical judgment.  

Our efforts focused on helping stakeholders understand the importance of statistical analysis. Decisions cannot be based solely on expertise or experience; they require quantitative evidence to support them. Often, we hear stakeholders say things like:  
“Based on my experience, there’s nothing wrong with the model—we’ve been using it for years, and it works fine.”  
Sound familiar? You’re not alone. While expertise is undeniably important, it’s not the only factor. At MRMC, we emphasize that model evaluation must incorporate scientific, statistical, and mathematical methodologies—not just instinct.  

On the flip side, when the model owner makes changes, those changes must be conceptually sound.  

**How did we address these challenges?**  
Jay will cover that in more detail.  

Thank you!  

---  

Let me know if you’d like further refinements or adjustments!
