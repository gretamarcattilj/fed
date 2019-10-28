function findPosition(data, value) {
    if (isNaN(value) === true) {
        for (let i = 0; i < data.length; i++) {
            if (isNaN(data[i])) {
                return i;
            } else {
                continue;
            }
        }
    } else {
        for (let i = 0; i < data.length; i++) {
            if (data[i] === value) {
                return i;
            }
        }
    }
    return -1;
}

console.log(findPosition([NaN, 1], NaN) === 0); //0
console.log(findPosition([NaN, 1, NaN, NaN], NaN) === 0); //0
console.log(findPosition([NaN, 1], 1) === 1); //1
console.log(findPosition([0, 1, 2, 3], 5) === -1); //-1
console.log(findPosition([0, 1, 2, 3], 2) === 2); //2
console.log(findPosition([1, 1, 1], 1) === 0); //0
console.log(findPosition(["1", NaN, 1], 1) === 2); //2
console.log(findPosition(["1", NaN], 1) === -1); //-1
console.log(findPosition([], 57) === -1); //-1


function findPositionLast(data, value) {
    let ind = -1;
    if (isNaN(value) === true) {
        for (let i = 0; i < data.length; i++) {
            if (isNaN(data[i])) {
                ind = i;
            } else {
                continue;
            }
        }
    } else {
        for (let i = 0; i < data.length; i++) {
            if (data[i] === value) {
                ind = i;
            }
        }
    }
    return ind;
}

console.log("esercizio successivo")
console.log(findPositionLast([NaN, 1], NaN) === 0); //0
console.log(findPositionLast([NaN, 1, NaN, NaN], NaN) === 3); //3
console.log(findPositionLast([NaN, 1], 1) === 1); //1
console.log(findPositionLast([0, 1, 2, 3], 5) === -1); //-1
console.log(findPositionLast([0, 1, 2, 3], 2) === 2); //2
console.log(findPositionLast([1, 1, 1], 1) === 2); //2
console.log(findPositionLast(["1", NaN, 1], 1) === 2); //2
console.log(findPositionLast(["1", NaN], 1) === -1); //-1
console.log(findPositionLast([], 57) === -1); //-1
console.log(findPositionLast([2, 5, 7, 4, 2, 9, 10, 2], 2) === 7); //7
console.log(findPositionLast([2, 5, 7, 4, 2, 9, 10, 2], 10) === 6); //6
