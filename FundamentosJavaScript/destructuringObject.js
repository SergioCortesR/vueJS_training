const mascota = {
    nombre: "Tom",
    edad: 10,
    vivo: true,
    razas: ['negro','peludo']
}

mascota.id = 1;
const {edad, nombre} = mascota;//Se crean nuevas variables que se tienen que llamar iguala los atributos de los objetos
console.log(edad, nombre);
