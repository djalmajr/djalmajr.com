import { getCollection } from "astro:content";
import { DEFAULT_LOCALE } from "../i18n/locales";
import { getLocalizedEntries, localeFromId, slugFromId } from "./localeContent";

/**
 * Aggregates tags from a single locale (the default-locale entries) so counts
 * aren't multiplied across translations.
 */
export async function getAllTags() {
  const projects = await getCollection("projects");
  const posts = await getCollection("posts");

  const allEntries = [...projects, ...posts].filter(
    entry => localeFromId(entry.id) === DEFAULT_LOCALE
  );
  const tags: Record<string, number> = {};

  allEntries.forEach(entry => {
    const entryTags = (entry.data as any).tags || [];
    entryTags.forEach((tag: string) => {
      const normalizedTag = tag.trim().toLowerCase();
      if (normalizedTag) {
        tags[normalizedTag] = (tags[normalizedTag] || 0) + 1;
      }
    });
  });

  return Object.entries(tags)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

/**
 * Returns the current locale's entries (with default-locale fallback) that are
 * tagged with the given tag. Each item carries its `collection` and `slug`.
 */
export async function getContentByTag(tag: string, locale: string) {
  const normalizedSearchTag = tag.toLowerCase();

  const projects = await getLocalizedEntries("projects", locale);
  const posts = await getLocalizedEntries("posts", locale);

  const filterFn = (entry: any) => {
    const entryTags = (entry.data as any).tags || [];
    return entryTags.some(
      (t: string) => t.toLowerCase() === normalizedSearchTag
    );
  };

  return [
    ...projects.filter(filterFn).map(e => ({
      ...e,
      collection: "projects",
      slug: slugFromId(e.id),
    })),
    ...posts.filter(filterFn).map(e => ({
      ...e,
      collection: "posts",
      slug: slugFromId(e.id),
    })),
  ].sort((a, b) => {
    const dateA = new Date((a.data as any).date || 0);
    const dateB = new Date((b.data as any).date || 0);
    return dateB.getTime() - dateA.getTime();
  });
}
