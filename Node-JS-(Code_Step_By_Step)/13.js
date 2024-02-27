// create and read file

const fs = require('fs')

//create single file and it is not storing inside the folder 
//so better method is to use loop and store inside a folder 

// fs.writeFileSync('abc.txt','this is inside the txt file') 

const path =  require('path');
const dirPath = path.join(__dirname,'files');

// for(i = 0; i<5; i++) {
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","Simple File")
// }

fs.readdir(dirPath , (err,files)=> {
    files.forEach((item)=>{
        console.log(item);
    })
}) 

// interview q
// folder se bahar acccess nahi kr skte h sirf server se acess
// sirf webserver k andar k access bahar k nahi
