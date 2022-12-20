<script setup>

const name = 'vue dinámico';
const arrayFrutas = ["🍎", "🍌", "🍉", "🍓", "🍒"];

</script>

<template>
  <h1>Hola {{name.toUpperCase()}}</h1>

  <ul>
    <li
      v-for="(elemento, indice) in arrayFrutas"
      :key = indice
    >
    
    {{elemento}} - {{indice}}
    </li>
  </ul>
  
</template>

<style>
h1{
  color: blue;
}
</style>