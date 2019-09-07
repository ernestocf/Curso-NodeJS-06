const express = require('express');
const app = express()
const port = process.env.PORT || 3000;
const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));
//Usar plantillas Hndlebars
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'ernesto dos puntos negros',
    });
});

app.get('/about', (req, res) => {

    res.render('about', {
        nombre: 'Ernesto',
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});