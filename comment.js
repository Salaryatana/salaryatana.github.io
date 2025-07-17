// ✅ Firebase Config (သင့် project config ဖြစ်သည်)
var firebaseConfig = {
  apiKey: "AIzaSyDU8KyzG6P2zGYs4Pk02yz5SZhKa296m8s",
  authDomain: "salaryatana-8b9f5.firebaseapp.com",
  databaseURL: "https://salaryatana-8b9f5-default-rtdb.firebaseio.com",
  projectId: "salaryatana-8b9f5",
  storageBucket: "salaryatana-8b9f5.appspot.com",
  messagingSenderId: "764193108668",
  appId: "1:764193108668:web:594219a6295f95006f16b9",
  measurementId: "G-0D9TX6VHMG"
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// ✅ Element Selectors
const usernameInput = document.getElementById("username");
const commentInput = document.getElementById("commentInput");
const commentList = document.getElementById("commentList");

// ✅ Post Comment Function
function postComment() {
  const username = usernameInput.value.trim();
  const comment = commentInput.value.trim();

  if (!username || !comment) {
    alert("အမည်နဲ့ မှတ်ချက် နှစ်ခုလုံး ဖြည့်ပါ");
    return;
  }

  // ✅ Push to Firebase
  database.ref("comments").push({
    username: username,
    comment: comment,
    timestamp: Date.now()
  });

  // ✅ Clear inputs
  usernameInput.value = "";
  commentInput.value = "";
}

// ✅ Render Comments in Real-time
database.ref("comments").orderByChild("timestamp").on("value", (snapshot) => {
  commentList.innerHTML = ""; // Clear previous

  snapshot.forEach((child) => {
    const data = child.val();
    const date = new Date(data.timestamp);
    const timeString = date.toLocaleString();

    // ✅ Create Safe Comment Element
    const li = document.createElement("li");
    li.innerHTML =
      `<strong>${escapeHtml(data.username)}</strong> <em style="font-size:0.8em;color:#666;">[${timeString}]</em><br>` +
      `${escapeHtml(data.comment)}`;

    commentList.appendChild(li);
  });
});

// ✅ HTML Escape Function
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ✅ Make Available to HTML Button
window.postComment = postComment;
