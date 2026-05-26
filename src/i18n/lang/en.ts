import type { UIStrings } from "../types";

export default {
  buttons: {
    backLink: "Go back to {{section}}",
    goBack: "Go back",
    nextPost: "Next Post",
    previousPost: "Previous Post",
    rss: "RSS Feed",
    sharePost: "Share:",
    shareVia: "Share via {{platform}}",
    themeToggle: "Toggle theme",
    viewExternal: "View external",
  },
  footer: {
    allRights: "All rights reserved.",
    builtWith: "Built with",
    devSite: "Visit my dev site",
  },
  nav: {
    cv: "CV",
    dev: "Dev",
    home: "About",
    posts: "Blog",
    projects: "Portfolio",
    tags: "Tags",
  },
  notFound: {
    goHome: "Go back home",
    message: "Page Not Found",
    title: "404: Page Not Found",
  },
  pages: {
    cvSubtitle: "A bit of my background.",
    cvTitle: "Curriculum Vitae",
    education: "Education",
    experience: "Professional Experience",
    homeSubtitle: "",
    homeTitle: "About Me",
    postsSubtitle: "Personal notes, ideas and things I'm into.",
    postsTitle: "Blog",
    projectsSubtitle: "Things I've built.",
    projectsTitle: "Portfolio",
    skills: "Skills",
    tagsSubtitle: "Browse content by topic.",
    tagsTitle: "Tags",
  },
  pagination: {
    next: "Older",
    page: "Page {{current}} of {{total}}",
    prev: "Newer",
  },
  sidebar: {
    socialLinks: "Social Links",
  },
  tags: {
    label: "Tags",
    taggedWith: 'Content tagged with "{{tag}}"',
    uniqueTopics: "{{count}} unique topics",
  },
} satisfies UIStrings;
