const express=require('express')
const router=express.Router()

const Categorie=require('../models/Categorie')


// sur POST sans id : il s'agit de la création du document
// localhost:5000/categorie/new
router.post("/categorie/new",(req,res)=>{
    const {nom}=req.body
    const newCategorie=new Categorie({
        nom
    })
    newCategorie.save()
    .then(projet=>res.send(projet))
    .catch(err=>console.log(err))
})

// sur DELETE avec id : la suppression d'un document
//localhost:5000/categorie/6055c2a61bcfb139a404b3a0
router.delete("/categorie/:_id",(req,res)=>{
    const {_id}=req.params
    Categorie.findOneAndDelete({_id:_id})
    .then(projet=>res.send("success"))
    .catch(err=>console.log(err))
})
