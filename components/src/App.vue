<script setup>
import { ref } from 'vue';
import BlogPost from "./components/BlogPost.vue";
import Counter from "./components/BtnCounter.vue";
/* Tambien es posible usar v-for en un componente pasandole los valores de un array a traves del v-bind */
/* El ejemplo del array es más apegado a la vida real ya que se podrian consumir los elementos con una API */
/* Nuestro array estara funcionando de forma reactvia de modod que se hara uso de ref */
/* El array contiene un objeto por cada elemento */
/* La emision de eventos sirve para hacer algo en un componente y este se refleje en el componente padre */
const miArray = ref([
    { id: 1, title: "Post 1", cont: "Contenido 1", miestilo: "success" },
    { id: 2, title: "Post 2", cont: "Contenido 2", miestilo: "danger" },
    { id: 3, title: "Post 3", miestilo: "primary" },
]);

const favorito = ref("");
const cambiarFavorito = (titulo,segundoPa) => {
    favorito.value = titulo;
}
</script>

<template>
    <div class="container">
        <h1>Hello world Checo!</h1>
        <h2>Mi POST favorito: {{ favorito }} </h2>
        <Counter />
        <Counter />
        <!-- Forma de recibir props en las etiquetas componentes -->
        <!-- El doble punto indica que los valores se pasan a traves del v-bind -->
        <!-- Con el @ indicamos propiedades de los componentes -->
        <BlogPost v-for="element in miArray" :key="element.id" :id="element.id" :title="element.title"
            :cont="element.cont" :miestilo="element.miestilo" @miAccion = "cambiarFavorito">
        </BlogPost>

    </div>

</template>