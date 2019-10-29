function merge(left, right) {
    result = "";

    for (let i = 0; i < left.length; i++) {
        for (let j = 0; j < right.length; j++) {
            if (left[i] <= right[j]) {
                result = left[i] + result;
            } else {
                result = right[j] + result;
            }
        }
    }
    result = Array.from(result);
    return result;
}

console.log(merge([1, 2, 3, 4], [2, 3, 5, 6, 9]));