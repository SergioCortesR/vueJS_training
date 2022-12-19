<script setup>
/* Los props se usan como el argumento de un metodo para mostrar elementos */
/* Importante, para ver los props siempre recarga la pagina con f5 */
/* Obviamente solo puedes mandar llamar defineprops de esta manera si el script tiene setup */
/* No solo se puede usar para poner texto, sino que usar props para definir estilos */
/* Tambien se puede acceder a los props si estos los metemos a una variable para debugear el programa */
/* Otra forma de acceder a los props es mediante un objeto y este mismo especifica tipos de valores */

//const misProps = defineProps(['title', 'cont', 'miestilo']);
const misProps = defineProps({
    id: Number,
    title: String,
    miestilo: String,
    cont: {
        texto: String,
        default: "No hay contenido aqui"
    }
});
/* console.log(misProps.id);*/
console.log(misProps.title);
</script>

<template>

    <div class="card" style="color: black;">
        <div class="card-body">
            <h5 class="card-title" :class="`text-${miestilo}`">
                {{ title }}</h5>
            <p> Contenido: {{ cont }}</p>
            <!--
                 El boton manda un emit tratando de ejecutar un metodo que no se conoce (cambiarFavorito)
                 mas que un metodo regresa una propiedad que se esta esperando en el componente padre
                 de cualquier etiqueta html
                 y a la ves esta regresando el titulo que tenga el componente con su contenido
                 el emit puede regresar cuantas variables se requieran
            -->
            <button class="btn btn-outline-primary" v-on:click="$emit('miAccion', title, cont)">
                Cambiar
            </button>
        </div>
    </div>

</template>
<style>

</style>