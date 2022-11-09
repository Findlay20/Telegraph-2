DROP TABLE IF EXISTS authors;
DROP TABLE IF EXISTS posts;

CREATE TABLE authors (
    id serial PRIMARY KEY,
    pseudonym VARCHAR(50) NOT NULL
);

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    Tdate DATE NOT NULL,
    descr VARCHAR(300) NOT NULL,
    author_id INT
);