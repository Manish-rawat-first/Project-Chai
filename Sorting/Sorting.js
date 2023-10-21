let array = [1,16,5,34,56,78,90,-1];
Sorting(array);
function Sorting(array){
    for(let i = 0;i<array.length-1;i++){
        for(let j = 0;j<array.length-i-1;j++){
            if(array[j]>array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }

}
console.log(array);
