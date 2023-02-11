function codiceFisc() {   
    let codice = "";
    let cognome = document.getElementById("cognome").value;
    let nome = document.getElementById("nome").value;
    let data = document.getElementById("datanascita").value, anno = "", mese = "", giorno = "";
    let sesso = document.getElementById("sesso").value;
    let comune = document.getElementById("luogon").value;
    giorno = data.slice(8,10);
    mese = data.slice(5,7);
    anno = data.slice(2,4);
    codice = calcolo(codice, cognome, nome, anno, mese, giorno, sesso, comune);
    document.getElementById("codice").innerHTML = "Il tuo codice fiscale è: " + codice;
}
function calcolo(codice, cognome, nome, anno, mese, giorno, sesso, comune) {
    codice = perCognome(cognome);
    if(codice.length == 3){
        codice += perNome(nome);
        if(codice.length == 6){
            codice += anno;
            codice += perMese(mese);
           if(perGiorno(giorno, sesso) == "Data non inserita"){
                codice = "Data non inserita";
           }
           else{
                codice += perGiorno(giorno, sesso);
                codice += comune;
                if(codice.length == 15){
                codice = codice.toUpperCase();
                codice += codiceControllo(codice);
                }
                else{
                    codice = "Comune non inserito correttamente";
                }
           }
        }
        else{
            codice = "Nome non inserito";
        }
    }
    else
        codice = "Cognome non inserito";
    return codice;
}

function perCognome(cognome) {
    let cognome1 = "";
    cognome = cognome.toUpperCase();
    cognome1 = consonanti(cognome);
    if(cognome1.length >= 3){
        cognome1 = cognome1[0] + cognome1[1] + cognome1[2];
    }
    else{
        cognome1 = cognome1 + vocali(cognome);
        if(cognome1.length > 3)
            cognome1 = cognome1[0] + cognome1[1] + cognome1[2];
    }
    if(cognome.length == 1)
        cognome1 = cognome + "XX";
    if(cognome1.length == 2)
        cognome1 = cognome1 + "X";
    return cognome1;
}

function consonanti(parola) {
    let ris = "";
    for (let j in parola) {
        switch (parola[j]) {
            case "A":
                break;
            case "E":
                break;
            case "I":
                break;
            case "O":
                break;
            case "U":
                break;
            default:
                ris = ris + parola[j];
                break;
        }
    }
    return ris;
}

function vocali(parola) {
    let ris = "";
    for (let j in parola) {
        switch (parola[j]) {
            case "A":
                ris = ris + parola[j];
                break;
            case "E":
                ris = ris + parola[j];
                break;
            case "I":
                ris = ris + parola[j];
                break;
            case "O":
                ris = ris + parola[j];
                break;
            case "U":
                ris = ris + parola[j];
                break;
            default:
                break;
        }
    }
    return ris;
}

function perNome(nome) {
    let nome1 = "";
    nome = nome.toUpperCase();
    nome1 = consonanti(nome);
    if(nome1.length > 3)
        nome1 = nome1[0] + nome1[2] + nome1[3];
    if(nome1.length <= 2) {
        nome1 += vocali(nome);
        if(nome1.length > 3)
            nome1 = nome1[0] + nome1[2] + nome1[3];
    }
    if(nome.length == 1)
        nome1 = nome + "XX";
    if(nome1.length == 2)
        nome1 = nome1 + "X";
    return nome1;
}

function perMese(mese) {
    let ris = "";
    switch (mese) {
        case "01":
            ris = "A";
            break;
        case "02":
            ris = "B";
            break;
        case "03":
            ris = "C";
            break;
        case "04":
            ris = "D";
            break;
        case "05":
            ris = "E";
            break;
        case "06":
            ris = "H";
            break;        
        case "07":
            ris = "L";
            break;
        case "08":
            ris = "M";
            break;
        case "09":
            ris = "P";
            break;
        case "10":
            ris = "R";
            break;
        case "11":
            ris = "S";
            break;        
        case "12":
            ris = "T";
            break;
    }
    return ris;
}

function perGiorno(giorno, sesso) {
    let ris = Number(giorno);
    switch(sesso) {
        case "M":
            ris = ris.toString();
            break;
        case "F":
            ris = ris + 40;
            ris = ris.toString();
            break;
    }
    if(ris < 10)
        ris = "0" + ris;
    return ris;
}

function codiceControllo(codice) {
    const tabC =[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
    const tabD =[1,0,5,7,9,13,15,17,19,21,2,4,18,20,11,3,6,8,12,14,16,10,22,25,24,23]
    const tabE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let somma = 0
    let i = 0
    let posizione = 0
    for (i=0; i<codice.length;i++){
        let carattere = codice[i]
        posizione = tabE.indexOf(carattere)
        if (posizione>25){posizione -= 26
        }
        if ((i+1)%2==0){
            somma += tabC[posizione]
        }
        else{
            somma += tabD[posizione]
        }
    }
let resto = somma % 26
controllo = tabE[resto]
return controllo
}