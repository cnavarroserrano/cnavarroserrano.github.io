document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('theme-toggle');
  if (!button) return;

  const icon = button.querySelector('i');
  const labels = {
    en: ['Switch to dark mode', 'Switch to light mode'],
    es: ['Cambiar al modo oscuro', 'Cambiar al modo claro'],
    ca: ['Canvia al mode fosc', 'Canvia al mode clar']
  };
  const [darkLabel, lightLabel] = labels[document.documentElement.lang] || labels.en;

  function updateButton() {
    const dark = document.documentElement.dataset.theme === 'dark';
    const label = dark ? lightLabel : darkLabel;
    button.setAttribute('aria-label', label);
    button.setAttribute('aria-pressed', String(dark));
    button.title = label;
    icon.className = dark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }

  button.addEventListener('click', function () {
    const dark = document.documentElement.dataset.theme !== 'dark';
    if (dark) {
      document.documentElement.dataset.theme = 'dark';
    } else {
      delete document.documentElement.dataset.theme;
    }
    try {
      localStorage.setItem('site-theme', dark ? 'dark' : 'light');
    } catch (error) {
      // The toggle still works for the current page if storage is unavailable.
    }
    updateButton();
  });

  updateButton();
});
