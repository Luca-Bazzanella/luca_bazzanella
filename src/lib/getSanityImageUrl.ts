// Utility to build Sanity image URLs from asset _ref
export function getSanityImageUrl(image?: { asset?: { _ref?: string }, src?: string }) {
  if (image?.asset?._ref) {
    const ref = image.asset._ref;
    // Example: image-abc123-800x600-png
    const match = ref.match(/^image-([^-]+)-([^-]+)-([a-z]+)$/);
    if (match) {
      const [, id, size, format] = match;
      return `https://cdn.sanity.io/images/n2d0sl08/production/${id}-${size}.${format}`;
    }
  }
  return image?.src || '';
}
