<script setup>
import { ref, computed } from "vue";
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
/* 
Es recomendable usar computed con valores reactivos
pero si se quiere tambien colorClass puede funcionar como una simple funcion
 */
const colorClass = computed(() => { /* Las clases computadas siempre deben de tener un return */
  if (count.value > 0) {
    return 'positive'
  }
  if (count.value < 0) {
    return 'negative'
  }
  if (count.value === 0) {
    return 'zero'
  }
})

</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <!-- Si el contador es mayor que 0 se pinta de verde, caso contrario de pinta de rojo -->
  <!-- Se manda a llamar a la funcion que devuelve la clase equivalente al valor del count  -->
  <h2 :class="colorClass">
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
  <!-- 
  No es recomendable poner demasiada logica en etiquetas HTML ya que dificulta la carga de las mismas
  Es mejor usar clases computadas
 -->
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

.zero {
  color: peru
}
</style>