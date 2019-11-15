function formatDuration(seconds) {
    let aux=seconds;
    let result="";
    if(seconds>=31536000){
        let year = 0;
        year=Math.floor(aux/31536000);
        aux=aux%31536000;
        result+=year.toString();
        if(year===1){
            result+= " year and "
        }else{
            result+= " years and "
        }
    }
    if(aux>=86400){
        let days = 0;
        days=Math.floor(aux/86400);
        aux=aux%86400;
        result+=days.toString();
        if(days===1){
            result+= " day and "
        }else{
            result+= " day and "
        }
    }
    if(aux>=3600){
        let hours = 0;
        hours=Math.floor(aux/3600);
        aux=aux%3600;
        result+=hours.toString();
        if(hours===1){
            result+= " hour and "
        }else{
            result+= " hours and "
        }
    }
    if(aux>=60){
        let minutes = 0;
        minutes=Math.floor(aux/60);
        aux=aux%60;
        result+=minutes.toString();
        if(minutes===1){
            result+= " minute and "
        }else{
            result+= " minutes and "
        }
    }
    if(aux>0){
        result+=aux.toString();
        if(aux===1){
            result+= " second"
        }else{
            result+= " seconds"
        }
    }
    if(result[result.length-1]===" "){
        result=result.slice(0, result.length-5);
    }
    return result;
}
