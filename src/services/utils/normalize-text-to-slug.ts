export function NormalizeTextToSlug(text: string) {
  const slug = text.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").replace(/\s+/g, "-").toLowerCase();

  return slug;
}