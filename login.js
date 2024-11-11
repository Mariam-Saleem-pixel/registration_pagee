function validateForm(){
    let x = document.forms["myForm"]["uname"].value;
    if(x==""){
        alert("First Name must be filled out");
        return false;
    }
    let y = document.forms["myForm"]["password"].value;
    if(y == ""){
        alert("Please Enter Password!")
        return false
    }
}

