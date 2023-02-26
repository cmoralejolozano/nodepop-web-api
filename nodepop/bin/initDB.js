'use strict';

const Item = require('../models/Item')
const connection = require('../lib/connectMongoose')
const jsonFile = require('../resources/init_items.json')

async function initItems(){
    // eliminamos todos los registros que haya en la BBDD
    await Item.deleteMany();
    // insertamos algunos
    await Item.insertMany(jsonFile.items)

}

async function main (){
    await initItems();
    connection.close()
}

main().catch(err=> console.log('An error occurred',err));