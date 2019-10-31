function median(data) {
    let result;
    data = data.sort(
        (a, b) => {
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            } else {
                return 0;
            }
        }
    )
    if (data.length % 2 === 1) {
        result = data[Math.floor(data.length / 2)];
    } else {
        let i = Math.floor(data.length / 2) - 1;
        result = (data[i] + data[i + 1]) / 2;
    }
    return result;
}

console.log(median([1, 2, 3, 4, 5]));
console.log(median([3, 6, 20, 99, 10, 15]));