const currentLink = "https://salaryatana.netlify.app/book";

// Copy to clipboard
document.getElementById("btn-copy").addEventListener("click", () => {
  navigator.clipboard.writeText(currentLink);
  alert("Link copied!");
});

// Telegram
document.getElementById("btn-telegram").addEventListener("click", () => {
  const url = `https://t.me/share/url?url=${encodeURIComponent(currentLink)}`;
  window.open(url, "_blank");
});

// Messenger
document.getElementById("btn-messenger").addEventListener("click", () => {
  const url = `fb-messenger://share/?link=${encodeURIComponent(currentLink)}`;
  window.open(url, "_blank");
});

// TikTok (fallback copy)
document.getElementById("btn-tiktok").addEventListener("click", () => {
  navigator.clipboard.writeText(currentLink);
  alert("TikTok doesn’t support direct share — Link copied!");
});

// SMS Message
document.getElementById("btn-message").addEventListener("click", () => {
  const url = `sms:?body=${encodeURIComponent(currentLink)}`;
  window.open(url);
});

// Viber
document.getElementById("btn-viber").addEventListener("click", () => {
  const url = `viber://forward?text=${encodeURIComponent(currentLink)}`;
  window.location.href = url;
});

// Gmail
document.getElementById("btn-gmail").addEventListener("click", () => {
  const subject = "Check this out!";
  const body = `Here's a link: ${currentLink}`;
  const url = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
});
