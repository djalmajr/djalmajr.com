import rss from "@astrojs/rss";
import { getRelativeLocaleUrl } from "astro:i18n";
import { SITE } from "../config";
import { getLocalizedEntries, slugFromId } from "./localeContent";

/** Builds the RSS feed for the given locale, with locale-aware item links. */
export async function generateRss(locale: string) {
  const posts = await getLocalizedEntries("posts", locale);

  const items = posts
    .map(post => ({
      title: post.data.title,
      pubDate: post.data.date ? new Date(post.data.date) : undefined,
      description: post.data.description,
      link: getRelativeLocaleUrl(locale, `/posts/${slugFromId(post.id)}/`),
    }))
    .sort((a, b) => (b.pubDate?.getTime() ?? 0) - (a.pubDate?.getTime() ?? 0));

  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items,
  });
}
