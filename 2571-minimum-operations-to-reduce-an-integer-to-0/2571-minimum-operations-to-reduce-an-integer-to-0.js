/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
    if (Math.log2(n)%1===0){
        return 1;
    }
    return (Math.min(minOperations(2**(Math.ceil(Math.log2(n)))-n), minOperations(n-2**(Math.floor(Math.log2(n))))))+1;
};