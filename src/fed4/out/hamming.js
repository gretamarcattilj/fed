function hamming(left, right) {
    if (left.length !== right.length) {
        throw "stringhe di lunghezza diversa";
    }
    let cont = 0;
    for (let i = 0; i < left.length; i++) {
        if (left[i] !== right[i]) {
            cont += 1;
        }
    }
    return cont;
}
try {
    console.log(hamming("2143896", "2233796"));
}
catch (exc) {
    console.log(exc);
}
try {
    console.log(hamming("2143896", "223379688"));
}
catch (exc) {
    console.log(exc);
}
try {
    console.log(hamming("mamma", "maria"));
}
catch (exc) {
    console.log(exc);
}
try {
    console.log(hamming("giovanni", "luca"));
}
catch (exc) {
    console.log(exc);
}
try {
    console.log(hamming("libro", "amore"));
}
catch (exc) {
    console.log(exc);
}
try {
    console.log(hamming("", ""));
}
catch (exc) {
    console.log(exc);
}
try {
    console.log(hamming("ciccio", "banana"));
}
catch (exc) {
    console.log(exc);
}
finally {
    console.log("done");
}
//# sourceMappingURL=hamming.js.map