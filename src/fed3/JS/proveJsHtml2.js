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

function changeBKcolor(){
    let colore=document.getElementById("colore").value;
    if(colore===""){
        window.alert("colore non corretto");
    }
    else{
        document.bgColor=colore;
    }
}