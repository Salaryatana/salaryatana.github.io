async function sendMessage() {
  const input = document.getElementById('userInput').value.toLowerCase();
  const chatbox = document.getElementById('chatbox');
  const res = await fetch('knowledge.json');
  const data = await res.json();
  const found = data.find(item => input.includes(item.question.toLowerCase()));

  const userMsg = `<div><b>👤:</b> ${input}</div>`;
  const botMsg = `<div><b>🤖:</b> ${found ? found.answer : "စိတ်မရှည်ပါနဲ့။ ဒီမေးခွန်းအတွက် အဖြေမရှိသေးပါ။"}</div>`;

  chatbox.innerHTML += userMsg + botMsg;
  document.getElementById('userInput').value = '';
}
