function isEven(a){
    if(typeof(a)!== "number" || a%1!==0 || a<0){
        return undefined;
    }
    else if (a%2===0 || a===0){
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven(2)===true);
console.log(isEven("2")===undefined);
console.log(isEven(2.5)===undefined);
console.log(isEven(0)===true);
console.log(isEven(7)===false);
console.log(isEven(-7)===undefined);