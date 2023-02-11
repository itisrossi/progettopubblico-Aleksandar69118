// Variabili Primo = cognome| Secondo = Nome | Terzo = Data di Nascita | Quarto = Sesso e Giorno | Quinto = comune di nascita(Codice Belfiore) | Sesto = Carattere di controllo



//  C A O G H N 0 6 C 0 5 E 5 1 2  CAOGHN06C05E512 
// dispari acegikmo
// pari    bdfhjln
// 

function prova()
{
    let Caani = document.getElementById("prova").value;
    document.getElementById("Arsennico").innerHTML=data;
}
function Finale()
{ 
    let primo = -1;
    let secondo = -1;
    let terzo = -1;
    let quarto = -1;
    let quinto = -1;
    let sesto = -1;
    let risultato = -1;

    primo = Cognome();
    secondo = nome();
    terzo = AnnoMese();
    quarto = GiornoSesso();
    quinto = Comune();

    risultato = primo + secondo + terzo + quarto + quinto;
    let a = -1;
    let b = -1;
    let c = -1;
    let d = -1;
    let e = -1;
    let f = -1;
    let g = -1;
    let h = -1;
    let i = -1;
    let j = -1;
    let k = -1;
    let l = -1;
    let m = -1;
    let n = -1;
    let o = -1;

    a = risultato.substr(0,1);
    b = risultato.substr(1,1);
    c = risultato.substr(2,1);
    d = risultato.substr(3,1);
    e = risultato.substr(4,1);
    f = risultato.substr(5,1);
    g = risultato.substr(6,1);
    h = risultato.substr(7,1);
    i = risultato.substr(8,1);
    j = risultato.substr(9,1);
    k = risultato.substr(10,1);
    l = risultato.substr(11,1);
    m = risultato.substr(12,1);
    n = risultato.substr(13,1);
    o = risultato.substr(14,1);
    let valore = 0;
    let contatore = 0 ;
    let controllato = -1;

    // pari    bdfhjln   
    while ( contatore != 7)
    {
        if ( valore == 0)
        {
            controllato = b;
        }
        else if ( valore == 1)
        {
            controllato = d;
        }
        else if ( valore == 2)
        {
            controllato = f;
        }
        else if ( valore == 3)
        {
            controllato = h;
        }
        else if ( valore == 4)
        {
            controllato = j;
        }
        else if ( valore == 5)
        {
            controllato = l;
        }
        else if ( valore == 6)
        {
            controllato = n;
        }

        if ( controllato == "A")
        {
            controllato = 0;
        }
        else if ( controllato == "B")
        {
            controllato = 1; 
        }
        else if ( controllato == "C")
        {
            controllato = 2; 
        }
        else if ( controllato == "D")
        {
            controllato = 3; 
        }
        else if ( controllato == "E")
        {
            controllato = 4; 
        }
        else if ( controllato == "F")
        {
            controllato = 5; 
        }
        else if ( controllato == "G")
        {
            controllato = 6; 
        }
        else if ( controllato == "H")
        {
            controllato = 7; 
        }
        else if ( controllato == "I")
        {
            controllato = 8; 
        }
        else if ( controllato == "J")
        {
            controllato = 9; 
        }
        else if ( controllato == "K")
        {
            controllato = 10; 
        }
        else if ( controllato == "L")
        {
            controllato = 11; 
        }
        else if ( controllato == "M")
        {
            controllato = 12; 
        }
        else if ( controllato == "N")
        {
            controllato = 13; 
        }
        else if ( controllato == "O")
        {
            controllato = 14; 
        }
        else if ( controllato == "P")
        {
            controllato = 15; 
        }
        else if ( controllato == "Q")
        {
            controllato = 16; 
        }
        else if ( controllato == "R")
        {
            controllato = 17; 
        }
        else if ( controllato == "S")
        {
            controllato = 18; 
        }
        else if ( controllato == "T")
        {
            controllato = 19; 
        }
        else if ( controllato == "U")
        {
            controllato = 20; 
        }
        else if ( controllato == "V")
        {
            controllato = 21; 
        }
        else if ( controllato == "W")
        {
            controllato = 22; 
        }
        else if ( controllato == "X")
        {
            controllato = 23; 
        }
        else if ( controllato == "Y")
        {
            controllato = 24; 
        }
        else if ( controllato == "Z")
        {
            controllato = 25; 
        }

        if ( valore == 0)
        {
            b = controllato;
        }
        else if ( valore == 1)
        {
            d = controllato;
        }
        else if ( valore == 2)
        {
            f = controllato;
        }
        else if ( valore == 3)
        {
            h = controllato;
        }
        else if ( valore == 4)
        {
            j = controllato;
        }
        else if ( valore == 5)
        {
            l = controllato;
        }
        else if ( valore == 6)
        {
            n = controllato;
        }
        valore++;
        contatore++;
    }
    contatore = 0 ;
    valore = 0 ;
    
    while ( contatore != 8)
    {
        if ( valore == 0)
        {
            controllato = a;
        }
        else if ( valore == 1)
        {
            controllato = c;
        }
        else if ( valore == 2)
        {
            controllato = e;
        }
        else if ( valore == 3)
        {
            controllato = g;
        }
        else if ( valore == 4)
        {
            controllato = i;
        }
        else if ( valore == 5)
        {
            controllato = k;
        }
        else if ( valore == 6)
        {
            controllato = m;
        }
        else if ( valore == 7)
        {
            controllato = o;
        }

        if ((controllato == 0) || ( controllato == "A"))
        {
            controllato = 1;
        }
        else if ((controllato == 1) || ( controllato == "B"))
        {
            controllato = 0;
        }
        else if ((controllato == 2) || ( controllato == "C"))
        {
            controllato = 5;
        }
        else if ((controllato == 3) || ( controllato == "D"))
        {
            controllato = 7;
        }
        else if ((controllato == 4) || ( controllato == "E"))
        {
            controllato = 9;
        }
        else if ((controllato == 5) || ( controllato == "F"))
        {
            controllato = 13;
        }
        else if ((controllato == 6) || ( controllato == "G"))
        {
            controllato = 15;
        }
        else if ((controllato == 7) || ( controllato == "H"))
        {
            controllato = 17;
        }
        else if ((controllato == 8) || ( controllato == "I"))
        {
            controllato = 19;
        }
        else if ((controllato == 9) || ( controllato == "J"))
        {
            controllato = 21;
        }
        else if ( controllato == "K")
        {
            controllato = 2;
        }
        else if ( controllato == "L")
        {
            controllato = 4;
        }
        else if ( controllato == "M")
        {
            controllato = 18;
        }
        else if ( controllato == "N")
        {
            controllato = 20;
        }
        else if ( controllato == "O")
        {
            controllato = 11;
        }
        
        else if ( controllato == "P")
        {
            controllato = 3;
        }
        else if ( controllato == "Q")
        {
            controllato = 6;
        }
        else if ( controllato == "R")
        {
            controllato = 8;
        }

        else if ( controllato == "S")
        {
            controllato = 12;
        }
        else if ( controllato == "T")
        {
            controllato = 14;
        }
        else if ( controllato == "U")
        {
            controllato = 16;
        }
        else if ( controllato == "V")
        {
            controllato = 10;
        }
        else if ( controllato == "W")
        {
            controllato = 22;
        }
        else if ( controllato == "X")
        {
            controllato = 25;
        }
        else if ( controllato == "Y")
        {
            controllato = 24;
        }
        else if ( controllato == "X")
        {
            controllato = 23;
        }
        //da qui 
        if ( valore == 0)
        {
            a = controllato;
        }
        else if ( valore == 1)
        {
            c = controllato;
        }
        else if ( valore == 2)
        {
            e = controllato;
        }
        else if ( valore == 3)
        {
            g = controllato;
        }
        else if ( valore == 4)
        {
            i = controllato;
        }
        else if ( valore == 5)
        {
            k = controllato;
        }
        else if ( valore == 6)
        {
            m = controllato;
        }
        else if ( valore == 7)
        {
            o = controllato;
        }

        valore++
        contatore++;
    }
    risultato = a+b+c+d+e+f+g+h+i+j+k+l+m+n+o;
    risultato = risultato % 26;
    if (risultato == 0)
    {
        risultato = "A";
    }
    else if ( risultato == 1)
    {
        risultato = "B";
    }
    else if ( risultato == 2)
    {
        risultato = "C";
    }
    else if ( risultato == 3)
    {
        risultato = "D";
    }
    else if ( risultato == 4)
    {
        risultato = "E";
    }
    else if ( risultato == 5)
    {
        risultato = "F";
    }
    else if ( risultato == 6)
    {
        risultato = "G";
    }
    else if ( risultato == 7)
    {
        risultato = "H";
    }
    else if ( risultato == 8)
    {
        risultato = "I";
    }
    else if ( risultato == 9)
    {
        risultato = "J";
    }
    else if ( risultato == 10)
    {
        risultato = "K";
    }
    else if ( risultato == 11)
    {
        risultato = "L";
    }
    else if ( risultato == 12)
    {
        risultato = "M";
    }
    else if ( risultato == 13)
    {
        risultato = "N";
    }
    else if ( risultato == 14)
    {
        risultato = "O";
    }else if ( risultato == 15)
    {
        risultato = "P";
    }else if ( risultato == 16)
    {
        risultato = "Q";
    }else if ( risultato == 17)
    {
        risultato = "R";
    }else if ( risultato == 18)
    {
        risultato = "S";
    }else if ( risultato == 19)
    {
        risultato = "T";
    }
    else if ( risultato == 20)
    {
        risultato = "U";
    }
    else if ( risultato == 21)
    {
        risultato = "V";
    }
    else if ( risultato == 22)
    {
        risultato = "W";
    }
    else if ( risultato == 23)
    {
        risultato = "X";
    }
    else if ( risultato == 24)
    {
        risultato = "Y";
    }
    else if ( risultato == 25)
    {
        risultato = "Z";
    }
    sesto = risultato;
    risultato = primo + secondo + terzo + quarto + quinto + sesto;
    document.getElementById("Testo").innerHTML=risultato;

}

