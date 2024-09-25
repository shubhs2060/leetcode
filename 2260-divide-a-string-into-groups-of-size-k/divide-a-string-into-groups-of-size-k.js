/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    sum = ""
    var res = []
    for(i =0;i< s.length;i++){
        sum = sum + s[i]
        if(sum.length == k){
            res.push(sum)
            sum = ""
        }
        if(i == s.length - 1 && s.length % k != 0){
            var lt = k - sum.length
            if(lt > 0){
                for(i =0;i< lt;i++){
                    sum = sum + fill
                }
                res.push(sum)
            }
        }
    }
    return res
};