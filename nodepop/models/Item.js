'use strict';

const mongoose = require('mongoose')
// definir el esquema del item
const itemSchema = mongoose.Schema({
    name: String,
    for_sale : Boolean,
    price: Number,
    image: String,
    tags: Array
})

// creo método para poder filtrar
itemSchema.statics.lista = function(filter, skip, limit, sort, fields){
    const query = Item.find(filter);
    query.skip(skip);
    query.limit(limit);
    query.sort(sort);
    query.select(fields);

    return query.exec();
}

// crear el módulo de agente
const Item = mongoose.model('Item', itemSchema, 'items');

// exportamos el modelo
module.exports = Item;