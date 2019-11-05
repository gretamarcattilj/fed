window.onload = () => {
    let target = document.getElementById("target");
    target.textContent = "Hello!"
    target.style.fontSize = "50px";
}

function check() {
    let name = document.getElementById("user").value.split(" ");
    console.log(name)
    if (name.length < 2 || name[0].length < 1 || name[1].length < 1) {
        window.alert("nome non corretto");
        return false;
    } else {
        return true;
    }
}

function changeBKcolor() {
    let colore = document.getElementById("colore").value;
    if (colore === "") {
        window.alert("colore non corretto");
    }
    else {
        document.bgColor = colore;
    }
}

function changeColorSelect() {
    let colore = document.getElementById("sceltacolore").value;
    let imm = document.getElementById("immagine");
    if (colore === "") {
        window.alert("colore non corretto");
    }
    else {
        document.bgColor = colore;
    }
    if (colore === "red") {
        imm.src = "../fed1/img/gattoRosso.jpg"
    }
    else if (colore === "green") {
        imm.src = "../fed1/img/gattoVerde.jpg"
    }
    else if (colore === "blue") {
        imm.src = "../fed1/img/gattoBlu.jpg"
    }
    else if (colore === "gold") {
        imm.src = "../fed1/img/gattoOro.jpg"
    }
}

function impostazioniIn() {
    console.log("IN");
}

function impostazioniOut() {
    console.log("OUT");
}

function sopraImm() {
    let imm = document.getElementById("immagine");
    imm.style.width = (imm.clientWidth + 150) + "px";
    document.fgColor = "green";
    document.bgColor = "lightgreen";
    console.log("GATTINO");
}

function fuoriImm() {
    let imm = document.getElementById("immagine");
    imm.style.width = (imm.clientWidth - 150) + "px";
    document.fgColor = "purple";
    document.bgColor = "gold";
    console.log("NO MORE GATTINO");
}

function zoomText() {
    document.getElementById('target').style.fontSize = "100px";
}

function deZoomText() {
    document.getElementById('target').style.fontSize = "50px";
}