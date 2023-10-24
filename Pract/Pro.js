console.log(Number("Hello 13672"))
console.log("hello".search('o'))
let rev = "Motog Girl Hero";
rev = rev.split(" ").reverse().join();
console.log(rev)
let m = "Manish Rawat";
let sp = m.split(" ");
let str = "";
for(let s of sp){
    for(let len = s.length-1;len>=0;len--){
        str+=s.charAt(len)
    }
    str+=" "
}
console.log(str)