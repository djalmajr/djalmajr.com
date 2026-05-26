import type { CollectionEntry } from "astro:content";

function dateValue(date: string | undefined): number {
  return date ? new Date(date).getTime() : 0;
}

/** Sorts posts by their `date` field, newest first. Missing dates sort last. */
export function sortPostsByDate(
  posts: CollectionEntry<"posts">[]
): CollectionEntry<"posts">[] {
  return [...posts].sort(
    (a, b) => dateValue(b.data.date) - dateValue(a.data.date)
  );
}
