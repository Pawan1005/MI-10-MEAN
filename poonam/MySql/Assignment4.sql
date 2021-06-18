-- JOINS
SHOW DATABASES;
USE classicmodels;

-- 1-
select * from employees;
select * from offices;
select employeeNumber, firstName, lastName, jobtitle, e.officeCode, city, state, country
from employees as e
inner join offices as o;

-- 2-
select * from employees;
select * from offices;
select employeeNumber, firstName, lastName, jobtitle, e.officeCode, city, state, country
from employees as e
inner join offices as o
where jobTitle = 'Sales Rep';

-- 3-
select employeeNumber, firstName, lastName, jobtitle, e.officeCode, city, state, country
from employees as e
inner join offices as o
where country = 'USA';

-- 4-
select * from customers;
select * from orders;
select c.customerNumber, c.customerName, c.city, o.orderNumber
from customers as c
inner join orders as o
on c.customerNumber = o.customerNumber;

-- 5-
select c.customerNumber, customerName, city, o.orderNumber
from customers as c
inner join orders as o
on c.customerNumber = o.customerNumber
where status = 'Cancelled';

-- 6-
select c.customerNumber, customerName, city, orderNumber
from customers as c
left join orders as o
on c.customerNumber = o.customerNumber
where o.customerNumber is null;

-- 7-
select o.orderNumber, orderDate, status, od.productCode, productName, od.quantityOrdered
from orders o 
inner join orderdetails od on o.orderNumber = od.orderNumber
inner join products p on od.productCode = p.productCode;

-- 8-
select * from orderdetails;
select * from products;
select o.orderNumber, orderDate, status, od.productCode, productName, od.quantityOrdered
from orders o 
inner join orderdetails od on o.orderNumber = od.orderNumber
inner join products p on od.productCode = p.productCode
where od.quantityOrdered > 30;

-- 9-
select * from employees;
select e.employeeNumber, e.firstName, e.lastName, e.reportsTo,
Concat (e.firstName, " ", e.lastName) as fullName
from employees e
inner join employees em
on em.reportsTo = e.employeeNumber;

-- 10-
select * from employees;
select e.employeeNumber, e.firstName, e.lastName, e.reportsTo,
Concat (e.firstName, " ", e.lastName) as fullName
from employees e
inner join employees em
on em.reportsTo = e.employeeNumber
where e.officeCode in (1, 2);