function getSingleSort(data) {
    data.sort(
        (a, b) => {
            if (a > b) {
                return -1;
            } else if (a < b) {
                return 1;
            } else {
                return 0;
            }
        }
    );
    for (let i = 0; i < data.length; i + 2) {
        if (data[i] === data[i + 1]) {
            continue;
        } else {
            return data[i];
        }
    }
}

function getSingle(data) {
    while (data.length > 1) {
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data.length, j !== i; j++) {
                if (data[i] === data[j]) {
                    data.splice(i, 1);
                    data.splice(j, 1);
                }
            }
        }
    }
    return data;
}

console.log(getSingleSort([1, 2, 4, 3, 5, 2, 5, 3, 6, 4, 1]));
