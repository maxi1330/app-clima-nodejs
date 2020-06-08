const axios = require('axios');

const getLugarLatLang = async(city) => {
    const encodedCityName = encodeURI(city);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedCityName}`,
        headers: { "X-RapidAPI-Key": "cc5f314821mshc533cecb5832b8cp1201e2jsn6576f3d421f6" },
    });

    const respuesta = await instance.get();
    if (respuesta.data.Results.length === 0) { throw new Error(`No hay resultados para ${city}`) }

    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    return {
        direccion,
        latitud,
        longitud
    }
}

module.exports = {
    getLugarLatLang
}