/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let sum=0;
    let badSums=[]
    while(n>0){
        sum+=(n%10)**2;
        n=Math.floor(n/10);
        
        if (n===0 && sum!==1){
            if (badSums.includes(sum)){
                return false
            }
            else {
                badSums.push(sum)
                n=sum;
                sum=0
            }
        }
        if (n===0 && sum===1){
            return true;
        }
        
    }
};