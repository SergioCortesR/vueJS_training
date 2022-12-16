<script setup>
import { ref } from "vue";
const name = 'vue dinámico';

const count = ref(0);
const aumentarContador = () => {
  count.value++;
}
const reducirContador = () => {
  count.value--;
}
const contadorAlCuadrado = () => {
  count.value *= count.value;
}
</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>

  <p>
    {{ count }}
  </p>
  <button v-on:click="aumentarContador()">
    Aumentar contador
  </button>
  <button v-on:click="reducirContador()">
    Reducir contador
  </button>
  <button v-on:click="contadorAlCuadrado()">
    Contador al cuadrado
  </button>
</template>

<style>
h1 {
  color: blue;
}
</style>