function formatDuration(seconds) {
    let aux = seconds;
    let result = "";
    let results = [];
    if (seconds === 0) {
        return "0 seconds";
    }
    if (seconds >= 31536000) {
        let year = 0;
        year = Math.floor(aux / 31536000);
        aux = aux % 31536000;
        result += year.toString();
        if (year === 1) {
            result += " year"
        } else {
            result += " years"
        }
        results.push(result);
        result = "";
    }
    if (aux >= 86400) {
        let days = 0;
        days = Math.floor(aux / 86400);
        aux = aux % 86400;
        result += days.toString();
        if (days === 1) {
            result += " day"
        } else {
            result += " day"
        }
        results.push(result);
        result = "";
    }
    if (aux >= 3600) {
        let hours = 0;
        hours = Math.floor(aux / 3600);
        aux = aux % 3600;
        result += hours.toString();
        if (hours === 1) {
            result += " hour"
        } else {
            result += " hours"
        }
        results.push(result);
        result = "";
    }
    if (aux >= 60) {
        let minutes = 0;
        minutes = Math.floor(aux / 60);
        aux = aux % 60;
        result += minutes.toString();
        if (minutes === 1) {
            result += " minute"
        } else {
            result += " minutes"
        }
        results.push(result);
        result = "";
    }
    if (aux > 0) {
        result += aux.toString();
        if (aux === 1) {
            result += " second"
        } else {
            result += " seconds"
        }
        results.push(result);
        result = "";
    }

    if (results.length === 1) {
        return results.join("");
    } else if (result.length === 2) {
        return results.join(" and ");
    } else {
        let resultPlus = " and "
        resultPlus += results[results.length - 1].toString();
        results.pop();
        results = results.join(", ");
        results += resultPlus;
        return results;

    }
}

console.log(formatDuration(0));
console.log(formatDuration(1));
console.log(formatDuration(62));
console.log(formatDuration(120));
console.log(formatDuration(3660));
console.log(formatDuration(3662));

function sumStrings(a, b) {
    let sum = BigInt(Number(a) + Number(b));
    //sum = sum.toLocaleString("fullwide", { useGrouping: false });
    return sum.toString();
}

console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));