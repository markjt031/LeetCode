/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count={}
    for (let i=0; i<nums.length;i++){
        count[nums[i]]=count[nums[i]] || 0
        count[nums[i]]++
        if (count[nums[i]]>(Math.floor(nums.length/2))){
            return nums[i]
        }
    }
  
};