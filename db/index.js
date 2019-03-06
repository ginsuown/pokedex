const mongoose = require('mongoose');

mongoose.connect('');

var database = mongoose.connection;

database.once('open', () => {
    console.log('database connection open')
})

database.on('error', ()=> {
    console.log('error')
});

module.exports.database = database;