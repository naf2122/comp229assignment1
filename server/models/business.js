let mongoose = require('mongoose');

// create a model class
let businessModel = mongoose.Schema({
    name: String,
    email: String,
   number: Number
},
{
    collection: "users"
});

module.exports = mongoose.model('Business', businessModel);