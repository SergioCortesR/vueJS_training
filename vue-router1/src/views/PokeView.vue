<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { ref } from "vue";

const poke = ref({});
const image = ref('');
const route = useRoute();
const router = useRouter();
const back = () => {
    router.push('/pokemons')
}

const getData = async () => {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
        //console.log(data);
        poke.value = data;
        //console.log(poke.value.sprites.front_default);
    } catch (error) {
        console.log(error);
        poke.value = null
    }

}
//Error con front_default cannot read properties of undefined
//Es como si el atributo front no existiera, pero el navegador lo interpreta como si estuviera bien
//image = poke.value.sprites.front_default;
//Se resuelve con ? optional chainging


getData();
</script>

<template>
    <br>
    <div v-if="poke">

        <img :src="poke.sprites?.front_default" alt="" />
        <h2>Mi pokemon: {{ $route.params.name }}</h2>

    </div>
    <h1 v-else>No existe ese pokemon</h1>
    <br>
    <button class="btn btn-outline-primary" v-on:click="back">Volver</button>

</template>