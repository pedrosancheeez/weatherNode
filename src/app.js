
//Asignamos variable para usar la libreria
const yargs = require('yargs')

//declaramos version de yargs
yargs.version('1.1.0')
const path = require('path')
const express = require("express")
const app = express()
const hbs = require("hbs")
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')
const port = process.env.PORT || 3000


//Defines paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))



//Dando acceso al port
app.listen(port, () => {
console.log('Server is up on port ' + port)
})



//aca se accede a la carpeta templates/views 


app.set('views', viewsPath)

//aca se define las variables title y name para asginarlas en el html

app.get('', (req, res) => {
    res.render('index', {
    title: 'Bienvenidos',
    name: 'Pedro Sanchez'
    })
    })
    app.get('/about', (req, res) => {
        res.render('about', {
            title: 'About Me',
            name: 'Pedro'
        })
    })
    
    app.get('/help', (req, res) => {
        res.render('help', {
            title: 'Help',
            helpText: 'I will help you',
            name: 'Pedro'
        })
    })



app.get('/weather', (req, res) => {
     // All query string key/value pairs are on req.query
    const address = req.query.address
    if (!address) {
        return res.send({
            error: 'You must provide an address'
        })
    }

    geocode(address, (error, { latitude, longitude, location } = {}) => {
        console.log(address)
        if (error) {
            return res.send({
                error: error
            })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({
                    error: error
                })
            }
            res.send({
                forecast: forecastData,
                location,
                address: address
            })
        })
    })

    })


    app.get('/help/*', (req, res) => {
        res.render('404', {
            title: 'Help',
            error: 'Help article not found',
            name: 'Pablo'
        })
    })
    //Aca se llama a la pagina 404 que es la que se muestra cuando el user visita una pagina que nno existe
// "*" This can be used to create a route handler that matches all requests.
    app.get('*', (req, res) => {
        res.render('404', {
            title: '404',
            name: 'Pedro Sanchez',
            errorMessage: 'Page not found.'
        })
        })

