const form = document.querySelector('#postForm')

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