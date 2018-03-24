const route = require('express').Router();
const table= require("../db/model").grptable;

route.post('/one',(req,res)=>{

    table.create({
        name:req.body.name,
        email:req.body.email,
        id:1
    }).then((c)=>{

    }).catch((err)=>{
        console.log(err);
    })
});

route.post('/two',(req,res)=>{
    table.create({
        name:req.body.name,
        email:req.body.email,
        id:2
    }).then((c)=>{

    }).catch((err)=>{
        console.log(err);
    })

});
route.post('/three',(req,res)=>{
    table.create({
        name:req.body.name,
        email:req.body.email,
        id:3
    }).then((c)=>{

    }).catch((err)=>{
        console.log(err);
    })

});
route.post('/four',(req,res)=>{
    table.create({
        name:req.body.name,
        email:req.body.email,
        id:4
    }).then((c)=>{

    }).catch((err)=>{
        console.log(err);
    })

});

exports.route = route;