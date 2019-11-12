"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function howMuchILoveYou(petals) {
    let aux = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    let n = petals;
    while (!(1 <= n && n <= 6)) {
        if (n > 6) {
            n = n - 6;
        }
    }
    return aux[n - 1];
}
console.log(howMuchILoveYou(7), "I love you", "Number of petals can be higher than 6");
console.log(howMuchILoveYou(3), "a lot");
console.log(howMuchILoveYou(6), "not at all");
function bmi(weight, height) {
    let bmi = weight / Math.pow(height, 2);
    if (bmi <= 18.5) {
        return "Underweight";
    }
    else if (bmi <= 25.0) {
        return "Normal";
    }
    else if (bmi <= 30.0) {
        return "Overweight";
    }
    else {
        return "Obese";
    }
}
exports.bmi = bmi;
console.log(bmi(80, 1.80), "Normal");
function partsSums(ls) {
    let n = ls.length;
    let result = Array(n + 1).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j >= 0; j--) {
            result[j] += ls[i];
        }
    }
    return result;
}
console.log(partsSums([0, 1, 3, 6, 10]));
function partsSums2(ls) {
    let n = ls.length;
    let result = Array(n + 1).fill(0);
    let sum = 0;
    for (let i = n - 1; i >= 0; i--) {
        sum += ls[i];
        result[i] = sum;
    }
    return result;
}
console.log(partsSums2([0, 1, 3, 6, 10]));
function addLetters(...letters) {
    let result = 0;
    let aux = "abcdefghijklmnopqrstuvwxyz";
    if (letters.length === 0) {
        return "z";
    }
    for (let i = 0; i < letters.length; i++) {
        result += aux.indexOf(letters[i]) + 1;
    }
    if (result > 26) {
        result %= 26;
    }
    if (result === 0) {
        return "z";
    }
    return aux[result - 1];
}
console.log(addLetters("q", "v", "p", "n", "x", "c", "h", "j", "p"));
console.log(addLetters("h", "v", "q", "u", "i", "n", "w", "q", "g"));
console.log(addLetters('z'));
console.log(addLetters('y', 'c', 'b'));
function seven(m) {
    let aux = m;
    let cont = 0;
    while (m >= 99) {
        aux = m % 10;
        m = Math.floor(m / 10);
        m = m - (2 * aux);
        cont += 1;
    }
    return [m, cont];
}
console.log(seven(477557101), [28, 7]);
function order(words) {
    let ar = words.split(" ");
    let cont = 0;
    let result = Array(ar.length);
    let result2 = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i] >= "0" && words[i] <= "9") {
            result[Number(words[i]) - 1] = ar[cont];
            cont += 1;
        }
    }
    result2 = result.join(" ");
    return result2;
}
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
let nbYear = ((p0, percent, aug, p) => {
    let cont = 0;
    while (p0 < p) {
        p0 = p0 + p0 * (percent / 100) + aug;
        cont += 1;
    }
    return cont;
});
console.log(nbYear(1500, 5, 100, 5000));
function comp(a1, a2) {
    if (a1 == null || b1 == null || a1.length !== a2.length) {
        return false;
    }
    a1.sort((a, b) => {
        if (a > b) {
            return 1;
        }
        else if (a < b) {
            return -1;
        }
        else {
            return 0;
        }
    });
    a2.sort((a, b) => {
        if (a > b) {
            return 1;
        }
        else if (a < b) {
            return -1;
        }
        else {
            return 0;
        }
    });
    for (let i = 0; i < a1.length; i++) {
        if (a2[i] !== Math.pow(a1[i], 2)) {
            return false;
        }
    }
    return true;
}
function gps(s, x) {
    // manca controllo array vuoto
    for (let i = 0; i < x.length - 1; i++) {
        x[i] = (x[i + 1] - x[i]) * 3600 / s;
    }
    return Math.floor(Math.max(...x));
}
console.log(gps(20, []));
console.log(gps(20, [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61]));
console.log(gps(20, [0.0, 0.18, 0.36, 0.54, 0.72, 1.05, 1.26, 1.47, 1.92, 2.16, 2.4, 2.64, 2.88, 3.12, 3.36, 3.6, 3.84]));
function SeriesSum(n) {
    let result = 0;
    for (let i = 0; i < n; i++) {
        result += 1 / (1 + 3 * i);
    }
    return result.toString();
}
function newAvg(arr, newavg) {
    let sum = 0;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    result = Math.ceil(newavg * (arr.length + 1) - sum);
    if (result <= 0) {
        throw "errore";
    }
}
console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 90));
function nbDig(n, d) {
    let aux = Array(n + 1);
    let str = "";
    let cont = 0;
    for (let i = 0; i <= n; i++) {
        aux[i] = Math.pow(i, 2);
    }
    str = aux.join("");
    for (let i = 0; i < str.length; i++) {
        if (str[i] == d.toString()) {
            cont += 1;
        }
    }
    return cont;
}
console.log(nbDig(10, 1));
function dateNbDays(a0, a, p) {
    p = p / 36000;
    let aux = 0;
    let date = Array(3);
    let cont = 0;
    let result = "";
    while (a0 < a) {
        a0 = a0 + a0 * p;
        cont += 1;
    }
    aux = Math.floor(cont / 360);
    date[0] = (2016 + aux).toString();
    cont -= (aux * 365);
    aux = Math.floor(cont / 30);
    date[1] = (aux + 1).toString();
    switch (aux) {
        case 0: break;
        case 1: {
            cont -= 31;
            break;
        }
        case 2: {
            cont -= 59;
            break;
        }
        case 3: {
            cont -= 90;
            break;
        }
        case 4: {
            cont -= 120;
            break;
        }
        case 5: {
            cont -= 151;
            break;
        }
        case 6: {
            cont -= 181;
            break;
        }
        case 7: {
            cont -= 212;
            break;
        }
        case 8: {
            cont -= 243;
            break;
        }
        case 9: {
            cont -= 273;
            break;
        }
        case 10: {
            cont -= 304;
            break;
        }
        case 11: {
            cont -= 334;
            break;
        }
    }
    date[2] = (1 + cont).toString();
    result = date.join("-");
    return result;
}
console.log(dateNbDays(4281, 5087, 2));
function foldArray(array, runs) {
    let aux = array;
    for (let i = 0; i < runs; i++) {
        aux = Array(Math.ceil(array.length / 2));
        for (let j = 0; j < aux.length; j++) {
            aux[j] = array[j];
        }
        for (let j = 0; j < Math.floor(array.length / 2); j++) {
            if (j === array.length - j - 1) {
                aux[j] = array[j];
            }
            else {
                aux[j] = array[j] + array[array.length - j - 1];
            }
        }
        array = aux;
    }
    return aux;
}
console.log(foldArray([1, 2, 3, 4, 5, 6], 2));
//# sourceMappingURL=proveCodewars.js.map