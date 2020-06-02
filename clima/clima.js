const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a05380fd4a59595d1d778412b120a1d6&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}