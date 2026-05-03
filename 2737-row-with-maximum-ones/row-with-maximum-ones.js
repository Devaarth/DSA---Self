/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
      let r = mat.length;
    let c = mat[0].length;
    let count = 0;
    let res = -1;
    let final = [];
    let finalCount = 0;
    let index = 0;
    for (let i = 0; i < r; i++) {
        count = 0;
        for (let j = 0; j < c; j++) {
            if (mat[i][j] === 1) {
                count++;
            }
        }
        if (count > res) {
            index = i;
            finalCount = count;
            res = count;
        }
    }
    final[0] = index;
    final[1] = finalCount;
    console.log(final);
    return final;

};