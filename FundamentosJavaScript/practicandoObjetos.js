const web = {
    nombre: 'blueweb',
    enlace: {
        link: 'www.blueweb.com'
    },
    redesSociales: {
        youtube: {
            enlace: 'www.blueweb.yt',
            nombre: 'bluewebYT'
        },

        facebook: {
            enlace: 'www.blueweb.fb',
            noSeguidores: 3000
        }
    }
}

console.log(web.redesSociales.youtube.enlace) //Obtenemos la propiedad con valor www.blueweb.yt
const {nombre,enlace} = web.redesSociales.youtube;
console.log(enlace,nombre);