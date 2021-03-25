const mongoose = require('mongoose')
const schema   = mongoose.Schema

// https://mongoosejs.com/docs/schematypes.html
const CategorieSchema=new schema({
    nom:{type:String}
})

module.exports=Projet=mongoose.model('categorie',CategorieSchema)