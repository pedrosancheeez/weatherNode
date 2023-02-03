
//Asignamos variable para usar la libreria
const yargs = require('yargs')

//declaramos version de yargs
yargs.version('1.1.0')
const path = require('path')
const express = require("express")
const app = express()
const hbs = require("hbs")


const partialsPath = path.join(__dirname,"../templates/partials")
hbs.registerPartials(partialsPath)
app.set("view engine", "hbs")

//Aca se accede a la carpeta public

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

//aca se accede a la carpeta templates/views 

const viewsPath = path.join(__dirname, '../templates/views')
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
    res.send('You provided "' + req.query.address + '" as the address.')
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
//se le asigna un puerto al servidor
app.listen(3001, () => {
    console.log('Server is up on port 3000.')
    })