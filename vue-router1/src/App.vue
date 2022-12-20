<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">

        <a class="navbar-brand" href="#">
          <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
          Poke API
        </a>
      </RouterLink>
    </div>
    <div>
      <!--
        Tambien se puede marcar como "usando" a un boton del menu
        colocando el atributo de active-class: active a cada router link
     -->
      <RouterLink class="btn btn-outline-primary me-2" to="/">Home</RouterLink>
      <RouterLink class="btn btn-outline-primary" to="/pokemons">pokemons</RouterLink>
    </div>
  </nav>

  <div class="container">
    <RouterView />

  </div>
</template>
