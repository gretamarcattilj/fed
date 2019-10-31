function betweenMarkers(text, begin, end) {
    let word = "";
    let inizio = 0;
    let fine = text.length;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === begin[0] && text.substr(i, begin.length) === begin) {
            inizio = i + begin.length;
        } else if (text[i] === end[0] && text.substr(i, end.length) === end) {
            fine = i;
        } else {
            continue;
        }
    }
    if (fine <= inizio) {
        return "";
    }
    word = text.slice(inizio, fine);
    return word;
}

console.log(betweenMarkers("<head><title>My new site</title></head>", "<title>", "</title>"))
console.log(betweenMarkers('What is >apple<', '>', '<'));
