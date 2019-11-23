function speed(dist, time) {
    if (typeof (dist) !== "number" || typeof (time) !== "number" || dist <= 0 || time <= 0) {
        return undefined
    } else {
        return dist / time;
    }
}

console.log(speed("2", 3) === undefined);
console.log(speed(2, "3") === undefined);
console.log(speed("ciao", "peppo") === undefined);
console.log(speed(0, 3) === undefined);
console.log(speed(2, -3) === undefined);
console.log(speed(-2, 3) === undefined);
console.log(speed(2, 0) === undefined);
console.log(Boolean(speed(2, 0.5)) === true);
console.log(Boolean(speed(2.4, 3)) === true);
console.log(Boolean(speed(2, Infinity)) === false);
console.log(Boolean(speed(Infinity, 2)) === true);


function increment(a) {
    for (let i = 0; i < a.length; i++) {
        a[i] += 1;
    }
    return a; 
} 

let a=[1,3,7];
console.log(increment(a));