function toggleDarkMode() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  document.querySelector('.dark-toggle').textContent = isDark ? '🌞' : '🌙';
}
