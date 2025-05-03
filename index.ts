// // let myName: string = 'akmal'
// // console.log(myName)

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
class Car {
    name: string
    country: string

    constructor (name: string, country: string){
        this.name = name;
        this.country = country;
    }
    product(){
        console.log('car name is ' + this.name + ' from country ' + this.country)
    }
}
class Benz extends Car {
    speed(){
        console.log('high speed car of ' + this.country)
    }
}
let benz = new Benz('gClass', 'germany')
benz.product()
benz.speed()