

const express = require('express')
const path = require('path')
const app = express();

// views folder k andar common naam ka folder uske andar navv
// views k andar login , profile page


app.set('view engine','ejs');   //imp   
app.get('/profile',(req,resp)=>{
    const user={
        name:' vv',
        class:10,
        arr:['1','2']
    }
    resp.render('profile',{user});  //yahan views folder k andar ek prifile.ejs html bnani pregi
});

app.get('/login',(req , resp)=>{
    resp.render('login')
})
app.listen(9000)














// <nav>hrr</nav>


// login

<!-- Ab login k andar kahin bhi file bne to sedha clall -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- y common folder k andar nav.ejs ko call ese hoga  -->
    <!-- REmember - sign above -->
    <%-include ('common/navv'); %>
    <h3>Login</h3>
</body>
</html>



// profile
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <!-- We have include navv.ejs in this ejs file -->
    <%-include ('common/navv'); %> 


    profile

    <!-- variable type ka aa raha hai  -->
    <h1>Welcome<%= user.name %></h1>
    <h1>Welcome<%= user.class %></h1>
    <h2>
        <ol>
                <!-- Note = nahi h  -->
            <% user.arr.forEach((items)=>{%> 
                <ol>
                    <%= items %>    <!--Note = -->
                </ol>  
            <%}) %>
        </ol>
    </h2>
</body>
</html>
