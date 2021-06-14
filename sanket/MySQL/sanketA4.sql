-- 1. Display the empNumber,firstName,lastName,jobtitle,officeCode ,city,state,country of all the
-- employees.(use tables employees and offices)
SELECT 
	employeeNumber,
    firstName,
    lastName,
    jobTitle,
    e.officeCode,
    city,
    state,
    country
FROM employees e
JOIN offices o
	USING(officeCode);

-- 2. Display the empNumber,firstName,lastName,jobtitle,officeCode ,city,state,country of all the
-- employees whose jobTitle is Sales Rep.
SELECT 
	employeeNumber,
    firstName,
    lastName,
    jobTitle,
    e.officeCode,
    city,
    state,
    country
FROM employees e
JOIN offices o
	USING(officeCode)
WHERE jobTitle = "Sales Rep";

-- 3. Display the empNumber,firstName,lastName,jobtitle,officeCode ,city,state,country of all the
-- employees whose office is located in USA.(country = USA)
SELECT 
	employeeNumber,
    firstName,
    lastName,
    jobTitle,
    e.officeCode,
    city,
    state,
    country
FROM employees e
JOIN offices o
	USING(officeCode)
WHERE country = "USA";

-- 4. Display the customer Number, customer Name,city,order number of all the customers.(use tables
-- customers,orders)
SELECT 
	c.customerNumber,
    customerName,
    city,
    orderNumber
FROM customers c
JOIN orders o
	USING (customerNumber);
    
-- 5. Display the customer Number, customer Name,city,order number of all the customers whose
-- order is cancelled.(use tables customers,orders)
SELECT 
	c.customerNumber,
    customerName,
    city,
    orderNumber
FROM customers c
JOIN orders o
	USING (customerNumber)
WHERE status = "Cancelled";

-- 6. Display the customer Number, customer Name,city,order number of all the customers who have not
-- placed any order.(use tables customers,orders)
SELECT 
	c.customerNumber,
    customerName,
    city,
    orderNumber
FROM customers c
LEFT JOIN orders o
	USING (customerNumber)
WHERE orderNumber IS NULL;

-- 7. Display the ordernumber,orderdate,status,productcode,productname,quantityOrdered for all the orders.
-- (use tables orders,orderdetails,products)
SELECT
	o.orderNumber,
    orderDate,
    status,
    p.productCode,
    productName,
    quantityOrdered
FROM orders o
JOIN orderdetails od
	USING(orderNumber)
JOIN products p
	USING(productCode);

-- 8. Display the ordernumber,orderdate,status,productcode,productname,quantityOrdered for all the orders
-- whose quantityOrdered is greater than 30(use tables orders,orderdetails,products)
SELECT
	o.orderNumber,
    orderDate,
    status,
    p.productCode,
    productName,
    quantityOrdered
FROM orders o
JOIN orderdetails od
	USING(orderNumber)
JOIN products p
	USING(productCode)
WHERE quantityOrdered > 30;

-- 9. Display the employeeNumber,firstName,lastName, reportTo,name of the reporting person(firstName
-- and lastName [hint : use self join, for showing the firstName and lastName in one column use concat
-- function]) of all the employees.
SELECT
	e.employeeNumber,
    e.firstName,
    e.lastName,
    e.reportsTo,
    CONCAT(m.firstName, " ", m.lastName) AS manager
FROM employees e
LEFT JOIN employees m
	ON e.reportsTo = m.employeeNumber;

-- 10. Display the employeeNumber,firstName,lastName, reportTo,name of the reporting person(firstName
-- and lastName [hint : use self join, for showing the firstName and lastName in one column use concat
-- function]) of employees working in officeCode 1 and 2.
SELECT
	e.employeeNumber,
    e.firstName,
    e.lastName,
    e.reportsTo,
    CONCAT(m.firstName, " ", m.lastName) AS manager
FROM employees e
LEFT JOIN employees m
	ON e.reportsTo = m.employeeNumber
WHERE e.officeCode IN (1, 2);
