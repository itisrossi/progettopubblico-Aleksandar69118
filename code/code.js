let tentativo = [], obiettivo = [], tutto = ["verde", "rosso", "blu", "nero", "viola", "arancio"], t = 0;


function mettiObiettivo() {   
    if(obiettivo.length == 4){
        document.getElementById("sper").innerHTML = "già usato";
        return;
    } 
    let x = Math.floor((Math.random() * 5) + 1);
    obiettivo.push(tutto[x]);
    x = Math.floor((Math.random() * 5) + 1);
    obiettivo.push(tutto[x]);
    x = Math.floor((Math.random() * 5) + 1);
    obiettivo.push(tutto[x]);
    x = Math.floor((Math.random() * 5) + 1);
    obiettivo.push(tutto[x]);
}

function verde() {
    const secondoDiv = document.querySelector('.palla');
    secondoDiv.classList.add('pallaverde');
    secondoDiv.classList.remove('palla');
    tentativo.push("verde");
    conta();
}

function rosso() {
    const secondoDiv = document.querySelector('.palla');
    secondoDiv.classList.add('pallarossa');
    secondoDiv.classList.remove('palla');
    tentativo.push("rosso");
    conta();
}

function blu() {
    const secondoDiv = document.querySelector('.palla');
    secondoDiv.classList.add('pallablu');
    secondoDiv.classList.remove('palla');
    tentativo.push("blu");
    conta();
}

function nero() {
    const secondoDiv = document.querySelector('.palla');
    secondoDiv.classList.add('pallanera');
    secondoDiv.classList.remove('palla');
    tentativo.push("nero");
    conta();
}

function viola() {
    const secondoDiv = document.querySelector('.palla');
    secondoDiv.classList.add('pallaviola');
    secondoDiv.classList.remove('palla');
    tentativo.push("viola");
    conta();
}

function arancio() {
    const secondoDiv = document.querySelector('.palla');
    secondoDiv.classList.add('pallarancio');
    secondoDiv.classList.remove('palla');
    tentativo.push("arancio");
    conta();
}

function conta() {
    if (t == 3) {
        controllo();
        tentativo = [];
        t = 0;
    }
    else
        t++;
}

function controllo() {
    let p = 0, np = 0;
    for (let i in obiettivo){
        if (tentativo.indexOf(obiettivo[i]) == i)
            p++;
        else if (obiettivo.includes(tentativo[i]))
            np++;
    }
    alert(p);
    alert(np);
    if(p == 4)
        document.getElementById("sper").innerHTML = "supercioanefef";
    else{
        p = 0;
        np = 0;
    }
}