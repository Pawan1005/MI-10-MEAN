-- DML Operations on student and course table
-- 1. Insert a record in student table
-- 1 Amit 1234567890 9999833445 science 101 camp
INSERT INTO student (studId, studName, studAadhar, mobileNo, streams, studCourseId, address)
VALUES(1, "Amit", 1234567890, 9999833445, "science", 101, "camp");

-- 2. Is the record inserted in the table? The record is not inserted because there is a referential integrity
-- constraint on courseId and there is no record in the master course table.
-- No w try inserting the same record with courseId value as null
INSERT INTO student (studId, studName, studAadhar, mobileNo, streams, studCourseId, address)
VALUES(1, "Amit", 1234567890, 9999833445, "science", NULL, "camp");

-- 3. Insert the following values in course table
-- courseID courseName
-- 101 Computers
-- 102 Electronics
-- 103 Mechanical
-- 104 Civil
INSERT INTO course
VALUES (101, "Computers"),
	   (102, "Electronics"),
       (103, "Mechanical"),
       (104, "Civil");

-- 4. Add a column in course table – courseCode varachar(4)
ALTER TABLE course
ADD courseCode VARCHAR(4);

-- 5. Display all the records in the course table.
SELECT *
FROM course;

-- 6. Update the courseCode as follows 101 – COMP,102 – ENTC,103- MECH,104 – CIVL
UPDATE course
SET courseCode = "COMP"
WHERE courseId = 101;

UPDATE course
SET courseCode = "ENTC"
WHERE courseId = 102;

UPDATE course
SET courseCode = "MECH"
WHERE courseId = 103;

UPDATE course
SET courseCode = "CIVL"
WHERE courseId = 104;

-- 7. Insert 10 records in student table against various coourseIds. - use multiple insert.
INSERT INTO student
VALUES(2, "Bmit", 1234567891, 9999833446, "science", 102, "campa","1111-1-1"),
      (3, "Cmit", 1234567892, 9999833447, "science", 103, "campb","1111-1-2"),
      (4, "Dmit", 1234567893, 9999833448, "science", 104, "campc","1111-1-3"),
      (5, "Emit", 1234567894, 9999833449, "science", 101, "campd","1111-1-4"),
      (6, "Fmit", 1234567895, 9999833450, "commerce", 102, "campe","1111-1-5"),
      (7, "Gmit", 1234567896, 9999833451, "commerce", 103, "campf","1111-1-6"),
      (8, "Hmit", 1234567897, 9999833452, "commerce", 104, "campg","1111-1-7"),
      (9, "Imit", 1234567898, 9999833453, "commerce", 101, "campg","1111-1-8"),
      (10, "Jmit", 1234567899, 9999833454, "commerce", 102, "camph","1111-1-9"),
      (11, "Kmit", 1234567900, 9999833455, "commerce", 103, "campi","1111-1-10");
      

-- 8. Create a duplicate table of student table. Name it DUP_EMP
CREATE TABLE DUP_EMP AS
SELECT * 
FROM student;

-- 9. Delete all the records of course Mechanical course from DUP_EMP table.
SET SQL_SAFE_UPDATES = 0;
DELETE FROM DUP_EMP
WHERE studCourseId =(
	SELECT courseId
	FROM course
	WHERE courseName = "Mechanical"
);

-- 10. set the auotcommit to 0. Give start transaction command.
SET autocommit = 0;
START TRANSACTION;

-- 11. Add a columns marks and practical in student table.
ALTER TABLE student
ADD marks INT,
ADD practical INT;


-- 12. Give a rollback statement.Check if the columns added are still in the table
ROLLBACK;
SELECT *
FROM student;

-- 13. insert two more records in student table.
INSERT INTO student
VALUES(12, "Lmit", 1234567901, 9999833546, "science", 102, "campa","1111-1-11",NULL,NULL),
      (22, "Mmit", 1234567902, 9999833547, "science", 103, "campb","1111-1-12",NULL,NULL);

-- 14. Give Rollback command. Check if the records are still there in the table.
ROLLBACK;
SELECT *
FROM student;

-- 15. insert two more records in student table.Give a commit command.
INSERT INTO student
VALUES(12, "Lmit", 1234567901, 9999833546, "science", 102, "campa","1111-1-11",NULL,NULL),
      (22, "Mmit", 1234567902, 9999833547, "science", 103, "campb","1111-1-12",NULL,NULL);
COMMIT;

-- 16. Now give a savepoint A and update the marks and practical marks of all students.
SAVEPOINT A;
UPDATE student
SET marks = 22, practical = 33;

-- 17. Display the data from student table.See if the data is updated in the table.
SELECT *
FROM student;

-- 18. Now give savepoint B and delete the records from the student table whose name start from S.
SAVEPOINT B;
DELETE FROM student
WHERE studName LIKE "M%";

-- 19. Display the result and check if the records are deleted.
SELECT *
FROM student;

-- 20. Give a Roll back command.Display the results and check if the records are there in the table.
ROLLBACK;
SELECT *
FROM student;
