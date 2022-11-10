window.addEventListener('hashchange', updateContent);
const main = document.querySelector('main');
const navLinks = document.querySelectorAll('.navlink');

function updateNav(hash) {
    const updateLink = link => {
        if(hash.includes('#')) link.classList = '#';
        else if(hash.includes(link.textContent)) link.classList = 'navlink';
    };
    navLinks.forEach(updateLink)
}

function updateContent(){
    let hash = window.location.hash.substring(1);
    updateMain(hash);
}

function updateMain(hash) {
    main.innerHTML = '';
    if (hash) {
        let id = hash.split('/');
        id ? displayPost(id) : displayPosts();
    } else {
        markup = `<form id="postForm">
                    <input type="text" name="title" id="titleInput" placeholder="Title...">
                    <input type="text" name="author" id="authorInput" placeholder="Your name...">
                    <textarea name="post" id="postInput" cols="140" rows="10"></textarea>
                    <input type="submit" name="submit" id="submitPost">
                </form>`
        main.insertAdjacentHTML('afterbegin', markup)
    }
}