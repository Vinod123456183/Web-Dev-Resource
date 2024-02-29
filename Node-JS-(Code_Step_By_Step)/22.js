// To hide the name of file in the folders || remove extension of the File


// get method se file kaise read -> using sendfile

const express = require('express')  // note required 
const path = require('path')
const app = express();

const publicPath = path.join(__dirname,'public');

app.get('',(_,resp)=>{  // we can use empty for front 
    resp.sendFile(`${publicPath}/index.html`)  
     //remember the ``  where to put
})

app.get('/abouttt',(_,resp)=>{  
    resp.sendFile(`${publicPath}/about.html`)
})
app.get('/help',(_,resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
})

// Page for 404

app.get('*',(req , resp) => {
    resp.sendFile(`${publicPath}/invalid.html`)
})

app.listen(5000);
