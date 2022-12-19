<script setup>
import { ref } from 'vue';
import BlogPost from "./components/BlogPost.vue";
import Counter from "./components/BtnCounter.vue";
import PaginatePost from "./components/PaginatePost.vue";
import Spinner from "./components/LoadingSpinner.vue";


const favorito = ref("");
const cambiarFavorito = (titulo, segundoPa) => {
    favorito.value = titulo;
}

const miArray = ref([])
//Fetch sirve para consumir una api y recibirla como un json
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => miArray.value = data)
    .catch((e) => console.log(e))
    .finally(() => {
        setTimeout(() => {
            loading.value = false
        }, 1000);
    }
    );
let postXpage = 10;
const inicio = ref(0);
const fin = ref(postXpage);

const nextPage = () => {
    inicio.value += postXpage;
    fin.value += postXpage;
}
const previusPage = () => {
    inicio.value -= postXpage;
    fin.value -= postXpage;
    /* console.log("Inicio: ", inicio.value);
    console.log("Fin: ", fin.value); */
}
const loading = ref(true);
</script>

<template>
    <Spinner v-if="loading" />

    <div class="container" v-else>
        <h1>Hello world Checo!</h1>
        <h3>Aplicacion para titulos favoritos</h3>

        <h2>Mi POST favorito: {{ favorito }} </h2>
        <!-- <Counter /><Counter /> -->

        <PaginatePost @previusSlide="previusPage" @nextSlide="nextPage" :comienzo="inicio" :final="fin"
            :maximo="miArray.length" class="mb-4">
        </PaginatePost>
        <p>Longitud del array: {{ miArray.length }}</p>

        <BlogPost v-for="element in miArray.slice(inicio, fin)" :key="element.id" :id="element.id"
            :title="element.title" :cont="element.body" @miAccionEmit="cambiarFavorito">
        </BlogPost>

    </div>

</template>