
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
let spanValue = document.querySelector("#value");


buttonDecrement.addEventListener('click', onDecrementClick);
buttonIncrement.addEventListener('click', onIncrementClick);


let counterValue = 0;
function onDecrementClick(){
    counterValue -= 1;
    spanValue.textContent = counterValue;
};

function onIncrementClick(){
    counterValue += 1;
    spanValue.textContent = counterValue;
};