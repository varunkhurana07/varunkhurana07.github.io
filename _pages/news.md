---
layout: page
title: News
permalink: /news/
nav: true
nav_order: 4
images:
  slider: true
---

<div class="news-carousel-section">

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true" autoplay-delay="4000" autoplay-disable-on-interaction="false" speed="600">
  <swiper-slide>
    {% include figure.liquid loading="eager" path="assets/img/news/poster_iclr_2025.jpg" class="img-fluid rounded z-depth-1" caption="Presenting our work on measuring and improving engagement of text-to-image generative models at ICLR 2025, Singapore Expo" %}
  </swiper-slide>
  <swiper-slide>
    {% include figure.liquid loading="eager" path="assets/img/news/convocation_iiitd_2023.jpg" class="img-fluid rounded z-depth-1" caption="Receiving my B.Tech (Hons.) degree in Computer Science and Engineering at the IIIT Delhi Convocation Ceremony, 2023" %}
  </swiper-slide>
</swiper-container>

</div>

---

{% include news.liquid %}
