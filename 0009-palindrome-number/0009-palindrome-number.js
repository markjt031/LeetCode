/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num=x;
    const digits=[];
    let output=false;
    if (x<0){
        digits.push("-");
        num=(-1*x)
    }
    else if (x===0){
        digits.push(0)
        return true;
    }
    let placeValue=Math.floor(Math.log10(num));
    
    for (let i=placeValue; i>=0; i--){
        let digit=Math.floor(num/Math.pow(10, i))
        digits.push(digit)
        num=num-(digit*Math.pow(10, i));
    }
    while (digits.length>0){
        if (digits.length>1){
            if(digits.shift()===digits.pop()){
                output=true;
            }
            else{
                output=false;
                break;
            }
        }
        else if (digits.length===1){
            output=true;
            break;
        }
    }
    return output;
};