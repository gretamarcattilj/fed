// SCHIFO

function countNeighbours(data, row, col) {
    let cont = 0;
    if (row - 1 >= 0 && row + 1 <= data.length - 1 && col - 1 >= 0 && col + 1 <= data[0].length - 1) {
        for (let i = row - 1; i <= row + 1; i++) {
            for (let j = col - 1; j <= col + 1; j++) {
                if (i === row && j === col) {
                    continue;
                } else {
                    if (data[i][j] === 1) {
                        cont += 1;
                    }
                }
            }
        }
    } else if (row === 0 && col === 0) {
        for (let i = row; i <= row + 1; i++) {
            for (let j = col; j <= col + 1; j++) {
                if (i === row && j === col) {
                    continue;
                } else {
                    if (data[i][j] === 1) {
                        cont += 1;
                    }
                }
            }
        }
    } else if (row === 0 && col === data[0].length - 1) {
        for (let i = row; i <= row + 1; i++) {
            for (let j = col - 1; j <= col; j++) {
                if (i === row && j === col) {
                    continue;
                } else {
                    if (data[i][j] === 1) {
                        cont += 1;
                    }
                }
            }
        }
    } else if (row === 0) {
        for (let i = row; i <= row + 1; i++) {
            for (let j = col - 1; j <= col + 1; j++) {
                if (i === row && j === col) {
                    continue;
                } else {
                    if (data[i][j] === 1) {
                        cont += 1;
                    }
                }
            }
        }
    } else if (row === data.length && col === 0) {
        for (let i = row - 1; i <= row; i++) {
            for (let j = col; j <= col + 1; j++) {
                if (i === row && j === col) {
                    continue;
                } else {
                    if (data[i][j] === 1) {
                        cont += 1;
                    }
                }
            }
        }
    } else if (row === data.length && col === data[0].length - 1) {
        for (let i = row - 1; i <= row; i++) {
            for (let j = col - 1; j <= col; j++) {
                if (i === row && j === col) {
                    continue;
                } else {
                    if (data[i][j] === 1) {
                        cont += 1;
                    }
                }
            }
        }
    } else if (row === data.length) {
        for (let i = row - 1; i <= row; i++) {
            for (let j = col - 1; j <= col + 1; j++) {
                if (i === row && j === col) {
                    continue;
                } else {
                    if (data[i][j] === 1) {
                        cont += 1;
                    }
                }
            }
        }
    } else if (col === 0) {
        for (let i = row - 1; i <= row + 1; i++) {
            for (let j = col; j <= col + 1; j++) {
                if (i === row && j === col) {
                    continue;
                } else {
                    if (data[i][j] === 1) {
                        cont += 1;
                    }
                }
            }
        }
    } else if (col === data[0].length - 1) {
        for (let i = row - 1; i <= row + 1; i++) {
            for (let j = col - 1; j <= col; j++) {
                if (i === row && j === col) {
                    continue;
                } else {
                    if (data[i][j] === 1) {
                        cont += 1;
                    }
                }
            }
        }
    }
    return cont;
}

console.log(countNeighbours([[1, 1, 1], [1, 1, 1], [1, 1, 1]], 1, 2));
console.log(countNeighbours([
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0]], 1, 2));