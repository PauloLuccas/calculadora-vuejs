<template>
  <div>
    <div class="calculadora">
      <div class="display">{{valorCorrente || '0'}}</div>
      <div v-on:click="limpar" class="botao">C</div>
      <div v-on:click="sinal" class="botao">+/-</div>
      <div v-on:click="porcentagem" class="botao">%</div>
      <div class="botao operadores">/</div>
      <div v-on:click="juntarNumeros('7')" class="botao">7</div>
      <div v-on:click="juntarNumeros('8')" class="botao">8</div>
      <div v-on:click="juntarNumeros('9')" class="botao">9</div>
      <div class="botao operadores">x</div>
      <div v-on:click="juntarNumeros('4')" class="botao">4</div>
      <div v-on:click="juntarNumeros('5')" class="botao">5</div>
      <div v-on:click="juntarNumeros('6')" class="botao">6</div>
      <div class="botao operadores">-</div>
      <div v-on:click="juntarNumeros('1')" class="botao">1</div>
      <div v-on:click="juntarNumeros('2')" class="botao">2</div>
      <div v-on:click="juntarNumeros('3')" class="botao">3</div>
      <div class="botao operadores">+</div>
      <div v-on:click="juntarNumeros('0')" class="botao zero">0</div>
      <div v-on:click="ponto" class="botao">.</div>
      <div class="botao operadores">=</div>
    </div>
  </div>
</template>

<script>
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
    limpar() {
      this.valorCorrente = ''
    },
    sinal() {
      this.valorCorrente = this.valorCorrente.charAt(0) === '-'
        ? this.valorCorrente.slice(1)
        : `-${this.valorCorrente}`
    },
    porcentagem() {
      this.valorCorrente = `${parseFloat(this.valorCorrente) / 100}`
    },
    juntarNumeros(numero) {
      if (this.operadorClicado) {
        this.valorCorrente = ''
        this.operadorClicado = false
      }

      this.valorCorrente = `${this.valorCorrente}${numero}`
    },
    ponto() {
      if (this.valorCorrente.indexOf('.') === -1) {
        this.juntarNumeros('.')
      }
    },
    setarValor() {
      this.numeroAnterior = this.valorCorrente
      this.operadorClicado = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.calculadora {
  display: grid;
  margin: 0 auto;
  width: 350px;
  font-size: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
.display {
  grid-column: 1 / 5;
  background-color: #333;
  color: #fff;
  font-size: 40px;
}
.zero {
  grid-column: 1 / 3;
}
.botao {
  background-color: #f2f2f2;
  border: 1px solid #999;
  line-height: 50px;
  cursor: pointer;
}
.operadores {
  background-color: orange;
  color: white;
}
</style>
