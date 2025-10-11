function findMaxAverage(nums: number[], k: number): number {
   let windowSum =0;
   for(let i=0;i<k;i++){
    windowSum += nums[i];
   }
   let maxSum = windowSum;
   for(let j=k;j<nums.length;j++){
    windowSum += nums[j] - nums[j-k];
    maxSum = Math.max(windowSum,maxSum);
   }
   return maxSum/k;
};