<!-- Contador con el setup definido dentro del script -->
<script>
import { ref } from "vue";

export default {
  setup() {
    const numero = ref(0);
    const sumar = () => {
      numero.value += 1;
    }
    const restar = () => {
      numero.value -= 1;
    }
    return {numero, sumar, restar}
  }
}

</script>
<template>
  <h1>Contador 2: {{ numero }}</h1>
  <div class="btn btn-primary me-2" v-on:click="sumar">Sumar</div>
  <div class="btn btn-primary" v-on:click="restar">Restar</div>
</template>
