---
layout: post
title: Why pixel-perfect AI images fail to drive engagement
date: 2026-06-30 10:00:00
description: The prettiest image is rarely the one people act on, and that gap is a measurement problem, not a taste problem.
tags: optimize behavior engagement evaluation generative-ai
categories: research-notes
giscus_comments: false
related_posts: false
published: false
toc:
  beginning: true
---

<div class="blog-tldr" markdown="1">
<strong>TL;DR</strong>

- Image quality scores and human engagement barely correlate. In our data, the Pearson correlation was below 0.1.
- Utility, the behavior you actually want, is a separate objective from aesthetics or prompt adherence. Hold the subject and the look roughly fixed and engagement still moves.
- For generative AI in marketing, the bottleneck is usually evaluation, not generation.
- Decide what human outcome you are optimizing for before you trust any metric.
</div>

## The puzzle

Take a brand that posts a lot of similar content. The Adobe Photoshop account is a good example: a run of posts where the subject barely changes (most of them are cats), the production quality is comparable, and the prompts are followed well. By the usual standards, these images are interchangeable. The engagement is not. Some posts pull far more likes and replies than others that look just as good.

That is the part worth sitting with. When the subject and the aesthetics are held roughly constant, "the cat is cuter" and "the prompt was followed better" stop being available as explanations. Something else is moving the numbers.

<!-- FIGURE: high-vs-low engagement grid (same brand, similar look, different KPIs). Source: brand-post grid Varun shared. -->

## The reflex answer, and why it keeps failing

The standard response to weak engagement is to make the image better. Sharper, cleaner, more on-brand, higher fidelity to the prompt. That assumes engagement is a function of how good the image is.

We checked. Across the data, traditional image quality and perceptual scores did not track engagement. The correlation sat below 0.1. A model can climb every aesthetic metric you give it and still produce content people scroll past.

## Utility is its own objective

Here is the framing I keep coming back to. There are at least three different things we ask a generative model to do, and we treat them as if they were one:

- make something that looks good (aesthetics),
- make something that matches the request (prompt adherence),
- make something people act on (utility).

The first two are the ones we measure by default. The third is the one the business actually cares about, and it does not fall out of the other two for free. The cat posts make this concrete: similar on the first two axes, far apart on the third.

## What EngageNet does instead

EngageNet predicts engagement from the things that actually carry it: the image, the text, and the context the post lands in, taken together, rather than from how the image looks on its own. The point is not a higher aesthetic score. The point is to model the outcome directly, so you can compare two candidate posts on the axis you care about before you publish either one.

## The experiment that did not make the paper

<!-- ANECDOTE: Varun to supply one real moment.
     Candidate directions (pick one that actually happened):
       - a model that topped an aesthetic metric and lost on engagement
       - a baseline that beat a fancier model for an embarrassing reason
       - a single post in the dataset whose performance broke every assumption
     Write it plain, first person, with the specific detail that made it stick. -->

_[Anecdote to be added.]_

## What I take from this

When the target is human response, the metric you trust quietly decides the model you ship. Most teams never look hard at that choice. They optimize a proxy because it is easy to compute, then wonder why the well-scored output underperforms in the wild.

## Takeaways for builders

- Name the human outcome (clicks, watch time, saves) before you pick a metric.
- Do not ship engagement work on FID, CLIPScore, or aesthetic scores alone.
- Instrument real response early. A weak proxy chosen late is expensive to undo.

## References and further reading

- EngageNet (ICLR 2025). [Paper](https://openreview.net/forum?id=TmCcNuo03f)
- Heusel et al., FID (Fréchet Inception Distance).
- Hessel et al., CLIPScore.
