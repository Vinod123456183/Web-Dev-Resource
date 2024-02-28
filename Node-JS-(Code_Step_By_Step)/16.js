// agar koi logic time le raha hai toh handle by promises or asyncawait

// without waiting data
let a = 10 
let b = 0;
setTimeout(()=>{
  b = 111;
},2000)
console.log("ans",a+b) 



// after waiting data
//internal data ka wait then it give result 
// late result wale ko promis k andar rakh lo always two parameter

let ans = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(200)
    },2000)
})
// result 2 sec tk no print
ans.then((data)=>{
    b=data;
    console.log(a+b)
})
