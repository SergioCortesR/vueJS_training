<script setup>
import { ref } from "vue";
import axios from 'axios';
import { RouterLink } from "vue-router";

const pokemons = ref([]);

const getData = async () => {
    try {
        //Destructuracion del resultado
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
        //console.log(data.results);
        pokemons.value = data.results;
    } catch (error) {
        console.log(error);
    }
}

getData();

</script>
<template>
    <h1>Pokemones buenisimos</h1>

    <p v-for="element in pokemons">
        <!-- Redireccionar a vista con uso de variables del v-bind -->
        <RouterLink :to="`/pokemons/${element.name}`">
            {{ element.name }}
        </RouterLink>
    </p>
</template>