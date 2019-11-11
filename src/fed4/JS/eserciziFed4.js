let arr = new Array(5).fill(0);
console.log(arr);
let arry = [4, 3, 5, 1, 7, 12];
arry = arry.sort((a, b) => {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
});
console.log(arry);
arry = arry.slice(1, arry.length - 1);
console.log(arry);
arry = arry.filter(value => value % 2);
console.log(arry);
let chars = Array.from('hello');
console.log(chars);

let s = new Set([1, 2, 3, 4, 5, 6]);
console.log(s);
s.add(7);
console.log(s);
s.clear();
console.log(s);
s = new Set([1, 2, 3, 4, 5, 6]);
console.log(s);
s.delete(3);
console.log(s);
s.forEach((value) => console.log(value * 2));
console.log(s.has(5));
console.log(s.has(8));
b = s.values();
console.log(b);

let m = new Map([[1, 2], [2, 4], ["tu", "ok"]]);
console.log(m);
m = m.set(5,3);
console.log(m);
console.log(m.entries());
console.log(m.values());
console.log(m.keys());
