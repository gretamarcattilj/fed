function weakPoint(matrix) {
    let sommaRow = [];
    let sommaCol = [];
    for (let i = 0; i < matrix.length; i++) {
        sommaRow[i] = 0;
        for (let j = 0; j < matrix[0].length; j++) {
            if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length) {
                continue;
            } else {
                sommaRow[i] += matrix[i][j];
            }
        }
    }
    for (let j = 0; j < matrix[0].length; j++)
        sommaCol[j] = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length) {
                continue;
            } else {
                sommaCol[j] += matrix[i][j];
            }
        }
    }
    let resultI = 0;
    let minRow = sommaRow[0];
    for (let i = 1; i < sommaRow.length; i++) {
        if (sommaRow[i] < minRow) {
            minRow = sommaRow[i];
            resultI = i;

        }
    }
    let resultJ = 0;
    let minCol = sommaCol[0];
    for (let i = 1; i < sommaCol.length; i++) {
        if (sommaCol[i] < minCol) {
            minCol = sommaCol[i];
            resultJ = i;

        }
    }
    return [resultI, resultJ];
}

console.log(weakPoint([[1,1,1],[1,1,1],[1,1,1]]));
console.log(weakPoint([[7, 2, 7, 2, 8],
    [2, 9, 4, 1, 7],
    [3, 8, 6, 2, 4],
    [2, 5, 2, 9, 1],
    [6, 6, 5, 4, 5]]
    ));
    