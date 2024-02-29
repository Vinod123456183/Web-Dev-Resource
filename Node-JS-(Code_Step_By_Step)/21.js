const express = require('express')
const path = require('path')
// Path module help to acess folders

const app = express();

// return name of path 
// console.log(__dirname);



// here public1 is the name of the folder where we have store the html files
const publicPath=path.join(__dirname,'public1') 
app.use(express.static(publicPath));
app.listen(1234);

// static - startic content ko load
// static me direct access of css nahi hota h   

