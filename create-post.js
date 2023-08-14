const postForm = document.getElementById("postForm");

postForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let imageURLs = []

    const author = postForm.author.value;
    const body = postForm.body.value;
    const imagesInput = postForm.images;

    for (const image of imagesInput.files) {
        if (image) {
            imageURLs.push(URL.createObjectURL(image));
        }
    }

    const newPost = new Post(author, body, imageURLs);
    const randomNumber = Math.floor(Math.random() * 1000000);
    var docRef = db.collection("Messages").doc(randomNumber.toString());
    docRef.get().then(function(doc) {
        docRef.set({
            author: author,
            body: body
        }).then(function(doc) {
            window.location.href = "index.html";
        });
    });
});

function returnToMain() {
    window.location.href = "index.html";
}
