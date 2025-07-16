// ✅ Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA4A1nYZ4oaGbdkl2ZpNUyMu7nn7GE2QEY",
  authDomain: "salaryatana.firebaseapp.com",
  databaseURL: "https://salaryatana-8b9f5-default-rtdb.firebaseio.com",
  projectId: "salaryatana",
  storageBucket: "salaryatana.appspot.com",
  messagingSenderId: "895626474447",
  appId: "1:895626474447:web:aedcbddcb530f269da238e"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ✅ DOM Elements
const likePath = 'likes/book';
const likeBtn = document.getElementById('like-btn');
const likeCountSpan = document.getElementById('like-count');

// ✅ Format like count
function formatCount(num) {
  if (num < 1000) return num.toString();
  const units = ['K', 'M', 'B', 'T'];
  let unitIndex = -1;
  let n = num;
  while (n >= 1000 && unitIndex < units.length - 1) {
    n /= 1000;
    unitIndex++;
  }
  return n.toFixed(1).replace(/\.0$/, '') + units[unitIndex];
}

// ✅ LocalStorage helpers
const likeKey = 'liked_' + likePath.replace(/\//g, '_');
function hasUserLiked() {
  return localStorage.getItem(likeKey) === 'true';
}
function setUserLiked() {
  localStorage.setItem(likeKey, 'true');
}
function unsetUserLiked() {
  localStorage.removeItem(likeKey);
}

// ✅ Update UI
function updateUI(count) {
  likeCountSpan.textContent = formatCount(count);
  likeBtn.textContent = hasUserLiked() ? "❤️" : "🤍";
}

// ✅ Load likes from Firebase
function loadLikes() {
  db.ref(likePath).once('value').then(snapshot => {
    const count = snapshot.val() || 0;
    updateUI(count);
  });
}

// ✅ Toggle like/unlike like dark-mode logic
function toggleLike() {
  const ref = db.ref(likePath);
  if (hasUserLiked()) {
    // Unlike
    ref.transaction(current => (current || 1) - 1, (error, committed, snapshot) => {
      if (committed) {
        unsetUserLiked();
        updateUI(snapshot.val());
      }
    });
  } else {
    // Like
    ref.transaction(current => (current || 0) + 1, (error, committed, snapshot) => {
      if (committed) {
        setUserLiked();
        updateUI(snapshot.val());
      }
    });
  }
}

// ✅ Events
likeBtn.addEventListener('click', toggleLike);
window.addEventListener('DOMContentLoaded', loadLikes);
