<script setup>
//Api: https://restcountries.com/v3.1/all
import { useStore } from 'vuex';
import { onMounted, computed, ref } from 'vue';
import CardItem from "./CardItem.vue";

const store = useStore();
const paises = computed(() => {
    return store.getters.topPaisesPoblacion;
});
onMounted(async() => {
    //store.state.paises
    await store.dispatch('getPaises');
    await store.dispatch('filtrarRegion','');
})

</script>
<template>
    <div class="row">
        <div class="col-12" v-for="(pais,index) in paises" :key="pais.name">
            <!-- v-for="pais in paises" :key="pais.name" -->
            Numero:{{index+1}}
            <br>

             <CardItem :pais="pais"></CardItem>
        </div>
    </div>
</template>