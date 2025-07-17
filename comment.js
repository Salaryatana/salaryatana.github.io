// comment.js

// Firebase Config (သင့် config ကို ဒီနေရာမှာ ထည့်ပါ)
var firebaseConfig = {
  apiKey: "AIzaSyDU8KyzG6P2zGYs4Pk02yz5SZhKa296m8s",
  authDomain: "salaryatana-8b9f5.firebaseapp.com",
  databaseURL: "https://salaryatana-8b9f5-default-rtdb.firebaseio.com",
  projectId: "salaryatana-8b9f5",
  storageBucket: "salaryatana-8b9f5.firebasestorage.app",
  messagingSenderId: "764193108668",
  appId: "1:764193108668:web:594219a6295f95006f16b9",
  measurementId: "G-0D9TX6VHMG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// Elements
var usernameInput = document.getElementById("username");
var commentInput = document.getElementById("commentInput");
var commentList = document.getElementById("commentList");

// Post comment function
function postComment() {
  var username = usernameInput.value.trim();
  var comment = commentInput.value.trim();

  if (username === "" || comment === "") {
    alert("အမည်နဲ့ မှတ်ချက် နှစ်ခုလုံး ဖြည့်ပါ");
    return;
  }

  // Push comment to Firebase Realtime Database
  database.ref("comments").push({
    username: username,
    comment: comment,
    timestamp: Date.now()
  });

  // Clear inputs
  usernameInput.value = "";
  commentInput.value = "";
}

// Listen for new comments and update UI
database.ref("comments").orderByChild("timestamp").on("value", function(snapshot) {
  commentList.innerHTML = ""; // Clear current list

  snapshot.forEach(function(childSnapshot) {
    var data = childSnapshot.val();

    // Format timestamp to local datetime string
    var date = new Date(data.timestamp);
    var timeString = date.toLocaleString();

    // Create comment item
    var li = document.createElement("li");
    li.innerHTML =
      `<strong>${escapeHtml(data.username)}</strong> <em style="font-size:0.8em;color:#666;">[${timeString}]</em><br>` +
      `${escapeHtml(data.comment)}`;

    commentList.appendChild(li);
  });
});

// Escape HTML to prevent injection
function escapeHtml(text) {
  var div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// Expose postComment function globally for inline onclick in HTML
window.postComment = postComment;
