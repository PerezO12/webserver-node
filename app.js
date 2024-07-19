//importacion de 3eros
require('dotenv').config();
const express = require('express');
const hbs = require('hbs');


const app = express()
const port = process.env.PORT;


//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido estatico
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('home',{
    nombre: 'Adrián Pérez',
    titulo: 'Curso Node'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre: 'Adrián Pérez',
    titulo: 'Curso Node'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre: 'Adrián Pérez',
    titulo: 'Curso Node'
  });
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});




//puerto
app.listen(port, () => {
  console.log(`Puerto en el que se esta ejecutando ${port}`)
});