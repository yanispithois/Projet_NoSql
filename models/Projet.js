const mongoose = require('mongoose')
const schema   = mongoose.Schema

// https://mongoosejs.com/docs/schematypes.html
const ProjetSchema=new schema({
    nom:{type:String},
    categorie:{type:String},
    porteur:{type:String},
    palier:{type:Number}
})

module.exports=projet=mongoose.model('projet',ProjetSchema)
