using System;
using System.Collections.Generic;
using System.Text;

namespace Calcolatrice
{
    class CCalcolatrice
    {
        public CHugeNumber PrimoOperando { get; set; }
        public CHugeNumber SecondoOperando{ get; set; }
        public CHugeNumber Risultato { get; set; }

        public enum Operazioni
        {
            somma,
            sottrazione,
            divisione,
            moltiplicazione,
            potenza
        }
        public Operazioni Operazione { get; set; }
    }
}
