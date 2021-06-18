-- 1. Display the total number of employees in each office.(hint : use table employees and officeCode field)
SELECT 
	officeCode,
    COUNT(*) AS totalEmployees    
FROM employees
GROUP BY officeCode;

-- 2. Display the total number of employees in all offices (hint: use the entire employee table as a group)
SELECT COUNT(*) AS totalEmployees    
FROM employees;

-- 3. Display the average creditLimit of all the customers(use table customers)
SELECT AVG(creditLimit) AS averageCreditLimit
FROM customers;

-- 4. Display the minimum,maximum and sum of creditLimit of all the customers.
SELECT
	MIN(creditLimit) AS minimumCreditLimit,
    MAX(creditLimit) AS maximumCreditLimit,
    SUM(creditLimit) AS sumOfCreditLimit
FROM customers;

-- 5. Display total number of customers along with the country name in each country.
SELECT 
	COUNT(*) AS totalCustomers,
    country
FROM customers
GROUP BY country;

-- 6. Display maximum creditLimit and minimum creditLimit in country – ‘France’ and ‘USA’
SELECT 
	MAX(creditLimit) AS maximumCreditLimit,
	MIN(creditLimit) AS minimumCreditLimit,
    country
FROM customers
GROUP BY country
HAVING country IN ("France", "USA");
    
-- 7. Display countries whose minimum creditLimit is 0.
SELECT 
	MIN(creditLimit) AS minimumCreditLimit,
    country
FROM customers
GROUP BY country
HAVING MIN(creditLimit) = 0;

-- 8. Display the maximum creditLimit of all the customers
-- who are from coutries – ‘USA’,’France’,’Polnd’,’Japan’
-- whose maximum creditLimit is greater than 0
-- sorted in descending order of maximum credit limit.
SELECT
    MAX(creditLimit) AS maximumCreditLimit,
    country
FROM customers
GROUP BY country
HAVING country 
	IN ("USA", "France", "Poland", "Japan") 
    AND MAX(creditLimit) > 0
ORDER BY MAX(creditLimit) DESC;

-- 9. Display the order number and total orders placed in that orderNumber .
SELECT 
	orderNumber,
	COUNT(*) AS totalOrder
FROM orderdetails
GROUP BY orderNumber;

-- 10 Display the order Number, total orders placed in that orderNumer
-- where the total orders placed in that order are greater than 15
-- where orderNumbers are between 10165 and 10365
SELECT 
	orderNumber,
	COUNT(*) AS totalOrder
FROM orderdetails
GROUP BY orderNumber
HAVING 
	COUNT(*) > 15 AND 
	orderNumber BETWEEN 10165 AND 10365;  
  