/*
 * Cards Block
 * Displays a grid of cards with image, title, and link
 */
export default function decorate(block) {
  const ul = document.createElement('ul');
  ul.className = 'cards-list';

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.className = 'card';

    const cols = [...row.children];

    // Image column
    if (cols[0]) {
      const imageDiv = document.createElement('div');
      imageDiv.className = 'card-image';
      imageDiv.append(...cols[0].childNodes);
      li.append(imageDiv);
    }

    // Title column
    if (cols[1]) {
      const titleDiv = document.createElement('div');
      titleDiv.className = 'card-title';
      titleDiv.append(...cols[1].childNodes);
      li.append(titleDiv);
    }

    // Link column
    if (cols[2]) {
      const link = cols[2].querySelector('a');
      if (link) {
        li.addEventListener('click', () => {
          window.location.href = link.href;
        });
        li.style.cursor = 'pointer';
      }
    }

    ul.append(li);
  });

  block.textContent = '';
  block.append(ul);
}
