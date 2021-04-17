const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var categorieSchema = new mongoose.Schema({
    catName:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    catId:{
        type:String,
        required:true,
        unique:true,
    },
});

//Export the model
module.exports = mongoose.model('Categorie', categorieSchema);