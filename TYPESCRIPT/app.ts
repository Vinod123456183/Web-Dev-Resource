var a = 10;

const b = [
  1,
  2,
  {
    name: "Vinod",
  },
];
console.log(b);

const arr: number[] = [1, 2];

const tup: [number, string] = [1, "a"];

enum Roles {
  ADMIN = "V",
  GUEST = "super_admin ",
}

enum StatusCode {
  NOTFOUND = 404,
}
StatusCode.NOTFOUND;

let c: number;
c = 10;

function abc(): string {
  return "abc";
}

interface UU {
  name: string;
  email: string;
  gender?: string;
}

function F(obj: UU): void {
  //   (obj.name = "Vindo"), (obj.email = "sdada");
}

F({
  name: "Vindo",
  email: "sdada",
});

// Extends
interface User {
  name: string;
  email: string;
  gender?: string;
}

interface Admin extends User {}



type diff_value = string | number | null

let s : diff_value;
s = "das" 


class Device {
  constructor(){
    this.name="vinod"
    this.price=200
  }
}

let d1 = new Device();
let d2 = new Device();



function xyz(name:string , age:number , af:(arg:string)=> void):void {

}

xyz("Vinod" , 10 , (arg:string)=>{
  console.log("print");
})




// Spread Opertar

function sum (...arr:number[]) {
  console.log(arr);
}

sum(1,2,3,4,5,6,7,8,9)



function abcd <T>(a:T , b:boolean , c:number){}
abcd<string>("vinod" , false , 10)


function log<T>(val:T) {
  console.log(val)
}
log<number>(10)
