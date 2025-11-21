/*
 * Columns Block
 * Displays content in multiple columns with responsive layouts
 */
export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  const colCount = cols.length;

  // Apply column count class
  block.classList.add(`columns-${colCount}-cols`);

  // Check for layout attribute from data
  const layout = block.dataset.layout || block.getAttribute('data-layout');
  if (layout) {
    block.classList.add(`columns-${layout}`);
  }

  // Wrap each column
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      col.classList.add('column');
    });
  });
}
