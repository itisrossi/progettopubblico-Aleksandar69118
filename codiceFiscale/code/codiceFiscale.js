function codiceFisc() {   
    let codice = "";
    let cognome = document.getElementById("cognome").value.toUpperCase().replace(/[^A-Z]/g, '');
    let nome = document.getElementById("nome").value.toUpperCase().replace(/[^A-Z]/g, '');
    let data = document.getElementById("datanascita").value.toUpperCase(), anno = "", mese = "", giorno = "";
    let sesso = document.getElementById("sesso").value;
    let comune = document.getElementById("luogon").value.toUpperCase().replace(/[^A-Z]/g, '');
    if(cognome == "" || nome == "" || data == "" || comune == ""){
        document.getElementById("codice").innerHTML = "Inserisci i dati correttamente";
        return "";
    }
    giorno = data.slice(8,10);
    mese = data.slice(5,7);
    anno = data.slice(2,4);
    codice = calcolo(codice, cognome, nome, anno, mese, giorno, sesso, comune);
    document.getElementById("codice").innerHTML = "Il tuo codice fiscale è: " + codice;
}
function calcolo(codice, cognome, nome, anno, mese, giorno, sesso, comune) {
    codice += perCognome(cognome) + perNome(nome) + perDataDiNascita(anno, mese, giorno, sesso) + perComune(comune);
    codice += codiceControllo(codice);
    return codice;
}

function perCognome(cognome) {
    let risultato = "";
    risultato = consonanti(cognome);
    if (risultato.length >= 3) {
      return risultato[0] + risultato[1] + risultato[2];
    } else {
      risultato = risultato + vocali(cognome);
      if (risultato.length > 3) {
        return risultato[0] + risultato[1] + risultato[2];
      }
    }
    if (cognome.length == 1) {
      return cognome + "XX";
    }
    if (risultato.length == 2) {
      return risultato + "X";
    }
}

function perNome(nome) {
    let risultato = "";
    risultato = consonanti(nome);
    if(risultato.length > 3)
        return risultato[0] + risultato[2] + risultato[3];
    if(risultato.length <= 2) {
        risultato += vocali(nome);
        if(risultato.length > 3)
            return risultato[0] + risultato[2] + risultato[3];
    }
    if(nome.length == 1)
        return nome + "XX";
    if(risultato.length == 2)
        return risultato + "X";
    return risultato;
}

function consonanti(parola) {
    const vocali = ["A", "E", "I", "O", "U"];
    const consonanti = [];
    for (let i = 0; i < parola.length; i++) {
      let lettera = parola[i];
      if (lettera >= "A" && lettera <= "Z" && !vocali.includes(lettera)) {
        consonanti.push(lettera);
      }
    }
    return consonanti.join("");
}

function vocali(parola) {
    const vocali = [];
    const consonanti = ["Q", "W", "R", "T", "P", "S", "D", "F", "G", "H", "Y", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
    for (let i = 0; i < parola.length; i++) {
      let lettera = parola[i];
      if (lettera >= "A" && lettera <= "Z" && !consonanti.includes(lettera)) {
        vocali.push(lettera);
      }
    }
    return vocali.join("");
}

function perDataDiNascita(anno, mese, giorno, sesso) {
    const lettereMesi = 'ABCDEHLMPRST';
    const letteraMese = lettereMesi[parseInt(mese) - 1];
    const giornoSesso = sesso === 'F' ? parseInt(giorno) + 40 : giorno;
    const lettereGiornoSesso = ('0' + giornoSesso).slice(-2);
    return anno.toString().slice(-2) + letteraMese + lettereGiornoSesso;
}

function codiceControllo(codice) {
    const tabC = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    const tabD = [1, 0, 5, 7, 9, 13, 15, 17, 19, 21, 2, 4, 18, 20, 11, 3, 6, 8, 12, 14, 16, 10, 22, 25, 24, 23];
    const tabE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let somma = 0;
    let posizione = 0;
    for (let i = 0; i < codice.length ; i++){
        let carattere = codice[i];
        posizione = tabE.indexOf(carattere);
        if (posizione > 25){
            posizione -= 26;
        }
        if ((i + 1) %2 == 0){
            somma += tabC[posizione];
        }
        else{
            somma += tabD[posizione];
        }
    }
    return tabE[somma % 26];
}

function perComune(comune) {
    if (comune in listaComuni) {
        return listaComuni[comune];
    }
    else {
        return 'XXXX';
    }
}