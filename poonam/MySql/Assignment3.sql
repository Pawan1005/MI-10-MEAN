SHOW databases;
USE classicmodels;
SHOW TABLES;
-- 1, 2-
DESC student;
SELECT * FROM student;
INSERT INTO student(studId, studName, studAdhar, mobileNo, streams, studCourseId, address)
VALUES(1, 'Amit', 1234567890, 9999833445, 'science', NULL, 'camp');

-- 3-
INSERT INTO course(courseID, courseName)
VALUES(101, 'Computers'),
(102, 'Electronics'),
(103, 'Mechanical'),
(104, 'Civil');
SELECT * FROM course;

-- 4-
ALTER TABLE course
ADD courseCode VARCHAR(4);
SELECT * FROM course;

-- 5-
SELECT * FROM course;

-- 6-
UPDATE course 
SET courseCode = 'COMP'
WHERE CourseId = 101;
UPDATE course 
SET courseCode = 'ENTC'
WHERE CourseId = 102;
UPDATE course 
SET courseCode = 'MECH'
WHERE CourseId = 103;
UPDATE course 
SET courseCode = 'CIVL'
WHERE CourseId = 104;
SELECT * FROM course;

-- 7-
DESC student;
SELECT * FROM student;
INSERT INTO student(studId, studName, studAdhar, mobileNo, streams, studCourseId, address, DOB)
VALUES(2, 'Anuj', 1234567891, 9999833441, 'science', 101, 'camp', '2020-11-03'),
(3, 'Sumit', 1234567892, 9999833442, 'commerce', 102, 'camp', '2020-04-04'),
(4, 'Neha', 1234567893, 9999833443, 'commerce', 102, 'camp', '2021-01-04'),
(5, 'Poonam', 1234567894, 9999833444, 'science', 101, 'camp', '2020-09-04'),
(6, 'Arun', 1234567895, 9999833446, 'science', 101, 'camp', '2020-12-04'),
(7, 'Pooja', 1234567860, 9999833447, 'commerce', 102, 'camp', '2010-08-04'),
(8, 'Priya', 1234567870, 9999833448, 'science', 101, 'camp', '2020-07-04'),
(9, 'Harshal', 1234568890, 9999833449, 'science', 101, 'camp', '2020-06-04'),
(10, 'Qadir', 1234567990, 9999833440, 'science', 101, 'camp', '2020-05-04'),
(11, 'Sankeet', 1234507890, 9999833422, 'science', 101, 'camp', '2020-11-14');

-- 8-
CREATE TABLE DUP_EMP(SELECT * FROM student);
SELECT * FROM DUP_EMP;

-- 9-
DELETE FROM DUP_EMP
WHERE studCourseId = 103;
SELECT * FROM DUP_EMP;

-- 10-
SET autocommit = 0;
START TRANSACTION;

-- 11-
ALTER TABLE student
ADD marks INT,
ADD practical VARCHAR(12);
SELECT * FROM student;
COMMIT;
-- 12-
ROLLBACK;
SELECT * FROM student;

-- 13-
START TRANSACTION;
INSERT INTO student(studId, studName, studAdhar, mobileNo, streams, studCourseId, address, DOB)
VALUES(12, 'Seema', 1244567891, 9999533441, 'science', 101, 'camp', '2020-11-03'),
(13, 'Sneha', 1234567882, 9999633442, 'commerce', 102, 'camp', '2020-04-04');
SELECT * FROM student;
COMMIT;
-- 14-
ROLLBACK;
SELECT * FROM student;

-- 15-
INSERT INTO student(studId, studName, studAdhar, mobileNo, streams, studCourseId, address, DOB)
VALUES(14, 'Seema', 6244567891, 9999533441, 'science', 101, 'camp', '2020-11-03'),
(15, 'Sneha', 1233567882, 9999633442, 'commerce', 102, 'camp', '2020-04-04');
COMMIT;

-- 16-
UPDATE student 
SET marks = 60 
WHERE studCourseId = 101;
UPDATE student 
SET marks = 70
WHERE studId = 102;
SELECT * FROM student;






