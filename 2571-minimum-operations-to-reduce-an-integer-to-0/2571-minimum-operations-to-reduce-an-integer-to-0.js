/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
    if (Math.log2(n)%1===0){
        return 1;
    }
    let smallPower=Math.floor(Math.log2(n));
    let largePower=Math.ceil(Math.log2(n));
    return (Math.min(minOperations(2**largePower-n), minOperations(n-2**smallPower)))+1;
};