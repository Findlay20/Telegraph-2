const form = document.querySelector('#postForm');
const postSection = document.querySelector('#postSection');
const postTitle = document.querySelector('#postSection h2');
const postAuthor = document.querySelector('#postSection h4');
const postBody = document.querySelector('#postSection p');
const closePostBtn = document.querySelector('#closePost');
const allPostsBtn = document.querySelector('#allPosts');

form.addEventListener("submit", sendPost);

async function sendPost (e) {
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        const response = await fetch('http://localhost:3000/posts', options);
        const {id, err} = await response.json();

        if (err) {
            throw Error(err)
        } else {
            window.location.hash = `#posts/${id}`
        }
    } catch (err) {
        console.warn(err);  
    }
}

async function getPostByID (id) {
    try {
        const response = await fetch(`http://localhost:3000/posts/${id}`);
        const post = await response.json();
        return post;
    } catch (err) {
        console.warn(err);
    }
}

async function displayPost (id) {
    try {
        const post = await getPostByID(id);
        markup = `<div id="post_${post.id}">
                    <h2><a href="#posts/${post.id}">${post.title}</a></h2>
                    <h4>${post.author.name}</h4>
                    <p>${post.descr}</p>
                    </div>`
        main.insertAdjacentHTML('afterbegin', markup);
    } catch(err) {
        console.warn(err);
    }
}

async function displayPosts () {
    try {
        const allPosts = await getPosts();
        allPosts.forEach(post => {
            markup = `<div id="post_${post.id}">
                        <h2><a href="#posts/${post.id}">${post.title}</a></h2>
                        <h4>${post.author.name}</h4>
                        <p>${post.descr}</p>
                      </div>`
            main.insertAdjacentHTML('afterbegin', markup);
        })
    } catch (err) {
        console.warn(err)
    }
}

async function getPosts () {
    try {
        const response = await fetch('http://localhost:3000/posts');
        const data = await response.json();
        return data;
    } catch (err){
        console.warn(err);
    }
}
