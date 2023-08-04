/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let noWhiteSpace=s.trim()
    let array=noWhiteSpace.split(" ")
    let output=[]
    for (let i=array.length-1; i>=0; i--){
        if (array[i].trim().length>0){
            output.push(array[i].trim())
        }
    }
    return output.join(' ')
};
