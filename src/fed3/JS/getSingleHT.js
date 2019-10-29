function getSingleHT(data) {
    ht = {};
    for (let i = 0; i < data.length; i++) {
        if (ht[data[i]] === undefined) {
            ht[data[i]] = 1;
        } else {
            ht[data[i]] += 1;
        }
    }
    props = Object.keys(ht);
    for (let i = 0; i < props.length; i++) {
        if (ht[props[i]] === 1) {
            return props[i];
        }
    }
}

console.log(getSingleHT([1, 2, 4, 3, 5, 2, 5, 3, 6, 4, 1]));
console.log(getSingleHT([1, 2, 4, 3, 5, 2, 5, 3, 6, 4, 1, 3, 12, 7, 12, 7, 7]));