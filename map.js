fetch('https://pokeapi.co/api/v2/pokemon/')
.then( res => res.json())
.then(data => {
    data.results.forEach(element => {
        console.log(element)
    });
})
.catch(error => console.log(error));

//Trabajar de la misma manera que con el then
//Se busca trabajar con apis con un código más legible

const obtenerPokemones = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await res.json();
        const arrayNombres = data.results.map(poke => poke) //Recorre el json creando un nuevo array (función map)
        console.log(arrayNombres);
    } catch (error) {
        console.log(error);
    }
}
obtenerPokemones();