function sumOfIntervals(intervals) {
    let sum = 0;
    intervals.sort((a, b) => {
        if (a[0] > b[0]) {
            return 1;
        }
        else if (a[0] < b[0]) {
            return -1;
        }
        else {
            if (a[1] > b[1]) {
                return 1;
            }
            else if (a[1] < b[1]) {
                return -1;
            }
            else {
                return 0;
            }
        }
    });
    let remember = intervals[0][0];
    let rememberMax = intervals[0][1];
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] >= remember) {
            sum += intervals[i][1] - intervals[i][0];
            remember = intervals[i][1];
            rememberMax = intervals[i][1];
        }
        else {
            if (intervals[i][1] <= rememberMax) {
                continue;
            }
            else {
                sum += intervals[i][1] - remember;
                remember = intervals[i][1];
                rememberMax = intervals[i][1];
            }
        }
    }
    return sum;
}
console.log(sumOfIntervals([[1, 10], [2, 5]]));
console.log(sumOfIntervals([[1, 5], [1, 1]]));
console.log(sumOfIntervals([[1, 5], [10, 15], [-1, 1]]));
console.log(sumOfIntervals([[1, 5], [10, 15], [-1, 3]]));
function josephusSurvivor(n, k) {
    let i = 1;
    for (let j = 1; j <= n; j++)
        i = (i + k) % j;
    return i + 1;
}
console.log(josephusSurvivor(11, 19));
console.log(josephusSurvivor(7, 3));
//# sourceMappingURL=proveCodewars3.js.map