window.addEventListener('hashchange', updateContent);
const main = document.querySelector('main');

function updateContent(){
    let hash = window.location.hash.substring(1);
    updateMain(hash);
}

function updateMain(hash) {
    main.innerHTML = '';
    if (hash) {
        let [category, id] = hash.split('/');
        id ? displayPost(id) : displayPosts();
    } else {
        markup = `<form action="" id="postForm">
                    <input type="text" name="title" id="titleInput" placeholder="Title...">
                    <input type="text" name="author" id="authorInput" placeholder="Your name...">
                    <textarea name="post" id="postInput" cols="140" rows="10"></textarea>
                    <input type="submit" name="submit" id="submitPost">
                </form>`
        main.insertAdjacentHTML('afterbegin', markup)
    }
}