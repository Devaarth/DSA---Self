/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

        while(right>left){
            let total = numbers[left]+ numbers[right]
            if( total === target){
                return [left+1, right+1];
            }
            if(total > target){
                right--;
            }else{
                left++;
            }
        }
};