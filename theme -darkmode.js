function toggleDarkMode() {
  document.body.classList.toggle('darkmode');

  // localStorage မှာ သိမ်းထား
  const isDark = document.body.classList.contains('darkmode');
  localStorage.setItem('darkmode', isDark ? 'yes' : 'no');
}

// Reload ပြန်လာချိန်အတွက် ပြန် restore
window.onload = function () {
  if (localStorage.getItem('darkmode') === 'yes') {
    document.body.classList.add('darkmode');
  }
};
