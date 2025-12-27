let hopp=document;
console.log(hopp);

let fname,lname,email,mobile,subject,message;

function startUp() {
    // store form element
    fname=document.getElementById("myform").elements["fname"];
    lname=document.getElementById("myform").elements["lname"];
    email=document.getElementById("myform").elements["email"];
    mobile=document.getElementById("myform").elements["mobile"];
    subject=document.getElementById("myform").elements["subject"];
    message=document.getElementById("myform").elements["message"];
    // start event listeners
    fname.oninput = function() {
        let input = fname.value;
        if (!validateName(input)){
            showError("fnameErrorMessage","Use only letters.");
        } else {
            clearError("fnameErrorMessage");
        }
    };
    lname.oninput = function() {
        let input = lname.value;
        if (!validateName(input)){
            showError("lnameErrorMessage","Use only letters.");
        } else {
            clearError("lnameErrorMessage");
        }
    };
    email.oninput = function() {
        let input = email.value;
        if (!validateEmail(input)){
            showError("emailErrorMessage","Use @ and a valid domain name.");
        } else {
            clearError("emailErrorMessage");
        }
    };
    message.oninput = function() {
        let input = message.value;
        document.getElementById("counter").innerHTML=input.length+"/20";
        if (!validateMessage(input)){
            showError("messageErrorMessage","Use at least 20 characters.");
            document.getElementById("counter").style.color="red";
        } else {
            clearError("messageErrorMessage");
            document.getElementById("counter").style.color="green";
        }
    }
}



window.onload = startUp;

function validateField(input, condition, errorMsg) {
    if (!condition) {
        // show error
        return false;
    } else {
        // clear error
        return true;
    }
}

function validateName(input) {
    const nameRegex  = /^[A-Za-z]+$/;
    return nameRegex.test(input);
}

function validateEmail(input) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(input);
}

function validateMessage(input){
    return input.length>=20;
}

function showError(element,error){
    document.getElementById(element).innerHTML = error;
}

function clearError(element){
    document.getElementById(element).innerHTML = "";
}

function clearForm(){
    fname.value="";
    lname.value="";
    email.value="";
    mobile.value="";
    message.value="";
}

function validateSubmission(event){
    event.preventDefault(); // Avoid page reloading when submitting
    let output="";
    let errors=0;
    if (!validateName(fname.value)){
        output="Use only letters in first name. ";
        errors++;
    }
    if (!validateName(lname.value)){
        output=output + "Use only letters in last name. ";
        errors++;
    }
    if (!validateEmail(email.value)){
        output=output + "Use @ and a valid domain name in email adress.";
        errors++;
    }
    if (!validateMessage(message.value)){
        output=output + "Use at least 20 characters in message text.";
        errors++;
    }

    showError("submitErrorMessage",output);

    if (errors==0){
        clearForm();
    }
}

function checkArray(input,condition){
    for (let i = 0; i < input.length; i++){
    // do something with array[i]
    }
}
    