<script setup>

const name = 'vue dinámico';

let count = 0;
const aumentarContador = () => {
  console.log('aumentar contador');
  count++;
  console.log(count);
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
</template>

<style>
h1 {
  color: blue;
}
</style>