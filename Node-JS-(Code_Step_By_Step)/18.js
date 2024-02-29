const express = require('express')
const app = express();

app.get('',(req,res)=>{
    res.send('Hello');
});

app.get('/ram',(req,res)=>{
    res.send('ram');
});

app.get('/rama',(req,res)=>{
    res.send('rama');
});



app.listen(50001);

//localhost:5000/help

// to start anything do refresh first   or use nodemon  
