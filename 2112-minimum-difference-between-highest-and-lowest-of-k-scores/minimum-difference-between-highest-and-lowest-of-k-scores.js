/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
      let sa = nums.sort((a, b) => a - b);
      if(nums.length == 1) return 0;
  let n = sa.length;
  let diff;
  let l = 0;
  let r = k-1
  let res = Number.MAX_VALUE
  while (r < n) {
    diff = sa[r] - sa[l];
    r++;
    l++;
    res = Math.min(diff, res);
  }
  console.log(res);
  return res;
};