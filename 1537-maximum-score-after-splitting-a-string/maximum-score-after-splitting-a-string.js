/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    s= s.split("")
    var right1 = s.filter(s => s == "1").length
    left0 = 0
    var max = 0
    for(i =0; i< s.length - 1;i++){
        left0 = left0 + (s[i] == 0 ? 1 : 0)
        right1 =  right1 - (s[i] == 1 ? 1 : 0)

        max = Math.max(left0 + right1,max)
    }
    return max

};