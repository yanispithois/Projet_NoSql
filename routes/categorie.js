const express=require('express')
const router=express.Router()

const Categorie=require('../models/Categorie')


// sur POST sans id : il s'agit de la création du document
// localhost:5000/Categorie/new
router.post("/Categorie/",(req,res)=>{
    const {nom}=req.body
    const newCategorie=new Categorie({
        nom
    })
    newCategorie.save()
    .then(Categorie=>res.send(Categorie))
    .catch(err=>console.log(err))
})

router.get("/Categorie/",(req,res)=>{
    Categorie.find()
    .then(Categorie=>res.send(Categorie))
    .catch(err=>console.log(err))
})

// sur DELETE avec id : la suppression d'un document
//localhost:5000/Categorie/6055c2a61bcfb139a404b3a0
router.delete("/Categorie/:_id",(req,res)=>{
    const {_id}=req.params
    Categorie.findOneAndDelete({_id:_id})
    .then(Categorie=>res.send("success"))
    .catch(err=>console.log(err))
})
module.exports=router
