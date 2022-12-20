<script setup>
import { RouterLink } from "vue-router";
import { useGetData } from "@/composables/getData";

const {data,getData} = useGetData();

getData('https://pokeapi.co/api/v2/pokemon');

</script>
<template>
    <h1>Pokemones buenisimos</h1>

    <p v-for="pokemon in data.results">
        <!-- Redireccionar a vista con uso de variables del v-bind -->
        <RouterLink :to="`/pokemons/${pokemon.name}`">
            {{ pokemon.name }}
        </RouterLink>
    </p>
</template>