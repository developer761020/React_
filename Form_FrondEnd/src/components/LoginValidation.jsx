function validation(value){
    let error={};
    const emailRegex=/^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if(value.email===""){
        error.email="Email Should not be empty";
    }
    else if(!emailRegex.test(value.email)){
        error.email="Email not match";
    }
    else{
        error.email="";
    }
    if(value.password===""){
        error.password="Password Should not be empty";
    }
    else if(!passwordRegex.test(value.password)){
        error.password="Password not match"
    }
    else{
        error.password="";
    }
    return error;
}

export default validation