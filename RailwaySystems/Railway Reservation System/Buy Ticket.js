function validate() {
    // checking and wrong for empty feilds in first name  
    let fnameTest = document.myForm.fname.value.search(/[a-zA-Z]/g)
    if (document.myForm.fname.value == "" || fnameTest == -1) {
        alert("First name can only be letters");
        document.myForm.fname.focus();
        return false;
    }

    // checking and wrong for empty feilds in first name  
    let lnameTest = document.myForm.lname.value.search(/[a-zA-Z]/g)
    if (document.myForm.lname.value == "" || lnameTest == -1) {
        alert("Lat name can only be letters");
        document.myForm.lname.focus();
        return false;
    }


    // checking and wrong for empty feilds in email 
    let emailTest = document.myForm.email.value.search(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(ashesi.edu.gh)$/)
    if (document.myForm.email.value == "" || emailTest == -1) {
        alert("Enter your email!");
        document.myForm.email.focus();
        return false;
    }


    // check if the lenght of the passenger is 8 
    if (document.myForm.passenger_no.value == "" || isNaN(document.myForm.passenger_no.value) ||
        document.myForm.passenger_no.value.length != 8) {

        alert("Null or incorrect Student Id");
        document.myForm.passenger_no.focus();
        return false;
    }


    // checking for empty feilds in gender
    if (document.myForm.gender.value == "") {
        alert("Select your gender!");
        document.myForm.gender.focus();
        return false;
    }

    // checking for empty feilds in Train
    if (document.myForm.ways.value == "-1") {
        alert("Please select your way!");
        return false;
    }


    // checking whether digits of the passengers_no  matches this class year group
    let lastFourDigits = document.myForm.passenger_no.value.substr(-4);
    if (document.myForm.class.value !== lastFourDigits) {
        alert("passenger number does not match!");
        document.myForm.passenger_no.focus();
        return false;
    }

    // checking for empty feilds in Train number
    if (document.myForm.trian_number.value == "-1") {
        alert("Choose your Train!");
        return false;
    }
    return (true);

}