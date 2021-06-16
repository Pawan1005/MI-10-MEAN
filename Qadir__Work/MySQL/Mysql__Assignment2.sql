use qadirdatabase;
-- 1
create table course (
	courseId int primary key,
    courseName varchar(20) not null unique
);

-- 2
create table student (
	studId int primary key,
    studName varchar(20) not null,
    studAadhar varchar(12) unique,
    mobileNo varchar(8),
    streams varchar(10) check (streams in ('science', 'commerce')),
    studCourseId int,
    foreign key(studCourseId) references course(courseId)
);

-- 3
alter table student 
add column address varchar(30),
add column DOB date,
modify mobileNo varchar(10);

desc student;

-- 4
create table temp (
	tempId int,
    tempDesc varchar(20)
);

desc temp;

-- 5
drop table temp;

use classicmodels;

show tables;

-- 6
select * from employees 
where firstName Like 'F%';

-- 7
select * from employees 
where firstName like '______' AND lastName like '%n';

-- 8
select officeCode, postalCode, city from offices 
where country = 'USA';

-- 9
select * from employees order by firstName limit 6;

-- 10
Select * From customers
Where contactFirstName Like 'J%' And state Is Not Null;

-- 11
Select * From customers
Where contactFirstName Like 'J%' And state Is Not Null order by creditLimit desc;

-- 12
Select * From customers
Where contactFirstName Like 'J%' And state Is Not Null 
order by creditLimit desc
limit 2;
