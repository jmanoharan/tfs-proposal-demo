/*
 * Button Block
 * Custom button component with variant support
 */
export default function decorate(block) {
  const buttonData = {
    text: block.getAttribute('data-text') || block.textContent.trim(),
    link: block.getAttribute('data-link') || block.querySelector('a')?.href || '#',
    variant: block.getAttribute('data-variant') || 'default'
  };
  
  // Create button element
  const button = document.createElement('a');
  button.href = buttonData.link;
  button.textContent = buttonData.text;
  button.className = `button button-${buttonData.variant}`;
  
  // Replace block content with button
  block.textContent = '';
  block.appendChild(button);
  block.classList.add('button-block');
}
