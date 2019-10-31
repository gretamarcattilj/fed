function nonUniqueElements(data) {
    let aux = {};
    let result = [];
    for (let i = 0; i < data.length; i++) {
        if (aux[data[i]] === undefined) {
            aux[data[i]] = 1;
        } else {
            aux[data[i]] += 1;
        }
    }
    for (let i = 0; i < data.length; i++) {
        if (aux[data[i]] !== 1) {
            result.push(data[i]);
        }
    }
    return result;
}

console.log(nonUniqueElements([1, 2, 3, 1, 3]));
console.log(nonUniqueElements([10, 9, 10, 10, 9, 8]));