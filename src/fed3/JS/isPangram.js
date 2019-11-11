function isPangram(str) {
    if (typeof (str) !== "string") {
        return undefined;
    }
    if (str.length < 21) {
        return false;
    }
    let aux = "abcdefghijklmnopqrstuvwxyz"
    let indAux = 0;
    for (let i = 0; i < str.length; i++) {
        indAux = aux.indexOf(str[i].toLowerCase());
        if (indAux === -1) {
            continue;
        } else {
            aux = aux.replace(str[i].toLowerCase(), "0");
        }
    }
    for (let i = 0; i < aux.length; i++) {
        if (aux[i] !== "0") {
            return false;
        }
    }
    return true;
}

function isPangram(str) {
    if (typeof (str) !== "string") {
        return undefined;
    }
    if (str.length < 21) {
        return false;
    }
    let aux =new Set(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
    for (let i = 0; i < str.length; i++) {
        if (aux.has(str[i].toLowerCase())) {
            aux.delete(str[i].toLowerCase())
        } else {
            continue;
        }
    }
    if (aux.size === 0) {
        return true;
    } else {
        return false;
    }

}


console.log(isPangram("The quick brown fox jumps over the lazy dog") === true);
console.log(isPangram("i topi non avevano nipoti") === false);
console.log(isPangram("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") === false);
console.log(isPangram(56) === undefined);
console.log(isPangram(true) === undefined);
console.log(isPangram("true") === false);