/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (digits[digits.length-1]!==9){
        digits[digits.length-1]++;
        return digits;
    }
    else{
        let index=digits.length-1;
        while(digits[index]===9 && index!==-1){
            digits[index]=0;
            index--;
        }
        if (index===-1){
            digits.unshift(1);
        }
        else{
            digits[index]++;
        }
        return digits;    
    }
    
};