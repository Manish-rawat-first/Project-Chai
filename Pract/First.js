let m = "manish rawat is too good";
let s = m.split(' ');
let str = "";
for(let it of s){
    for(let f = 0;f<it.length;f++){
        let ch = it.charAt(f);
        if(f==0){
            ch = ch.toUpperCase();
        }
        str+=ch;
    }
    str+=" ";
}
console.log(str);