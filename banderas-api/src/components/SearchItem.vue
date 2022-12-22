<script setup>
import { ref } from "vue";
import { useStore } from 'vuex';
const texto = ref('')
const store = useStore();

const procesarInput = () => {
    /* console.log(texto.value); */
    store.dispatch('filtroNombre', texto.value)
}

</script>
<template>
    <input type="text" placeholder="Ingresa un pais!" class="form-control my-3" v-model="texto" @keyup="procesarInput">
</template >