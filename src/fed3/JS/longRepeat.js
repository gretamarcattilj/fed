function longRepeat(line) {
    let max = 0;
    let cont = 1;
    let current = line[0];
    for (let i = 1; i < line.length; i++) {
        if (i === line.length - 1) {
            if (line[i] === current) {
                if (max < cont + 1) {
                    max = cont + 1;
                }
            }
        }
        if (line[i] === current) {
            cont += 1;
        } else {
            current = line[i];
            if (cont > max) {
                max = cont;
            }
            cont = 1;
        }

    }
    return max;
}

console.log(longRepeat("aa"))
console.log(longRepeat('sdsffffse'));
