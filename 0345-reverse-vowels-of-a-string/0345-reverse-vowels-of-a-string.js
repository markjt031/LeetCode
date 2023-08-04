/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let i=s.length-1
    let j=0
    let array=s.split("")
    let vowels=new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    while (j<i){
        if (vowels.has(array[j]) && vowels.has(array[i])){
            array[j]=s[i]
            array[i]=s[j]
            i--
            j++
        }
        else if (vowels.has(s[j]) && !vowels.has(s[i])){
            i--
        }
        else if (vowels.has(s[i]) && !vowels.has(s[j])){
            j++
        }
        else{
            i--
            j++
        }
    }
    return array.join('')
};