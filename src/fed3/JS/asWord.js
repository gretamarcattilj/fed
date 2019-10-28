function asWord(value) {
    if (typeof (value) === "number") {
        switch (value) {
            case 0:
                return "zero";
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            case 4:
                return "four";
            case 5:
                return "five";
            case 6:
                return "six";
            case 7:
                return "seven";
            case 8:
                return "eight";
            case 9:
                return "nine";
            default:
                return undefined;
        }
    } else {
        return undefined;
    }
}

console.log(asWord("9")===undefined);
console.log(asWord(9)==="nine");
console.log(asWord(0)==="zero");
console.log(asWord(NaN)===undefined);
console.log(asWord(2)==="two");
console.log(asWord(" ")===undefined);
console.log(asWord(20)===undefined);
console.log(asWord(4)==="four");
console.log(asWord("0")===undefined);