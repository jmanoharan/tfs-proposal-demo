/*
 * Embed Block
 * Embeds external content (videos, iframes, etc.)
 */
export default function decorate(block) {
  const link = block.querySelector('a');
  if (!link) return;

  const url = link.href;

  // YouTube embed
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    const videoId = url.includes('youtu.be')
      ? url.split('youtu.be/')[1]
      : new URL(url).searchParams.get('v');

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;

    block.textContent = '';
    block.append(iframe);
  }
}
