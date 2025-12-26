---
layout: page
permalink: /research/
title: Research
description: Building ML models that predict, optimize and explain human behavior
nav: true
nav_order: 2
---

### What is Behavior Modeling?

Why do some news articles go viral while others with identical information don't? Why do people click one recommendation but ignore another, even when both are equally relevant? Why does the same message persuade some people but backfire with others?

Traditional ML models optimize only for technical correctness: more accurate predictions, sharper images, better perplexity scores. However, real-world success also depends on human responses. **Behavior modeling** shifts the focus from system performance to human reactions. Instead of asking "Is this output correct?", we ask "Will people engage with it? What drives their choices? How do their preferences evolve?"

This research sits at the crossroads of machine learning, NLP, computer vision and behavioral science. As ML systems increasingly influence what billions of people see, read and buy, we need models that don't just predict outcomes but explain why people behave the way they do. Only then can we build systems that are transparent, controllable and aligned with human values.

---

### Research Pillars

My research focuses on three interconnected thrusts:
- **Predict** human attention, engagement and preferences from multimodal signals
- **Optimize** generative models for behavioral objectives, not just perceptual quality
- **Explain** behavioral drivers with interpretable features that practitioners can trust

#### 🎯 Predict: Modeling Cognitive Signals and Engagement

*Core Question: Can we predict how humans attend to and engage with content?*

#### Key Projects:

**EngageNet** (ICLR 2025) — [Paper](https://openreview.net/forum?id=TmCcNuo03f)
- <u>Problem</u>: Traditional image quality metrics fail to predict viewer engagement (Pearson r < 0.1)
- <u>Solution</u>: Vision-language model that predicts engagement from visual and contextual signals (image + text + timing)
- <u>Impact</u>: State-of-the-art engagement prediction across platforms; revealed critical misalignment between aesthetic quality and behavioral response

**ScanTextGAN** (EACL 2023) — [Paper](https://aclanthology.org/2023.eacl-main.139/) • [Video](https://aclanthology.org/2023.eacl-main.139.mp4)
- <u>Problem</u>: Eye-tracking data is expensive and privacy-invasive
- <u>Solution</u>: First model to synthesize realistic human reading patterns over text
- <u>Impact</u>: Synthetic scanpaths improved NLP performance across 6 datasets spanning 4 tasks

---

### ⚙️ Optimize: Aligning Generative Models with Behavior

*Core Question: Can we steer text-to-image models to optimize for human preferences, not just perceptual quality?*

#### Key Projects:

**Engagement-Optimized Image Generation (EOIG)** (ICLR 2025) — [Paper](https://openreview.net/forum?id=TmCcNuo03f)
- <u>Problem</u>: Diffusion models generate beautiful images that don't engage audiences
- <u>Solution</u>: Three complementary methods: (1) prompt optimization, (2) supervised fine-tuning on high-engagement images, (3) RL with EngageNet-based rewards
- <u>Impact</u>: 3-13% engagement improvement over Stable Diffusion baselines while maintaining visual quality

**BrandFusion** (WACV 2026) — [Website](https://behavior-in-the-wild.github.io/brandfusion.html)
- <u>Problem</u>: Text-to-image models struggle to capture nuanced brand styles (lighting, color palettes, composition)
- <u>Solution</u>: Decoupled framework: Brand-aware VLM predicts style characteristics → Brand-aware Diffusion Model generates aligned images
- <u>Impact</u>: 66.11% human preference rate; generalizes to unseen brands via sector-level patterns

---

### 🔍 Explain: Interpretable Behavior Modeling

*Core Question: Why does content engage viewers? Can we extract human-readable rules?*

#### Key Projects:

**FEST** (Preprint 2025)
- <u>Problem</u>: Black-box optimization leaves practitioners unable to understand or control outcomes
- <u>Solution</u>: Self-evolving decision trees that extract interpretable features from raw data (text, images) and refine them as new evidence arrives
- <u>Impact</u>: Human-readable rules (e.g., "images with dark lighting + minimalistic design drive 2x engagement for brand X") with competitive predictive performance

---

### Vision

Current behavior models treat preferences as fixed snapshots. However, human behavior is messy, dynamic and social. What engages you today might bore you tomorrow. Fashion trends emerge from nowhere and spread through networks. A product recommendation gains credibility when your friends engage with it.

My vision is to build behavior models that capture this fluidity:
- Models that understand how preferences evolve over time and adapt generative models accordingly
- Models that continuously learn behavioral patterns from experience rather than relying on massive labeled datasets
- Models that capture how people influence each other and how collective behavior emerges from individual choices

---

<div class="alert alert-info" role="alert">
  I am always interested in discussing research collaborations and ideas at the intersection of machine learning and behavioral science. <a href="/#contact" class="alert-link">Let's connect</a>!
</div>

