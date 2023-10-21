let array = [1,16,5,34,56,78,90,-1];
Sorting(array);
function Sorting(array){
    for(let i = 0;i<array.length-1;i++){
        for(let j = i+1;j<array.length;j++){
            if(array[i]>array[j]){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

}
console.log(array);
