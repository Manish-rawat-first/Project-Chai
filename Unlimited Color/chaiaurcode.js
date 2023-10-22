const color = function () {
    const randomNumber = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random(randomNumber) * 10);
    }
    return color;
};
let intervalId;
const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeColor,1000);
    }
    function changeColor(){
        document.body.style.backgroundColor = color();
    }
}
const stopped = function(){
    clearInterval(intervalId);
    intervalId = null;
}
const start = document.querySelector('#start').addEventListener('click', startChangingColor);
const stop = document.querySelector('#stop').addEventListener('click', stopped);

