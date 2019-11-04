function countNeighbours(data, row, col) {
    let cont = 0;
    for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
            if (i < 0 || j < 0 || i >= data.length || j >= data[0].length || (i === row && j === col)) {
                continue;
            } else {
                if (data[i][j] === 1) {
                    cont += 1;
                }
            }
        }
    }
    return cont;
}

console.log(countNeighbours([[1, 0, 0, 1, 0],
[0, 1, 0, 0, 0],
[0, 0, 1, 0, 1],
[1, 0, 0, 0, 0],
[0, 0, 1, 0, 0]], 1, 2));