use qadirdatabase;
-- 1
desc student;
insert into student(studId, studName, studAadhar,mobileNo, streams,studCourseId, address) 
values(1, 'Amit','1234567890','9999833445','science', null,'camp');

-- 3
insert into course(courseId, courseName) 
values 
(101, 'Computers'),
(102, 'Electronics'),
(103, 'Mechanical'),
(104, 'Civil');

-- 4
alter table course 
add column courseCode varchar(4);

-- 5
select * from course;

-- 6
update course 
set courseCode = (case when courseId = 101 then 'COMP' 
	when courseId = 102 then 'ENTC'
    when courseId = 103 then 'MECH'
    when courseId = 104 then 'CIVL'
end)
where courseId in (101, 102, 103, 104);

select * from course;

-- 7
insert into student(studId, studName, studAadhar,mobileNo, streams,studCourseId, address, DOB) 
values(2, 'Niki','1234567801','9999833455','science', 103,'new arena', '2021-01-09'),
(3, 'Ash','1234567891','9999833475','science', 102,'new camp', '2021-02-11'),
(4, 'Ashly','1234567892','9999833446','science', 103,'old camp', '2021-03-12'),
(5, 'Becky','1234567893','9999833447','science', 103,'old campus', '2021-04-13'),
(6, 'Seth','1234567894','9999833448','science', 104,'old Arena', '2021-03-14'),
(7, 'Lashly','1234567899','9999833446','science', 103,'old house park', '2021-03-15'),
(8, 'Roman','1234567897','9999833449','science', 103,'new house park', '2021-03-16'),
(9, 'Jhon','1234567815','9999833418','science', 102,'house arena', '2021-03-15'),
(10, 'Smith','1234567832','9999833546','science', 104,'old campus house park', '2021-03-17'),
(11, 'Aj lee','1234567882','9999833426','commerce', 101,'new york', '2021-03-18');

select * from student;

-- 8
create table DUP_EMP (select * from student);

-- 9
delete from DUP_EMP
where studCourseId = 103;

select * from DUP_EMP;

alter table student 
drop column marks,
drop column practical;

-- 10
set autocommit = OFF;

start transaction;

-- 11
alter table student 
add column marks int,
add column practical varchar(20);

-- 13 
insert into student(studId, studName, studAadhar,mobileNo, streams,studCourseId, address, DOB) 
values(12, 'Bella','1234567171','9999833335','science', 103,'new arenas', '2021-01-19'),
(13, 'Alexa','1234567176','9999812335','science', 102,'new arenas parking', '2021-01-20');


-- 15
insert into student(studId, studName, studAadhar,mobileNo, streams,studCourseId, address, DOB) 
values(14, 'Serena','1234567811','9199833335','science', 103,'las vegas', '2021-01-22'),
(15, 'Bliss','1234567984','9919812335','science', 102,'new mumbai', '2021-01-21');

-- 16

update student 
set marks = (case when studCourseId = 101 then 58 
	when studCourseId = 102 then 60
    when studCourseId = 103 then 70
    when studCourseId = 104 then 80
end), practical = (case when studCourseId = 101 then 'Programming' 
	when studCourseId = 102 then 'Maths'
    when studCourseId = 103 then 'Electronic'
    when studCourseId = 104 then 'Maths'
end)
where studCourseId in (101, 102, 103, 104);

savepoint A;

-- 18
delete from student 
where studName like 'S%';

savepoint B;

commit;

-- 20
rollback;
--  Yes records are in the table
-- 19
select * from student;
