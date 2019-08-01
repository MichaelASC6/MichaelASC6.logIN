let logInPage = document.getElementById("log_page");
let mainPage = document.getElementById("main_page");
let userName = document.getElementById("username_textbox");
let passWord = document.getElementById("password_textbox");
let button = document.querySelector("button");
let intruder = document.getElementById("intruder");
let h2 = document.querySelector("h2");

button.onclick = function() {
    event.preventDefault();
    let userInput = userName.value;
    let passInput = passWord.value;

    let correctUsername = "Michael";
    let correctPassword = "College";

    if(userInput == correctUsername && passInput == correctPassword) {
        logInPage.style.display = "none";
        intruder.style.display = "none";
        window.location.replace("https://michaelasc6.github.io/my_website/");
    }

    else{
        intruder.style.display = "block";
    }

}

