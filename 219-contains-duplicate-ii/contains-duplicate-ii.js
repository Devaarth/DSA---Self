/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
      let vMap = new Map();
        for(let i=0;i<nums.length;i++){
            if(vMap.has(nums[i]) && i-vMap.get(nums[i])<=k) return true;
            vMap.set(nums[i], i);
        }
        return false;
};