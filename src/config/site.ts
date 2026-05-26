import type {
  SiteConfig,
  ThemeConfig,
  SettingsConfig,
  UmamiAnalyticsConfig,
  AnalyticsConfig,
} from "../types";

export const SITE: SiteConfig = {
  website: "https://djalmajr.com/",
  author: "Djalma Jr.",
  desc: "Personal site of Djalma Jr. — projects, portfolio and personal notes.",
  title: "Djalma Jr.",
  ogImage: "og.webp",
  postPerPage: 5,
  favicon: "/favicon.svg",
  lang: "en",
};

export const THEME_CONFIG: ThemeConfig = {
  lightAndDark: true,
  themeLight: "light_default",
  themeDark: "dark_notepad",
};

export const SETTINGS: SettingsConfig = {
  showTagsInNavbar: true,
  showRSSInFooter: true,
  addDevToolsInProduction: false,
};

const umami: UmamiAnalyticsConfig = {
  websiteId: "",
  src: "https://cloud.umami.is/script.js",
};

export const ANALYTICS: AnalyticsConfig = {
  ga4Id: "",
  umami: umami,
};
