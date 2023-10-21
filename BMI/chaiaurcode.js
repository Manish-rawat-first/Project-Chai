const form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if(height === '' || height<0 || isNaN(height)){
        result.innerHTML = `Please Provide a valid height ${height}`;
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML = `Please provide a valid Weight ${weight}`;
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        let res = "";
        if(bmi<18.6){
            res = "Under Weight";
        }
        else if(bmi<24.9){
            res = "Normal Range";
        }
        else{
            res = "Overweight";
        }
        result.innerHTML = `<span>${bmi} ${res}</span>`
        
    }
});