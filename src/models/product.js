'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//mapear os objetos dentro da base de dados
const schema = new Schema({
    //colunas do objeto
    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    price:{
        type: Number,
        required: true,
    },
    active:{
        type: Boolean,
        required: true,
        default: true
    }
});

//exportando a model, passando como parâmetros o nome que ela terá e o schema
module.exports = mongoose.model('Product', schema);