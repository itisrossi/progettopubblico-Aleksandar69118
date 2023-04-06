using System;
using System.Collections.Generic;
using System.Text;

namespace FrazioniConsole
{
    class Program
    {
        static void Main()
        {
            CFrazione f1 = new CFrazione(3, 0), f2 = new CFrazione(1, 0);
            Console.WriteLine("Frazione 1 {0}; Frazione 2 {1}; Somma {2}", f1.ToString(), f2.ToString(), CFrazione.Somma(f1, f2).Semplifica());
            Console.WriteLine("Sottrazione {0}; Moltiplicazione {1}, Divisione {2}", CFrazione.Sottrazione(f1, f2), (f1 * f2).Semplifica(), f1.Divisione(f2));
            Console.ReadLine();
        }
    }
}
