/* Write your T-SQL query statement below */
SELECT m.name FROM Employee m INNER JOIN Employee e2 ON m.id=e2.managerId
GROUP BY m.name, m.id
HAVING COUNT(e2.id)>=5;

