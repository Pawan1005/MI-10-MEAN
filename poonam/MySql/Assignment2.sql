SHOW databases;
USE classicmodels;
-- 1-
CREATE TABLE course (
courseId INT PRIMARY KEY,
courseName VARCHAR(20) NOT NULL UNIQUE
);
SELECT * FROM course;

-- 2-
CREATE TABLE student (
studId INT PRIMARY KEY,
studName VARCHAR(20) NOT NULL,
studAdhar VARCHAR(12) UNIQUE,
mobileNo VARCHAR(8),
streams VARCHAR(10) CHECK (streams IN ('science', 'commerce')),
studCourseId INT,
FOREIGN KEY(studCourseId)
	REFERENCES course(courseId)
);
 DESC student;
 
 -- 3-
ALTER TABLE student ADD
address VARCHAR(30),
ADD DOB DATE,
MODIFY mobileNo VARCHAR(10);
SELECT * FROM student;
DESC student;

-- 4-
CREATE TABLE temp (
tempId INT,
tempdesc VARCHAR(20)
);
DESC temp;

-- 5-
DROP TABLE temp;
SHOW TABLES;

-- 6-
SELECT * FROM employees
WHERE firstName LIKE 'F%';

-- 7-
SELECT * FROM employees
WHERE firstName LIKE '______' AND lastName LIKE '%n';

-- 8-
SELECT officeCode, postalCode, city  FROM offices
WHERE country='USA';

-- 9-
SELECT * FROM employees
ORDER BY firstName
LIMIT 6;

-- 10-
SELECT * FROM customers
WHERE contactFirstName LIKE 'J%' AND state IS NOT NULL;

-- 11-
SELECT * FROM customers
WHERE contactFirstName LIKE 'J%' AND state IS NOT NULL
ORDER BY creditLimit DESC;

-- 12-
SELECT * FROM customers
WHERE contactFirstName LIKE 'J%' AND state IS NOT NULL
ORDER BY creditLimit DESC
LIMIT 2;
