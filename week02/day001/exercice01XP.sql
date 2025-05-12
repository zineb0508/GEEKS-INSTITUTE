
CREATE TABLE items (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL
);

CREATE TABLE customers (
    id INTEGER PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT
);

INSERT INTO items (id, name, price)
VALUES (1 , 'Small Desk' , 100 
),
(2 , 'Large desk ', 300
),
(3, 'fan', 80);

select * from items;

INSERT INTO customers (id , firstname, lastname)
VALUES ( 1 , 'Greg' , 'Jones'),
(2 , 'Sandra' , 'Jones'),
(3 , 'Scott' , 'Scott'),
(4 , 'Trevor' , 'Green'),
(5 , 'Melanie' , 'Johnson'
);
SELECT *FROM customers;

SELECT * FROM items;


SELECT * FROM items
WHERE price > 80;


SELECT * FROM items
WHERE price <= 300;


SELECT * FROM customers
WHERE lastname = 'Smith';


SELECT * FROM customers
WHERE lastname = 'Jones';


SELECT * FROM customers
WHERE firstname <> 'Scott';
