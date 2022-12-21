<script>
import { useFetch } from '../hooks/useFetch'
export default {
    setup() {
        //return {...useFetch('https://restcountries.com/v3.1/all')}
        return { ...useFetch('https://restcountries.com/v3.1/all') }
    }
}
</script>
<template>
    <h1>Lista de Paises</h1>
    <p v-for="(pais, index) in arrayData" :key="index">
        <router-link :to="`/paises/${pais.name.common}`">
            {{ pais.name.common }}
        </router-link>
    </p>
</template>