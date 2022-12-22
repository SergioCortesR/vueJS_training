<script setup>
import CardList from './components/CardList.vue';
import FilterCont from "./components/ContintentFilter.vue";
import Buscador from "./components/SearchItem.vue";
</script>

<template>
  <div class="container">
    <h1 class="text-center">API Paises</h1>
    Api de paises por: Sergio Cortes
    <br>
    <FilterCont></FilterCont>
    <Buscador></Buscador>
    <CardList></CardList>
  </div>

</template>