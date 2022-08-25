//app.js é onde faremos a montagem do nosso servidor

const express = require('express'); //referência à biblioteca express
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Gigio:Gigio1310@cluster0.poa1gs9.mongodb.net/sample_mflix");

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(function (req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    next();
});

//registrar a model
require('./models/product');

//registrar a rota
const productRouter = require('./routes/product-route');

const index = require('./routes/index')

app.use('/', index);
app.use('/products', productRouter);


module.exports = app
