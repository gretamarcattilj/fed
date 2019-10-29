function getSingleN(data) {
    bin = []
    for (let i = 0; i < 10; i++) {
        bin.push(false);
    }
    for (let i = 0; i < data.length; i++){
        bin[data[i]]= !bin[data[i]];
    }
    for (let i = 0; i < 10; i++) {
       if(bin[i]===true){
           return i;
       }
    }
}

console.log(getSingleN([1, 2, 4, 3, 5, 2, 5, 3, 6, 4, 1]));