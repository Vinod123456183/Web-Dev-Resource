// to req pura page  k liye get method

// req response  means 

// app.get(req , res)

// client always req and server always response gives

// req toh nahi kri 
// not compulsory both parameter use ek sath 

// client se data ata h to req me ata hai 
const express = require('express')
const app = express();

app.get("",(req,resp)=>{
    console.log("Welcome ",req.query.name);
    resp.send("Welcome Home",req.query.name)
})


app.listen(501);

