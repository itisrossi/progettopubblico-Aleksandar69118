using System;
using System.Collections.Generic;
using System.Text;

namespace FrazioniConsole {
    class Program {
        static int Main() {
            CFrazione f1 = new CFrazione(int.Parse(Console.ReadLine()), int.Parse(Console.ReadLine())), f2 = new CFrazione(int.Parse(Console.ReadLine()), int.Parse(Console.ReadLine()));
            Console.WriteLine("Frazione 1 {0}; Frazione 2 {1}; Somma {2}", f1.ToString(), f2.ToString(), CFrazione.Somma(f1, f2));
            Console.WriteLine("Sottrazione {0}; Moltiplicazione {1}, Divisione {2}", CFrazione.Sottrazione(f1, f2), (f1 * f2), f1.Divisione(f2));
            Console.ReadLine();
            return 0;
        }
    }
}
