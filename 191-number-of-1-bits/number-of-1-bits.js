/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
     let binaryVal = n.toString(2);
    let count = 0;
    let result = [...binaryVal]
    for(let i=0;i<result.length;i++){
        if(result[i]=== '1')
            count++;
    }
    return count;
};