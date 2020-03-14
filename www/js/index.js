function validaForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (!email.length && !password.length) {
        swal("Por favor ingrese los datos!");
    }else if (!email.length) {
        swal("Por favor ingrese su email!");
    }else if(!password.length){
        swal("Por favor ingrese su password!");
    }else{
        //swal("EXITO!");
        validarUser(email, password);
    }
    
}