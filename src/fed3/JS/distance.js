function distance(x1, y1, x2, y2) {
    dist = Math.sqrt(Math.abs(x2 - x1) ** 2 + (Math.abs(y2 - y1) ** 2));
    return dist;
}

console.log(distance(0,1,0,4)===3);
console.log(distance(3,1,5,6)===5.385164807134504);
console.log(distance(-3,1,0,4)===4.242640687119285);
console.log(distance(0,1,0,-4)===5);
console.log(distance(-2,-1,-4,-4)===3.605551275463989);