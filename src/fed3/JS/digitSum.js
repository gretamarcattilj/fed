function digitSum(num) {
    let sum = 0;
    while (num % 10 !== 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log(digitSum(1856743)===34);

function digitSumNigel(num) {
    num = num.toString();
    // ATTENZIONE al diverso modo di usare le funzioni note come toString() e Number()
    // ATTENZIONE JS è case-sensitive
    let sum = 0;
    for (i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    return sum;
}
console.log(digitSumNigel(1856743)===34);