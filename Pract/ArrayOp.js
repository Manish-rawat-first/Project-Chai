let s = [12,34,56,[90,43,21],[98,2],1];
console.log(s.flat())// All array indside separate,
let copy = [...s]
console.log(copy)
console.log(Array.isArray(s))
console.log(Array.from("hello"))
console.log(Array.of(12,34,56));
console.log(Array.from(12))
let obj = {
    1:"hello",
    2:"moto",
    3:"Gadha",
    4:"Tevar"
}
console.log(Array.of(Object.keys(obj)));
console.log(Array.from(Object.values(obj)))
let ob = [12,34,21,11];
Object.freeze(ob);
Object.freeze(obj);
obj.ap = "Moto";//Cannot be throw error but it is not add in object.
console.log(obj)
//ob.push(89); Error Throw.
console.log(ob);
