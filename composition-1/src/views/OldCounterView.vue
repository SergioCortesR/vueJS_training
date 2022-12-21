<!-- Vieja forma de hacer el script -->
<script>
import Titulo from "../components/Titulo.vue";
export default {
    data() {
        return {
            contador: 0,
            texto: ""
        };
    },
    computed: {
        color() {
            if (this.contador < 0) {
                return "red";
            }
            else {
                return "aqua";
            }
        }
    },
    methods: {
        sumar() {
            this.contador += 1;
        },
        restar() {
            this.contador -= 1;
        }
    },
    components: { Titulo }
}

</script>
<template>
    <div class="container">
        <Titulo :contador="contador"></Titulo>
        <h1 :style="{ 'color': color }">Contador 3: {{ contador }}</h1>
    </div>


    <div class="btn btn-primary me-4" v-on:click="sumar">Sumar</div>
    <div class="btn btn-primary" v-on:click="restar">Restar</div>
    <div>
        <hr>
        <input type="text" v-model="texto">
        <p>{{ texto }}</p>
    </div>
</template>