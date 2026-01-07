let hopp=document;
console.log(hopp);

// variables for form elements
let fname,lname,email,mobile,subject,message;

function startUp() {
    // store form element
    fname=document.getElementById("myform").elements["fname"];
    lname=document.getElementById("myform").elements["lname"];
    email=document.getElementById("myform").elements["email"];
    mobile=document.getElementById("myform").elements["mobile"];
    subject=document.getElementById("myform").elements["subject"];
    message=document.getElementById("myform").elements["message"];
    // start first name event listener
    fname.oninput = function() {
        let input = fname.value;
        if (!validateName(input)){
            showError("fnameErrorMessage","Use only letters.");
            fname.style.border = "solid red"; 
        } else {
            clearError("fnameErrorMessage");
            fname.style.border = "solid lightgreen"; 
        }
    };
    // start last name event listener
    lname.oninput = function() {
        let input = lname.value;
        if (!validateName(input)){
            showError("lnameErrorMessage","Use only letters.");
            lname.style.border = "solid red"; 
        } else {
            clearError("lnameErrorMessage");
            lname.style.border = "solid lightgreen";
        }
    };
    // start email event listener
    email.oninput = function() {
        let input = email.value;
        if (!validateEmail(input)){
            showError("emailErrorMessage","Use @ and a valid domain name.");
            email.style.border = "solid red"; 
        } else {
            clearError("emailErrorMessage");
            email.style.border = "solid lightgreen";
        }
    };
    // start mobile event listener
    mobile.oninput = function() {
        let input = mobile.value;
        if (!validateMobile(input)){
            showError("mobileErrorMessage","Use a valid phone number.");
            email.style.border = "solid red"; 
        } else {
            clearError("mobileErrorMessage");
            email.style.border = "solid lightgreen";
        }
    };
    // start message event listener
    message.oninput = function() {
        let input = message.value;
        document.getElementById("counter").innerHTML=input.length+" / 20 characters";
        if (!validateMessage(input)){
            showError("messageErrorMessage","Use at least 20 characters.");
            document.getElementById("counter").style.color="red";
            message.style.border = "solid red"; 
        } else {
            clearError("messageErrorMessage");
            document.getElementById("counter").style.color="lightgreen";
            message.style.border = "solid lightgreen";
        }
    }
}



window.onload = startUp;

function validateName(input) {
    const nameRegex  = /^[A-Za-z]+$/;
    return nameRegex.test(input);
}

function validateEmail(input) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(input);
}

function validateMobile(input) {
    const mobileRegex =  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return mobileRegex.test(input);
}

function validateMessage(input){
    return input.length>=20;
}

function showError(element,error){
    document.getElementById(element).style.opacity="100%";
    document.getElementById(element).innerHTML = error;
}

function clearError(element){
    document.getElementById(element).style.opacity="0%";
}

function clearForm(){
    fname.value="";
    lname.value="";
    email.value="";
    mobile.value="";
    message.value="";
    clearError("fnameErrorMessage");
    clearError("lnameErrorMessage");
    clearError("emailErrorMessage");
    clearError("mobileErrorMessage");
    clearError("messageErrorMessage");
}

function validateSubmission(event){
    event.preventDefault(); // Avoid page reloading when submitting
    let output="";
    let errors=0;
    // sum up all the errors in an output string
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
    if (!validateMobile(mobile.value)){
        output=output + "Use a valid phone number.";
        errors++;
    }
    if (!validateMessage(message.value)){
        output=output + "Use at least 20 characters in message text.";
        errors++;
    }

    showError("submitMessage",output);

    // submit if there are zero errors and show a message to the user
    if (errors==0){
        showError("submitMessage","Thank you " + fname.value + ", we will contact you as soon as possible.");
        clearForm();
        setTimeout(() => {
            showError("submitMessage","");
          }, "5000");
    }
}

    