const mongoose = require('mongoose')

mongoose.connection.on('error', err=> {
    console.log('Connection error', err)
});

mongoose.connection.once('open', ()=>{
    console.log('Connected to MongoDB on', mongoose.connection.name)
});

mongoose.connect('mongodb://127.0.0.1:27017/nodepop');

module.exports = mongoose.connection