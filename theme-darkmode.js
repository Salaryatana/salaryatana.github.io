function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDark);

  const btn = document.querySelector(".dark-toggle");
  btn.textContent = isDark ? "🌙" : "☀️";
}

// ✅ On page load - restore mode
window.addEventListener("DOMContentLoaded", () => {
  const isDark = localStorage.getItem("darkMode") === "true";
  if (isDark) {
    document.body.classList.add("dark");
  }

  // ✅ Update button icon
  const btn = document.querySelector(".dark-toggle");
  if (btn) {
    btn.textContent = isDark ? "🌙" : "☀️";
  }
});
