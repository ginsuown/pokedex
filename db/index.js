const mongoose = require('mongoose');

const uri = "mongodb+srv://ashKetchum:gottaCatchThemAll@cluster0-ua8fn.mongodb.net/Pokemon?retryWrites=true";
mongoose.connect(uri, {useNewUrlParser: true});

var database = mongoose.connection;

database.once('open', () => {
    console.log('database connection open')
})

database.on('error', (error)=> {
    console.error(error);
});

module.exports.database = database;