// synchronous  == non pipeline jo alag alag time pr kaam krega 
// asynchronous  == pipeline jo alag alag time pr kaam krega isse speed increase 
// Program 1
console.log("HI");
setTimeout(()=>{
  console.log("inside")
},2000)
console.log("c")


// Program 2
let a = 10 
let b = 0;
setTimeout(()=>{
  b = 111;
},2000)
console.log("ans",a+b) //answer should be 30 but 
// To handle callback or promises
