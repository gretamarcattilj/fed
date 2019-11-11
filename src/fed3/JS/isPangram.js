function isPangram(str) {
    if (typeof (str) !== "string") {
        return undefined;
    }
    if (str.length < 21) {
        return false;
    }
    let aux = "abcdefghilmnopqrstuvz"
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

console.log(isPangram("Qui gli ampi stronzi, bove, defechi?"));
console.log(isPangram("i topi non avevano nipoti"));
console.log(isPangram("Pranzo d'acqua fa volti sghembi"));
console.log(isPangram("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
console.log(isPangram(56));