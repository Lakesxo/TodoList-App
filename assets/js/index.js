let darkModeBtn = document.getElementById("dark-mode");
let userInput = document.querySelector("input");
let addTodo = document.getElementById("addTodo");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let welcomeText = document.querySelector("p");
let listItems = document.querySelectorAll('li')

darkMode=()=> {
    body.classList.toggle("dark-mode");
    h1.classList.toggle("dark-mode");
    userInput.classList.toggle("user");
    welcomeText.classList.toggle("lol");
    addTodo.classList.toggle("user2");
    for (let i=0; i < listItems.length; i++){
        listItems[i].classList.toggle('lists')
    }
}

darkModeBtn.addEventListener("click", darkMode);