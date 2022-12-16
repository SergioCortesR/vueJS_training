
<!-- 
  Hacer un boton que crea un array en el cual agreguemos los numeros que nos salen con los botones
  El boton de agregar numero se tiene que bloquear si el numero ya esta agregado al array
-->
<script setup>
import { ref, computed } from "vue";
const name = 'Checo';
const arrayNumerico = ref([]);
const count = ref(0);

const aumentarContador = () => {
  habilitarFun();
  count.value++;
}
const reducirContador = () => {
  habilitarFun();
  count.value--;
}
const reiniciarContador = () => {
  habilitarFun();
  count.value = 0;
}

const colorClass = computed(() => {
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
const habilitarFun = () => {
  if (arrayNumerico.value.includes(count.value)) {
    return true;
  } else {
    return false;
  }
}

const agregarElemento = () => {
  habilitarFun();
  arrayNumerico.value.push(count.value);
}

</script>

<template>
  <h1>Practica de {{ name.toUpperCase() }} para un contador y un array</h1>
  <h2 :class="colorClass">
    {{ count }}
  </h2>
  <button class="btn btn-primary" v-on:click="aumentarContador()">
    Aumentar contador
  </button>
  <button class="btn btn-primary" v-on:click="reducirContador()">
    Reducir
  </button>
  <button class="btn btn-secondary" v-on:click="reiniciarContador()">
    Reiniciar el contador
  </button>
  <button class="btn btn-success" :disabled="habilitarFun()" v-on:click="agregarElemento()">
    Agregar numero
  </button>

  <ul>
    ARRAY DE NUMEROS FAVORITOS:
    <li v-for="(element) in arrayNumerico">
      {{ element }}
    </li>
  </ul>

</template>

<style>
h1 {
  color: aquamarine;
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