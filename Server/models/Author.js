const db = require('../dbConfig/init');

module.exports = class Author {
    constructor(data){
        this.id = data.id;
        this.name = data.pseudonym;
    };
    
    static get all(){ 
        return new Promise (async (resolve, reject) => {
            try {
                // console.log(db);
                const result = await db.query('SELECT * FROM authors;')
                const authors = result.rows.map(a => ({ id: a.id, name: a.name }))
                resolve(authors);
            } catch (err) {
                reject("Error retrieving authors")
            }
        })
    };

    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let authorData = await db.query('SELECT * FROM authors WHERE id = $1;', [ id ]);
                let author = new Author(authorData.rows[0]);
                resolve(author);
            } catch (err) {
                reject('Author not found');
            };
        });
    };

};