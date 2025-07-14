// theme-darkmode.js

// Dark mode toggle button ဖန်တီးဖို့ function
function toggleDarkMode() {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Page load တုန်း localStorage ကနေ theme ကို ပြန် restore လုပ်မယ်
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }

  // နောက်ပြီး button မရှိသေးရင် dark mode toggle button ကို body ထဲ ဖန်တီးထည့်မယ်
  if (!document.querySelector('.dark-toggle')) {
    const button = document.createElement('button');
    button.textContent = 'အဖြူအမဲ';  // Button Text
    button.className = 'dark-toggle';  // Class Name ကို မင်း CSS မှာ သုံးထားတဲ့အတိုင်း
    button.onclick = toggleDarkMode;    // Button ကို နှိပ်တိုင်း toggle function run
    document.body.appendChild(button);  // Body အောက်ဆုံး ထည့်
  }
});
