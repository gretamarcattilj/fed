function findPosition(data, value) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] === value) {
            return i;
        }
    }
    return "-1";
}

console.log(findPosition([NaN,1],NaN)); //0
console.log(findPosition([NaN,1],1)); //1
console.log(findPosition([0,1,2,3],5)); //-1
console.log(findPosition([0,1,2,3],2)); //2
console.log(findPosition([1,1,1],1)); //0
console.log(findPosition(["1",NaN,1],1)); //2
console.log(findPosition(["1",NaN],1)); //-1
console.log(findPosition([],57)); //-1


