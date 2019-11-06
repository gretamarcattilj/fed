function conversione(valore) {
    let romans = [["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], ["M", "MM", "MMM"]];
    let aux;
    let n;
    let intero = 0;
    let result = "";
    aux = valore.toString();
    n = aux.length;
    for (let i = n - 1; i >= 0; i--) {
        intero = Math.floor(valore / (10 ** i));
        valore = valore % (10 ** i);
        if (intero > 0) {
            result += romans[i][intero - 1];
        }
    }
    return result;
}

function giveInfo() {
    let valore = document.getElementById("value").value;
    if (valore <= 0 || valore > 3999) {
        document.getElementById("risultato").value = "input non valido";
    } else {
        result = conversione(valore);
        document.getElementById("risultato").value = result;
    }
}

console.log(conversione(10));

