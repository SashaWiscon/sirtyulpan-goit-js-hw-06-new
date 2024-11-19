const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", onInput);

function onInput(event){
console.dir(event.currentTarget );
spanEl.style.fontSize = `${inputEl.value}px`;
}