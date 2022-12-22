<script setup>
import { useStore } from 'vuex';
const store = useStore();
const filtro = (region) => {
    store.dispatch('filtrarRegion', region)
}
</script>
<template>
    <div class="text-center">
        <h3>
            Filtrar por continentes
        </h3>
        <div class="btn-group mb-3">
            <button class="btn btn-dark" v-on:click="filtro('Americas')">AM</button>
            <button class="btn btn-dark" v-on:click="filtro('Europe')">EU</button>
            <button class="btn btn-dark" v-on:click="filtro('Asia')">AS</button>
            <button class="btn btn-dark" v-on:click="filtro('Oceania')">OC</button>
            <button class="btn btn-dark" v-on:click="filtro('Africa')">AF</button>
            <button class="btn btn-dark" v-on:click="filtro('')">ALL</button>
        </div>
    </div>

</template>