/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let numbers=[Number.MAX_VALUE, Number.MAX_VALUE]
    for (let i=0; i<nums.length; i++){
        if (nums[i]>numbers[1] && numbers[1]>numbers[0]){
            return true
        }
        if (nums[i]>numbers[0]){
            numbers[1]=nums[i]
        }
        else {
            numbers[0]=nums[i]
        }
    }
    return false
};