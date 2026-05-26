// @ts-check
import { defineConfig } from "astro/config";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Opens external links (http/https) in a new tab. Inline to avoid an extra dep.
function rehypeExternalLinks() {
  /** @param {any} tree */
  return tree => {
    /** @param {any} node */
    const visit = node => {
      if (node.type === "element" && node.tagName === "a") {
        const href = node.properties?.href;
        if (typeof href === "string" && /^https?:\/\//.test(href)) {
          node.properties.target = "_blank";
          node.properties.rel = "noopener noreferrer";
        }
      }
      if (Array.isArray(node.children)) node.children.forEach(visit);
    };
    visit(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://djalmajr.com",
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypeExternalLinks],
  },
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ["en", "pt", "es"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", pt: "pt", es: "es" },
      },
    }),
  ],
});
