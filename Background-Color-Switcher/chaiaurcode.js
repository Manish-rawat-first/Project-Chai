// JavaScript.
console.log("Manish Rawat");
const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body');

buttons.forEach(function (item) {
    console.log(item);
    item.addEventListener('click', function (e) {
        console.log(e);
        if (e.target.id === 'grey') {
            body.style.background = 'grey';
        }
        else if (e.target.id === 'white') {
            body.style.background = 'white';
        }
        else if (e.target.id === 'blue') {
            body.style.background = 'blue';
        }
        else if (e.target.id === 'yellow') {
            body.style.background = 'yellow';
        }
        else if (e.target.id === 'green') {
            body.style.background = 'green';
        }
        else if (e.target.id === 'purple') {
            body.style.background = 'purple';
        }
        else if (e.target.id === 'pink') {
            body.style.background = 'pink';
        }
    });
});

