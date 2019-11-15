function sumOfIntervals(intervals) {
    let sum = 0;
    intervals.sort((a, b) => {
        if (a[0] > b[0]) {
            return 1;
        }
        else if (a[0] < b[0]) {
            return -1;
        }
        else {
            if (a[1] > b[1]) {
                return 1;
            }
            else if (a[1] < b[1]) {
                return -1;
            }
            else {
                return 0;
            }
        }
    });
    let remember = intervals[0][0];
    let rememberMax = intervals[0][1];
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] >= remember) {
            sum += intervals[i][1] - intervals[i][0];
            remember = intervals[i][1];
            rememberMax = intervals[i][1];
        }
        else {
            if (intervals[i][1] <= rememberMax) {
                continue;
            }
            else {
                sum += intervals[i][1] - remember;
                remember = intervals[i][1];
                rememberMax = intervals[i][1];
            }
        }
    }
    return sum;
}
console.log(sumOfIntervals([[1, 10], [2, 5]]));
console.log(sumOfIntervals([[1, 5], [1, 1]]));
console.log(sumOfIntervals([[1, 5], [10, 15], [-1, 1]]));
console.log(sumOfIntervals([[1, 5], [10, 15], [-1, 3]]));
function josephusSurvivor(n, k) {
    let aux = "";
    for (let i = 0; i < n; i++) {
        aux += (i + 1).toString();
    }
    let cont = 0;
    let aux2 = 0;
    let auxLeft = "";
    let auxRight = "";
    while (aux.length > 1) {
        if ((cont + k - 1) < aux.length) {
            cont += (k - 1);
        }
        else {
            let cond = false;
            while (!cond) {
                aux2 = aux.length - cont;
                cont = k - aux2 - 1;
                if (cont < aux.length) {
                    cond = true;
                }
                else {
                    cont = (k - 1) % cont;
                }
            }
        }
        auxLeft = aux.slice(0, cont);
        auxRight = aux.slice(cont + 1, aux.length);
        aux = auxLeft + auxRight;
    }
    return aux;
}
console.log(josephusSurvivor(11, 19));
console.log(josephusSurvivor(7, 3));
//# sourceMappingURL=proveCodewars3.js.map