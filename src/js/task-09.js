const buttonEl =  document.querySelector(".change-color");
const spanColorEl =  document.querySelector(".color");

buttonEl.addEventListener("click", getRandomHexColor );


function getRandomHexColor() {
const someColor =  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
 
    document.body.style.backgroundColor = someColor;
    spanColorEl.textContent = someColor;  
}

