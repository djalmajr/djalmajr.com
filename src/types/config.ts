export interface SiteConfig {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage: string;
  postPerPage: number;
  favicon: string;
  lang: string;
}

export interface ThemeConfig {
  lightAndDark: boolean;
  themeLight: string;
  themeDark: string;
}

export interface SettingsConfig {
  showTagsInNavbar: boolean;
  showRSSInFooter: boolean;
  addDevToolsInProduction: boolean;
}

export interface UmamiAnalyticsConfig {
  websiteId: string;
  src: string;
}

export interface AnalyticsConfig {
  ga4Id?: string;
  umami?: UmamiAnalyticsConfig;
}

export interface NavLink {
  href: string;
  label: string;
  isActive: boolean;
  /** i18n key under UIStrings.nav; falls back to `label` when absent. */
  key?: string;
  /** External link (e.g. cross-link to the other site) — not locale-prefixed. */
  external?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  linkTitle: string;
  isActive: boolean;
}

export interface PageConfig {
  title: string;
  subtitle: string;
  isActive: boolean;
}

export type PagesConfig = Record<string, PageConfig>;
