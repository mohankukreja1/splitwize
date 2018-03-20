const express=require('express');
const path=require('path');
const bodyParser=require('body-parser')



const app=express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"))

const friendsroute=require('./routes/friends').route
const savename=require('./routes/savename').route
const clearroute=require('./routes/clearall').route
const addpay=require('./routes/addpay').route
const handle=require('./routes/handle').route

app.use('/handle',handle);
app.use('/addpay',addpay);
app.use('/clearall',clearroute);
app.use('/friends',friendsroute);
app.use('/savename',savename);
app.use('/',express.static(path.join(__dirname,'public_static')));

app.listen(2222,()=>{
    console.log('server started');
})