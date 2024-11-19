const input = document.querySelector("#name-input")
const titleText = document.querySelector("#name-output")
console.log(titleText.textContent)

input.addEventListener("input", onInputChange);

function onInputChange(event){
console.log(event.currentTarget.value);
titleText.textContent = event.currentTarget.value;
}