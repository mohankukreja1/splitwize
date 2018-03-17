const route = require('express').Router();
const table=require('../db/model').savename

route.post('/',(req,res)=>{
   table.create({
       name:req.body.name
   }).then(()=>{
       res.redirect('/');
   })
       .catch((err)=>{
           console.log(err)
       })
})

exports.route = route;