const http = require('http');
const data = require('./data')
http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'application\json'}); //here 200 ki jagah 201 , 401 , 400
resp.write(JSON.stringify(data) );
resp.end();
}).listen(500);
