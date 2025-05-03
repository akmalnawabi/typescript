// // let myName: string = 'akmal'
// // console.log(myName)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// function greeting(name: string): string {
//     return 'hello ' + name; 
// }
// console.log(greeting('ahmad'))
// let person: {name: string, age: number} = {
//     name: 'ahmady',
//     age: 22
// }
// console.log(person.name, person.age)
// interface person {
//     name: string,
//     age: number
// }
// let user: person = {
//     name: 'akmal',
//     age: 21
// }
// console.log(user.name)
// generics
// function identity<T>(value: T) : T {
//     return value
// }
// console.log(identity<number>(7))
// console.log(identity<string>("asdf"))
// enum
// enum Directions {
//     up,
//     down
// }
// let move: Directions = Directions.down;
// console.log(move)
// // any types 
// let someValue: any = 'akmal';
// let valueStr: number = (someValue as string).length;
// console.log(valueStr)
// different types 
// type A = {e: string};
// type B = {d: number}
// type C = A & B;
// let ab: C = {e: 'ehmady', d: 3}
// console.log(ab)
// inheritance
var Car = /** @class */ (function () {
    function Car(name, country) {
        this.name = name;
        this.country = country;
    }
    Car.prototype.product = function () {
        console.log('car name is ' + this.name + ' from country ' + this.country);
    };
    return Car;
}());
var Benz = /** @class */ (function (_super) {
    __extends(Benz, _super);
    function Benz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Benz.prototype.speed = function () {
        console.log('high speed car of ' + this.country);
    };
    return Benz;
}(Car));
var benz = new Benz('gClass', 'germany');
benz.product();
benz.speed();
