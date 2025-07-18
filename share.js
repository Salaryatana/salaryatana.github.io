document.addEventListener("DOMContentLoaded", function () {
  const pageUrl = window.location.href;

  // Copy Link
  document.getElementById("btn-copy").addEventListener("click", () => {
    navigator.clipboard.writeText(pageUrl).then(() => {
      alert("Link copied!");
    });
  });

  // Telegram
  document.getElementById("btn-telegram").addEventListener("click", () => {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(pageUrl)}`, "_blank");
  });

  // Messenger
  document.getElementById("btn-messenger").addEventListener("click", () => {
    window.open(`fb-messenger://share?link=${encodeURIComponent(pageUrl)}`, "_blank");
  });

  // TikTok (open with system share, not official)
  document.getElementById("btn-tiktok").addEventListener("click", () => {
    alert("Please share manually in TikTok.");
  });

  // SMS / Message
  document.getElementById("btn-message").addEventListener("click", () => {
    window.location.href = `sms:?body=${encodeURIComponent(pageUrl)}`;
  });

  // Viber
  document.getElementById("btn-viber").addEventListener("click", () => {
    window.open(`viber://forward?text=${encodeURIComponent(pageUrl)}`, "_blank");
  });

  // Gmail
  document.getElementById("btn-gmail").addEventListener("click", () => {
    window.open(`mailto:?subject=Check this out&body=${encodeURIComponent(pageUrl)}`, "_blank");
  });
});
