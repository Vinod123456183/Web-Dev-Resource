// middle ware

// req and resp me change krna h toh 

// check error

const express = require('express')
const path = require('path')
const app = express();


app.get('',(req,resp)=>{
    resp.send('Home_11');
})

app.get('/users',(req,resp)=>{
    resp.send('users page h');
})
app.get('/nn',(req,resp)=>{
    resp.send('nnn');
})

const reqFilter=(req,resp,next) =>{
    if(!req.query.age) {
        resp.send("Enter jjgjjjjjjjjjjjj");
    }
    else if(req.query.age<=18){
        resp.send("not_ellig");
    }
    else{
        next();
    }
}
 

app.listen(2000)
