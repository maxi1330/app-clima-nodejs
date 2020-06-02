const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLang(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//         clima.getClima(resp.latitud, resp.longitud)
//             .then(resp => { console.log(resp, "Grados") })
//             .catch(err => console.log(err));
//     });

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLang(direccion);
        const temp = await clima.getClima(coords.latitud, coords.longitud);
        return `El clima de ${coords.direccion} es de ${temp} grados.`
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}, ${error}`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);