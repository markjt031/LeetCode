/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
   let left=[1]
   let right=[1]
   let j=nums.length-1
   let prev=1
   let last=1
   for (let i=0; i<nums.length-1; i++){
       if (i===0){
           prev=nums[i]
           left.push(prev)
       }
       else {
           left.push(prev*nums[i])
           prev=prev*nums[i]
       }
       if (j===nums.length-1){
           last=nums[j]
           right.unshift(last)
           j--
       }
       else {
           right.unshift(last*nums[j])
           last=last*nums[j]
           j--
       }
   }
   let output=[]
   for (let i=0; i<nums.length; i++){
       output.push(left[i]*right[i])
   }
   return output
    
    
};