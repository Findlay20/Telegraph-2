const db = require('../dbConfig/init');

const Author = require('./Author');

module.exports = class Post {
    constructor(data, author){
        this.id = data.id;
        this.title = data.title;
        this.Tdate = data.Tdate;
        this.descr = data.descr;
        this.author = { name: data.author_pseudonym, path: `/authors/${data.author_id}`};
    };

    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                let data = await db.query('SELECT posts.*, authors.pseudonym as author_pseudonym FROM posts;');
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
                let data = await db.query(`SELECT posts.*, authors.pseudonym as author_pseudonym
                                                FROM posts 
                                                LEFT JOIN authors ON posts.author_id = authors.id
                                                WHERE posts.id = $1;`, [ id ] );
                let post = new Post(data.rows[0]);
                console.log(data.rows[0])
                console.log(post)
                resolve (post);
            } catch (err) {
                reject(`Post not found: ${err}`);
            }
        });
    };

    static async create(data){
        return new Promise (async (resolve, reject) => {
            try {
                const { authorName, title, descr} = data;

                // finds or creates author with data inserted into author
                let author = await Author.findOrCreateByName(authorName);
                console.log(author)
                
                let postData = await db.query(`INSERT INTO posts 
                VALUES ($1, $2, $3, $4)  RETURNING *;`, [title, GETDATE(), descr, author.id] );

                let post = new Post(postData.rows[0]);

                resolve(post);
            } catch (err) {
                reject('Post could not be created');
            }
        });
    };

    
};