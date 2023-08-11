class Post {
    constructor(author, body, images) {
        this.author = author;
        this.body = body;
        this.images = images;
    }
}

function goToCreatePost() {
    window.location.href = "create-post.html";
}

function renderPosts() {
    const postsContainer = document.getElementById("postsContainer");
    postsContainer.innerHTML = ""; // Clear existing posts

    // Load in posts from localStorage.
    const loaded_posts = JSON.parse(localStorage.getItem("posts"))
    const posts = loaded_posts === null ? [] : loaded_posts

    for (const post of posts) {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        const authorElement = document.createElement("p");
        authorElement.textContent = `Author: ${post.author}`;
        postElement.appendChild(authorElement);

        const bodyElement = document.createElement("p");
        bodyElement.textContent = `Body: ${post.body}`;
        postElement.appendChild(bodyElement);

        if (post.images.length > 0) {
            // Add each image by reading their URL.
            const imagesElement = document.createElement("div");
            imagesElement.classList.add("images");
            for (const imageURL of post.images) {
                const imageElement = document.createElement("img");
                imageElement.src = imageURL;
                imageElement.style.display = "block";
                imagesElement.appendChild(imageElement);
            }
            postElement.appendChild(imagesElement);
        }

        postsContainer.appendChild(postElement);
    }
}

// Call this function when you want to render the posts (e.g., after creating a new post)
let element = document.getElementById("postsContainer")
if (element !== null) { 
    renderPosts()
}
