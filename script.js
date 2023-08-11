let firebaseConfig = {
    apiKey: "AIzaSyBE6Re-XKH8pY0MW-xoZpHg-x5ZsS636H0",
    authDomain: "birthdaywebsite-24ae0.firebaseapp.com",
    projectId: "birthdaywebsite-24ae0",
    storageBucket: "birthdaywebsite-24ae0.appspot.com",
    messagingSenderId: "8844631994",
    appId: "1:8844631994:web:fc330af093c1b56ed1c783",
    measurementId: "G-1TJTBZJDVP"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

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

async function renderPosts() {
    const postsContainer = document.getElementById("postsContainer");
    postsContainer.innerHTML = ""; // Clear existing posts

    // Load in posts from firebase.
    const snapshot = await firebase.firestore().collection('Messages').get()
    const posts = snapshot.docs.map(doc => doc.data());
    console.log(posts);

    for (const post of posts) {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        const authorElement = document.createElement("p");
        authorElement.textContent = `Author: ${post.author}`;
        postElement.appendChild(authorElement);

        const bodyElement = document.createElement("p");
        bodyElement.textContent = `Body: ${post.body}`;
        postElement.appendChild(bodyElement);

        // if (post.images.length > 0) {
        //     // Add each image by reading their URL.
        //     const imagesElement = document.createElement("div");
        //     imagesElement.classList.add("images");
        //     for (const imageURL of post.images) {
        //         const imageElement = document.createElement("img");
        //         imageElement.src = imageURL;
        //         imageElement.style.display = "block";
        //         imagesElement.appendChild(imageElement);
        //     }
        //     postElement.appendChild(imagesElement);
        // }
        
        if (post.author != "" && post.body != "") {
            postsContainer.appendChild(postElement);
        }
    }
}

// Call this function when you want to render the posts (e.g., after creating a new post)
let element = document.getElementById("postsContainer")
if (element !== null) { 
    renderPosts()
}
