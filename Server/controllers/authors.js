const Author = require('../models/Author');

async function index(req, res) {
    try {
        const authors = await Author.all;
        res.status(200).json(authors);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function show(req, res) {
    try {
        const author = await Author.findById(req.params.id);
        res.status(200).json(author);
    } catch (err) {
        res.status(500).send(err);
    };
}

async function create(req, res) {
    try {
        const authors = await Author.create(req.body);
        res.status(201).json(authors);
    } catch (err) {
        res.status(422).send(err);
    }
}

module.exports = { index, show, create }