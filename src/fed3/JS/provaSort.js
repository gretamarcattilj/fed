function sortMio(array){
    for (let i=0; i<array.length; i++){
        for(let j=i+1; j<array.length; j++){
            if(array[i]>array[j]){
                [array[i], array[j]]=[array[j], array[i]];
            }
        }
    }
    return array;
}

console.log(sortMio([2,5,3,6,7,1,8,9,-1]));