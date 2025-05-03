// // let myName: string = 'akmal'
// // console.log(myName)
var _a;
var c = { a: 'akmal', b: 9 };
console.log(c);
// inheritance
// class Car {
//     name: string
//     country: string
//     constructor (name: string, country: string){
//         this.name = name;
//         this.country = country;
//     }
//     product(){
//         console.log('car name is ' + this.name + ' from country ' + this.country)
//     }
// }
// class Benz extends Car {
//     speed(){
//         console.log('high speed car of ' + this.country)
//     }
// }
// let benz = new Benz('gClass', 'germany')
// benz.product()
// benz.speed()
// optional chaining
var user = { name: 'ahmad', address: { city: 'kabul' } };
console.log((_a = user.address) === null || _a === void 0 ? void 0 : _a.city);
console.log(user.name);
