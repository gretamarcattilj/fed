$(function () {
    // let numDiv = $('div').length;
    // let numSpan = $('span').length;
    // let inserimento = document.getElementById("valore");
    // inserimento.textContent = numDiv;
    // let testo = document.getElementById("testo");
    // testo.textContent = `Il numero di span in questa pagina è ${numSpan}`;
    $('a').click(function (event) {
        alert("You should not use any link on this page!");
        event.preventDefault();
    });
});

function fillContenitore() {
    $('<br>').appendTo('#contenitore');
    $('<label for="job">Lavoro</label>').appendTo('#contenitore');
    $('<input id="job" type="text"></input>').appendTo('#contenitore')
}

$('html').dblclick(function (event) {
    console.log('double click detected at ' + event.pageX + ',' + event.pageY + '\n');
})

function cambiaColore() {
    $("input").removeClass("red");
    $("input").addClass("lightblue");
    $("button").addClass("bottoniFinali")
}

function mostra() {
    let testo = $("#storia").val();
    $("#texto").text(testo);
    $("#storia").val("");
}

function decr() {
    let cur = parseInt($("#texto").css('font-size'));
    (cur > 2)? $("#texto").css('font-size', cur / 2) : $("#texto").css('font-size', cur);
    //$("#texto").css('font-size', cur / 2);
}

function incr() {
    let cur = parseInt($("#texto").css('font-size'));
    $("#texto").css('font-size', cur * 2);
}

function minusc() {
    let testo = $("#texto").text();
    testo = testo.toLowerCase();
    $("#texto").text(testo);
}

function maiusc() {
    let testo = $("#texto").text();
    testo = testo.toUpperCase();
    $("#texto").text(testo);
}