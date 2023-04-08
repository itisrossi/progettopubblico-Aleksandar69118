using System;
using System.Collections.Generic;
using System.Text;

namespace FrazioniConsole {
    class CFrazione
    {
        private int _num, _den; // usabili solo in questa classe

        public int num // usabili anche da fuori = property dell'oggetto
        {
            get
            {
                return _num;
            }
            set
            {
                _num = value;
            }
        }
        // servono per controllare se i valori dati in input sono accettabili
        // 
        public int den
        {
            get
            {
                return _den;
            }
            set
            {
                if (value != 0)
                {
                    _den = value;
                }
                else
                {
                    _den = 1;
                }
            }
        }

        public CFrazione() //costruttore di default
        {
            num = 0; //è come mettere this.num = 0; 
            den = 0; //con la property me lo mette lui a 1
        }

        public CFrazione(int num, int den) //overloading costruttore = diamo più informazioni
        {
            this.num = num; // num property è uguale a num parametro
            this.den = den;
        }

        public override string ToString() // da warning perchè è già presente in ogni classe il metodo ToString = regalo
        { // override per sovrascrivere e togliere il warning :)
            string risultato = "";
            if (this.den < 0)
            {
                this.den = Math.Abs(this.den);
                this.num = -this.num;
            }
            else if (this.den == 1)
                risultato = this.num.ToString();
            else
                risultato = this.num.ToString() + "/" + this.den.ToString();
            return risultato;
        }

        // Somma
        public static CFrazione Somma(CFrazione f1, CFrazione f2) // static = di classe
        {
            CFrazione ris;
            ris = new CFrazione();
            ris.den = f1.den * f2.den;
            ris.num = (ris.den / f1.den) * f1.num + (ris.den / f2.den) * f2.num;
            ris = ris.Semplifica();
            return ris;
        }

        public CFrazione Somma(CFrazione f1) // da fare sull'oggetto
        {
            CFrazione ris = CFrazione.Somma(this, f1); //per non ricopiare il codice // this = l'oggetto su cui applico la funzione
            return ris;
        }

        //override dell'operatore +
        public static CFrazione operator +(CFrazione f1, CFrazione f2) // static = di classe
        {
            CFrazione ris = CFrazione.Somma(f1, f2);
            return ris;
        }

        //Sottrazione
        public static CFrazione Sottrazione(CFrazione f1, CFrazione f2) // static = di classe
        {
            CFrazione ris;
            ris = new CFrazione();
            ris.den = f1.den * f2.den;
            ris.num = (ris.den / f1.den) * f1.num - (ris.den / f2.den) * f2.num;
            ris = ris.Semplifica();
            return ris;
        }

        public CFrazione Sottrazione(CFrazione f1) // da fare sull'oggetto
        {
            CFrazione ris = CFrazione.Sottrazione(this, f1);
            return ris;
        }

        //override dell'operatore -
        public static CFrazione operator -(CFrazione f1, CFrazione f2) // static = di classe
        {
            CFrazione ris = CFrazione.Sottrazione(f1, f2);
            return ris;
        }

        //Moltiplicazione
        public static CFrazione Moltiplicazione(CFrazione f1, CFrazione f2) // static = di classe
        {
            CFrazione ris;
            ris = new CFrazione();
            ris.den = f1.den * f2.den;
            ris.num = f1.num * f2.num;
            ris = ris.Semplifica();
            return ris;
        }

        public CFrazione Moltiplicazione(CFrazione f1) // da fare sull'oggetto
        {
            CFrazione ris = CFrazione.Moltiplicazione(this, f1);
            return ris;
        }

        //override dell'operatore *
        public static CFrazione operator *(CFrazione f1, CFrazione f2) // static = di classe
        {
            CFrazione ris = CFrazione.Moltiplicazione(f1, f2);
            return ris;
        }

        //Divisione
        public static CFrazione Divisione(CFrazione f1, CFrazione f2) // static = di classe
        {
            CFrazione ris = new CFrazione();
            f2 = f2.Inverti();
            ris.den = f1.den * f2.den;
            ris.num = f1.num * f2.num;
            ris = ris.Semplifica();
            return ris;
        }

        public CFrazione Inverti()
        {
            CFrazione ris = new CFrazione();
            ris.den = this.num;
            ris.num = this.den;
            return ris;
        }

        public CFrazione Divisione(CFrazione f1) // da fare sull'oggetto
        {
            CFrazione ris = CFrazione.Divisione(this, f1);
            return ris;
        }

        //override dell'operatore /
        public static CFrazione operator /(CFrazione f1, CFrazione f2) // static = di classe
        {
            CFrazione ris = CFrazione.Divisione(f1, f2);
            return ris;
        }

        private CFrazione Semplifica() // da fare sull'oggetto
        {
            CFrazione ris = new CFrazione();
            int temp = MCD(this.num, this.den);
            ris.num = this.num / temp;
            ris.den = this.den / temp;
            return ris;
        }

        private static int MCD(int n1, int n2)
        {
            n1 = Math.Abs(n1);
            n2 = Math.Abs(n2);
            while (n1 != 0 && n2 != 0)
            {
                if (n1 > n2)
                    n1 %= n2;
                else
                    n2 %= n1;
            }
            return n1 | n2;
        }
    }
}