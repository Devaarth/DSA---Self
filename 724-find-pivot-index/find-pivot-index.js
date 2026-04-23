/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
     let p=[];
        let n = nums.length;
        let count= -1;
        let ans = 0;
        p[0]=nums[0]
            for(let i=1;i<n;i++){
                p[i]=p[i-1]+nums[i];
                }
                if(p[n-1]-p[0]==0) return 0;
            for(let j=1; j<nums.length; j++){
                
                if( p[j-1] == p[n-1]-p[j]){
                        return j;
                }
            }   
            return -1;
};