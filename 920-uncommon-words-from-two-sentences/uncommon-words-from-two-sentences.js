/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    var s1b = {}
    s1 = s1.split(" ")
    s2 = s2.split(" ")
    var res = []
    var s2b = {}
    for(i=0;i<s1.length;i++){
        if(s1b[s1[i]]){
            s1b[s1[i]]++
        }else{
            s1b[s1[i]] = 1
        }
    }
    for(i=0;i<s2.length;i++){
        if(s2b[s2[i]]){
            s2b[s2[i]]++
        }else{
            s2b[s2[i]] = 1
        }
    }
    Object.keys(s1b).forEach(key => {
        if(s2b[key] == undefined && s1b[key] == 1){
            res.push(key)
        }
    })
      Object.keys(s2b).forEach(key => {
        if(s1b[key] == undefined && s2b[key] == 1){
            res.push(key)
        }
    })
    return res
};