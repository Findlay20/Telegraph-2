const form = document.querySelector('#postForm')
const postSection = document.querySelector('#postSection')

form.addEventListener('submit', sendPost)

async function sendPost (e) {
    e.preventdefault()
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }

        const response = await fetch('http://localhost:3000/posts', options);
        const {id, err} = await response.json;
        if (err) {
            throw Error(err)
        } else {
            window.location.hash = `#posts/${id}`
        }
    } catch (err) {
        console.warn(err);  
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

async function displayPosts () {
    try {
        const allPosts = getPosts();
        allPosts.forEach(post => {
            markup = `<div id="post_${post.id}">
                        <h2><a href="http://localhost:3000/posts/${post.id}">${post.title}</a></h2>
                        <h4>${post.author}</h4>
                        <p>${post.body}</p>
                      </div>`
            postSection.insertAdjacentHTML('afterbegin', markup)       
        })
    } catch (err) {
        console.warn(err)
    }
}
}

displayPosts()