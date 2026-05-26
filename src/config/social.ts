import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
  {
    name: "Github",
    href: "https://github.com/djalmajr",
    linkTitle: "djalmajr on GitHub",
    isActive: true,
  },
  {
    name: "Twitter",
    href: "https://x.com/dj4lm4jr",
    linkTitle: "djalmajr on X",
    isActive: true,
  },
  {
    name: "Mail",
    href: "mailto:djalmajr@gmail.com",
    linkTitle: "Send an email to djalmajr",
    isActive: true,
  },
];

export const SOCIAL_ICONS: Record<string, string> = {
  Github: "Github",
  Twitter: "Twitter",
  Mail: "Mail",
  RSS: "RSS",
};
