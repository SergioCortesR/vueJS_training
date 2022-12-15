<script setup>

const name = 'vue dinámico';
const arrayFrutas = [
  {
    name: "Manzana",
    price: "$1.00",
    description: "Una manzana",
  },
  {
    name: "Pera",
    price: "$2.00",
    description: "Una pera",
  },
  {
    name: "Naranja",
    price: "$3.00",
    description: "Una naranja",
  }, {
    name: "Platano",
    price: "$12.00",
    description: "Un platanoncio",
  }, {
    name: "Kiwi",
    price: "$8.00",
    description: "Uno kiwiiiiiiii",
  }
];
</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <table>
    <tr>
      <th>ID</th>
      <th>NOMBRE</th>
    </tr>
    <!-- Por cada elemento del arrayFrutas genera un tablerow dentro de mi tabla -->
    <tr v-for="(element, index) in arrayFrutas"
    :key = element.name
    >
      <td>{{ index }}</td>
      <td>{{ element.name }}</td>
    </tr>
  </table>

</template>

<style>
h1 {
  color: blue;
}
</style>