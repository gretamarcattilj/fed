$(function () {
    let numDiv = $('div').length;
    let numSpan = $('span').length;
    let inserimento = document.getElementById("valore");
    inserimento.textContent = numDiv;
    let testo = document.getElementById("testo");
    testo.textContent = `Il numero di span in questa pagina è ${numSpan}`;
});

function fillContenitore(){
    $('<br>').appendTo('#contenitore');
    $('<label for="job">Lavoro</label>').appendTo('#contenitore');
    $('<input id="job" type="text"></input>').appendTo('#contenitore')       
}