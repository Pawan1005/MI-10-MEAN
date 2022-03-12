-- Assignment 5
USE classicmodels;

-- 1-
select officeCode, count(1) totalEmp
from employees
group by officeCode;

-- 2-
select count(*) totEmp
from employees;

-- 3-
select * from customers;
select avg(creditLimit) averageCreditLimit
from customers;

-- 4-
select
sum(creditLimit) totalCreditLimit,
min(creditLimit) min,
max(creditLimit) max
from customers;

-- 5-
select
count(customerNumber), country
from customers 
group by country;

-- 6-
select country,
min(creditLimit) min,
max(creditLimit) max
from customers
where country in ('France', 'USA')
group by country;

-- 7-
select country,
min(creditLimit) min
from customers 
group by country
having min(creditLimit) = 0;

-- 8-
select country,
max(creditLimit) max
from customers
where country in ('France', 'USA', 'Poland', 'Japan')
group by country
having max(creditLimit) > 0
order by max(creditLimit) desc;

-- 9-
select orderNumber, count(1) totalOrder
from orderdetails
group by orderNumber;

-- 10-
select orderNumber, count(1) totalOrder
from orderdetails
where orderNumber > 10165 and orderNumber < 10365
group by orderNumber
having count(1) > 15;
