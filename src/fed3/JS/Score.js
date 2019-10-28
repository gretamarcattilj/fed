function scor(x, y) {
    score = 0;
    r = Math.sqrt((x ** 2) + (y ** 2));
    if (r <= 1) {
        score = 10;
    } else if (r <= 5) {
        score = 5;
    } else if (r <= 10){
        score = 1;
    }
    return score;
}

console.log(scor(1, 15)===0); //0
console.log(scor(0.1, 0.2)===10); //10
console.log(scor(2, -4)===5); //5
console.log(scor(-1, 0)===10); //10
console.log(scor(8, 9)===0); //0
console.log(scor(4, 6)===1); //1
console.log(scor(4, -2)===5); //5
console.log(scor(-4, -8)===1); //1

