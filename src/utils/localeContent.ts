import type { CollectionEntry } from "astro:content";
import { getCollection, getEntry } from "astro:content";
import { DEFAULT_LOCALE } from "../i18n/locales";

type LocalizedCollection = "projects" | "posts";

/** Strips the `<locale>/` prefix from a content entry id, leaving the slug. */
export function slugFromId(id: string): string {
  const idx = id.indexOf("/");
  return idx === -1 ? id : id.slice(idx + 1);
}

/** Returns the locale prefix of a content entry id (e.g. `en` for `en/foo`). */
export function localeFromId(id: string): string {
  const idx = id.indexOf("/");
  return idx === -1 ? DEFAULT_LOCALE : id.slice(0, idx);
}

/**
 * Returns the entries of a localized collection for a given locale, falling
 * back to the default-locale entry for any slug missing a translation.
 */
export async function getLocalizedEntries<C extends LocalizedCollection>(
  collection: C,
  locale: string
): Promise<CollectionEntry<C>[]> {
  const all = (await getCollection(collection)) as CollectionEntry<C>[];
  const byLocale = all.filter(e => localeFromId(e.id) === locale);
  const slugs = new Set(byLocale.map(e => slugFromId(e.id)));

  const fallbacks = all.filter(
    e => localeFromId(e.id) === DEFAULT_LOCALE && !slugs.has(slugFromId(e.id))
  );

  return [...byLocale, ...fallbacks];
}

/**
 * Loads a single localized entry by slug, falling back to the default locale.
 */
export async function getLocalizedEntry(
  collection: LocalizedCollection,
  locale: string,
  slug: string
) {
  return (
    (await getEntry(collection, `${locale}/${slug}`)) ??
    (await getEntry(collection, `${DEFAULT_LOCALE}/${slug}`))
  );
}

/** The unique slug set, derived from the default-locale entries. */
export async function getSlugs(collection: LocalizedCollection) {
  const all = await getCollection(collection);
  return all
    .filter(e => localeFromId(e.id) === DEFAULT_LOCALE)
    .map(e => slugFromId(e.id));
}
