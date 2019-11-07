function fillInfo() {
    let request = new XMLHttpRequest();
    request.onload = save; /* () => {if (this.status != 200) {
        window.alert("impossibile completare l'autofill")
        return;
    }
    let json = JSON.parse(this.responseText)}*/

    request.open("GET", "present.json");
    request.send();
}

function save() {
    if (this.status != 200) {
        window.alert("impossibile completare l'autofill")
        return;
    }
    let json = JSON.parse(this.responseText);
    let nome = document.getElementById("nome");
    let job = document.getElementById("job");
    nome.value = json.name;
    job.value = json.job;
    let options = document.getElementsByClassName("check");
    let knows = json.linguaggi;
    for (let i = 0; i < options.length; i++) {
        for (let j = 0; j < knows.length; j++) {
            if (options[i].value === knows[j]) {
                options[i].checked = true;
                break;
            } else {
                options[i].checked = false;
            }
        }
    }
}