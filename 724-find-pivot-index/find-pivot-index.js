/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    var sum = nums.reduce((a,b) => a + b,0)
    var leftSum = 0
    for(i=0;i<nums.length;i++){

        rightSum = sum - (nums[i] + leftSum)

        if(leftSum == rightSum){
            return i
        }
        leftSum = leftSum + nums[i]
    }
    return -1
};