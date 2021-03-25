const express=require('express')
const router=express.Router()

const Users=require('../models/Users')



// sur GET sans id : il s'agit de la récupération de tous les documents
// localhost:5000/users/
// [GET] localhost:5000/users/all
router.get("/users/all",(req,res)=>{

    const limit = req.query.limit;
    const {name } = req.query;
    Users.find({name})
    .then(users=>res.send(users))
    .catch(err=>console.log(err))
})

// sur POST sans id : il s'agit de la création du document
// localhost:5000/contacts
// [POST] localhost:5000/contacts
router.post("/users/new",(req,res)=>{
    const { name,email,phone }=req.body
    const newUsers=new Users({
        name,email,phone
    })
    newUsers.save()
    .then(users=>res.send(users))
    .catch(err=>console.log(err))
})


// sur GET avec id : il s'agit de la récupération d'un et d'un seul document (s'il existe)
// localhost:5000/contacts/6055c2a61bcfb139a404b3a0
// [GET] localhost:5000/contacts/6055c2a61bcfb139a404b3a0
router.get("/users/:_id",(req,res)=>{
    const {_id}=req.params
    console.log(req.params);
    Users.findOne({_id:_id})
      .then(users=>res.send(users))
    .catch(err=>console.log(err))
})


// sur PUT avec id : l'édition d'un document
// localhost:5000/contacts/6055c2a61bcfb139a404b3a0
router.put("/users/:_id",(req,res)=>{
    const {_id}=req.params

    const {name,email,phone}=req.body
    Users.findOneAndUpdate({_id:_id},{name,email,phone})
    .then(users=>res.send("user Updated"))
    .catch(err=>console.log(err))
})


// sur DELETE avec id : la suppression d'un document
//localhost:5000/contacts/6055c2a61bcfb139a404b3a0
router.delete("/users/:_id",(req,res)=>{
    const {_id}=req.params
    Users.findOneAndDelete({_id:_id})
    .then(contacts=>res.send("success"))
    .catch(err=>console.log(err))
})


module.exports=router
