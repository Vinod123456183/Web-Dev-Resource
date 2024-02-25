
// const temp = require('../VS-CODE-D/2'); 

// console.log(temp.x); // Output: 10
// console.log(temp.y); // Output: 20



// condition 1
const arr = [1,2,3,4,5]
arr.filter((item)=>{
    console.log(item);
})


// condition 2
let result = arr.filter((temp)=>{
    return temp>3;
})

console.log(result);
