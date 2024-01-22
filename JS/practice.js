// const person = [{
//     name : 'kishore',
//     age : 21,
//     no:18    },
//     {
//         street:'first street',
//         area:'first area',
//         no:18,
//         name:'JS'
//     }
// ]


// const result = person.map(function(element){
//     return element.name
// })
// console.log(result)

// const a= 10
// const b=20
// if(a<b){
//     console.log("a is less")
// }
// else{
//     console.log("b is greater")
// }

// const c =a<b?'red':'blue'
// console.log(c)

// switch(c){
//     case 'red':
//         console.log("color is red")
//         break
//     case 'blue':
//         console.log("color is blue")
//         break
//     default:
//         console.log("neither red nor blue")
//         break    
// }

// const addnum = (num1,num2)=>{
//     console.log(num1+num2)

// }
// addnum(3,3)

class Goto{
    constructor(name,age){
        this.a=name
        this.b=age
    }
    getname(){
        return this.a
    }
    getage(){
        return this.b
    }
}
const obj1 = new Goto('kishore',22)
console.log(obj1.getname())
console.log(obj1.getage())
