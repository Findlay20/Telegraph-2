const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const postsRoutes = require('./routes/posts')
const authorsRoutes = require('./routes/authors')
server.use('/posts', postsRoutes)
server.use('/authors', authorsRoutes)

server.get('/', (req, res) => res.send('Hello world!'))

module.exports = server