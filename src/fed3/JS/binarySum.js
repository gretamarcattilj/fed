function binarySum(left, right) {
    result = "";
    let sum = 0;
    riporto = 0;
    cont = 0;
    for (let i = left.length - 1; i >= 0; i--) {
        sum = Number(left[i]) + Number(right[i]);
        if (sum === 2) {
            if (riporto == 0) {
                result = "0" + result;
                riporto = 1;
            } else {
                result = "1" + result;
                riporto = 1;
            }
        } else if (sum === 1) {
            if (riporto == 0) {
                result = "1" + result;
            } else {
                result = "0" + result;
                riporto = 1;
            }
        } else {
            if (riporto == 0) {
                result = "0" + result;
            } else {
                result = "1" + result;
                riporto = 0;
            }
        }
        if (cont == left.length - 1) {
            if (riporto == 1) {
                result = "1" + result;
                return result;
            } else {
                return result;
            }
        }
        sum = 0;
        cont += 1;
    }
}

console.log(binarySum("01011101", "11010101"));
