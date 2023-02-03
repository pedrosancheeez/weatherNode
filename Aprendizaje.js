
//Asignamos variable para usar la libreria
const yargs = require('yargs')

//declaramos version de yargs
yargs.version('1.1.0')



//declaramos el comando

/*yargs.command({
command: 'add',
describe: 'Add a new note',
handler: function () {
console.log('Adding a new note!')
}
})*/


//Usamos Builder para agregarle propiedades al command

/*yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
    title: {
    describe: 'Note title',
    demandOption: true,
    type: 'string'
    },
    body: {
    describe: 'Note body',
    demandOption: true,
    type: 'string'
    },
    footer: {
        describe: 'Note footer',
        //El demandOption es para hacer obligatorio o no el parametro
        
        demandOption: false,
        type: 'string'
    }

    },
    handler: function (argv) {
    console.log('Title: ' + argv.title)
    console.log('Body: ' + argv.body)
    }
    })*/

//COMO USAR JSON

/*const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
    }

    // Covert JavaScript object into JSON string
    const bookJSON = JSON.stringify(book)

    // Covert JSON string into object
    const bookObject = JSON.parse(bookJSON)

    console.log(bookObject.title) // Print: Ego is the Enemy*/

    
    //EJEMPLO DE USO DE FIND EN ARRAYS

    /*const users = [{
        name: 'Andrew Mead',
        age: 27
        },{
        name: 'George Hudson',
        age: 72
        },{
        name: 'Clay Klay',
        age: 45
        }]
        const user = users.find((user) => user.name === 'George Hudson')
        console.log(user)// print  name: 'George Hudson', age: 72 
        */
        

// Tipo de debug para node
// ejecutar node inspect app.js y buscar chrome://inspect

/*console.log("Thing one")
debugger // Debug tools will pause here until your click play again
console.log("Thing two")*/


//COMO USAR REQUEST

                    /*const request = require('request')

                    const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233'


                    //Con el metodo "request" usamos informacion que nos dan desde una URL
                    request({ url: url }, (error, response) => {

                    // Parse the response body from JSON string into JavaScript object
                    // Se parsea la data para poder usarla como objeto de JS
                    const data = JSON.parse(response.body)

                    // Will print the current temperature to the console
                    // Se acceden a los datos de la data antes parseada
                    console.log(data.currently.temperature)
                    })*/
    
    // Forma de parsear automatico con request, se debera poner adentro del request un "json: true"
                    
                    /*const request = require('request')
                    const url =
                    'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233'
                    request({ url: url, json: true }, (error, response) => {
                    console.log(response.body.daily.data[0].summary + ' It is currently ' +
                    response.body.currently.temperature + ' degrees out. There is a ' +
                    response.body.currently.precipProbability + '% chance of rain.')
                    })*/

// TRABAJAR CON ERRORES EN REQUEST
/*
            const request = require('request')
            const geocodeURL =
            'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoicGFibG9jb2R6IiwiYSI6ImNsYWN6d3IzaTAwdWU0MXBpMmdpNzg3cDYifQ.Ndcg6Ssmn2EPdNrekGfrnw&limit=1'
            request({ url: geocodeURL, json: true }, (error, response) => {
            if (error) {
            console.log('Unable to connect to location services!')
            } else if (response.body.features.length === 0) {
            console.log('Unable to find location. Try another search.')
            } else {
            const latitude = response.body.features[0].center[0]
            const longitude = response.body.features[0].center[1]
            console.log(latitude, longitude)
            }
            }) */

//PRIMERA PRUEBA CON GEOCODE
            /*const geocode = require('./utils/geocode')
            geocode('Boston', (error, data) => {
            console.log('Error', error)
            console.log('Data', data)
            })*/


//SEGUNDA PRUEBA COON FORECAST

/*
    geocode(address, (error, data) => {
    if (error) {
    return console.log(error)
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
    return console.log(error)
    }
    console.log(data.location)
    console.log(forecastData)
    })
    })*/

//Se llama al modulo "GEOCODE" para utilizarlo en el index

/*const geocode = require("./utils/geocode")


//Aca se accede a la funcion "geocode" q esta en el geocode.js dandole como datos el address 

geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
    })*/

//Forma de ejecutar una funcion asincronica despues de quee otra funcion asincronica se complete:

//Simplemente se anidan para que no se ejecute la funcion hasta que la otra no de el error o la data 

/*geocode(address, (error, data) => {
    if (error) {
    return console.log(error)
    }
        forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
    return console.log(error)
    }
    console.log(data.location)
    console.log(forecastData)
    })
    })*/



// Formas de desestructurar un objeto

//PREGUNTAR A PABLO ! 

/*
    const user = {
        name: 'Andrew',
        age: 27,
        location: 'Philadelphia'
        }

        // The line below uses destructuring

        const { age, location:address } = user
        console.log(age)
        console.log(address)*/

//Ejemplo de desestructuracion



/*const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
    }

    //Aca se define la funcion transaction recibiendo la data "type" y "label, stock" que estan adentro de la const product

    const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
    }

    //Aca se ejecuta la funcion "transaction" pasandole como segundo parametro al objeto "product"
    
    transaction('order', product)*/


//Aca se le asigna un valor a una variable para que nunca salga como undefinedç
/*
    const greeter = (name = 'user', age) => {
        console.log('Hello ' + name)
        }
        greeter('Andrew') // Will print: Hello Andrew
        greeter() // Will print: Hello user*/