let form=document.getElementById("form")
 form.addEventListener("submit",function(){
    event.preventDefault()
    let email=form.email.value;
    let password=form.password.value;
    console.log(email,password)
})