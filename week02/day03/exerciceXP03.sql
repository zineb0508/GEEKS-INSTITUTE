---exercice 0

SELECT name FROM language;
SELECT f.title, f.description, l.name
FROM film f
JOIN language l ON f.language_id = l.language_id;
SELECT f.title, f.description, l.name
FROM film f
LEFT JOIN language l ON f.language_id = l.language_id ;

CREATE TABLE new_film(
    new_film_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL );
	
INSERT INTO new_film(new_film_id, name)VALUES
(1, 'Intterstellar'),
(2, 'The Matrix'),
(3, 'Parasite'),
(4, 'Amélie'),
(5, 'Spirited Away'),
(6, 'Untitled Mystery'),
(7, 'The Silent Film');

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
	new_film_id INTEGER REFERENCES new_film (new_film_id),
	language_id INTEGER REFERENCES language (language_id),
	title VARCHAR(100) NOT NULL,
    score INTEGER CHECK (score BETWEEN 1 AND 10),
	review_text TEXT NOT NULL,
	last_update  DATE DEFAULT CURRENT_DATE);
SELECT * FROM customer_review;


INSERT INTO customer_review (new_film_id, language_id, title, score, review_text)
SELECT 
    (SELECT new_film_id FROM new_film WHERE name = 'Interstellar'), 
    (SELECT language_id FROM language WHERE name = 'English'),
    'A mind-bending journey through space.', 9, 'An incredible adventure that makes you think about time and space.'
UNION ALL
SELECT 
    (SELECT new_film_id FROM new_film WHERE name = 'The Matrix'), 
    (SELECT language_id FROM language WHERE name = 'English'),
    'A revolutionary film that redefined sci-fi.', 10, 'The Matrix broke new ground in the sci-fi genre with groundbreaking effects and storytelling.';

	SELECT * FROM customer_review;
DELETE FROM customer_review
WHERE review_id = 1;  -


--exercice02;

UPDATE film
SET language_id = 5
WHERE film_id IN (10, 20, 30);
----The `customer` table has foreign keys to `store` and `address`, so inserts must use existing `store_id`and `address_id` values.
DROP TABLE IF EXISTS customer_review;
SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;
SELECT f.title, r.rental_date
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY r.rental_date DESC
LIMIT 30;
SELECT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE (f.description LIKE '%sumo wrestler%' OR f.title LIKE '%sumo wrestler%')
AND a.first_name = 'Penelope' AND a.last_name = 'Monroe';
SELECT title
FROM film
WHERE length < 60 AND rating = 'R';

 
