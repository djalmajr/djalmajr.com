import type { NavLink } from "../types";

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "About", key: "home", isActive: true },
  { href: "/projects", label: "Portfolio", key: "projects", isActive: true },
  { href: "/posts", label: "Blog", key: "posts", isActive: true },
  { href: "/cv", label: "CV", key: "cv", isActive: true },
  { href: "/tags", label: "Tags", key: "tags", isActive: true },
  {
    href: "https://djalmajr.dev",
    label: "Dev",
    key: "dev",
    isActive: true,
    external: true,
  },
];
