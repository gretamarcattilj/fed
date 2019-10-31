function numberRadix(str_number, radix) {
    let result = 0;
    let prop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let base = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, "A": 10, "B": 11, "C": 12, "D": 13, "E": 14, "F": 15, "G": 16, "H": 17, "I": 18, "J": 19, "K": 20, "L": 21, "M": 22, "N": 23, "O": 24, "P": 25, "Q": 26, "R": 27, "S": 28, "T": 29, "U": 30, "V": 31, "W": 32, "X": 33, "Y": 34, "Z": 35 };
    let miaBase = {}
    for (let i = 0; i < radix; i++) {
        miaBase[prop[i]] = base[prop[i]];
    }
    for (let i = str_number.length - 1; i >= 0; i--) {
        if(miaBase[str_number[i]]===undefined){
            return -1;
        }
        result += miaBase[str_number[i]] * (radix ** (str_number.length - i - 1));
    }
    return result;
}

console.log(numberRadix("AB",10));
console.log(numberRadix("FF", 16));