/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let nc = matrix[0].length;
    let nr = matrix.length;
    let l = 0;
    let c = nc-1;

    while(l < nr && c>=0){
        if(matrix[l][c]>target){
          c--;
        }else if(matrix[l][c]<target){
            l++;
        }else{
            return true
        }
    }
    return false;
};