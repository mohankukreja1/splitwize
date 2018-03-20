const route = require('express').Router();
const table= require("../db/model").table;
const table2=require('../db/model').savename
var moneygive;
var moneytake;
var mainname;

route.post('/',(req,res)=>{
    if(req.body.exampleRadios =="option1") {
        var temp = req.body.money;
        console.log(temp);
        table.findById(1).then((result) => {
            if (result.dataValues.moneytogive == null) {

                moneytake = result.dataValues.moneytotake + Number(temp);
                console.log(moneytake);

            }
            if (result.dataValues.moneytotake == null) {
                if (result.dataValues.moneytogive > Number(temp)) {
                    moneygive = result.dataValues.moneytogive - Number(temp)
                    console.log(moneygive);
                }
                else {
                    moneytake = Number(temp) - result.dataValues.moneytogive;
                    moneygive = 0;
                }
            }


            table.update(
                {
                    moneytogive: moneygive,
                    moneytotake: moneytake
                },
                {where: {id: 1}}
            ).then((result) => {

                table2.findAll({}).then((result) => {
                    mainname = result[0].dataValues.name

                })
                    .catch((err) => {
                        console.log(err);
                    })

                table.findAll({}).then((result) => {
                    console.log(result);
                    res.render('friends', {
                        mainname: mainname,
                        obj: result[0].dataValues,

                    })
                }).catch((err) => {
                    console.log(err);
                })

            }).catch((err) => {
                console.log(err);
            })

        })
            .catch((err) => {
                console.log(err);
            })


    }
})


exports.route = route;