const route = require('express').Router();
const table= require("../db/model").table;
const table2=require('../db/model').savename
var moneygive;
var moneytake;
var mainname;

route.post('/',(req,res)=>{
    if(req.body.exampleRadios =="option1"){
        var temp=req.body.money;
        console.log(temp);
        table.findById(1).then((result)=>{
            if(result.dataValues.moneytotake == null){

                moneygive = result.dataValues.moneytogive + Number(temp);
                console.log(moneygive);

            }
            if(result.dataValues.moneytogive == null){
                if(result.dataValues.moneytotake > Number(temp)){
                    moneytake =result.dataValues.moneytotake  - Number(temp)
                    console.log(moneytake);
                }
                else{
                    moneytogive =Number(temp) -result.dataValues.moneytotake;
                }
            }






            table.update(
                {
                    moneytogive:moneygive,
                    moneytotake:moneytake
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

                    res.render('friends',{
                        mainname:mainname,
                        obj:result[0].dataValues,

                    })
                }).catch((err)=>{
                    console.log(err);
                })

            }).catch((err)=>{
                console.log(err);
            })

        })
            .catch((err)=>{
                console.log(err);
            })



    }
})


exports.route = route;