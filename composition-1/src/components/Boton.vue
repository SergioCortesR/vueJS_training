<script setup>
const misEmmit = defineEmits(['miAccionEmit']);
const misProps = defineProps({
    contenio: String
})
</script>
<template>
    <div class="container">
        <button class="btn btn-primary" v-on:click="misEmmit('miAccionEmit')"> {{ misProps.contenio }}</button>
    </div>
</template>