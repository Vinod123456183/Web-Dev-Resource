const fs = require('fs');

const input = process.argv;

if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4])
}
else if(input[2]=='remove')
{
    fs.unlinkSync(input[3])
}
else
{
    console.log("invalid input ")
}


// node index.js other red.txt 'this is color'


// node 12.js add helo.cpp 'hello world'
// node 12.js remove hwllo.cpp
