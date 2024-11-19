const formEl = document.querySelector(".login-form");
// const inputEmail = document.querySelector('input[name="email"]');
// const inputPassword = document.querySelector('input[name="password"]');

formEl.addEventListener("submit", onFormSubmit)

function onFormSubmit(event) {
event.preventDefault();

const submitValues = {};
if (event.currentTarget.elements.password.value === "" ||
event.currentTarget.elements.email.value === "") {
    alert("Все поля должны быть заполнены.");
} else {
    submitValues[event.currentTarget.elements.password.name] =
    event.currentTarget.elements.password.value;
    submitValues[event.currentTarget.elements.email.name] =
    event.currentTarget.elements.email.value ;
    console.log(submitValues);
    return submitValues;
} 
  
event.currentTarget.reset();
}