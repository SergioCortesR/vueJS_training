<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { useGetData } from "@/composables/getData";


const route = useRoute();
const router = useRouter();
const back = () => {
    router.push('/pokemons')
}

const { data, getData, loading, error } = useGetData();

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

//Error con front_default cannot read properties of undefined
//Es como si el atributo front no existiera, pero el navegador lo interpreta como si estuviera bien
//image = poke.value.sprites.front_default;
//Se resuelve con ? optional chaingin

</script>

<template>
    <br>
    <p v-if="loading">Cargando...</p>
    <div class="alert alert-danger" v-if="error">
        {{ error }}
        No existe el pokemon
    </div>
    <div v-if="data">

        <img :src="data.sprites?.front_default" alt="" />
        <h2>Mi pokemon: {{ $route.params.name }}</h2>

    </div>
    <br>
    <button class="btn btn-outline-primary" v-on:click="back">Volver</button>

</template>