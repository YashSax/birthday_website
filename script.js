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
    for (let i = 1; i < 4; i++) {
        const columnContainer = document.getElementById(`column${i}`);
        columnContainer.innerHTML = ""; // Clear existing posts
    }

    // Load in posts from firebase.
    const snapshot = await firebase.firestore().collection('Messages').get()
    const posts = snapshot.docs.map(doc => doc.data());
    console.log(posts);

    let col_heights = [0, 0, 0];

    for (const post of posts) {
        console.log(col_heights);
        let min_height = Math.min(...col_heights);
        let postContainer;
        let chosenColumn;
        if (col_heights[0] == min_height) {
            postContainer = document.getElementById("column1");
            chosenColumn = 0;
        } else if (col_heights[1] == min_height) {
            postContainer = document.getElementById("column2");
            chosenColumn = 1;
        } else {
            postContainer = document.getElementById("column3");
            chosenColumn = 2;
        }
        
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        
        const bodyElement = document.createElement("p");
        bodyElement.classList.add("postBody");
        bodyElement.textContent = post.body;
        postElement.appendChild(bodyElement);
        
        const authorElement = document.createElement("p");
        authorElement.textContent = `- ${post.author}`;
        authorElement.classList.add("postAuthor");
        postElement.appendChild(authorElement);

        if (post.author != "" && post.body != "") {
            postContainer.appendChild(postElement);
            
            let boundingRect = postElement.getBoundingClientRect();
            col_heights[chosenColumn] = Math.max(col_heights[chosenColumn], boundingRect.y + boundingRect.height);
            
            console.log("Chosen column: ", chosenColumn);
            console.log(boundingRect);
        }
    }
}

// Call this function when you want to render the posts (e.g., after creating a new post)
let element = document.getElementById("postsContainer")
if (element !== null) { 
    renderPosts()
}