function Cognome ()
{
    let cognome = document.getElementById("cognome").value;
    let surname = cognome.toUpperCase();
    let a = -1;
    let b = -1;
    let c = -1;
    let i = 0;
    let vocali = 0;
    let risultato = -1;
    
    if (surname.length >= 3)
    {
        while ( i < surname.length + 1)
        {
            if ((surname.substr(i,1) != "A") && (surname.substr(i,1) != "E") && (surname.substr(i,1) != "I") && (surname.substr(i,1) != "O") && (surname.substr(i,1) != "U"))
            {
                vocali++;
        
                if ( a == -1)
    
                {
                    a = i;

                }
                else if ( b == -1)
                { 
                    b = i;
                }
                else if ( c == -1 )
                {
                    c = i;
                }
            }
            i++;
        }
        if ( vocali < 3)
        {
            if ( a == -1)
            {
                a = 0;
                b = 1;
                c = 2;
            }
            else if ( b == -1)
            {
                if ( a == 0)
                {
                    b = 1;
                    c = 2
                }
                else
                {
                    b = 0;
                    c = 2; 
                }
            }
            else 
            {
                if ( ( a == 0 ) && ( b > a + 1 ))
                {
                    c = 1;
                }
                else
                {
                    c = b + 1;
                }
            }
        }
    }
    if ( surname.length == 1)
    {
        a = 0;
        b = "X";
        c = "X";
    }
    else if ( surname.length == 2)
    {
        if ((surname.substr(0,1) != "A") && (surname.substr(0,1) != "E") && (surname.substr(0,1) != "I") && (surname.substr(0,1) != "O") && (surname.substr(0,1) != "U"))
        {
            a = 0;
            b = 1;
            c = "X";
        }
        else if ((surname.substr(1,1) != "A") && (surname.substr(1,1) != "E") && (surname.substr(1,1) != "I") && (surname.substr(1,1) != "O") && (surname.substr(1,1) != "U"))
        {
            a = 1;
            b = 0;
            c = "X";
        }

    }
    if (surname.length == 1)
    {
        a = surname.substr(a,1);
        risultato = a + b + c ;
    }
    else  if (surname.length == 2)
    {
        a = surname.substr(a,1);
        b = surname.substr(c,1);
        risultato = a + b + c ;
    }
    else if (surname.length >= 3)
    {
        a = surname.substr(a,1);
        b = surname.substr(b,1);
        c = surname.substr(c,1);
        risultato = a + b + c ;
    }
    return risultato;


}

