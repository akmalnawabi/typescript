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

function identity<T>(value: T) : T {
    return value
}
console.log(identity<number>(7))
console.log(identity<string>("asdf"))
