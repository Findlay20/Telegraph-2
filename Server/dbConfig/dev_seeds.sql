INSERT INTO authors (name) 
VALUES
('Adams'),
('Tolstoy'),
('Sakura'),
('Utachi');

INSERT INTO posts (title, Tdate, descr, author_id) 
VALUES
('Very First Post!', TO_DATE('&dob','1983-07-21'), 'wow this new telegraph seems way better than the first one!', 1),
('Telegraph 2 All The Way!', TO_DATE('&dob','2000-10-11'), 'I hated the first telegraph but I have completely changed my mind on telegraph 2!! It fixed everything!!!!!', 2),
('Are the Rumours true?', TO_DATE('&dob','2006-09-20'), 'I''ve been hearing lots of murmorings of a Telegraph 3 in the works. Does anyone know if this is true? I really hope so, I''m so excited!', 3),
('What?', TO_DATE('&dob','2003-05-14'), 'What is this for? Who are we talking to? Is anyone listening?', 4),
('Another post', TO_DATE('&dob','2010-12-03'), 'This one isn''t very creative', 4);