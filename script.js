let form = document.querySelector("form")
let submit = document.querySelector("#submit")

let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1;
// function validation(){
//     if(username == ""){
//         document.getElementById("userError").innerHTML = "User Name is empty"
//         flag = 0;
//     }else if(username.value.length < 3){
//         document.getElementById("userError").innerHTML = "User name requires min 3 Character"
//         flag = 0;
//     }else if(username == "welcome@#123" || "Welcome@#123"){
//         flag = 1 
//     }else{
//         document.getElementById("userError").innerHTML = "";
//         flag = 1;
//     }
//     if(password.value == ""){
//         document.getElementById("passError").innerHTML = "Password is empty";
//         flag = 0; 
//     }else if(password == "Welcome@#123"){
//         flag=1;
//     }else{
//         document.getElementById("passError").innerHTML= "";
//         flag=1;AZazazazs
    validation()

    console.log("submit is clicked")
    event.preventDefault()

})

