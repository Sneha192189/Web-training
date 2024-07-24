document.querySelector("form").addEventListener("submit",function(e){

e.preventDefault()

let name=document.getElementById("name").value
let email=document.getElementById("email").value
let password=document.getElementById("password").value

let userArr =JSON.parse(localStorage.getItem("userkadata"))||[];
let userDetails={
    name: name,
    email : email,
    password: password
}
userArr.push(userDetails)
console.log(userDetails);
localStorage.setItem("userkadata", JSON.stringify(userArr));
})

// login form
document.getElementById("login-form").addEventListener("submit",function(e){

    e.preventDefault()
    
    let email=document.getElementById("email-login").value
    let password=document.getElementById("password-login").value
    // email===email what we have in our local storage
    let savedData =JSON.parse(localStorage.getItem("userkadata"))
    console.log(savedData);

    let isUser= savedData.find(user =>user.email===email && user.password === password);
    console.log(isUser);
    if(isUser){
        alert("Login Sucessful")
    }
    else{
        alert("something went wrong")
    }
})