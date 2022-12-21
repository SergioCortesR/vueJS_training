    <!-- FORMA NUEVA DE PROPS EN SCRIPT -->
<script setup>
import { computed } from 'vue';
const misProps = defineProps({
    contador: Number,
    pintura: String
});
const signoPeso = computed(() => {
    return '$' + misProps.contador
})
</script>
<template>
    <h1 :style="{'color': pintura}">Contador dinamico {{ signoPeso }}</h1>
</template>