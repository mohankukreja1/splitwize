const route = require('express').Router();
const table=require('../db/model').grptable;

var money;
route.post('/',(req,res1)=>{
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
                    res1.render('group',{
                        arr:res[0].dataValues
                    })
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
                ).then((result)=>{
                    table.findAll({}).then((res)=>{
                        console.log(res);
                        res1.render('group',{
                            arr:res[0].dataValues,
                            arr1:res[1].dataValues
                        })
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


        if(req.body.number=='3'){


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
                    table.update(
                        {
                            moneytogive:money,
                            moneytotake:0
                        },
                        { where: { id: 3 } }
                    ).then((res)=>{
                        table.findAll({}).then((res)=>{
                            res1.render('group',{
                                arr:res[0].dataValues,
                                arr1:res[1].dataValues,
                                arr2:res[2].dataValues


                            })
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


            }).catch((err)=>{
                console.log(err);
            })

        }

        if(req.body.number=='4'){


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
                    table.update(
                        {
                            moneytogive:money,
                            moneytotake:0
                        },
                        { where: { id: 3 } }
                    ).then((res)=>{
                        table.update(
                            {
                                moneytogive:money,
                                moneytotake:0
                            },
                            { where: { id: 4 } }
                        ).then((res)=>{
                            table.findAll({}).then((res)=>{
                                res1.render('group',{
                                    arr:res[0].dataValues,
                                    arr1:res[1].dataValues,
                                    arr2:res[2].dataValues,
                                    arr3:res[3].dataValues
                                                                        })
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


                }).catch((err)=>{
                    console.log(err);
                })


            }).catch((err)=>{
                console.log(err);
            })

        }





    }
    if(req.body.exampleRadios2 == "option2"){
        if(req.body.number=='2'){

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

                table.update(
                    {
                        moneytogive:0,
                        moneytotake:money
                    },
                    { where: { id: 2 } }
                ).then((res)=>{
                    table.findAll({}).then((res)=>{
                        console.log(res);
                        res1.render('group',{
                            arr:res[0].dataValues,
                            arr1:res[1].dataValues
                        })
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

        if(req.body.number=='3'){


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
                        { where: { id: 3 } }
                    ).then((res)=>{
                        table.findAll({}).then((res)=>{
                            console.log(res);
                            res1.render('group',{
                                arr:res[0].dataValues,
                                arr1:res[1].dataValues,
                                arr2:res[3].dataValues
                            })
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


            }).catch((err)=>{
                console.log(err);
            })

        }


        if(req.body.number=='4'){


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
                        { where: { id: 3 } }
                    ).then((res)=>{
                        table.update(
                            {
                                moneytogive:money,
                                moneytotake:0
                            },
                            { where: { id: 4 } }
                        ).then((res)=>{
                            table.findAll({}).then((res)=>{
                                console.log(res);
                                res1.render('group',{
                                    arr:res[0].dataValues,
                                    arr1:res[1].dataValues,
                                    arr2:res[2].dataValues,
                                    arr3:res[3].dataValues
                                })
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


                }).catch((err)=>{
                    console.log(err);
                })


            }).catch((err)=>{
                console.log(err);
            })

        }




    }



    if(req.body.exampleRadios3 == "option3"){


            if(req.body.number=='3'){


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

                    table.update(
                        {
                            moneytogive:money,
                            moneytotake:0
                        },
                        { where: { id: 2 } }
                    ).then((res)=>{
                        table.update(
                            {
                                moneytogive:0,
                                moneytotake:money
                            },
                            { where: { id: 3 } }
                        ).then((res)=>{
                            table.findAll({}).then((res)=>{
                                console.log(res);
                                res1.render('group',{
                                    arr:res[0].dataValues,
                                    arr1:res[1].dataValues,
                                    arr2:res[2].dataValues
                                })
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


                }).catch((err)=>{
                    console.log(err);
                })

            }


            if(req.body.number=='4'){


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

                    table.update(
                        {
                            moneytogive:money,
                            moneytotake:0
                        },
                        { where: { id: 2 } }
                    ).then((res)=>{
                        table.update(
                            {
                                moneytogive:0,
                                moneytotake:money
                            },
                            { where: { id: 3 } }
                        ).then((res)=>{
                            table.update(
                                {
                                    moneytogive:money,
                                    moneytotake:0
                                },
                                { where: { id: 4 } }
                            ).then((res)=>{
                                table.findAll({}).then((res)=>{
                                    console.log(res);
                                    res1.render('group',{
                                        arr:res[0].dataValues,
                                        arr1:res[1].dataValues,
                                        arr2:res[2].dataValues,
                                        arr3:res[3].dataValues
                                    })
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


                    }).catch((err)=>{
                        console.log(err);
                    })


                }).catch((err)=>{
                    console.log(err);
                })

            }








    }

    if(req.body.exampleRadios4 == "option4"){

        if(req.body.number=='4'){


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

                table.update(
                    {
                        moneytogive:money,
                        moneytotake:0
                    },
                    { where: { id: 2 } }
                ).then((res)=>{
                    table.update(
                        {
                            moneytogive:money,
                            moneytotake:0
                        },
                        { where: { id: 3 } }
                    ).then((res)=>{
                        table.update(
                            {
                                moneytogive:0,
                                moneytotake:money
                            },
                            { where: { id: 4 } }
                        ).then((res)=>{
                            table.findAll({}).then((res)=>{
                                console.log(res);
                                res1.render('group',{
                                    arr:res[0].dataValues,
                                    arr1:res[1].dataValues,
                                    arr2:res[2].dataValues,
                                    arr3:res[3].dataValues
                                })
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


                }).catch((err)=>{
                    console.log(err);
                })


            }).catch((err)=>{
                console.log(err);
            })

        }


    }



})



exports.route = route;