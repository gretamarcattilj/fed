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

function getInfo() {
    let request = new XMLHttpRequest();
    request.onload = callbackNew;
    request.open("GET", "info.txt");
    request.send();
}

function callback() {
    let target = document.getElementById("testo");
    if (this.status != 200) {
        target.value = this.status + "\n";
        return;
    }
    let result = "";
    let inizio = 0;
    let fine = 0;
    let resp = this.responseText;
    for (let i = 0; i < resp.length; i++) {
        if (resp[i] === "=") {
            inizio = i;
        } else if (resp[i] === ",") {
            fine = i;
            result += resp.slice(inizio + 1, fine);
            result += " ";
            inizio = 0;
            fine = 0;
        } else if (i === resp.length - 1) {
            result += resp.substr(inizio + 1, resp.length - inizio);
        }
    }
    target.value = result;
}

function callbackNew() {
    let target = document.getElementById("testo");
    if (this.status != 200) {
        target.value = this.status + "\n";
        return;
    }
    let json = {};
    let aux = [];
    let resp = this.responseText;
    resp = resp.split(",");
    for (let i = 0; i < resp.length; i++) {
        aux = resp[i].split("=");
        if (!json[aux[0]]) {
            json[aux[0]] = aux[1];
        } else {
            if (typeof (Array.isArray(json[aux[0]]))) {
                let x = [];
                x.push(json[aux[0]]);
                x.push(aux[1]);
                json[aux[0]] = x;
            } else {
                json[aux[0]].push(aux[1]);
            }
        }
    }
    target.value += json.name + "\n";
    target.value += json.job + "\n";
    target.value += json.cibi + "\n";
}