const route = require('express').Router();

route.post('/',(req,res)=>{
    console.log(req);
})



exports.route = route;