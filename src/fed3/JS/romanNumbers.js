// da rivedere!!!

function romanNumbers(str) {
    let aux = 0;
    let result = 0;
    let numeri = { "I": { "prec": 7, "valore": 1 }, "V": { "prec": 6, "valore": 5 }, "X": { "prec": 5, "valore": 10 }, "L": { "prec": 4, "valore": 50 }, "C": { "prec": 3, "valore": 100 }, "D": { "prec": 2, "valore": 500 }, "M": { "prec": 1, "valore": 1000 } };
    let i = str.length - 1;
    while (i > 0) {
        if (numeri[str[i]].prec >= numeri[str[i - 1]].prec) {
            result += numeri[str[i]].valore;
            i--;
        } else {
            aux = numeri[str[i]].valore - numeri[str[i - 1]].valore;
            result += aux;
            i -= 2;
        }
    }
    if (i === 0 && numeri[str[i]].prec > numeri[str[i + 1]].prec) {
        return result;
    } else {
        result += numeri[str[i]].valore;
        return result;
    }
}

console.log(romanNumbers('MMMCMXCIX'));