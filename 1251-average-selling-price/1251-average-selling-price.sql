/* Write your T-SQL query statement below */
SELECT u.product_id, ROUND(CAST(SUM(u.units * p.price) as FLOAT) /SUM(units),2) AS average_price
FROM UnitsSold u LEFT JOIN Prices p 
ON p.product_id=u.product_id AND u.purchase_date BETWEEN p.start_date AND p.end_date
GROUP BY u.product_id;