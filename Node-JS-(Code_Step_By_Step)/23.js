// TEmplate engine
// for creating dynimic  pages 
//ejs
const express = require('express')
const path = require('path')
const app = express();
// const public
const publicPath = path.join(__dirname,'public');
app.get('/help',(req,resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
});


// Ejs engine
app.set('view engine','ejs');   //imp   
app.get('/profile',(req,resp)=>{
    const user={
        name:' vv',
        class:10
    }
    resp.render('profile',{user});  //yahan views folder k andar ek prifile.ejs html bnani pregi
});
app.listen(7000)







// ejs html file
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    profile

    <!-- variable type ka aa raha hai  -->
    <h1>Welcome<%= user.name %></h1>
    <h1>Welcome<%= user.class %></h1>
    <!-- <h1>Welcome<%= user.name %></h1> -->
</body>
</html>
