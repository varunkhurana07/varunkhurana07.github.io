---
layout: page
permalink: /publications/
title: Publications
description: publications by categories in reversed chronological order.
nav: true
nav_order: 3
---

<!-- _pages/publications.md -->

<div class="custom-alert" markdown="1">

**Note:** For an up-to-date list of publications and patents, please refer to my [Google Scholar profile](https://scholar.google.com/citations?user=pJXPThwAAAAJ){:target="_blank"}.

</div>

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>

---

## Patents

<div class="publications">

{% bibliography --file patents --template patent %}

</div>

