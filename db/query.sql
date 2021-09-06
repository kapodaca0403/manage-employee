SELECT * 
FROM employee
JOIN department ON employee.role_id = Emrole.id;  

SELECT * 
FROM employee
JOIN department ON employee.employee = employee.id; 

SELECT * 
FROM Emrole
JOIN department ON Emrole.department = department.id; 