DROP TABLE IF EXISTS people;
DROP TABLE IF EXISTS posts;

CREATE TABLE people (
    id serial PRIMARY KEY,
    pseudonym VARCHAR(50) NOT NULL
);

CREATE TABLE posts (
    id serial PRIMARY KEY,
    people_id INT,
    title VARCHAR(50) NOT NULL,
    Tdate date NOT NULL,
    descr VARCHAR(300) NOT NULL
);