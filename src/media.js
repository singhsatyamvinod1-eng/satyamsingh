// Keep imported artwork on our own server; LinkedIn embeds and signed image URLs
// can fail independently of the portfolio. Match sources by post, never by index.
const postArtwork = {
  '7284799164608090112': '/tropical-escape.jpg',
  '7467876433764192256': '/marketing-clarity-ai.jpg'
};

export function validExternal(value) {
  if (typeof value !== 'string' || !value.trim()) return '';
  try {
    const url = new URL(value);
    return ['https:', 'http:'].includes(url.protocol) ? url.href : '';
  } catch {
    return '';
  }
}

export function isLinkedInPost(value) {
  const external = validExternal(value);
  if (!external) return false;
  const url = new URL(external);
  return /(^|\.)linkedin\.com$/i.test(url.hostname)
    && /^\/(?:embed\/)?(?:feed\/update\/|posts\/)/i.test(url.pathname);
}

export function linkedinActivityId(value) {
  if (!isLinkedInPost(value)) return '';
  try {
    const path = decodeURIComponent(new URL(value).pathname);
    return path.match(/(?:urn:li:activity:|activity-)(\d+)(?:[\/-]|$)/i)?.[1] || '';
  } catch {
    return '';
  }
}

export function photoSource(value) {
  if (typeof value !== 'string') return '';
  const source = value.trim();
  if (/^data:image\/(png|jpeg|webp);base64,/.test(source)) return source;
  if (/^\/(?!\/)[^<>\s]*$/.test(source)) return source;
  return isLinkedInPost(source) ? '' : validExternal(source);
}

export function postImageSources(item) {
  // Older drafts sometimes put the original post URL in the image field.
  const link = isLinkedInPost(item.image) ? item.image : item.link;
  const imported = postArtwork[linkedinActivityId(link)] || '';
  return [...new Set([photoSource(item.image), imported].filter(Boolean))];
}

export function restorePostImage(item) {
  const link = isLinkedInPost(item.image) ? item.image : item.link;
  return {...item, link, image: postImageSources(item)[0] || ''};
}
