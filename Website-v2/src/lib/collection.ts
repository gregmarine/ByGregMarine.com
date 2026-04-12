export function collectionSlug(collection: string): string {
  return collection.toLowerCase().replace(/\s+/g, '-');
}
