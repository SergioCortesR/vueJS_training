<script setup>
import { computed } from 'vue';

const props = defineProps({
    pais: Object
});
const pais = computed(() => props.pais)

const numeroFormato = (num) => {
    return new Intl.NumberFormat('de-DE').format(num);
}

</script>

<template>
    <div class="card mb-2">
        <div class="card-body">
            <h5 class="text-center">{{ pais.name.common }}</h5>
            <p class="text-center">
                <img :src="pais.flags.png" class="img-fluid w-25" :alt="`bandera-${pais.name.common}`">
            </p>
            <p class="card-text">
                <span class="badge text-bg-dark d-block mb-2">{{ pais.capital }}</span>
                <span class="badge text-bg-info p-3 d-block mb-2"> Population: {{ numeroFormato(pais.population)
                }}</span>
                <span class="badge text-bg-dark d-block mb-2">{{ pais.name.official }}</span>
                <span class="badge text-bg-dark d-block mb-2">{{ pais.region }}</span>
            </p>
        </div>
    </div>
</template>

