const postForm = document.getElementById("postForm");

postForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let imageURLs = []

    const author = postForm.author.value;
    const body = postForm.body.value;
    const imagesInput = postForm.images;

    for (const image of imagesInput.files) {
        if (image) {
            imageURLs.push(URL.createObjectURL(image)));
        }
    }

    const newPost = new Post(author, body, imageURLs);
    let current_posts = JSON.parse(localStorage.getItem("posts"))
    if (current_posts === null) {
        current_posts = []
    }
    current_posts.push(newPost)
    localStorage.setItem("posts", JSON.stringify(current_posts))

    // window.location.href = "index.html";
});

function returnToMain() {
    window.location.href = "index.html";
}
