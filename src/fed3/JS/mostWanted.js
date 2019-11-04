function mostWanted(data) {
    let ht = {};
    let props=[];
    let max;
    let index=0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].toLowerCase()!==data[i].toUpperCase()) {
            if (ht[data[i].toLowerCase()] === undefined) {
                ht[data[i].toLowerCase()] = 1;
            } else {
                ht[data[i].toLowerCase()] += 1;
            }
        }
    }
    props = Object.keys(ht);
    props=props.sort();
    max=ht[props[0]];
    for (let i = 1; i < props.length; i++) {
        if (ht[props[i]] > max) {
            max=ht[props[i]];
            index=i;
        }
    }
    return props[index];
}

console.log(mostWanted("How do you do?"));