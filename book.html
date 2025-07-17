fetch('comments.json')
  .then(response => {
    if (!response.ok) throw new Error('Network response was not OK');
    return response.json();
  })
  .then(data => {
    const container = document.getElementById('comment-section');
    container.innerHTML = ''; // Clear previous content

    for (const [bookId, comments] of Object.entries(data.comments)) {
      const bookDiv = document.createElement('div');
      bookDiv.className = 'book-comments';

      const bookTitle = document.createElement('h3');
      bookTitle.textContent = `📘 ${bookId}`;
      bookDiv.appendChild(bookTitle);

      for (const cmtKey in comments) {
        if (!comments.hasOwnProperty(cmtKey)) continue;
        const comment = comments[cmtKey];

        const cmtDiv = document.createElement('div');
        cmtDiv.className = 'comment';

        const name = document.createElement('strong');
        name.textContent = comment.name + ': ';

        const msg = document.createElement('span');
        msg.textContent = comment.message;

        const time = document.createElement('div');
        time.className = 'timestamp';
        const date = new Date(comment.timestamp);
        time.textContent = `🕒 ${date.toLocaleString()}`;

        cmtDiv.appendChild(name);
        cmtDiv.appendChild(msg);
        cmtDiv.appendChild(time);

        bookDiv.appendChild(cmtDiv);
      }

      container.appendChild(bookDiv);
    }
  })
  .catch(error => {
    console.error('Error loading comments:', error);
    const container = document.getElementById('comment-section');
    container.innerHTML = `<p style="color:red;">မှတ်ချက်များ ဖတ်ရှုရန် အမှားတစ်ခု ဖြစ်ပွားခဲ့သည်။</p>`;
  });
