using System;
using System.Collections.Generic;
using System.Text;

namespace FrazioniConsole
{
    class CHugeNumber
    {
        private const int N = 500;
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
            for (int i = N - 1, test = number.Length - 1; i > 0; i--, test--)
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
            for (int i = N - 1; i > 0; i--)
            {
                if (this.Digits[i] != 0)
                    return false;
            }
            return true;
        }

        private static CHugeNumber somma(CHugeNumber n1, CHugeNumber n2)
        {
            CHugeNumber ris = new CHugeNumber();
            for (int i = N - 1, temp, carry = 0; i > 0; i--)
            {
                temp = n1.Digits[i] + n2.Digits[i] + carry;
                ris.Digits[i] = temp % 10;
                carry = temp / 10;
            }
            return ris;
        }

        private static CHugeNumber sottrazione(CHugeNumber n1, CHugeNumber n2)
        {
            CHugeNumber ris = new CHugeNumber(), temp = new CHugeNumber(n1.ToString());
            for (int i = N - 1; i > 0; i--)
            {
                if (temp.Digits[i] >= n2.Digits[i])
                    ris.Digits[i] = temp.Digits[i] - n2.Digits[i];
                else
                {
                    for (int j = i - 1; true; j--)
                    {
                        if (temp.Digits[j] > 0)
                        {
                            temp.Digits[j]--;
                            break;
                        }
                        else
                            temp.Digits[j] = 9;
                    }
                    ris.Digits[i] = temp.Digits[i] + 10 - n2.Digits[i];
                }
            }
            return ris;
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
                if (n1.Length < n2.Length)
                    ris = sottrazione(n2, n1);
                else if (n1.Length > n2.Length)
                {
                    ris = sottrazione(n1, n2);
                    ris.Sign = false;
                }
                else
                {
                    if (n1.Digits[N - n1.Length] > n2.Digits[N - n2.Length])
                    {
                        ris = sottrazione(n2, n1);
                        ris.Sign = false;
                    }
                    else if (n1.Digits[N - n1.Length] < n2.Digits[N - n2.Length])
                        ris = sottrazione(n2, n1);
                    else
                    {
                        for (int i = N - n1.Length + 1; i < N; i++)
                        {
                            if (n1.Digits[i] < n2.Digits[i])
                            {
                                ris = sottrazione(n2, n1);
                                break;
                            }
                            else if (n1.Digits[i] > n2.Digits[i])
                            {
                                ris = sottrazione(n1, n2);
                                ris.Sign = false;
                                break;
                            }
                            else if (n1.Digits[i] == n2.Digits[i])
                                if (i == N - 1)
                                    ris = new CHugeNumber("0");
                        }
                    }
                }
            }
            else if (n1.Sign == true && n2.Sign == false)
            {
                if (n1.Length < n2.Length)
                {
                    ris = sottrazione(n2, n1);
                    ris.Sign = false;
                }
                else if (n1.Length > n2.Length)
                    ris = sottrazione(n1, n2);
                else
                {
                    if (n1.Digits[N - n1.Length] > n2.Digits[N - n2.Length])
                        ris = sottrazione(n2, n1);
                    else if (n1.Digits[N - n1.Length] < n2.Digits[N - n2.Length])
                    {
                        ris = sottrazione(n2, n1);
                        ris.Sign = false;
                    }
                    else
                    {
                        for (int i = N - n1.Length + 1; i < N; i++)
                        {
                            if (n1.Digits[i] < n2.Digits[i])
                            {
                                ris = sottrazione(n2, n1);
                                ris.Sign = false;
                                break;
                            }
                            else if (n1.Digits[i] > n2.Digits[i])
                            {
                                ris = sottrazione(n1, n2);
                                break;
                            }
                            else if (n1.Digits[i] == n2.Digits[i])
                                if (i == N - 1)
                                    ris = new CHugeNumber("0");
                        }
                    }
                }
            }
            else
                ris = somma(n1, n2);
            return ris;
        }

        public static CHugeNumber operator +(CHugeNumber n1, CHugeNumber n2)
        {
            CHugeNumber ris = Somma(n1, n2);
            return ris;
        }

        public static CHugeNumber Sottrazione(CHugeNumber n1, CHugeNumber n2)
        {
            CHugeNumber ris = new CHugeNumber();
            if (n1.Sign == true && n2.Sign == true)
            {
                if (n1.Length < n2.Length)
                {
                    ris = sottrazione(n2, n1);
                    ris.Sign = false;
                }
                else if (n1.Length > n2.Length)
                    ris = sottrazione(n1, n2);
                else
                {
                    if (n1.Digits[N - n1.Length] > n2.Digits[N - n2.Length])
                        ris = sottrazione(n2, n1);
                    else if (n1.Digits[N - n1.Length] < n2.Digits[N - n2.Length])
                    {
                        ris = sottrazione(n2, n1);
                        ris.Sign = false;
                    }
                    else
                    {
                        for (int i = N - n1.Length + 1; i < N; i++)
                        {
                            if (n1.Digits[i] < n2.Digits[i])
                            {
                                ris = sottrazione(n2, n1);
                                ris.Sign = false;
                                break;
                            }
                            else if (n1.Digits[i] > n2.Digits[i])
                            {
                                ris = sottrazione(n1, n2);
                                break;
                            }
                            else if (n1.Digits[i] == n2.Digits[i])
                                if (i == N - 1)
                                    ris = new CHugeNumber("0");
                        }
                    }
                }
            }
            else
                ris = Somma(n1, n2);
            return ris;
        }

        public static CHugeNumber operator -(CHugeNumber n1, CHugeNumber n2)
        {
            CHugeNumber ris = Sottrazione(n1, n2);            
            return ris;
        }

        public static CHugeNumber Moltiplicazione(CHugeNumber n1, CHugeNumber n2)
        {
            CHugeNumber ris = new CHugeNumber();
            for (long i = Convert.ToInt64(n2.ToString()); i > 0; i--)
                ris += n1;
            return ris;
        }

        public static CHugeNumber operator *(CHugeNumber n1, CHugeNumber n2)
        {
            CHugeNumber ris = Moltiplicazione(n1, n2);
            return ris;
        }
    }
}
