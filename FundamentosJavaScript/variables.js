// var vs let vs const

/* 
    let no permite declrar dos veces la misma variable pero si el valor de la misma
    var permite declarar dos veces la misma variable
    const nunca cambia su valor a lo largo de los procesos
    el const no aplica para arreglos y objetos cuando se les aplican funciones especificas
    
*/
var edad = 10;
var edad = 20;

let edad = 20;
edad = 10;

const color = "Azul";

console.log(edad);