fetch('comments.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('comment-section');

    for (const [bookId, comments] of Object.entries(data.comments)) {
      const bookDiv = document.createElement('div');
      bookDiv.className = 'book-comments';

      const bookTitle = document.createElement('h3');
      bookTitle.textContent = `📘 ${bookId}`;
      bookDiv.appendChild(bookTitle);

      for (const cmtKey in comments) {
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
  });
