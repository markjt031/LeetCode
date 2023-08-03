/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let i=0
    if (n===0){
        return true
    }
    while (i<flowerbed.length){
        if (flowerbed[i]===1) {
            i+=2
        }
        else{
            if (flowerbed[i+1]!==1){
                n--
                i+=2
            }
            else{
                i++
            }
        }
        if (n===0){
            return true
        }
        
    }
    return false
};