//validar q no este vacio y q contenga @
function userValidation(form) { 
  
    let user = form.user
    console.log(user.value)

    if (user.value =="") { 
        alert ("Complete este campo")
        return false
    }  

    else if (user.value.indexOf ("@") <0) {
        alert ("Ingrese el usuario incluyendo el @ ")
        return false
    }
    return true
} 
  
//validar q no este vacio 
function passwordValidation(form) { 
 
    let password = form.password
    if (password.value =="") { 
        alert ("Complete este campo")
        return false
    }
    return true
}

//valida lo anterior 
function submitValidation(form) {

 let resultado1 = userValidation(form)
 let resultado2 = passwordValidation(form)

  if 
    (resultado1 && resultado2 == true) {
    alert ("El Formulario es Valido")

  }

}