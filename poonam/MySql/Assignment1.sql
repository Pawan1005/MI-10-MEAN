SHOW databases;
USE classicmodels;
-- 1-
SELECT *
FROM employees;
-- 2-
SELECT employeeNumber,firstName,lastName
FROM employees;
-- 3-
SHOW TABLES;
SELECT * FROM offices;
SELECT officeCode, phone, city, country
FROM offices;
-- 4-
SELECT * FROM products;
-- 5-
SELECT customerName, phone, city, country
FROM customers;
-- 6-
SELECT * FROM customers
WHERE state IS NULL;
-- 7-
SELECT * FROM customers
WHERE country = 'France';
-- 8-
SELECT productCode, productLine, productDescription, quantityInStock
FROM products
WHERE productLine LIKE 'Motorcycles';
-- 9-
SELECT productCode, productLine, productDescription, quantityInStock
FROM products
WHERE productLine LIKE 'Motorcycles' AND quantityInStock > 6000;
-- 10-
SELECT *
FROM products
WHERE productLine LIKE '%Cars';
-- 11-
SELECT *
FROM employees
WHERE jobTitle LIKE 'Sales Rep';
-- 12-
SELECT *
FROM employees
WHERE officeCode = 4;
-- 13-
SELECT *
FROM employees
WHERE officeCode IN (1,3,4);
-- 14-
SELECT *
FROM customers
WHERE creditLimit >= 70000 AND creditLimit <= 85000;
-- 15-
SELECT customerNumber, customerName, creditLimit+2000
FROM customers;
-- 16-
SELECT customerNumber, customerName, creditLimit+2000 AS incresedCreditLimit
FROM customers
WHERE creditLimit+2000 >= 70000 AND creditLimit+2000 <= 85000;










