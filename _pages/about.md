---
layout: about
title: About
permalink: /
subtitle: >
  ML Research Associate 2, <a href='https://www.adobe.com/'>Adobe Systems</a><br>
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

<div class="research-hook">
<p>Why do some news articles go viral while others with identical information don't? Why do people click one recommendation but ignore another, even when both are equally relevant?</p>
</div>

I build models that **predict, optimize and explain human behavior**, bridging large language models, natural language processing, computer vision and behavioral science to help machines understand not just what people see, but what makes them engage.

I am a Research Associate at Adobe Systems, working in the [Media and Data Science Research (MDSR) Lab](https://adobe.mdsr.live/) with [Yaman Kumar Singla](https://sites.google.com/view/yaman-kumar/) and [Balaji Krishnamurthy](https://scholar.google.com/citations?user=n8iUBg8AAAAJ&hl=en). My research spans three connected thrusts: (i) predicting engagement and attention signals from human interactions with content, (ii) optimizing generative models for behavioral objectives, and (iii) explaining behavioral drivers with interpretable features. I have published at top-tier conferences including **ICLR, EACL, NAACL and WACV**, and have filed multiple patents for my work.

I completed my B.Tech (Hons.) in Computer Science & Engineering with a Minor in Economics from [IIIT Delhi](https://iiitd.ac.in/) in 2023, where I was consistently recognized on the **Dean's List of Academic Excellence for three consecutive years**. During my undergraduate studies, I completed my Bachelor's thesis on multimodal advertisement understanding advised by [Prof. Rajiv Ratn Shah](https://midas.iiitd.ac.in/) at MIDAS Lab, and developed graph-based models for automatic grading with [Prof. Mukesh Mohania](https://scholar.google.com/citations?user=zgaqvNQAAAAJ&hl=en).

---

**My long-term vision is to build behavior models that understand how human preferences evolve over time, continuously learn from experience, operate from limited behavioral signals and provide interpretable insights that practitioners can trust.**

*Read more about my [research background and vision](/research/).*

---

<div class="connect-cta">

##### Let's Connect

I am always interested in discussing:
- **Research collaborations and ideas** at the intersection of machine learning and behavioral science
- **Opportunities** in AI research labs (academic or industry)

</div>

<br>

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
  const PAUSE_AFTER_TYPE = 2200;
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
