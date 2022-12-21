<!-- Contador con el setup como atributo del script -->
<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from "vue";
const numero = ref(0);

const sumar = () => {
  numero.value += 1;
}
const restar = () => {
  numero.value -= 1;
}

</script>

<template>
  <h1>Contador 1: {{ numero }}</h1>

  <button class="btn btn-primary me-4" v-on:click="sumar">Sumar</button>
  <button class="btn btn-primary" v-on:click="restar">Restar</button>

  <!-- <TheWelcome /> -->
</template>
