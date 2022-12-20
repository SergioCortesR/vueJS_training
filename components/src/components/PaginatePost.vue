<script setup>
const misProps = defineProps(["comienzo", "final","maximo"])
const emit = defineEmits(["previusSlide","nextSlide"])
</script>
<template>
    <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary" v-on:click="emit('previusSlide')" :disabled="comienzo === 0">

            Anterior</button>
        <button type="button" class="btn btn-primary" v-on:click="emit('nextSlide')" :disabled="final >= maximo">
            Siguiente
        </button>
    </div>
</template>