CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
);

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar');

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
);

INSERT INTO SecondTab VALUES
(5),
(NULL);


SELECT * FROM SecondTab

SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL );
-- the output is 0, The query will not count any rows because of the NULL.
 SELECT COUNT(*) 
 FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );
 --the output is 2 The query will count Sharlee (ID 6) and Krish (ID 7) because their IDs are not 5. Pawan (ID 5) will be excluded.


  SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab );
--The query returns 0 because the presence of NULL in the subquery causes the NOT IN condition to fail.
  SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL );
--The query returns 2 because it excludes NULL values in the subquery, counting only those ids from FirstTab that are not in SecondTab where the id is not NULL.

