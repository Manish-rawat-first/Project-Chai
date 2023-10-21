let array = [-1,4,2,1,0,5,7,3];
Insertion(array);
function Insertion(array){
    for(let i = 1;i<array.length;i++){
        let curr = array[i];
        let prev = i-1;
        while(prev>=0 && array[prev]>curr){
            array[prev+1] = array[prev];
            prev--;
        }
        array[prev+1] = curr;
    }
}
console.log(array);