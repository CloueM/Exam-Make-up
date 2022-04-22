//Switch Theme Toggle
const switch_theme = document.querySelector('.toggle');

switch_theme.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});