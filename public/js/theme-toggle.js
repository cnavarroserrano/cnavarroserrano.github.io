document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('theme-toggle');
  if (!button) return;

  const icon = button.querySelector('i');

  function updateButton() {
    const dark = document.documentElement.dataset.theme === 'dark';
    const label = dark ? 'Switch to light mode' : 'Switch to dark mode';
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