function nome()
{
    let nome = document.getElementById("nome").value;
    let name = nome.toUpperCase();
    let a = -1;
    let b = -1;
    let c = -1;
    let i = 0;
    let vocali = 0;
    let risultato = "mannaggia";

    if ( name.length >= 3)
    {
        while ( i < name.length + 1 )
        {

            if ( (name.substr(i,1) != "A") && (name.substr(i,1) != "E") && (name.substr(i,1) != "I") && (name.substr(i,1) != "O") && (name.substr(i,1) != "U") )
            {
                vocali++;
                if ( a == -1)
                {
                    a = i;
                }
                else if ( (b == -1 ) && ( vocali == 3))
                {
                    b = i;
                }
                else if ( (c == -1) && ( vocali == 4)) 
                {
                    c = i;
                }
            }
            i++;

        }
        if ( vocali == 3)
        {
            i = 0;
            while ( i < name.length + 1)
            {
                if ( (name.substr(i,1) != "A") && (name.substr(i,1) != "E") && (name.substr(i,1) != "I") && (name.substr(i,1) != "O") && (name.substr(i,1) != "U") )
                {
                    if ( (b == -1) && ( i != a) )
                    {
                        b = i;
                    }
                    else if ( ( c == -1) && ( i != a ) && (i != b ))
                    {
                        c = i;
                    }
                }
                i++;
            }
            
        }
        else if ( vocali == 2)
        {
            i = 0;
            while ( i < name.length + 1)
            {
                if ( (name.substr(i,1) != "A") && (name.substr(i,1) != "E") && (name.substr(i,1) != "I") && (name.substr(i,1) != "O") && (name.substr(i,1) != "U") )
                {
                    if ( (b == -1) && ( i != a) )
                    {
                        b = i;
                    }
                }
                i++;
            }
            if ( a != 0)
            {
                c = 0;
            }
            else if ( (a == 0) && (b != 1))
            {
                c = 1;
            }
            else 
            {
                c = b + 1;
            }
        }
        else if ( vocali = 1)
        {
            if ( a == 0)
            {
                b = 1;
                c = 2;
            }
            else if ( a != 0)
            {
                b = 0;
                if ( a == 1)
                {
                    c = 2;
                }
            }
        }
    }
    else if ( name.length == 1)
    {
        a = 0;
        b = "X";
        c = "X";
        
    }
    else if ( name.length == 2)
    {
        if ((name.substr(0,1) != "A") && (name.substr(0,1) != "E") && (name.substr(0,1) != "I") && (name.substr(0,1) != "O") && (name.substr(0,1) != "U"))
        {
            a = 0;
            b = 1;
            c = "X";
        }
        else if ((name.substr(1,1) != "A") && (name.substr(1,1) != "E") && (name.substr(1,1) != "I") && (name.substr(1,1) != "O") && (name.substr(1,1) != "U"))
        {
            a = 1;
            b = 0;
            c = "X";
        }
    }
    if ( name.length == 1)
    {
        a = name.substr(a,1);
        risultato = a + b + c;
    }
    else if ( name.length == 2 )
    {
        a = name.substr(a,1);
        b = name.substr(b,1);
        risultato = a + b + c;

    }
    else if ( name.length >= 3)
    {
        a = name.substr(a,1);
        b = name.substr(b,1);
        c = name.substr(c,1);
        risultato = a + b + c;
    }
    return risultato;
}

