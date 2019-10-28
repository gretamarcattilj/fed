function checkSign(value) {
    if (typeof value != "number" || isNaN(value)===true) {
        return undefined;
    } else {
        if (value < 0) {
            return "negative";
        } else if (value > 0) {
            return "positive";
        } else {
            return "zero";
        }
    }
}
console.log(checkSign(2)==="positive");
console.log(checkSign(0.2)==="positive");
console.log(checkSign(-4)==="negative");
console.log(checkSign("3")===undefined);
console.log(checkSign(NaN)===undefined);
console.log(checkSign(undefined)===undefined);
console.log(checkSign(0)==="zero");
console.log(checkSign(-156)==="negative");
console.log(checkSign(23)==="positive");