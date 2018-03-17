const route = require('express').Router();
const table= require("../db/model").table;

route.post('/',(req,res)=>{

    if(req.body.exampleRadios=="option1"){

        table.create({
            name:req.body.name,
            email:req.body.email,
            moneytogive:req.body.money

        })
            .then((result)=>{
                console.log('added')
            }).catch((err)=>{
                console.log(err);
        })
    }
    else{
        table.create({
            name:req.body.name,
            email:req.body.email,
            moneytotake:req.body.money

        })
            .then((result)=>{
                console.log('added')
            }).catch((err)=>{
            console.log(err);
        })
    }
})

exports.route = route;