/* Write your T-SQL query statement below */
SELECT unique_id, name FROM Employees e FULL JOIN EmployeeUNI u ON e.id=u.id WHERE name IS NOT NULL;