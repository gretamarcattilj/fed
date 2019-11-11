function isPangram(str) {
    if (typeof (str) !== "string") {
        throw "this is not a string"
    }
    if (str.length < 26) {
        return false;
    }
    let aux = new Set(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
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

try {
    console.log(isPangram("The quick brown fox jumps over the lazy dog"));
    console.log(isPangram("i topi non avevano nipoti"));
    console.log(isPangram("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
    console.log(isPangram(56));
    console.log(isPangram(true));
    console.log(isPangram("true"));
} catch (exc) {
    console.log(exc);
} finally {
    console.log("done");
}