function isPangram(str) {
    if (typeof (str) !== "string") {
        throw "this is not a string"
    }
    if (str.length < 26) {
        return false;
    }
    let aux = new Set(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
    for (let i = 0; i < str.length; i++) {
        aux.delete(str[i].toLowerCase());
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
} catch (exc) {
    console.log(exc);
}

try {
    console.log(isPangram(true));
} catch (exc) {
    console.log(exc);
}

try {
    console.log(isPangram("true"));
} catch (exc) {
    console.log(exc);
} finally {
    console.log("done");
}

console.log("nuovo isPangram");

function isPangramBetter(str) {
    if (typeof (str) !== "string") {
        throw "this is not a string"
    }
    if (str.length < 26) {
        return false;
    }
    str = str.toLowerCase()
    let aux = new Set();
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= "a" && str[i] <= "z") {
            aux.add(str[i]);
        }
    }
    if (aux.size === 26) {
        return true;
    } else {
        return false;
    }
}

try {
    console.log(isPangramBetter("The quick brown fox jumps over the lazy dog"));
    console.log(isPangramBetter("i topi non avevano nipoti"));
    console.log(isPangramBetter("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
    console.log(isPangramBetter(56));
} catch (exc) {
    console.log(exc);
}

try {
    console.log(isPangramBetter(true));
} catch (exc) {
    console.log(exc);
}

try {
    console.log(isPangramBetter("true"));
} catch (exc) {
    console.log(exc);
} finally {
    console.log("done");
}