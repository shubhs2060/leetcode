/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var low = 0
    var mid = 0
    var high = nums.length - 1
    

    while(mid <= high){
    if(nums[mid] == 0){
        [nums[mid],nums[low]] = [nums[low],nums[mid]]
        low++
        mid++
    }else if(nums[mid] == 1){
        mid++
    }else{
        [nums[mid],nums[high]] =[nums[high],nums[mid]]
        high--;
    }
    }


};
