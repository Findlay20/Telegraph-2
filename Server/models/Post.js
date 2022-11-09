const db = require('../dbConfig/init');

// const Author = require('./Author');

module.exports = class Post {
    constructor(data, author){
        this.id = data.id;
        this.author = { pseudonym: data.author_pseudonym, path: `/authors/${data.author_id}`};
        this.title = data.title;
        this.Tdate = data.Tdate;
        this.descr = data.descr;
    };

    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                let data = await db.query('SELECT * FROM posts;');
                let posts = data.rows.map(b => new Post(b));
                resolve (posts);
            } catch (err) {
                reject('Posts not found');
            }
        });
    };

    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let data = await db.query(`SELECT posts.*, authors.id as author_id
                                                FROM posts 
                                                LEFT JOIN authors ON posts.author_id = authors.id
                                                WHERE posts.id = $1;`, [ id ] );
                let post = new Book(data.rows[0]);
                resolve (post);
            } catch (err) {
                reject('Post not found');
            }
        });
    };
    
};