document.addEventListener('DOMContentLoaded', () => {
    const posts = [
        {
            title: "First Blog Post",
            content: "This is the content of the first blog post.",
            date: "2024-07-01",
            image: "https://via.placeholder.com/800x400"
        },
        {
            title: "Second Blog Post",
            content: "This is the content of the second blog post.",
            date: "2024-07-02",
            image: "https://via.placeholder.com/800x400"
        },
        {
            title: "Third Blog Post",
            content: "This is the content of the third blog post.",
            date: "2024-07-03",
            image: "https://via.placeholder.com/800x400"
        }
    ];

    const mainContent = document.getElementById('main-content');
    const navLinks = document.getElementById('nav-links');

    posts.forEach((post, index) => {
        // Create navigation link
        const navItem = document.createElement('li');
        const navLink = document.createElement('a');
        navLink.href = `#post-${index}`;
        navLink.textContent = post.title;
        navItem.appendChild(navLink);
        navLinks.appendChild(navItem);

        // Create blog post
        const postDiv = document.createElement('div');
        postDiv.className = 'blog-post';
        postDiv.id = `post-${index}`;
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p class="date">${post.date}</p>
            <img src="${post.image}" alt="${post.title}">
            <p>${post.content}</p>
            <div class="comment-section">
                <h3>Comments</h3>
                <div class="comments" id="comments-${index}">
                    <!-- Comments will be populated by JavaScript -->
                </div>
                <div class="comment-form">
                    <input type="text" id="comment-name-${index}" placeholder="Your name">
                    <textarea id="comment-message-${index}" placeholder="Your comment"></textarea>
                    <button onclick="addComment(${index})">Submit</button>
                </div>
            </div>
        `;
        mainContent.appendChild(postDiv);
    });
});

function addComment(postIndex) {
    const nameInput = document.getElementById(`comment-name-${postIndex}`);
    const messageInput = document.getElementById(`comment-message-${postIndex}`);
    const commentsDiv = document.getElementById(`comments-${postIndex}`);

    if (nameInput.value && messageInput.value) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerHTML = `
            <p><strong>${nameInput.value}</strong></p>
            <p>${messageInput.value}</p>
        `;
        commentsDiv.appendChild(commentDiv);

        nameInput.value = '';
        messageInput.value = '';
    } else {
        alert('Please enter your name and comment.');
    }
}
