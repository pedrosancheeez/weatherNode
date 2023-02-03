
//Logica para usar GEOCODE

const request = require('request')
const geocode = (address, callback) => {
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicGFibG9jb2R6IiwiYSI6ImNsYWN6d3IzaTAwdWU0MXBpMmdpNzg3cDYifQ.Ndcg6Ssmn2EPdNrekGfrnw&limit=1'


request({ url: url, json: true }, (error, response) => {
    if (error) {
        callback('Unable to connect to location services!', undefined)
    } else if (response.body.features.length === 0) {
callback('Unable to find location. Try another search.',
undefined)
    } else {
        //Aca el callback se usa como un return
    callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
})
}
})
}

//Aca se exporta el modulo como geocode para poder usarlo en la raiz
module.exports = geocode