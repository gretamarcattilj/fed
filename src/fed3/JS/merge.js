function merge(left, right) {
    let result = [];
    for (let i = 0, j = 0; i < left.length, j < right.length;) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    return result;
}

console.log(merge([1, 2, 3, 4], [2, 3, 5, 6, 9]));