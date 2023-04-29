/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start=0
    let end=nums.length-1
    while(start<=end){
        let middle=Math.floor((start+end)/2)
        if (target<nums[middle]){
            start=start
            end=middle-1;
        }
        if (target>nums[middle]){
            start=middle+1;
            end=end
        }
        if (target===nums[middle]){
            return middle;
        }
        if (start>end && nums[middle]<target){
            return middle+1
        }
        else if (start>end && nums[middle]>target){
            return middle
        }
    }
    
};