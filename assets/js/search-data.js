// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "Building ML models that predict, optimize and explain human behavior",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "Notes on machine learning grounded in human behavior.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-news",
          title: "News",
          description: "Updates on publications, presentations, awards and milestones.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "post-synthetic-eye-tracking-teaching-nlp-models-how-people-read",
        
          title: "Synthetic eye tracking: teaching NLP models how people read",
        
        description: "Real eye-tracking is costly and privacy-sensitive. Synthetic scanpaths can still carry useful reading structure when the limits of the proxy are kept explicit.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/synthetic-eye-tracking-nlp/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-work-multi-relational-graph-transformer-for-automatic-short-answer-grading-got-accepted-at-naacl-2022-selected-for-oral-presentation",
          title: 'Our work “Multi-Relational Graph Transformer for Automatic Short Answer Grading” got accepted at...',
          description: "",
          section: "News",},{id: "news-joined-adobe-as-a-research-intern-in-the-media-and-data-science-research-lab",
          title: 'Joined Adobe as a Research Intern in the Media and Data Science Research...',
          description: "",
          section: "News",},{id: "news-our-work-synthesizing-human-gaze-feedback-for-improved-nlp-performance-got-accepted-at-eacl-2023",
          title: 'Our work “Synthesizing Human Gaze Feedback for Improved NLP Performance” got accepted at...',
          description: "",
          section: "News",},{id: "news-graduated-from-iiit-delhi-with-a-b-tech-honors-in-computer-science-and-engineering-and-minor-in-economics",
          title: 'Graduated from IIIT Delhi with a B.Tech (Honors) in Computer Science and Engineering...',
          description: "",
          section: "News",},{id: "news-joined-adobe-systems-full-time-as-ml-research-associate-in-the-media-and-data-science-research-lab",
          title: 'Joined Adobe Systems full time as ML Research Associate in the Media and...',
          description: "",
          section: "News",},{id: "news-got-promoted-to-research-associate-2-at-adobe-systems",
          title: 'Got promoted to Research Associate 2 at Adobe Systems! 🎉',
          description: "",
          section: "News",},{id: "news-our-work-adquesta-knowledge-guided-visual-question-answer-framework-for-advertisements-accepted-at-wacv-2025",
          title: 'Our work “AdQuestA: Knowledge-Guided Visual Question Answer Framework for Advertisements” accepted at WACV...',
          description: "",
          section: "News",},{id: "news-our-paper-measuring-and-improving-engagement-of-text-to-image-generation-models-has-been-accepted-at-iclr-2025",
          title: 'Our paper “Measuring And Improving Engagement of Text-to-Image Generation Models” has been accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-brandfusion-aligning-image-generation-with-brand-styles-has-been-accepted-at-wacv-2026",
          title: 'Our paper “BrandFusion: Aligning Image Generation with Brand Styles” has been accepted at...',
          description: "",
          section: "News",},{id: "news-our-paper-bridging-expert-knowledge-and-automated-feature-engineering-via-self-evolution-fest-is-now-available-as-a-preprint-on-arxiv",
          title: 'Our paper “Bridging Expert Knowledge and Automated Feature Engineering via Self-Evolution” (FEST) is...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%76%61%72%75%6E%31%39%31%32%34@%69%69%69%74%64.%61%63.%69%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/varunkhurana07", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/varunkhurana07", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=pJXPThwAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/varunkhurana07", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
