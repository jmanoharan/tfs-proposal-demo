/*
 * Search Block
 * Displays search interface with filters
 */
export default function decorate(block) {
  const rows = [...block.children];

  const searchContainer = document.createElement('div');
  searchContainer.className = 'search-container';

  // Create search form
  const form = document.createElement('form');
  form.className = 'search-form';
  form.setAttribute('role', 'search');

  const inputWrapper = document.createElement('div');
  inputWrapper.className = 'search-input-wrapper';

  const input = document.createElement('input');
  input.type = 'search';
  input.name = 'q';
  input.placeholder = rows[0]?.textContent.trim() || 'Search';
  input.className = 'search-input';

  const button = document.createElement('button');
  button.type = 'submit';
  button.className = 'search-button';
  button.textContent = 'Search';

  inputWrapper.appendChild(input);
  inputWrapper.appendChild(button);
  form.appendChild(inputWrapper);

  // Add filters if present
  if (rows.length > 1) {
    const filtersContainer = document.createElement('div');
    filtersContainer.className = 'search-filters';

    rows.slice(1).forEach((row) => {
      const text = row.textContent.trim();
      if (text && !text.toLowerCase().includes('search')) {
        const filter = document.createElement('div');
        filter.className = 'filter-group';
        filter.textContent = text;
        filtersContainer.appendChild(filter);
      }
    });

    if (filtersContainer.children.length > 0) {
      searchContainer.appendChild(filtersContainer);
    }
  }

  searchContainer.insertBefore(form, searchContainer.firstChild);

  block.innerHTML = '';
  block.appendChild(searchContainer);
}
