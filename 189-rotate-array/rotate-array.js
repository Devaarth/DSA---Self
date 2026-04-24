/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
     let n = nums.length;
  k=k%n;
  let result1 = reverse(0, n - 1, nums);
  let result2 = reverse(0, k - 1, result1);
  let finalResult = reverse(k, n - 1, result2);
  console.log(finalResult);
  return finalResult;
}

function reverse(left, right, A) {
  while (left < right) {
    let temp = A[left];
    A[left] = A[right];
    A[right] = temp;
    left++;
    right--;
  }
  return A;
}
