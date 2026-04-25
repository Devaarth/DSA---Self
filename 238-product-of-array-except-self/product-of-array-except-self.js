/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
          let p = [];
  let n = nums.length;
  p[0] = nums[0];
  let res = [];
  for (let i = 1; i < n; i++) {
    p[i] = p[i - 1] * nums[i];
  }
  // console.log(p);
  let s = [];
  s[n - 1] = nums[n - 1];
  for (let j = n - 2; j >= 0; j--) {
    s[j] = s[j + 1] * nums[j];
  }
  // console.log(s);
  res[0] = s[1];
  for (let k = 1; k < n; k++) {
    if (k + 1 >= n) res[k] = p[k - 1];
    else res[k] = p[k - 1] * s[k + 1];
  }
  return res;
  // console.log(res);
};