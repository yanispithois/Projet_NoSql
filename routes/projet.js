const express=require('express')
const router=express.Router()

const Projet=require('../models/Projet')


// sur POST sans id : il s'agit de la création du document
// localhost:5000/projet/new
router.post("/projet/new",(req,res)=>{
    const {nom,categorie,porteur,palier}=req.body
    const newProjet=new Projet({
        nom,categorie,porteur,palier
    })
    newProjet.save()
    .then(projet=>res.send(projet))
    .catch(err=>console.log(err))
})

// sur GET sans id : il s'agit de la récupération de tous les documents
// localhost:5000/
router.get("/",(req,res)=>{
    Projet.find()
    .then(projet=>res.send(projet))
    .catch(err=>console.log(err))
})

// sur GET avec id : il s'agit de la récupération d'un et d'un seul document (s'il existe)
// localhost:5000/projet/6055c2a61bcfb139a404b3a0
router.get("/projet/:_id",(req,res)=>{
    const {_id}=req.params
    Projet.findOne({_id})
      .then(projet=>res.send(projet))
    .catch(err=>console.log(err))
})


// sur PUT avec id : l'édition d'un document
// localhost:5000/contacts/6055c2a61bcfb139a404b3a0
router.put("/projet/:_id",(req,res)=>{
    const {_id}=req.params
    const {nom,categorie,porteur,palier}=req.body
    Projet.findOneAndUpdate({_id},{$set:{nom,categorie,porteur,palier}})
    .then(projet=>res.send("projet mis à jour"))
    .catch(err=>console.log(err))
})


// sur DELETE avec id : la suppression d'un document
//localhost:5000/contacts/6055c2a61bcfb139a404b3a0
router.delete("/projet/:_id",(req,res)=>{
    const {_id}=req.params
    Projet.findOneAndDelete({_id:_id})
    .then(projet=>res.send("success"))
    .catch(err=>console.log(err))
})


module.exports=router
