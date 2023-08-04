/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let array=s.trim().split(" ")
    let output=[]
    for (let i=array.length-1; i>=0; i--){
        if (array[i].trim().length>0){
            output.push(array[i])
        }
    }
    return output.join(' ')
};
