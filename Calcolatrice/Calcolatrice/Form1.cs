using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Calcolatrice
{
    public partial class Form1 : Form
    {
        private CCalcolatrice calcolatrice;
        private bool numeri = false;
        private bool negativo = false;
        public Form1()
        {
            InitializeComponent();
            calcolatrice = new CCalcolatrice();
        }

        private void numeroPremuto(object sender, EventArgs e)
        {
            Button tmp = sender as Button;
            if (tmp != null)
                if (numeri)
                {
                    textBox1.Text = "";
                    textBox2.Text = "";
                    textBox2.Text += tmp.Text;
                    numeri = false;
                }
                else
                    textBox2.Text += tmp.Text;
        }

        private void cancellaC(object sender, EventArgs e)
        {
            calcolatrice.PrimoOperando = new CHugeNumber();
            calcolatrice.SecondoOperando = new CHugeNumber();
            calcolatrice.Operazione = CCalcolatrice.Operazioni.somma;
            textBox1.Text = "";
            textBox2.Text = "";
            numeri = false;
            negativo = false;
        }

        private void cancellaCE(object sender, EventArgs e)
        {
            textBox2.Text = "";
        }

        private void cancellaUno(object sender, EventArgs e)
        {
            if (textBox2.Text.Length != 0)
                textBox2.Text = textBox2.Text.Substring(0, textBox2.Text.Length - 1);
        }

        private void operazioni(object sender, EventArgs e)
        {
            Button tmp = sender as Button;
            numeri = false;
            if (tmp != null)
            {
                if (textBox1.Text == "" && textBox2.Text == "")
                    return;
                else if (textBox1.Text != "" && textBox2.Text == "")
                {
                    textBox1.Text = textBox1.Text.Substring(0, textBox1.Text.Length - 1);
                    textBox1.Text += tmp.Text;
                    switch (tmp.Text)
                    {
                        case "+":
                            calcolatrice.Operazione = CCalcolatrice.Operazioni.somma;
                            textBox1.Text = calcolatrice.PrimoOperando.ToString() + "+";
                            break;
                        case "-":
                            calcolatrice.Operazione = CCalcolatrice.Operazioni.sottrazione;
                            textBox1.Text = calcolatrice.PrimoOperando.ToString() + "-";
                            break;
                        case "*":
                            calcolatrice.Operazione = CCalcolatrice.Operazioni.moltiplicazione;
                            textBox1.Text = calcolatrice.PrimoOperando.ToString() + "*";
                            break;
                        case "/":
                            calcolatrice.Operazione = CCalcolatrice.Operazioni.divisione;
                            textBox1.Text = calcolatrice.PrimoOperando.ToString() + "/";
                            break;
                        case "x^n":
                            calcolatrice.Operazione = CCalcolatrice.Operazioni.potenza;
                            textBox1.Text = calcolatrice.PrimoOperando.ToString() + "^";
                            break;
                    }
                }
                else
                {
                    calcolatrice.PrimoOperando = new CHugeNumber(textBox2.Text);
                    switch (tmp.Text)
                    {
                        case "+":
                            calcolatrice.Operazione = CCalcolatrice.Operazioni.somma;
                            textBox1.Text = calcolatrice.PrimoOperando.ToString() + "+";
                            break;
                        case "-":
                            calcolatrice.Operazione = CCalcolatrice.Operazioni.sottrazione;
                            textBox1.Text = calcolatrice.PrimoOperando.ToString() + "-";
                            break;
                        case "*":
                            calcolatrice.Operazione = CCalcolatrice.Operazioni.moltiplicazione;
                            textBox1.Text = calcolatrice.PrimoOperando.ToString() + "*";
                            break;
                        case "/":
                            calcolatrice.Operazione = CCalcolatrice.Operazioni.divisione;
                            textBox1.Text = calcolatrice.PrimoOperando.ToString() + "/";
                            break;
                        case "x^n":
                            calcolatrice.Operazione = CCalcolatrice.Operazioni.potenza;
                            textBox1.Text = calcolatrice.PrimoOperando.ToString() + "^";
                            break;
                    }
                    textBox2.Text = "";
                }
            }
        }

        private void uguale(object sender, EventArgs e)
        {
            calcolatrice.SecondoOperando = new CHugeNumber(textBox2.Text);
            switch (calcolatrice.Operazione)
            {
                case CCalcolatrice.Operazioni.somma:
                    calcolatrice.Risultato = calcolatrice.PrimoOperando + calcolatrice.SecondoOperando;
                    break;
                case CCalcolatrice.Operazioni.sottrazione:
                    calcolatrice.Risultato = calcolatrice.PrimoOperando - calcolatrice.SecondoOperando;
                    break;
                case CCalcolatrice.Operazioni.moltiplicazione:
                    calcolatrice.Risultato = calcolatrice.PrimoOperando * calcolatrice.SecondoOperando;
                    break;
                case CCalcolatrice.Operazioni.divisione:
                    calcolatrice.Risultato = calcolatrice.PrimoOperando / calcolatrice.SecondoOperando;
                    break;
                case CCalcolatrice.Operazioni.potenza:
                    calcolatrice.Risultato = CHugeNumber.Potenza(calcolatrice.PrimoOperando, calcolatrice.SecondoOperando);
                    break;
            }
            numeri = true;
            textBox1.Text += calcolatrice.SecondoOperando.ToString();
            textBox2.Text = calcolatrice.Risultato.ToString();
        }

        private void positivoNegativo(object sender, EventArgs e)
        {
            Button tmp = sender as Button;
            if (numeri)
            {
                textBox1.Text = "";
                textBox2.Text = "-";
                numeri = false;
            }
            string temp = "-";
            if (tmp != null)
            {
                if (negativo)
                {
                    textBox2.Text = textBox2.Text.Substring(1, textBox2.Text.Length - 1);
                    negativo = false;
                }
                else
                {
                    textBox2.Text = temp + textBox2.Text;
                    negativo = true;
                }
            }
        }
    }
}
