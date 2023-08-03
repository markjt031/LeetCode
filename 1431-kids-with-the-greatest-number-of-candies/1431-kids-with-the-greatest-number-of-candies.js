/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max=0
    let bools=[]
    for (let i=0; i<candies.length; i++){
        if (candies[i]>max){
            max=candies[i]
        }
    }
    for (let i=0; i<candies.length;i++){
        bools.push(candies[i]+extraCandies>=max)
    }
    return bools
};