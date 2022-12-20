<script setup>
import { RouterLink } from "vue-router";
import { useGetData } from "@/composables/getData";

const { data, getData, loading, error } = useGetData();

getData('https://pokeapi.co/api/v2/pokemon');

</script>
<template>
    <h1>Pokemones buenisimos</h1>
    <p v-if="loading">Cargando...</p>

    <div class="alert alert-danger" v-if="error">{{ error }}</div>

    <div v-if="data">
        <ul class="list-group">


            <li v-for="pokemon in data.results" class="list-group-item">
                <!-- Redireccionar a vista con uso de variables del v-bind -->
                <RouterLink :to="`/pokemons/${pokemon.name}`">
                    {{ pokemon.name }}
                </RouterLink>
            </li>

        </ul>
        <button :disabled="!data.previous" class="btn btn-warning me-2" @click="getData(data.previous)">Preview</button>
        <button :disabled="!data.next" class="btn btn-warning" @click="getData(data.next)">Next</button>

    </div>
</template>