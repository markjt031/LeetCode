class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        sums=[]
        sums.append(nums[0])
        for i in range(1,len(nums)):
            sums.append(sums[i-1]+nums[i])
        res=sums[k-1]*1.0/k
        for i in range(k, len(nums)):
            res=max(res, (sums[i]-sums[i-k])*1.0/k)
        return res
            