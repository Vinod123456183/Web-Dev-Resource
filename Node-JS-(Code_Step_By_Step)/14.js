// crud in node
const fs = require('fs');
const path = require('path');
//pr isme crud folder banana prega
const dirPath= path.join(__dirname,'crud');     
const filePath = `${dirPath}/apple.txt`;


// Isse folder k andar file create and write text

    // fs.writeFileSync(filePath,'this is a simple file');
    // fs.readFile(filePath,'utf8',(err,item)=>{
    // console.log(item);
    // })


// File ko update krne k liye
// fs.appendFile(filePath,' for fruits',(err)=>{
// if(!err) console.log("file is updated")
// })



//file name ko update krne k liye 
// fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
// if(!err) console.log("file name is updated")
// })




// To delte file 
// fs.unlinkSync(`${dirPath}/fruit.txt`);
