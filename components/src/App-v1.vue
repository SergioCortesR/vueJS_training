<!-- Forma de trabajar con el api de options -->
<script>
export default {
    data() {
        return {
            counter: 0

        }
    },
    methods: {
        increment() {
            this.counter++;
        }
    }
};
</script>

<template>
    <h1>Hello world!</h1>
    <br>
    <button v-on:click="increment()">{{ counter }}</button>
</template>