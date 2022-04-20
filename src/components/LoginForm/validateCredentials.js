export default function validateCredentials(email,name,password,confirmpassword){

    let error={};
    if(!email){
        error.email='email required'
    }
    else if(!(/^([a-zA-Z0-9\.\-_]+)@([a-zA-Z0-9\.\-_]+)\.([a-zA-Z]+)$/.test(email))){
        error.email='invalid email'
    }
    if (!(/^[a-zA-Z]([a-zA-z\s]){3,40}$/.test(name))){
        error.name='invalid input'
    }
    if(!(/(^[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password))){
        error.password='Password must be start with capital letter, at least 1 numeric character and 1 special character '
    }

    if(!confirmpassword){
        error.confirmpassword="Please return password again"
    }

    else if(!(password===confirmpassword)){
        error.confirmpassword="Password dosen't match"
    }
    return error;
}