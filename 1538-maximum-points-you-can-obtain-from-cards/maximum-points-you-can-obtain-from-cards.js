/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    
     let n = cardPoints.length;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += cardPoints[i];
  }
  if(k===n) return sum;
  l = k - 1;
  right = n - 1;
  let maxV = sum;
  while (l >= 0) {
    sum -= cardPoints[l];
    sum += cardPoints[right];
    // console.log(sum);
    maxV = Math.max(maxV, sum);

    l--;
    right--;
  }
  console.log(maxV);
  return maxV;
};