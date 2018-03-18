const route = require('express').Router();
const table= require("../db/model").table;
const table2=require('../db/model').savename
var mainname;
var money;

route.get('/',(req,res)=>{
    table.update(
        {
            moneytogive:0,
            moneytotake:0
        },
        { where: { id: 1 } }
    ).then((result)=>{
        table2.findAll({}).then((result)=>{
            mainname=result[0].dataValues.name

        })
            .catch((err)=>{
                console.log(err);
            })

        table.findAll({}).then((result)=>{
            console.log(result)
        }).catch((err)=>{
            console.log(err);
        })

    }).catch((err)=>{
        console.log(err);
    })


})




exports.route = route;