const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur)

function onInputBlur(event){
// const dataLength = parseInt(input.dataset.length,10);
const dataLength = Number.parseInt(input.dataset.length)
const inputValue =  event.currentTarget.value.trim().length;

console.log(typeof dataLength); 
console.log("currentLength", event.currentTarget.value.length);



if (inputValue === dataLength) {
    input.classList.remove("invalid");
    return input.classList.add("valid") 
    
} else {
    input.classList.remove("valid"); 
    return input.classList.add("invalid")
    
}
}