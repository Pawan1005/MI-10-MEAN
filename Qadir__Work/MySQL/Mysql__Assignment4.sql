use classicmodels;
-- 1
Select emp.employeeNumber, emp.firstName, emp.lastName, emp.jobtitle, emp.officeCode, o.city, o.state, o.country
From employees emp
Join offices o
On emp.officeCode = o.officeCode;

-- 2
Select emp.employeeNumber, emp.firstName, emp.lastName, emp.jobtitle, emp.officeCode, o.city, o.state, o.country
From employees emp
Join offices o
On emp.officeCode = o.officeCode
Where jobtitle = "Sales Rep";

-- 3
Select emp.employeeNumber, emp.firstName, emp.lastName, emp.jobtitle, emp.officeCode, o.city, o.state, o.country
From employees emp
Join offices o
On emp.officeCode = o.officeCode
Where country = "USA";

-- 4
Select cust.customerNumber, cust.customerName, cust.city, o.orderNumber
From customers cust
JOIN orders o
On cust.customerNumber = o.customerNumber;

-- 5
Select cust.customerNumber, cust.customerName, cust.city, o.orderNumber
From customers cust
JOIN orders o
On cust.customerNumber = o.customerNumber
Where status = "cancelled";

-- 6
Select cust.customerNumber, cust.customerName, cust.city, o.orderNumber
From customers cust
JOIN orders o
On cust.customerNumber = o.customerNumber
Where o.customerNumber Is Null;

-- 7
Select o.orderNumber, o.orderDate, o.status, prd.productCode, prd.productName, od.quantityOrdered
From orders o
Join orderdetails od
On o.orderNumber = od.orderNumber
Join products prd
On od.productCode = prd.productCode;

-- 8
Select o.orderNumber, o.orderDate, o.status, prd.productCode, prd.productName, od.quantityOrdered
From orders o
Join orderdetails od
On o.orderNumber = od.orderNumber
Join products prd
On od.productCode = prd.productCode
Where quantityOrdered > 30;

-- 9
select * from employees;
Select emp.employeeNumber, emp.firstName, emp.lastName, emp.reportsTo,
Concat (emp.firstName, " ", emp.lastName) as fullName
From employees emp
Join employees e
On e.reportsTo = emp.employeeNumber;

-- 10
select * from employees;
Select emp.employeeNumber, emp.firstName, emp.lastName, emp.reportsTo,
Concat (emp.firstName, " ", emp.lastName) as fullName
From employees emp
Join employees e
On e.reportsTo = emp.employeeNumber
Where emp.officeCode In (1, 2);
