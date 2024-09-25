/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var tb = {}
    var sb = {}
    for(i =0;i< s.length;i++){
        sb[s[i]] == undefined ? sb[s[i]] = 1 : sb[s[i]]++
    }
     for(i =0;i< t.length;i++){
        tb[t[i]] == undefined ? tb[t[i]] = 1 : tb[t[i]]++
    }
    keys = Object.keys(tb)
    for(i =0;i< keys.length;i++){
        if(sb[keys[i]] == undefined || sb[keys[i]] != tb[keys[i]]) return keys[i]
    }
};