using System;
using System.Collections.Generic;
using System.Text;

namespace Calcolatrice
{
    class CHugeNumber
    {
        private const int N = 200;
        private int[] _digits;
        private bool _sign = true;
        private int _length = 0;

        public int[] Digits // property
        {
            get { return _digits; }
            set { _digits = value; }
        }

        public bool Sign
        {
            get { return _sign; }
            set { _sign = value; }
        }

        public int Length
        {
            get { return _length; }
            set { _length = value; }
        }

        public CHugeNumber()
        {
            Digits = new int[N];
            Length = 0;
        }

        public CHugeNumber(string number)
        {
            Digits = new int[N];
            if (number[0].ToString() == "-")
            {
                this.Sign = false;
                number = number.Substring(1);
            }
            Length = number.Length;
            for (int i = N - 1, test = number.Length - 1; i >= 0; i--, test--)
            {
                if (test == -1)
                    break;
                else
                    Digits[i] = number[test] - '0';
            }
        }

        public override string ToString()
        {
            string ris = "";
            if (this.Zero())
                return "0";
            else if (this.Sign == false)
                ris += "-";
            for (int i = 0; i < N; i++)
                if (this.Digits[i] != 0)
                {
                    for (int j = i; j < N; j++)
                        ris += this.Digits[j].ToString();
                    break;
                }
            return ris;
        }

        private bool Zero()
        {
            for (int i = N - 1; i >= 0; i--)
            {
                if (this.Digits[i] != 0)
                    return false;
            }
            return true;
        }

        public static CHugeNumber somma(CHugeNumber n1, CHugeNumber n2)
        {
            CHugeNumber ris = new CHugeNumber();
            int carry = 0;
            for (int i = N - 1, temp; i >= 0; i--)
            {
                temp = n1.Digits[i] + n2.Digits[i] + carry;
                ris.Digits[i] = temp % 10;
                carry = temp / 10;
            }
            return ris;
        }

        public CHugeNumber complemento10()
        {
            CHugeNumber ris = new CHugeNumber();
            CHugeNumber uno = new CHugeNumber("1");
            for (int i = N - 1; i >= 0; i--)
                ris.Digits[i] = 9 - this.Digits[i];
            return somma(ris, uno);
        }

        public static CHugeNumber Somma(CHugeNumber n1, CHugeNumber n2)
        {
            CHugeNumber ris = new CHugeNumber();
            if (n1.Sign == false && n2.Sign == false)
            {
                ris = somma(n1, n2);
                ris.Sign = false;
            }
            else if (n1.Sign == false && n2.Sign == true)
            {
                if (n1 >= n2)
                {
                    ris = somma(n1.complemento10(), n2).complemento10();
                    ris.Sign = false;
                }
                else
                    ris = somma(n1.complemento10(), n2);
            }
            else if (n1.Sign == true && n2.Sign == false)
            {
                if (n1 >= n2)
                    ris = somma(n1, n2.complemento10());
                else
                {
                    ris = somma(n1, n2.complemento10()).complemento10();
                    ris.Sign = false;
                }
            }
            else
                ris = somma(n1, n2);
            return ris;
        }

        public static CHugeNumber operator +(CHugeNumber n1, CHugeNumber n2)
        {
            return Somma(n1, n2);
        }

        public static CHugeNumber Sottrazione(CHugeNumber n1, CHugeNumber n2)
        {
            CHugeNumber ris = new CHugeNumber(n2.ToString());
            if (n2.Sign == false)
                ris.Sign = true;
            else
                ris.Sign = false;
            return Somma(n1, ris);
        }

        public static CHugeNumber operator -(CHugeNumber n1, CHugeNumber n2)
        {
            return Sottrazione(n1, n2);
        }

        public static CHugeNumber Moltiplicazione(CHugeNumber n1, CHugeNumber n2)
        {
            CHugeNumber ris = new CHugeNumber(), zero = new CHugeNumber("0"), uno = new CHugeNumber("1"), i = new CHugeNumber(n2.ToString());
            i.Sign = true;
            while (i > zero)
            {
                ris = somma(n1, ris);
                i -= uno;
            }
            if (n1.Sign == false && n2.Sign == false)
                ris.Sign = true;
            else
                ris.Sign = (n1.Sign == false || n2.Sign == false) ? false : true;
            return ris;
        }

        public static CHugeNumber operator *(CHugeNumber n1, CHugeNumber n2)
        {
            return Moltiplicazione(n1, n2);
        }

        public static CHugeNumber Divisione(CHugeNumber n1, CHugeNumber n2)
        {
            CHugeNumber temp1 = new CHugeNumber(n1.ToString());
            CHugeNumber temp2 = new CHugeNumber(n2.ToString());
            temp1.Sign = true;
            temp2.Sign = true;
            int tempRis = 0;
            while (temp1 >= temp2)
            {
                temp1 -= temp2;
                tempRis++;
            }
            if (n1.Sign == false && n2.Sign == false)
                return new CHugeNumber(Convert.ToString(tempRis));
            else
                return new CHugeNumber(Convert.ToString((n1.Sign == false || n2.Sign == false) ? -tempRis : tempRis));
        }

        public static CHugeNumber operator /(CHugeNumber n1, CHugeNumber n2)
        {
            return Divisione(n1, n2);
        }

        public static CHugeNumber Potenza(CHugeNumber n1, CHugeNumber n2) 
        {
            CHugeNumber ris = new CHugeNumber(n1.ToString()), uno = new CHugeNumber("1");
            while (n2 > uno)
            {
                ris *= n1;
                n2 = n2 - uno;

            }
            return ris;
        }

        public static bool operator >(CHugeNumber n1, CHugeNumber n2)
        {
            for (int i = 0; i < N; i++)
            {
                if (n1.Digits[i] > n2.Digits[i])
                    return true;
                else if (n1.Digits[i] < n2.Digits[i])
                    return false;
            }
            return false;
        }

        public static bool operator <(CHugeNumber n1, CHugeNumber n2)
        {
            for (int i = 0; i < N; i++)
            {
                if (n1.Digits[i] < n2.Digits[i])
                    return true;
                else if (n1.Digits[i] > n2.Digits[i])
                    return false;
            }
            return false;
        }

        public static bool operator >=(CHugeNumber n1, CHugeNumber n2)
        {
            return n1 == n2 || n1 > n2;
        }

        public static bool operator <=(CHugeNumber n1, CHugeNumber n2)
        {
            return n1 == n2 || n1 < n2;
        }

        public static bool operator ==(CHugeNumber n1, CHugeNumber n2)
        {
            for (int i = 0; i < N; i++)
                if (n1.Digits[i] != n2.Digits[i])
                    return false;
            return true;
        }

        public static bool operator !=(CHugeNumber n1, CHugeNumber n2)
        {
            for (int i = 0; i < N; i++)
                if (n1.Digits[i] != n2.Digits[i])
                    return true;
            return false;
        }
    }
}
