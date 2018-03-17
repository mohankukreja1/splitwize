const express=require('express');
const path=require('path');
const bodyParser=require('body-parser')



const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/hello',(req,res)=>{
    res.send('hello');
})

app.use('/',express.static(path.join(__dirname,'public_static')));

app.listen(2222,()=>{
    console.log('server started');
})