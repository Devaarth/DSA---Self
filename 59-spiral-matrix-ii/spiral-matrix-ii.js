/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const res = Array.from({ length: n }, () => Array(n).fill(undefined));
    let r = 0, c = 0;
    let p = 1;
    while (n >1) {
        for (let i = 1; i < n; i++) {
            res[r][c] = p;
            c++;
            p++;
        }

        for (let i = 1; i < n; i++) {
            res[r][c] = p;
            r++;
            p++;

        }
        for (let i = 1; i < n; i++) {
            res[r][c] = p;
            c--;
            p++;
        }
        for (let i = 1; i < n; i++) {
            res[r][c] = p;
            r--
            p++;
        }
        r++;
        c++;
        n-=2;
    }
        if (n === 1) {
            res[r][c] = p;
        }
    console.log(res);
    return res

};