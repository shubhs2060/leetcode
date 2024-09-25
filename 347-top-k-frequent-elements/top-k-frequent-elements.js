/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    var sb = {}
    for(i =0;i< nums.length;i++){
        sb[nums[i]] == undefined ? sb[nums[i]] = 1 : sb[nums[i]]++
    }
    var keys = Object.entries(sb).sort((a, b) => b[1] - a[1]);
    
    var res = []
    for(i=0;i<k;i++){
        res.push(parseInt(keys[i][0]))
    }
    console.log(sb,res,keys)
    if(res.length == 0) return nums
    return res;
};