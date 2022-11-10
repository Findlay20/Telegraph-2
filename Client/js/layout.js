window.addEventListener('hashchange', updateContent);
const main = document.querySelector('main');
main.onload = updateContent();

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
        markup = `<form id="postForm">
                    <input type="text" name="title" id="titleInput" placeholder="Title...">
                    <input type="text" name="authorName" id="authorInput" placeholder="Your name...">
                    <textarea name="descr" id="postInput" cols="140" rows="10"></textarea>
                    <input type="submit" name="submit" id="submitPost">
                </form>`
        main.insertAdjacentHTML('afterbegin', markup)
    }
}