let hopp=document;
console.log(hopp);

let fname,lname,email,mobile,subject,message;

function storeFormElements() {
    fname=document.getElementById("myform").elements["fname"];
    lname=document.getElementById("myform").elements["lname"];
    email=document.getElementById("myform").elements["email"];
    mobile=document.getElementById("myform").elements["mobile"];
    subject=document.getElementById("myform").elements["subject"];
    message=document.getElementById("myform").elements["message"];
    console.log(fname);
    console.log(lname);
    console.log(email);
    console.log(mobile);
    console.log(subject);
    console.log(message);
}

window.onload = storeFormElements;