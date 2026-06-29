---
layout: about
title: About
permalink: /
subtitle: >
  ML Research Associate, <a href='https://adobe.mdsr.live/'>Adobe MDSR Lab</a><br>
  📍 New Delhi, India

profile:
  align: right
  image: prof_pic.jpg
  image_circular: true
  more_info: >
    <div class="typewriter-container">
      <span class="typewriter-text" id="typewriter"></span><span class="typewriter-cursor">|</span>
    </div>

selected_papers: true
social: true

announcements:
  enabled: true
  scrollable: true
  limit: 4

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

<div class="hero-hook" markdown="1">
I build AI for the part most benchmarks miss: how people read, react and decide.
</div>

I am a researcher at Adobe's [Media and Data Science Research (MDSR) Lab](https://adobe.mdsr.live/). My work bridges computer vision, natural language processing, and computational behavioral science to build technically robust AI systems grounded in human behavior.

To achieve this, my research pursues three connected objectives: to **predict** how people respond to digital content, **optimize** models for human-centered goals, and **explain** the patterns driving their decisions. In practice, this work has taken me from synthetic reading signals for language models to engagement-aware image generation, brand-aligned content creation, and expert-guided feature engineering.

Earlier, I earned my B.Tech (Hons.) degree in Computer Science and Engineering with a Minor in Economics from [IIIT Delhi](https://iiitd.ac.in/), where I was recognized on the Dean's List of Academic Excellence for three consecutive years. I completed my Bachelor's thesis on multimodal advertisement understanding with [Prof. Rajiv Ratn Shah](https://midas.iiitd.ac.in/) at MIDAS Lab, and built graph-based models for automatic grading with [Prof. Mukesh Mohania](https://scholar.google.com/citations?user=zgaqvNQAAAAJ&hl=en).

<div class="research-questions" markdown="1">

My long-term goal is to build behavior models that understand how human preferences evolve over time, continuously learn from experience, operate from limited behavioral signals, and provide interpretable insights that practitioners can trust.

[Read more about my research and vision →](/research/){:.read-more}

</div>

---

<div class="connect-cta" markdown="1">

##### Let's Connect

I am always interested in discussing:
- **Research collaborations and ideas** at the intersection of machine learning and behavioral science
- **Opportunities** in AI research labs (academic or industry)

</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const phrases = ['Hello!', 'नमस्ते!'];
  const el = document.getElementById('typewriter');
  if (!el) return;

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let pauseTime = 0;

  const TYPE_SPEED = 90;
  const DELETE_SPEED = 55;
  const PAUSE_AFTER_TYPE = 1000;
  const PAUSE_AFTER_DELETE = 400;

  function tick() {
    const current = phrases[phraseIdx];

    if (!isDeleting) {
      el.textContent = current.substring(0, charIdx + 1);
      charIdx++;

      if (charIdx === current.length) {
        isDeleting = true;
        pauseTime = PAUSE_AFTER_TYPE;
      } else {
        pauseTime = TYPE_SPEED;
      }
    } else {
      el.textContent = current.substring(0, charIdx - 1);
      charIdx--;

      if (charIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        pauseTime = PAUSE_AFTER_DELETE;
      } else {
        pauseTime = DELETE_SPEED;
      }
    }

    setTimeout(tick, pauseTime);
  }

  setTimeout(tick, 600);
});
</script>
