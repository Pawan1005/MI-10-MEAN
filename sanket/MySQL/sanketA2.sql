-- 1. Create a table course with the following details
-- courseId number
-- courseName varchar(20)
-- add following constraints to it
-- courseId – Primary Key
-- courseName – Not Null and Unique
CREATE TABLE IF NOT EXISTS course 
(
    courseId INT PRIMARY KEY,
    courseName VARCHAR(20) NOT NULL UNIQUE
);

-- 2. Create a table student with the following details
-- studId number
-- studName varchar(20)
-- studAadhar varchar(12)
-- mobileNo varchar(8)
-- streams varchar(10)
-- studCourseId number
-- add following constraints to it
-- studId – Primary Key
-- studName – Not Null
-- studAadhar – unique
-- stream – check(science,commerce)
-- studCourseId – Foreign key reference courseID from crourse table
CREATE TABLE IF NOT EXISTS student
(
	studId INT PRIMARY KEY,
    studName VARCHAR(20) NOT NULL,
    studAadhar VARCHAR(12) UNIQUE,
    mobileNo VARCHAR(8),
    streams VARCHAR(10) CHECK(streams IN ("science", "commerce")),
    studCourseId INT,
    FOREIGN KEY fkStudentCourse(studCourseId)
		REFERENCES course(courseId)
        ON UPDATE CASCADE
        ON DELETE NO ACTION
);

-- 3. Alter the student table – add a column address varchar(30) and DOB Date
-- modify mobieNo varchar(10)
ALTER TABLE student 
	ADD address VARCHAR(30),
	ADD DOB     DATE,
	MODIFY mobileNo VARCHAR(10);
    
-- 4. Create a table temp
-- tempid number
-- tempDesc varchar(20)
CREATE TABLE temp
(
	tempId INT,
    tempDesc VARCHAR(20)
);

-- 5. DROP the table temp
DROP TABLE temp;

-- 6. Display all the employees whose first name start from F.
SELECT * 
FROM employees 
WHERE firstName LIKE "F%";

-- 7. Display all the employees whose first name has exactly 6 characters and lastname ends with n;
SELECT *
FROM employees
WHERE firstName LIKE "______" AND lastName LIKE "%n";

-- 8. Display the officeCode,postalcode and city of country USA(use table offices)
SELECT 
	officeCode,
    postalCode,
    city
FROM offices
WHERE country = "USA";

-- 9. Display the first 6 employees if their firstname is sorted alphabetically.
SELECT * 
FROM employees
ORDER BY firstName 
LIMIT 6;

-- 10. Display the customer details of the cutomers whose firstname starts with J and state is not null.
SELECT * 
FROM customers
WHERE contactFirstName LIKE "j%" AND state IS NOT NULL;

-- 11. Display the customer details of the cutomers whose firstname starts with J and state is not null in
-- descending order of creditlimit.
SELECT * 
FROM customers
WHERE contactFirstName LIKE "j%" AND state IS NOT NULL
ORDER BY creditLimit desc;

-- 12.Display the customer details of the first two cutomers whose firstname starts with J and state is not
-- null in descending order of creditlimit.
SELECT * 
FROM customers
WHERE contactFirstName LIKE "j%" AND state IS NOT NULL
ORDER BY creditLimit desc
LIMIT 2;
