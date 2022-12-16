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
        console.log(data.results);
    } catch (error) {
        console.log(error);
    }
}
obtenerPokemones();