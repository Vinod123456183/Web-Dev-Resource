// render json and html means display   
// json fro api html for website

// link one page to one 
// const { required } = require("nodemon/lib/config");

const express = require('express')
const app = express();
app.get('',(req,res)=>{
    res.send(`
        <h1>H1 Tag </h1> <a href = "/about">Move in about</a> 
    `)
});
app.get('/about',(req,res)=>{
    res.send(`
        <input>Enter Input name${req.query.name}<input/>
        <button>Click<button>
        <a href = "/">Home PAge</a>
    `);
});
app.listen(11111);


