function digitSum(num) {
    let n;
    let sum;
    while (num % 10 === 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
}
console.log(digitSum(1256743));