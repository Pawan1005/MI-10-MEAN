use classicmodels;
-- 1
Select officeCode, Count(1) TotalEmployees From employees
group by officeCode;

-- 2
Select Count(1) TotalEmployees From employees;

-- 3
Select Avg(creditLimit) Average_CreditLimit_All_Customers From customers;

-- 4
Select Min(creditLimit) Minimum_CreditLimit, 
Max(creditLimit) Maximum_CreditLimit, 
Sum(creditLimit) SumOf_CreditLimit
From customers;

-- 5
Select country ,Count(1) From customers
Group By country;

-- 6
Select country, Max(creditLimit) Maximum_CreditLimit, Min(creditLimit) Minimum_CreditLimit
From customers
Where country in ('France', 'USA')
Group By country;

-- 7
Select country, Min(creditLimit) Minimum_CreditLimit
From customers
Group By country
Having Min(creditLimit) = 0;

-- 8
Select country, Max(creditLimit) Maximum_CreditLimit
From customers
Where country in ('USA', 'France', 'Poland', 'Japan')
Group By country
Having Max(creditLimit) > 0
Order By Max(creditLimit) desc;

-- 9
Select orderNumber, Count(1) TotalOrder
From orderdetails
group by orderNumber;

-- 10
Select orderNumber, Count(1) TotalOrder
From orderdetails
Where orderNumber Between 10165 And 10365
group by orderNumber
Having Count(1) > 15;


