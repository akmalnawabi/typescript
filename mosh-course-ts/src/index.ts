// tuples 
// let user: [number, string] = [1, 'ahmad']
// console.log(user[0])

// enum 
// enum size {small = 1, medium, large}
// let mySize: size = size.large
// console.log(mySize)

// function calcTax(income: number, taxYear = 2020) : number {
//     if (taxYear < 2000){
//         return income * 2
//     }
//     return income * 3
// }
// console.log(calcTax(500,1990))

// let employee: {
//     id: number,
//     name: string,
//     retire: (date: Date) => void
// } = {
//     id: 1,
//     name: "ahmady",
//     retire: (date: Date) => {
//         console.log(date)
//     }
// }
// console.log(employee.retire)

// type alias 
// type Employee = {
//     id: number,
//     name: string,
//     retire: (date: Date) => void
// }
// let employee: Employee = {
//     id: 2,
//     name: 'akm',
//     retire: (date: Date) => {
//         return date
//     }
// }

// narowing 
// function kgToLbs(weigth: number | string): number {
//     if(typeof weigth === "number"){
//         return weigth * 2
//     } else {
//         return parseInt(weigth) * 2
//     }
// }
// console.log(kgToLbs(4))
// console.log(kgToLbs('5'))

// function greet(name: string | null | undefined) {
//     if (name) {
//         console.log(name)
//     } else{
//         console.log('no name')
//     }
// }
// greet('akmal')
// greet(undefined)

// optinal access ?
// type Customer = {
//     birthday: Date
// }
// function getCustomer(id: number): Customer | null | undefined{
//     return id === 0 ? null : {birthday: new Date()}
// }
// let cutomer = getCustomer(1)
// console.log(cutomer?.birthday)

let log: any = null
log?.('a')