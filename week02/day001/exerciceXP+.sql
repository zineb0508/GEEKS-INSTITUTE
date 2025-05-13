CREATE TABLE student(
 student_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 bith_date DATE NOT NULL);
 
 INSERT INTO student (student_id , first_name, last_name, birth_date)
 VALUES (1 , 'Marc', 	'Benichou'	,'1998-02-11'),
 (2	, 'Yoan' ,	'Cohen',	'2010-12-03'),
 (3	 , 'Lea'	,'Benichou' ,	'1987-07-27'),
 (4	, 'Amelia', 	'Dux',	'1996-04-07'),
 (5	, 'David', 	'Grez',	'2003-06-14'),
 (6, 	'Omer',	'Simpson'	, '1980-10-03');


 ALTER TABLE student RENAME COLUMN bith_DATE TO birth_date;

 SELECT first_name, last_name FROM student;

 SELECT * FROM student;
SELECT first_name, last_name FROM actors WHERE first_name = 'Marc'  AND 
last_name = 'Benichou' ;

 SELECT first_name, last_name FROM student;
 SELECT first_name, last_name FROM student
 WHERE student_id = 2;
 
 SELECT first_name, last_name FROM student WHERE  first_name ILIKE '%a%';
 SELECT first_name, last_name FROM student WHERE  first_name ILIKE 'a%';
 SELECT first_name, last_name FROM student WHERE  first_name ILIKE '%a';
 SELECT first_name, last_name FROM student WHERE  first_name ILIKE '%_a%';
 SELECT student_id FROM student
 WHERE student_id = 1 OR student_id = 3;
 SELECT birth_date FROM student WHERE birth_date >=  '2000_01_1';
 
 
 
 
 
 
 
 

