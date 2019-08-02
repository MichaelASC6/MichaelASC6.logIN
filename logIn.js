let logInPage = document.getElementById("log_page");
let mainPage = document.getElementById("main_page");
let userName = document.getElementById("username_textbox");
let passWord = document.getElementById("password_textbox");
let button = document.querySelector("button");
let intruder = document.getElementById("intruder");
let h2 = document.querySelector("h2");
let body = document.querySelector("body");

button.onclick = function() {
    event.preventDefault();
    let userInput = userName.value;
    let passInput = passWord.value;

    let correctUsername = "Michael";
    let correctPassword = "College";

    if(userInput == correctUsername && passInput == correctPassword) {
        logInPage.style.display = "none";
        intruder.style.display = "none";
        window.location.replace("https://michaelasc6.github.io/OG_my_website/");
    }

    else{
        logInPage.style.display = "none";
        intruder.style.display = "block";
        userName.value = "";
        passWord.value = "";
        body.style.backgroundImage= "linear-gradient(rgba(255, 255, 255, 1),rgba(255, 255, 255, 1))";
    }

}

