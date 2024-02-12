function validate(){
    let mail = document.f.email.value;
    let pswd = document.f.password.value;
    let normalEmail = /^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-z]+$/;
    isErr = false;
    if (isErr == false) {
        if(mail == "" || mail.trim().length == 0){
            document.getElementById("errmail").innerHTML = "* Email is Required.";
            isErr = true;
        }
        else if(normalEmail.test(mail) == false){
            document.getElementById("errmail").innerHTML = "* Enter a valid Email ID.";
            isErr = true;
        }
        else{
            isErr = false;
            document.getElementById('errmail').innerHTML = "";
        }
        if(pswd == "" || pswd.trim().length == 0){
            document.getElementById("errpswd").innerHTML = "* Password is required.";
            isErr = true;
        }
        else{
            isErr = false;
            document.getElementById('errpswd').innerHTML = "";
        }
    }
    if(isErr == false){
        window.location.href =  "../index.html";
    }
}
function validateEmail(){
    let mail = document.f.email.value;
    let normalEmail = /^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-z]+$/;
    if (mail == "" || mail.trim().length == 0) {
        isErr = true;
        document.getElementById('errmail').innerHTML = " * Email is Required.";
    }
    else if (normalEmail.test(mail) == false) {
        isErr = true;
        document.getElementById('errmail').innerHTML = " * Enter Valid Email Id.";
    }
    else{
        isErr = false;
        document.getElementById('errmail').innerHTML = "";
    }
}
function validatepswd(){
    let pswd = document.f.password.value;
    if (pswd == "" || pswd.trim().length == 0) {
        isErr = true;
        document.getElementById('errpswd').innerHTML = " * Password is Required."
    }
    else{
        isErr = false;
        document.getElementById('errpswd').innerHTML = "";
    }
}
