---
layout: page
title: Pitch-Perfect -- Personalized Sonification for Accessible Data Visualization
description: Advisor -- Prof. Yea-Seul Kim (Visualization Lab, Computer Sciences, UW-Madison)
img: 
importance: 1
category: lead author projects
related_publications: 
---

<b> Research Question: </b>

Audio charts make data accessible for the visually impaired populations. However, it can mislead listeners if the mapping function between data and audio display is not aligned with one's internal mapping. Therefore, we studied the individual differences of the internal mapping among users.

<b> Method: </b>
1. In the user study, participants first were presented with two audio clips that represented the minimum and maximum values. Then, they listened to three audio clips and were instructed to estimate the encoded data value.
2. Applying a power law function to each participant's data to investigate individual difference of pitch-to-data mapping.
3. Contructed the personalized models with varied numbers of data points and normalized/non-normalized data to investigate the properties of the models.

<b> Main Findings: </b>
 
<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.html path="assets/img/pitch_perfect_indipowerlaw.jpg" title="individaul difference" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.html path="assets/img/pitch_perfect_normalized.jpg" title="normalized" class="img-fluid rounded z-depth-1" %}
    </div>
    
</div>

1. We confirmed the uniqueness of each person’s internal mapping, implying that participants assigned divergent numbers to a given pitch.


2. Models fitted with normalized data had fewer errors. However, data standardization is not necessary when minimum and maximum mapping were assigned. The result suggests that it is hard for participants to learn the mapping used in a system.
