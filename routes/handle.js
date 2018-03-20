const route = require('express').Router();
const table= require("../db/model").table;
const table2=require('../db/model').savename

route.get('/',(req,res)=>{
    console.log(req);
})


exports.route = route;