DROP DATABASE IF EXISTS employee_db; 
CREATE DATABASE employee_db; 

USE employee_db; 

DROP TABLE IF EXISTS employee;
CREATE TABLE employee( 
    id NOT NULL INT AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL, 
    role_id INT NOT NULL INDEX role_ind (role_id) CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES Emrole(id) ON DELETE CASCADE, 
    manager_id INT INDEX manager_ind (manager_id) CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL 
);
DROP TABLE IF EXISTS Emrole; 
CREATE TABLE Emrole( 
    id NOT NULL INT AUTO_INCREMENT PRIMARY KEY, 
    title VARCHAR(30) NOT NULL UNIQUE, 
    salary NOT NULL DECIMAL, 
    department_id NOT NULL INT INDEX department_ind (department_id) CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);
DROP TABLE IF EXISTS department; 
CREATE TABLE department(
    id NOT NULL INT AUTO_INCREMENT PRIMARY KEY, 
    depName VARCHAR(30) NOT NULL UNIQUE 
);