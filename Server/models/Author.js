const db = require('../dbConfig/init');

module.exports = class Author {
    constructor(data){
        this.id = data.id;
        this.name = data.pseudonym;
    };
    
    static get all(){ 
        return new Promise (async (resolve, reject) => {
            try {
                const result = await db.query('SELECT * FROM authors;')
                const authors = result.rows.map(a => ({ id: a.id, name: a.pseudonym}))
                resolve(authors);
            } catch (err) {
                reject("Error retrieving authors")
            }
        })
    };

    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let data = await db.query('SELECT * FROM authors WHERE id = $1;', [ id ]);
                let author = new Author(data.rows[0]);
                resolve(author);
            } catch (err) {
                reject('Author not found');
            };
        });
    };

    static create(name){
        return new Promise (async (resolve, reject) => {
            try {
                let data = await db.query('INSERT INTO authors (pseudonym) VALUES ($1) RETURNING *;', [ name ]);
                let author = new Author(data.rows[0]);
                resolve (author);
            } catch (err) {
                reject('Author could not be created');
            };
        });
    };

    static findOrCreateByName(name){
        return new Promise (async (resolve, reject) => {
            try {
                let author;
                const authorData = await db.query('SELECT * FROM authors WHERE name = $1;', [ name ]);
                if(!authorData.rows.length) {
                    author = await Author.create(name);
                } else {
                    author = new Author(authorData.rows[0]);
                };
                resolve(author);
            } catch (err) {
                reject(err);
            };
        });
    };

};