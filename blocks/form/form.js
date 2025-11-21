/*
 * Form Block
 * Displays forms with field definitions
 */
export default function decorate(block) {
  const rows = [...block.children];
  
  const form = document.createElement('form');
  form.className = 'form-container';
  
  rows.forEach((row, idx) => {
    const cell = row.children[0];
    const text = cell?.textContent.trim();
    
    if (idx === 0 && text) {
      // Form title
      const title = document.createElement('h2');
      title.className = 'form-title';
      title.textContent = text;
      form.appendChild(title);
    } else if (text) {
      // Parse field definitions
      const fields = text.split('\n');
      fields.forEach(fieldDef => {
        if (!fieldDef.trim()) return;
        
        const fieldGroup = document.createElement('div');
        fieldGroup.className = 'form-field';
        
        // Extract field info from definition
        const required = fieldDef.includes('(required)');
        const typeMatch = fieldDef.match(/\[([^\]]+)\]/);
        const type = typeMatch ? typeMatch[1] : 'text';
        const label = fieldDef.replace(/\(required\)/, '').replace(/\[.*\]/, '').trim();
        
        // Create label
        const labelEl = document.createElement('label');
        labelEl.textContent = label + (required ? ' *' : '');
        fieldGroup.appendChild(labelEl);
        
        // Create input
        let input;
        if (type === 'textarea') {
          input = document.createElement('textarea');
          input.rows = 4;
        } else if (type === 'select') {
          input = document.createElement('select');
        } else {
          input = document.createElement('input');
          input.type = type;
        }
        
        input.name = label.toLowerCase().replace(/\s+/g, '-');
        input.required = required;
        fieldGroup.appendChild(input);
        
        form.appendChild(fieldGroup);
      });
    }
  });
  
  // Add submit button
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Submit';
  submitBtn.className = 'form-submit';
  form.appendChild(submitBtn);
  
  block.innerHTML = '';
  block.appendChild(form);
}
