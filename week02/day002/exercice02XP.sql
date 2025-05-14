


/*exercice01*/

SELECT * FROM items ;
SELECT price FROM items ORDER BY price DESC;
SELECT price FROM items WHERE price >= 80 ORDER BY price ASC;
SELECT firstname , lastname FROM customers ORDER BY firstname ASC LIMIT 3;
SELECT lastname FROM customers ORDER BY lastname DESC ;

/*exercice02*/
SELECT * FROM customer;
SELECT first_name, last_name AS full_name
FROM customer;
SELECT DISTINCT create_date
FROM customer;
SELECT * FROM customer 
ORDER BY first_name DESC;
SELECT film_ID , title, description, rental_rate FROM film ORDER BY rental_rate ASC;
SELECT address, phone FROM address WHERE district = 'Texas';
SELECT film_id FROM film WHERE film_id = 15 OR film_id = 150;
SELECT film_ID, title, description, length, rental_rate FROM film WHERE title = 'interstellar';
SELECT film_id, title, description, length, rental_rate FROM film  WHERE title ILIKE 'in%';
SELECT title, rental_rate FROM film ORDER BY 	rental_rate ASC LIMIT 10;
SELECT film_id, title, rental_rate
FROM film
ORDER BY rental_rate ASC
LIMIT 10 OFFSET 10;

SELECT c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY c.customer_id;
SELECT f.film_id, f.title
FROM film f
LEFT JOIN inventory i ON f.film_id = i.film_id
WHERE i.film_id IS NULL;
SELECT ci.city, c.country
FROM city ci
INNER JOIN country c  ON ci.country_id = c.country_id ;
SELECT c.customer_id, c.first_name AS customer_first_name, c.last_name AS   customer_last_name, 
       p.amount, p.payment_date, s.first_name AS staff_first_name, s.last_name AS staff_last_name
FROM payment p

JOIN customer c ON p.customer_id = c.customer_id
JOIN staff s ON p.staff_id = s.staff_id
ORDER BY s.staff_id;



