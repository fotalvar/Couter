const result = document.querySelector('.result');
const restart = document.querySelector('.restart');
const increment = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');
let counter = 0;

restart.addEventListener('click', () => {
    counter = 0;
    result.innerText = counter;
});

increment.addEventListener('click', () => {
    if (counter >= 0 && counter <10){
        counter = counter + 1;
        result.innerText = counter;
    }
});

decrement.addEventListener('click', () => {
    if (counter > 0 && counter <= 10){
    counter = counter - 1;
    result.innerText = counter;
    }
});


