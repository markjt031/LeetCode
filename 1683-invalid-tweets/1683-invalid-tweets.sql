/* Write your T-SQL query statement below */
SELECT tweet_id
FROM TWEETS
WHERE LEN(content)>15;