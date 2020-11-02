window.onload=function(){
    const btn =document.getElementsByTagName("button")[0];
    const email= document.getElementById("email");
    var form = document.getElementsByClassName("form-group");
    
    
    form.addEventListener("submit",(e) =>{
    let messages=document.getElementsByTagName("message");
     if(email.value==null){
     messages.push("Please enter a valid email address")
     }
     else{
     messages.push("Thank you! Your email address ${name} has been added to our mailings list")
     }
    
e.preventDefault()
})
     }