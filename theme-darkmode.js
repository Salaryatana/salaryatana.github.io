function toggleDarkMode() {
  const body = document.body;
  const isDark = body.classList.toggle("dark");
  localStorage.setItem("darkMode", isDark);

  const btn = document.querySelector(".dark-toggle");
  btn.textContent = isDark ? "☀️" : "🌙";
}

document.addEventListener("DOMContentLoaded", () => {
  const isDark = localStorage.getItem("darkMode") === "true";
  if (isDark) document.body.classList.add("dark");

  const btn = document.querySelector(".dark-toggle");
  if (btn) btn.textContent = isDark ? "☀️" : "🌙";
});
