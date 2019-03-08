DROP DATABASE IF EXISTS jobsearch;
CREATE DATABASE jobsearch;

USE jobsearch;

CREATE TABLE jobs (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
  Company varchar(255) NOT NULL UNIQUE,
  Location varchar (255) NOT NULL,
  JobTitle varchar (255) NOT NULL,
  Contact varchar (255) NOT NULL,
  Stage varchar (255) NOT NULL,
);