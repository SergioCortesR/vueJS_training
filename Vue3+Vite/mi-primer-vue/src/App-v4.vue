<script setup>

const name = 'vue dinámico';
const arrayFrutas = [
  {
    name: "Manzana",
    price: "$1.00",
    description: "Una manzana",
    stock: 0,
  },
  {
    name: "Pera",
    price: "$2.00",
    description: "Una pera",
    stock: 10,
  },
  {
    name: "Naranja",
    price: "$3.00",
    description: "Una naranja",
    stock: 20,
  },
];

</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>

  <ul>
    <!--Template nos ayuda a recorrer el array sin imprimir nada como HTML hasta que se le solicita-->
    <template v-for="element in arrayFrutas">
      <li v-if="element.stock <= 0">
        No hay {{ element.name }} en stock
      </li>
      <li v-if="element.stock > 0">
        La fruta {{ element.name }} tiene stock mayor a 0
      </li>
    </template>
  </ul>

</template>

<style>
h1 {
  color: blue;
}
</style>