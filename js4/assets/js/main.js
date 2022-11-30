
function Reg(){
var name=document.getElementById("Name").value
var pass=document.getElementById("Password").value
var em=document.getElementById("Email").value

    


if (name == "" && pass == "" && em=="") {
    alert("Name,password and email must be filled out");
    
}

else if (name.length<6 ) {
    alert("Username must contain 6 simvol ");
} 

else if (name[0]!==name[0].toUpperCase()) {
    alert(" first letter must be UpperCase")
}

else if(pass.length<6) {

alert("Password must contain 6 symbols") 

}
else if(pass.length>10){
    alert("Password must contain less than 10 symbols")
}

else if (em.includes("@",".")) {
    alert("nicee")
}
else{
    alert("fix email")
}


}
