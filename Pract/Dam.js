let s = (()=>(()=>"Hello"))
console.log(s().apply())
console.log(`${s().apply()}`)
let val = Symbol("He")
console.log(val)
s = 457453n
console.log(typeof s)
let co = new Number(78)
console.log(`${co} ${typeof co}`)


