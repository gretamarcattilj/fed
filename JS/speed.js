function speed (dist, time){
    if (typeof(dist)!=="number" || typeof(time)!=="number" || dist<=0 || time<=0 ){
        return undefined
    } else {
        return dist/time;
    }
}

console.log(speed("2",3)===undefined);
console.log(speed(2,"3")===undefined);
console.log(speed("ciao","peppo")===undefined);
console.log(speed(0,3)===undefined);
console.log(speed(2,-3)===undefined);
console.log(Boolean(speed(2,0.5))===true);
console.log(speed(-2,3)===undefined);
console.log(speed(2,0)===undefined);
console.log(Boolean(speed(2.4,3))===true);
