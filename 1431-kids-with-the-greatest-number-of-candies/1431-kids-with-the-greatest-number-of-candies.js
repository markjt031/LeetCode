/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let moreCandy=candies.map((candy)=>{
        return candy+extraCandies
    })
    let max=0
    let bools=[]
    for (let i=0; i<candies.length; i++){
        if (candies[i]>max){
            max=candies[i]
        }
    }
    for (let i=0; i<moreCandy.length;i++){
        bools.push(moreCandy[i]>=max)
    }
    return bools
};