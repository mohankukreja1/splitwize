const route = require('express').Router();
const table= require("../db/model").table;
const table2=require('../db/model').savename
var mainname;
var money;
route.post('/',(req,res)=>{

    if(req.body.exampleRadios=="option1"){

        table.create({
            name:req.body.name,
            email:req.body.email,
            moneytogive:req.body.money

        })
            .then((result)=>{
                res.redirect('/friends');
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
                res.redirect('/friends');
            }).catch((err)=>{
            console.log(err);
        })
    }
})

route.get('/',(req,res)=>{
    table2.findAll({}).then((result)=>{
        mainname=result[0].dataValues.name

    })
        .catch((err)=>{
            console.log(err);
        })

    table.findAll({}).then((result)=>{
        console.log(result);
        if(result[0].dataValues.moneytotake==null){
            money = 0-result[0].dataValues.moneytogive;
        }
        else{
            money = result[0].dataValues.moneytotake;
        }
        res.render('friends',{
            money:money,
            obj:result[0].dataValues ,
            mainname:mainname
        })

    })
        .catch((err)=>{
            console.log(err);
        })


})

exports.route = route;