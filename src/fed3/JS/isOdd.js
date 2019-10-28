function isOdd(value) {
    if (typeof (value) === "number") {
        if (value >= 0 && value % 2 === 1) {
            return true;
        } else if (value >= 0 && value % 2 === 0) {
            return false;
        } else {
            return undefined;
        }
    } else {
        return undefined;
    }
}

console.log(isOdd(2) === false);
console.log(isOdd(3) === true);
console.log(isOdd(0.2) === undefined);
console.log(isOdd(-2) === undefined);
console.log(isOdd(123) === true);
console.log(isOdd("2") === undefined);
console.log(isOdd(" ") === undefined);
console.log(isOdd(-0.13) === undefined);
console.log(isOdd(0) === false);