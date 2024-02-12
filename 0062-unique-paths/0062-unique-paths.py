import math
class Solution(object):
    def uniquePaths(self, m, n):
        """
        :type m: int
        :type n: int
        :rtype: int
        """
        if m <= 0 or n <= 0:
            return 0
        elif m == 1 or n == 1:
            return 1
        else:
            grid = [[0 for i in range(n)] for j in range(m)]
            grid[0][0] = 1
            for i in range(m):
                for j in range(n):
                    if i > 0:
                        grid[i][j] += grid[i-1][j]
                    if j > 0:
                        grid[i][j] += grid[i][j-1]
            return grid[m-1][n-1]