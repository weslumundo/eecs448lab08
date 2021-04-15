function verify(){
    let t1 = document.getElementById("text1");
    let t2 = document.getElementById("text2");
    if(t1.value.length < 8||t2.value.length < 8){
        alert("Passwords are not at least 8 characters long");
    }
    else if(t1.value == t2.value){
        alert("Passwords Match!");
    }
    else{
        alert("Passwords Do Not Match!");
    }
}