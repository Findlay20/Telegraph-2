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
                let data = await db.query('SELECT * FROM posts;');
                let posts = data.rows.map(b => new Post(b));
                resolve (posts);
            } catch (err) {
                reject('Posts not found');
            }
        });
    };

    // bug: type a no/id does not display
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

    static async create(data){
        return new Promise (async (resolve, reject) => {
            try {
                const { authorName, title, descr} = data;

                // finds or creates author with data inserted into author
                let author = await Author.findOrCreateByName(authorName);
                console.log(author)

                // get todays date
                // insert into run(id,name,dob) values(&id,'&name',GETDATE());
                
                // ??
                let newPost = await db.query(`INSERT INTO books 
                VALUES (${title}, ${yearOfPublication}, ${abstract}, ${authorName}) RETURNING *;`);

                let newBook = new Post(data.rows[0]);

                resolve(newBook);
            } catch (err) {
                reject('Post could not be created');
            }
        });
    };

    
};