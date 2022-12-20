<script setup>

const name = 'vue dinámico';
const arrayFrutas = [
  {
    name: "Manzana",
    price: "$1.00",
    description: "Una manzana"
  },
  {
    name: "Pera",
    price: "$2.00",
    description: "Una pera"
  },
  {
    name: "Naranja",
    price: "$3.00",
    description: "Una naranja"
  }, {
    name: "Platano",
    price: "$12.00",
    description: "Un platanoncio"
  }, {
    name: "Kiwi",
    price: "$8.00",
    description: "Uno kiwiiiiiiii"
  }
];

const objetoFruta = {
  name: "Kiwi",
  price: "$8.00",
  description: "Uno kiwiiiiiiii",
  sabor: "ricolino"
}
</script>

<template>
  <h1>Hola {{ name.toUpperCase() }}</h1>
  <table>
    <tr>
      <th>ID</th>
      <th>NOMBRE</th>
    </tr>
    <!-- Por cada elemento del arrayFrutas genera un tablerow dentro de mi tabla -->
    <!-- Si en v-for usas un array primero se recibe el elemento competo y luego un indice númerico entero -->
    <tr v-for="(element, index) in arrayFrutas" :key=element.name>
      <td>{{ index }}</td>
      <td>{{ element.name }}</td>
    </tr>
  </table>
  <br>
  <!-- V-for también puede recorrer objetos pero con 3 parametros, (valorDePropiedad,NombrePropiedad,Indice) -->
  <!-- Por cada atributo del objetoFruta genera una etiqueta p -->
  <p v-for="(atributo,propiedad,indice) in objetoFruta">
  {{indice}}: {{propiedad}} ------- {{ atributo }}
  </p>

</template>

<style>
h1 {
  color: blue;
}
</style>