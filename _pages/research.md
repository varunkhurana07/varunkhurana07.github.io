---
layout: page
permalink: /research/
title: Research
description: Building ML models that predict, optimize and explain human behavior
nav: true
nav_order: 2
---

<div class="shloka-epigraph">
  <p class="shloka-devanagari">तमसो मा ज्योतिर्गमय ।</p>
  <p class="shloka-translation">"Lead me from darkness to light"</p>
  <p class="shloka-source">— Brihadaranyaka Upanishad (1.3.28)</p>
</div>

---

### Why Behavior Modeling?

<div class="research-questions" markdown="1">

*Why do some news articles go viral while others with identical information don't? Why do people click one recommendation but ignore another, even when both are equally relevant? Why does the same message persuade some people but backfire with others?*

</div>

Traditional ML models optimize only for technical correctness: more accurate predictions, sharper images, better perplexity scores. However, real-world success also depends on human responses. **Behavior modeling** shifts the focus from system performance to human reactions. Instead of asking "Is this output correct?", we ask "Will people engage with it? What drives their choices? How do their preferences evolve?"

This research sits at the crossroads of machine learning, NLP, computer vision and behavioral science. As ML systems increasingly influence what billions of people see, read and buy, we need models that don't just predict outcomes but explain why people behave the way they do. Only then can we build systems that are transparent, controllable and aligned with human values.

---

### Research Pillars

My research focuses on three interconnected thrusts:
- **Predict** human attention, engagement and preferences from multimodal signals
- **Optimize** generative models for behavioral objectives, not just perceptual quality
- **Explain** behavioral drivers with interpretable features that practitioners can trust

<div class="research-pillar-card" markdown="1">

#### 🎯 Predict: Modeling Cognitive Signals and Engagement

*Core Question: Can we predict how humans attend to and engage with content?*

<div class="research-project" markdown="1">

**EngageNet** <span class="proj-badge proj-badge-venue">ICLR 2025</span> — [Paper](https://openreview.net/forum?id=TmCcNuo03f)
- <u>Problem</u>: Traditional image quality metrics fail to predict viewer engagement (Pearson r < 0.1)
- <u>Solution</u>: Vision-language model that predicts engagement from visual and contextual signals (image + text + timing)
- <u>Impact</u>: State-of-the-art engagement prediction across platforms; revealed critical misalignment between aesthetic quality and behavioral response

</div>

<div class="research-project" markdown="1">

**ScanTextGAN** <span class="proj-badge proj-badge-venue">EACL 2023</span> — [Paper](https://aclanthology.org/2023.eacl-main.139/) • [Video](https://aclanthology.org/2023.eacl-main.139.mp4)
- <u>Problem</u>: Eye-tracking data is expensive and privacy-invasive
- <u>Solution</u>: First model to synthesize realistic human reading patterns over text
- <u>Impact</u>: Synthetic scanpaths approximate cognitive signals that improved NLU performance across 6 datasets spanning 4 tasks

</div>

</div>

---

<div class="research-pillar-card" markdown="1">

#### ⚙️ Optimize: Aligning Generative Models with Behavior

*Core Question: Can we steer text-to-image models to optimize for human preferences, not just perceptual quality?*

<div class="research-project" markdown="1">

**Engagement-Optimized Image Generation (EOIG)** <span class="proj-badge proj-badge-venue">ICLR 2025</span> — [Paper](https://openreview.net/forum?id=TmCcNuo03f)
- <u>Problem</u>: Diffusion models generate beautiful images that don't engage audiences
- <u>Solution</u>: Three complementary methods: (1) prompt optimization, (2) supervised fine-tuning on high-engagement images, (3) RL with EngageNet-based rewards
- <u>Impact</u>: 3-13% engagement improvement over Stable Diffusion baselines while maintaining visual quality

</div>

<div class="research-project" markdown="1">

**BrandFusion** <span class="proj-badge proj-badge-venue">WACV 2026</span> — [Paper](https://openaccess.thecvf.com/content/WACV2026/html/Gupta_BrandFusion_Aligning_Image_Generation_with_Brand_Styles_WACV_2026_paper.html) • [Project](https://behavior-in-the-wild.github.io/brandfusion.html)
- <u>Problem</u>: Text-to-image models struggle to capture nuanced brand styles (lighting, color palettes, composition)
- <u>Solution</u>: Decoupled framework: Brand-aware VLM predicts style characteristics → Brand-aware Diffusion Model generates aligned images
- <u>Impact</u>: 68.61% human preference rate; generalizes to unseen brands via sector-level patterns

</div>

</div>

---

<div class="research-pillar-card" markdown="1">

#### 🔍 Explain: Interpretable Behavior Modeling

*Core Question: Can models explain their decisions through features that domain experts recognize and trust?*

<div class="research-project" markdown="1">

**FEST** <span class="proj-badge proj-badge-venue">Preprint 2026</span> — [Paper](https://arxiv.org/abs/2606.08800) • [Project](https://behavior-in-the-wild.github.io/fest.html) • [Dataset](https://huggingface.co/datasets/brand-genome/brand-guidelines-pdfs)
- <u>Problem</u>: In high-stakes settings like brand compliance, clinical care and content moderation, practitioners cannot deploy models whose features they are unable to inspect or check against expert documentation
- <u>Solution</u>: Self-evolving decision trees that discover interpretable features from raw text and images, and turn qualitative expert guidelines (e.g., "maintain a professional tone") into precise, measurable features
- <u>Impact</u>: Leads in 17 of 20 classifier-task combinations (mean +4.2 pp) and covers 60-80% of expert-designed features; accuracy improves a further 6-12 pp when seeded with expert guidelines. Ships BrandGuide, a dataset of 1M+ assets across 2,683 brands

</div>

</div>

---

### Vision

Current behavior models treat preferences as fixed snapshots. However, human behavior is messy, dynamic and social. What engages you today might bore you tomorrow. Fashion trends emerge from nowhere and spread through networks. A product recommendation gains credibility when your friends engage with it.

My vision is to build behavior models that capture this fluidity:
- Models that understand how preferences evolve over time and adapt generative models accordingly
- Models that continuously learn behavioral patterns from experience rather than relying on massive labeled datasets
- Models that capture how people influence each other and how collective behavior emerges from individual choices

---

<div class="custom-alert" markdown="1">

I am always glad to discuss research ideas, collaborations, and opportunities (academic or industry) at the intersection of machine learning and behavioral science. [Let's connect](/#contact)!

</div>
