// like-button.js (Salaryatana project)

// ✅ Firebase configuration (သင့် config အတိုင်းပြင်ပါ)
const firebaseConfig = {
  apiKey: "AIzaSyA4A1nYZ4oaGbdkl2ZpNUyMu7nn7GE2QEY",
  authDomain: "salaryatana.firebaseapp.com",
  databaseURL: "https://salaryatana-default-rtdb.firebaseio.com",
  projectId: "salaryatana",
  storageBucket: "salaryatana.appspot.com",
  messagingSenderId: "895626474447",
  appId: "1:895626474447:web:aedcbddcb530f269da238e"
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ✅ Database path (စာမျက်နှာအလိုက်ပြောင်းနိုင်)
const likePath = 'likes/book';

// ✅ HTML element references
const likeBtn = document.getElementById('like-btn');
const likeCountSpan = document.getElementById('like-count');

// ✅ Format number to K/M/B/T
function formatCount(num) {
  if (num < 1000) return num.toString();
  const units = ["K", "M", "B", "T"];
  let unitIndex = -1;
  let n = num;
  while (n >= 1000 && unitIndex < units.length - 1) {
    n /= 1000;
    unitIndex++;
  }
  return n.toFixed(1).replace(/\.0$/, '') + units[unitIndex];
}

// ✅ LocalStorage key setup
const likeKey = 'liked_' + likePath.replace(/\//g, '_');

function hasUserLiked() {
  return localStorage.getItem(likeKey) === 'true';
}

function setUserLiked() {
  localStorage.setItem(likeKey, 'true');
}

// ✅ Update UI
function updateUI(count) {
  likeCountSpan.textContent = formatCount(count);
  if (hasUserLiked()) {
    likeBtn.classList.add('liked');
    likeBtn.disabled = true;
  } else {
    likeBtn.classList.remove('liked');
    likeBtn.disabled = false;
  }
}

// ✅ Load likes from Firebase
function loadLikes() {
  db.ref(likePath).once('value').then(snapshot => {
    const count = snapshot.val() || 0;
    updateUI(count);
  });
}

// ✅ Handle Like Click (one-time per user)
function incrementLike() {
  if (hasUserLiked()) return;

  const ref = db.ref(likePath);
  ref.transaction(current => {
    if (current === null) return 1;
    return current + 1;
  }, (error, committed, snapshot) => {
    if (error) {
      console.error('Transaction failed:', error);
    } else if (committed) {
      updateUI(snapshot.val());
      setUserLiked();
    }
  });
}

// ✅ Button click listener
likeBtn.addEventListener('click', incrementLike);

// ✅ Run on page load
window.addEventListener('DOMContentLoaded', loadLikes);
