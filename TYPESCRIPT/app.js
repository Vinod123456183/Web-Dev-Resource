"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = 10;
const b = [
    1,
    2,
    {
        name: "Vinod",
    },
];
console.log(b);
const arr = [1, 2];
const tup = [1, "a"];
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "V";
    Roles["GUEST"] = "super_admin ";
})(Roles || (Roles = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["NOTFOUND"] = 404] = "NOTFOUND";
})(StatusCode || (StatusCode = {}));
StatusCode.NOTFOUND;
let c;
c = 10;
function abc() {
    return "abc";
}
function F(obj) {
    //   (obj.name = "Vindo"), (obj.email = "sdada");
}
F({
    name: "Vindo",
    email: "sdada",
});
let s;
s = "das";
class Device {
    constructor() {
        this.name = "vinod";
        this.price = 200;
    }
}
let d1 = new Device();
let d2 = new Device();
function xyz(name, age, af) {
}
xyz("Vinod", 10, (arg) => {
    console.log("print");
});
// Spread Opertar
function sum(...arr) {
    console.log(arr);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
function abcd(a, b, c) { }
abcd("vinod", false, 10);
function log(val) {
    console.log(val);
}
log(10);
//# sourceMappingURL=app.js.map