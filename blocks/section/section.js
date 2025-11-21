/*
 * Section Block (ParsysContainer)
 * Generic container for AEM parsys content
 */
export default function decorate(block) {
  // Section blocks are typically containers
  // Add any necessary wrapper classes or structure
  block.classList.add('section-container');

  // If block contains HTML content, render it
  const htmlContent = block.getAttribute('data-content');
  if (htmlContent) {
    block.innerHTML = htmlContent;
  }
}
