<script setup>
import { ref } from "vue";
const name = 'vue dinámico';

/* Con afn PUEDES HACER UN ARROW FUNCTION EN AUTOMATICO  (first) => { second } */

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
const reiniciarContador = () => {
  count.value = 0;
}
</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <!-- Si el contador es mayor que 0 se pinta de verde, caso contrario de pinta de rojo -->
  <!-- Se usan v/if y else para calificar si se usa una etiqueta u otra -->
  <h1 v-if="count > 0" style="color: green;">
    {{ count }}
  </h1>
  <h1 v-else style="color: red;">
    {{ count }}
  </h1>

  <!-- Una mejor forma de resolver los colores -->

  <h2 :class="count >= 0 ? 'positive' : 'negative'">
        {{ count }}
    </h2>
  <button v-on:click="aumentarContador()">
    Aumentar contador
  </button>
  <button v-on:click="reducirContador()">
    Reducir contador
  </button>
  <button v-on:click="contadorAlCuadrado()">
    Contador al cuadrado
  </button>
  <button v-on:click="reiniciarContador()">
    Reiniciar el contador
  </button>
</template>

<style>
h1 {
  color: blue;
}
.negative {
    color: red;
}

.positive {
    color: green;
}

</style>