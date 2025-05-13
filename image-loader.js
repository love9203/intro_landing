export default function imageLoader({ src, width, quality }) {
  // For absolute URLs (external images), return as is
  if (src.startsWith('http') || src.startsWith('https')) {
    return src;
  }
  
  // For local images, prepend the basePath
  return `/intro_landing${src}`;
}
