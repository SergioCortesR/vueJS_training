<!-- Contador con el setup definido dentro del script, no tan vieja forma -->
<script>
import { ref, computed } from "vue";
import Titulo from "../components/Titulo.vue";

export default {
  setup() {
    const numero = ref(0);
    const texto = ref("");
    const sumar = () => {
      numero.value += 1;
    };
    const restar = () => {
      numero.value -= 1;
    };
    const funColor = computed(() => {
      if (numero.value < 0) {
        return "red";
      }
      else {
        return "aquamarine";
      }
    });
    return { numero, texto, sumar, restar, funColor };
  },
  components: { Titulo }
}

</script>
<template>
  <div class="container">
    <Titulo :contador="numero" :pintura="funColor"></Titulo>
    <h1 :style="{ 'color': funColor }">Contador 2: {{ numero }}</h1>
  </div>

  <div class="btn btn-primary me-4" v-on:click="sumar">Sumar</div>
  <div class="btn btn-primary" v-on:click="restar">Restar</div>
  <div>
    <hr>
    <input type="text" v-model="texto">
    <p>{{ texto }}</p>
  </div>
</template>
