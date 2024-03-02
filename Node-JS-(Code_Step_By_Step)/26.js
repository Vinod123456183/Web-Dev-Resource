const express = require('express');
const reqFilter= require('./middleware');
const app = express();
const route= express.Router();



route.use(reqFilter)

app.get('/', (res, resp) => {
    resp.send('Welcome to Home page')
});

app.get('/users', (res, resp) => {
    resp.send('Welcome to Users page')
});
// To apply route in several page

route.get('/about', (res, resp) => {
    resp.send('Welcome to About page')
});
route.get('/contact', (res, resp) => {
    resp.send('Welcome to contact page')
});
// note this should write
app.use('/',route);

app.listen(5000)

// route level middleware = jo sinhle ya multiple pr apply jote h

// application => jo applicarion pr by def 

// app middleware => globallty aplly ek sath

// route = >sigle + group













// middleware js file

module.exports = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("Please provide your age")
    }
    else if (req.query.age<18) {
        resp.send("You are under aged")
    }
    else {
        next();
    }
}


