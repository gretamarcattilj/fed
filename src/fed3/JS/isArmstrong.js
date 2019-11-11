function isArmstrong(value) {
    if (typeof (value) !== "number" || (value % 1) !== 0 || value <= 0) {
        return undefined;
    }
    let aux1 = value.toString();
    let n = aux1.length;
    resto = value;
    let result = 0;
    for (let i = n - 1; i >= 0; i--) {
        aux = Math.floor(resto / (10 ** i));
        resto = resto % (10 ** i);
        result += aux ** n;
    }
    if (result === value) {
        return true;
    } else {
        return false;
    }
}

console.log(isArmstrong(153)===true);
console.log(isArmstrong(-153)===undefined);
console.log(isArmstrong(153.6)===undefined);
console.log(isArmstrong(53)===false);
console.log(isArmstrong(54748)===true);
console.log(isArmstrong(1634)===true);
console.log(isArmstrong(73)===false);
console.log(isArmstrong(0)===undefined);
