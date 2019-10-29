function countMatrixRow(matrix) {
    let sum = [];
    for (let i = 0; i < matrix.length; i++) {
        sum[i] = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            sum[i] += matrix[i][j];
        }
    }
    return sum;
}

function countMatrixCol(matrix) {
    let sum = [];
    for (let j = 0; j < matrix[0].length; j++)
        sum[j] = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum[j] += matrix[i][j];
        }
    }
    return sum;
}

function countMatrixRowStrange(matrix) {
    let sum = [];
    for (let i = 0; i < matrix.length; i++) {
        sum[i] = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            if (typeof (matrix[i][j]) !== "number" || isNaN(matrix[i][j]) === true) {
                continue;
            } else {
                sum[i] += matrix[i][j];
            }
        }
    }
    return sum;
}

function countMatrixColStrange(matrix) {
    let sum = [];
    m = 0;
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].length > m) {
            m = matrix[i].length;
        }
    }
    for (let i = 0; i < m; i++) {
        sum[i] = 0;
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (typeof (matrix[i][j]) !== "number" || isNaN(matrix[i][j]) === true) {
                continue;
            } else {
                sum[j] += matrix[i][j];
            }
        }
    }
    return sum;
}

let matrice = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 8],
    [7, 6, 5, 4, 3]
];

let matrice2 = [
    [1, 2, 3],
    [6, undefined, 8, NaN, 8],
    [7, 6, 5, "4", 3, "ciao"]
];

console.log(countMatrixRow(matrice));
console.log(countMatrixCol(matrice));

console.log(countMatrixRowStrange(matrice2));
console.log(countMatrixColStrange(matrice2));

