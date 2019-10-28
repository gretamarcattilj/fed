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
    for (let i = 0; i < matrix.length; i++) {
        sum[i] = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            sum[j] += matrix[i][j];
        }
    }
    return sum;
}

let matrice = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 8],
    [7, 6, 5, 4, 3]
];

console.log(countMatrixRow(matrice));
console.log(countMatrixCol(matrice));


