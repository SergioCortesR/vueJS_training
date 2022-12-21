<script setup>
import Boton from '../components/Boton.vue';
import { useContador } from "../Hooks/useContador";
const {numero, sumar, restar} = useContador();

</script>
<template>
    <h1>Contador con hooks: {{ numero }}</h1>
    <div class="container">
        <Boton :contenio="'Sumar'" @mi-accion-emit="sumar"></Boton>
        <br>
        <Boton :contenio="'Restar'" @mi-accion-emit="restar"></Boton>
    </div>

</template>