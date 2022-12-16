<script setup>

const name = 'vue dinámico';
const styleColor ="color: aqua;"
const arrayColores = ["blue","red","yellow"];
const activo = false;

</script>

<template>
  <h1>Hola {{name.toUpperCase()}}</h1>

  <h3>{{arrayColores}}</h3>
  <h2 :style="`color: ${arrayColores[2]}`">Soy amarillo wuaaauuuu</h2>

  <h2 v-if="!activo"> Estoy inactivo </h2> <!-- Forma de hacer condicionales al igual que un atributo de etiqueta -->
  <p v-if="activo"> Estoy activo </p> <!-- Puedes usar un velse si ya usaste un v-if -->

  <h2 v-show = "!activo"> Estoy inactivo v-show</h2>

  
</template>

<style>
h1{
  color: blue;
}
</style>