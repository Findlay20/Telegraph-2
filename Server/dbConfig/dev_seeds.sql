INSERT INTO authors (pseudonym) 
VALUES
('Adams'),
('Tolstoy'),
('Sakura'),
('Utachi');

INSERT INTO posts (title, Tdate, descr, author_id) 
VALUES
('title here...', TO_DATE('&dob','1983-07-21'), 'description here...', 1),
('title here...', TO_DATE('&dob','2000-10-11'), 'description here...', 1),
('title here...', TO_DATE('&dob','2003-05-14'), 'description here...', 2),
('title here...', TO_DATE('&dob','2006-09-20'), 'description here...', 3),
('title here...', TO_DATE('&dob','2010-12-03'), 'description here...', 4);