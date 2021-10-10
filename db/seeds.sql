INSERT INTO department (name)
VALUES("Trust and Safety", "Trip", "QA", "NonTrip", "Social Media")

INSERT INTO Emrole (title, salary, department_id)
VAlUES("OM", 40000, 1), 
("Trust Lead", 50000, 2), ("Trust CSR", 50000, 2), 
("Trip Lead", 40000, 3). ("Trip CSR", 40000, 3), 
("NonTrip Lead", 35000, 4), ("NonTrip CSR", 35000, 4),
("Social Media Lead", 32000, 5), ("Social Media CSR", 32000, 5);


INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("Tristan", "Mitchell", 1, 1)
("Brandon", "Trahan", 2, 2, ("Brenna ", "Larson", 3, 4), 
("Jhoski", "Fermin", 4, 4), ("Jake", "Rodgers", 5, 5) ,
("Joe", "Lopez", 6, 3), ("Sav", "Ivy", 7, 2),
("Oswald", "Ruiz", 8, 2), ("Brian", "Dries", 9, 4)


select
employee.first_name, employee.last_name, role.title, role.salary, department.name, employee.first_name as manager_firstname, employee.last_name as manger_lastname from employee
join role on employee.role_id = role_id
join department on role.department_id = department_id
Left join employee as employee on employee.manager_id = employee.id; 


select * from 
department; 

select * from 
Emrole; 

 select * from 
 employee;