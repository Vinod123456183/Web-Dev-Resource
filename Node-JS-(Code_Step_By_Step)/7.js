// create server

// http req handle ? http module from server

const http = require('http');

http.createServer((req,res)=>{
    res.write("Jai Shree Ram");
    res.end();
}).listen(4500);
