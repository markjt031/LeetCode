/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const string=str1.length>str2.length ? str2 : str1
    for (let i=string.length; i>=0; i--){
        if (string.length % i !=0){
            continue
        }
        let prefix=string.substring(0,i)
        if (divideString(str1, prefix) && divideString(str2, prefix)){
            return prefix
        }
        
    }
    return ""
};

const divideString=(str, prefix)=>{
    if (str.length % prefix.length !==0){
        return false
    }
    for (let i=0; i<str.length; i++){
        if (str[i]!==prefix[i%prefix.length]){
            return false
        }
    }
    return true
}