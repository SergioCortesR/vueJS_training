<!-- Contador con el setup como atributo del script -->
<!-- Nueva forma de hacer el scrpit -->
<script setup>
/* import TheWelcome from '../components/TheWelcome.vue'*/
import { ref, computed } from "vue";
import Titulo from "../components/Titulo.vue"
import Boton from "../components/Boton.vue";
const numero = ref(0);
const texto = ref('');

const sumar = () => {
  numero.value += 1;
}
const restar = () => {
  numero.value -= 1;
}
const funColor = computed(() => {
  if (numero.value < 0) {
    return 'red';
  } else {
    return 'aquamarine'
  }
});

</script>

<template>
  <div class="container">
    <Titulo :contador="numero"></Titulo>
    <h1 :style="{ 'color': funColor }">Contador 1: {{ numero }}</h1>
  </div>
<!-- Con el signo @ pasas eventos a traves de emmit -->
  <Boton contenio="sumar" @mi-accion-emit="sumar"></Boton>
  <Boton contenio="restar" @mi-accion-emit="restar"></Boton>
  <!--   <button class="btn btn-primary me-4" v-on:click="sumar">Sumar</button>
  <button class="btn btn-primary" v-on:click="restar">Restar</button>
 -->
  <div>
    <hr>
    <input type="text" v-model="texto">
    <p>{{ texto }}</p>
  </div>


  <!-- <TheWelcome /> -->
</template>
