/* Multiline */
-- Single Line Comment
Show databases;
USE classicmodels;
-- MySql Assignment 1
-- 1:
Select * from employees;
-- 2:
Select employeeNumber, firstName, lastName, jobTitle from employees;
-- 3
Select officeCode, phone, city, country from offices;
-- 4
Select * from products;
-- 5
Select customerName, phone, city, country from customers;
-- 6
Select * From customers Where state Is Null;
-- 7
Select * From customers Where country = 'France';
-- 8
Select productCode, productName, productDescription, quantityInStock 
From products
Where productLine LIKE 'Motorcycles';
-- 9
Select productCode, productName, productDescription, quantityInStock 
From products
Where productLine LIKE 'Motorcycles' AND quantityInStock >= 6000;
-- 10
Select * From products Where productLine Like '%Cars';
-- 11
Select * From employees Where jobTitle Like 'Sales Rep';
-- 12
Select * From employees Where officeCode = 4;
-- 13
Select * From employees Where officeCode In (1, 3, 4);
-- 14
Select * From customers Where creditLimit Between 70000 And 85000;
-- 15
Select customerNumber as 'customerCode', customerName, creditLimit+2000 as 'creditLimit' 
From customers;
-- 16
Select customerNumber as 'customerCode', customerName, contactLastName, contactFirstName, 
phone, addressLine1, addressLine2, city, state, postalCode, country, salesRepEmployeeNumber, creditLimit+2000 as 'creditLimit'
From customers
Where creditLimit+2000 Between 70000 And 85000 order by creditLimit;










