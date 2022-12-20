<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const back = () => {
    router.push('/pokemons')
}
</script>
<template>
    <h1>Error 404 not found</h1>
    <button v-on:click="back" class="btn btn-outline-primary">Regresar</button>
</template>