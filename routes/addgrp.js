const route = require('express').Router();
const table=require('../db/model').grptable;

var money;
route.post('/',(req,res)=>{
    console.log(req);

    if(req.body.exampleRadios1 == 'option1'){
        if(req.body.number=='1'){
            money = Number(req.body.money);
            var divide=Number(req.body.number);
            money=money/divide;
            console.log(money);
            table.update(
                {
                    moneytogive:money,
                    moneytotake:0
                },
                { where: { id: 1 } }
            ).then((res)=>{
                table.findAll({}).then((res)=>{
                    console.log(res);
                })
                    .catch((err)=>{
                        console.log(err);
                    })

            }).catch((err)=>{
                console.log(err);
            })


        }



        if(req.body.number=='2'){

            money = Number(req.body.money);
            var divide=Number(req.body.number);
            money=money/divide;
            console.log(money);
            table.update(
                {
                    moneytogive:0,
                    moneytotake:money
                },
                { where: { id: 1 } }
            ).then((res)=>{

                table.update(
                    {
                        moneytogive:money,
                        moneytotake:0
                    },
                    { where: { id: 2 } }
                ).then((res)=>{
                    table.findAll({}).then((res)=>{
                        console.log(res);
                    })
                        .catch((err)=>{
                            console.log(err);
                        })


                }).catch((err)=>{
                    console.log(err);
                })


            }).catch((err)=>{
                console.log(err);
            })



        }




    }
    if(req.body.exampleRadios2 == "option2"){
        money = Number(req.body.money);
        var divide=Number(req.body.number);
        money=money/divide;
        table.update(
            {
                moneytogive:0,
                moneytotake:money
            },
            { where: { id: 2 } }
        ).then((res)=>{

            table.update(
                {
                    moneytogive:money,
                    moneytotake:0
                },
                { where: { id: 1 } }
            ).then((res)=>{
                table.findAll({}).then((res)=>{
                    console.log(res);
                })
                    .catch((err)=>{
                        console.log(err);
                    })

            }).catch((err)=>{
                console.log(err);
            })






        }).catch((err)=>{
            console.log(err);
        })
    }


})



exports.route = route;