<script setup>

const name = 'vue dinámico';
const handleClick = (texto) => {
  console.log(texto)
}

</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <!-- En ves de v on click tambie n se puede usar @click-->
  <button v-on:click="handleClick('Izquierdo')">
    Me activas con click izquierdo
  </button>

  <button v-on:click.right.prevent ="handleClick('Derecho')">
    Me activas con click derecho
  </button>

  <button v-on:click.middle="handleClick('Click en Ruedita')">
    Me activas con click en la ruedita de en medio
  </button>

</template>

<style>
h1 {
  color: blue;
}
</style>