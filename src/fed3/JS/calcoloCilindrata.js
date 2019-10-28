function calcoloCilindrata(alesaggio, corsa, cilindri) {
    alesaggio /= 10; //converione alesaggio in cm
    corsa /= 10; //conversione corsa in cm
    cilindrata = cilindri * corsa * Math.PI *((alesaggio / 2)**2);
    return cilindrata
}

console.log(calcoloCilindrata(86.4, 76.5, 4)===1794.0675573936373);