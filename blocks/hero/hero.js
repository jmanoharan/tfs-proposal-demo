/*
 * Hero Block
 * Displays a hero section with image and text
 */
export default function decorate(block) {
  const rows = [...block.children];

  // Add classes for styling
  block.classList.add('hero-block');

  rows.forEach((row, idx) => {
    const cols = [...row.children];
    if (idx === 0 && cols[0].querySelector('picture')) {
      cols[0].classList.add('hero-image');
    } else {
      cols.forEach((col) => col.classList.add('hero-content'));
    }
  });
}
