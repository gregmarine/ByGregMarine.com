import type { CollectionEntry } from "astro:content";
import { collectionSlug } from "./collection";

export type WritingsDisplayItem = {
  href: string;
  title: string;
  date: Date;
  description?: string;
  form?: string;
  tags: string[];
  isCollection: boolean;
};

export function buildWritingsDisplayList(
  entries: CollectionEntry<"writings">[]
): WritingsDisplayItem[] {
  const items: WritingsDisplayItem[] = [];
  const seenCollections = new Set<string>();

  for (const entry of entries) {
    if (entry.data.order !== undefined) {
      if (!entry.data.collection) continue;
      const slug = collectionSlug(entry.data.collection);
      if (seenCollections.has(slug)) continue;
      seenCollections.add(slug);

      const coverEntry = entries.find(
        (e) =>
          e.data.collection &&
          collectionSlug(e.data.collection) === slug &&
          e.data.order === 0
      );
      const rep = coverEntry ?? entry;

      items.push({
        href: `/writings/collection/${slug}`,
        title: rep.data.title,
        date: rep.data.date,
        description: rep.data.description,
        form: rep.data.form,
        tags: rep.data.tags,
        isCollection: true,
      });
    } else {
      items.push({
        href: `/writings/${entry.id}`,
        title: entry.data.title,
        date: entry.data.date,
        description: entry.data.description,
        form: entry.data.form,
        tags: entry.data.tags,
        isCollection: false,
      });
    }
  }

  return items.sort((a, b) => b.date.valueOf() - a.date.valueOf());
}