function AnnoMese()
{
    let data = document.getElementById("data").value;
    let [anno , mese , giorno] = data.split("-");
    let a = -1;
    let b = -1;
    let risultato = -1;
    a = anno.substr(2,2);
    mese -= 1;
    mese++;

    if  ( mese == 1)
    {
        b = "A";
    }
    else if ( mese == 2)
    {
        b = "B";
    }
    else if ( mese == 3)
    {
        b = "C";
    }
    else if ( mese == 4)
    {
        b = "D";
    }
    else if ( mese == 5)
    {
        b = "E";
    }
    else if ( mese == 6)
    {
        b = "H";
    }
    else if ( mese == 7)
    {
        b = "L";
    }
    else if ( mese == 8)
    {
        b = "M";
    }
    else if ( mese == 9)
    {
        b = "P";
    }
    else if ( mese == 10)
    {
        b = "R";
    }
    else if ( mese == 11)
    {
        b = "S";
    }
    else if ( mese == 12)
    {
        b = "T";
    }

    risultato = a + b ;
    return risultato


}

function GiornoSesso()
{
    let Sesso = document.getElementById("Maschio").checked;
    let data = document.getElementById("data").value;
    let [anno , mese , giorno] = data.split("-");
    giorno -= 1;
    giorno++ ;
    a = -1;
    risultato = -1;
    if ( Sesso == true)
    {
        a = giorno;
    }
    else 
    {
        a = giorno + 40;
    }

    risultato = a;
    return risultato;
}

function Comune()
{
    let Codice = document.getElementById("belfiore").value;
    let risultato = -1;
    risultato = Codice;
    return risultato;
}
