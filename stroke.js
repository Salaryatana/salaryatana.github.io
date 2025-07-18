// stroke.js
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');

  // Optional: Save mode in localStorage
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark ? 'on' : 'off');
}

// Auto load saved mode
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'on') {
    document.body.classList.add('dark-mode');
  }
});
