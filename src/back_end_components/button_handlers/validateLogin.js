function validateLogin(user){
    console.log("Received user: ",user);
    if(user.username.includes("@tamu.edu")){
        return true;
    }
    return false;
}

export default validateLogin;