/**
 * Arquivo: src/components/Calculadura.js
 * Data: 20/02/2021
 * Author: Paulo Lucas
 * Descrição: arquivo responsável por tratar toda a lógica da Calculadora.
 */

export default {
  data() {
    return {
      valorCorrente: '',
      numeroAnterior: null,
      operador: null,
      operadorClicado: false
    }
  },
  methods: {
    // Método responsável por limpar o display da 'Calculadora' 
    limpar() {
      this.valorCorrente = ''
    },

    /**
     * Método responsável por colocar o sinal '-' ou '+' para realizar operações
     * matemáticas especiais.
     */
    sinal() {
      this.valorCorrente = this.valorCorrente.charAt(0) === '-'
        ? this.valorCorrente.slice(1)
        : `-${this.valorCorrente}`
    },
    // Método responsável por realizar operações com 'porcentagens'
    porcentagem() {
      this.valorCorrente = `${parseFloat(this.valorCorrente) / 100}`
    },

    // Método responsável por juntar os números no display da Calculadora
    juntarNumeros(numero) {
      if (this.operadorClicado) {
        this.valorCorrente = ''
        this.operadorClicado = false
      }

      this.valorCorrente = `${this.valorCorrente}${numero}`
    },
    // Método responsável por adicionar o 'ponto' no display da Calculadora
    ponto() {
      if (this.valorCorrente.indexOf('.') === -1) {
        this.juntarNumeros('.')
      }
    },
    // Método responsável por 'resetar' o valor da Calculadora
    setarValor() {
      this.numeroAnterior = this.valorCorrente
      this.operadorClicado = true
    },
    // Método responsável por apresentar o resultado das operações na Calculadora
    resultado() {
      this.valorCorrente = `${this.operador(
        parseFloat(this.numeroAnterior),
        parseFloat(this.valorCorrente)
      )}`
      this.numeroAnterior = null
    },
    // Método responsável por realizar a operação da 'divisão' na Calculadora
    dividir() {
      this.operador = (num1, num2) => num1 / num2
      this.setarValor()
    },
    // Método responśavel por realizar a operação de 'multiplicação' na Calculadora
    multiplicar() {
      this.operador = (num1, num2) => num1 * num2
      this.setarValor()
    },
    // Método responsável por realizar a operação de 'diminuir' na Calculadora
    diminuir() {
      this.operador = (num1, num2) => num1 - num2
      this.setarValor()
    },
    // Método responsável por realizar a operação de 'somar' na Calculadora
    somar() {
      this.operador = (num1, num2) => num1 + num2
      this.setarValor()
    }
  }
}