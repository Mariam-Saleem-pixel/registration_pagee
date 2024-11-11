function validateForm(){
    let x = document.forms["myFormlogin"]["fname"].value;
    if(x==""){
        alert("First Name must be filled out");
        return false;
    }
    let y = document.forms["myFormlogin"]["lname"].value;
    if(y==""){
        alert("Last Name Must be filled out");
        return false;
    }
    let z = document.forms["myFormlogin"]["contact"].value;
    if(z == ""){
        alert("Add your Contact Number");
        return false;
    }
    a = document.forms["myFormlogin"]["country"].value;
    if(a == ""){
        alert("Select your country")
        return false;
    }
    u = document.forms["myFormlogin"]["email"].value;
    if(u == ""){
        alert("write your email")
        return false;
    }
    b = document.forms["myFormlogin"]["password"].value;
    if(b == ""){
        alert("Write Strong Password")
        return false;
    }
}