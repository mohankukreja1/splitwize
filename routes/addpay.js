const route = require('express').Router();

route.get('/',(req,res)=>{
    res.render('addpayform')
})




exports.route = route;