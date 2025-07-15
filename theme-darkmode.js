function toggleDarkMode() {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
}

// Restore dark mode if it was on previously
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark");
}
