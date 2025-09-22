// Loads each /sections/*.html into its matching placeholder.
// Run this page with the "Live Server" VS Code extension.
document.querySelectorAll('[data-include]').forEach(async el => {
    const file = el.getAttribute('data-include');
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      el.innerHTML = await res.text();
    } catch (err) {
      el.innerHTML = `<p style="color:#b91c1c">Couldn’t load ${file}</p>`;
      console.error('Include failed:', file, err);
    }
  });
  