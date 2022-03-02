/*$(function(){
    $('#errDiv').hide();
    $('#logInfrm').submin(function(e){
        e.preventDefault();
        $.post("mod*****", $('#logInfrm').serialize(),function(data){
            $('#errDiv').show('slow');
            if(data)
                $('#errDiv').text('Sesión iniciada');
            else
            $('#errDiv').text('Verifique su información');
        }, "json");

    });
});*/

//llamada a API para cargar datos del usuario basados en su correo;

sessionStorage.setItem('id', 13);
let usuarioActual ={"id":sessionStorage.getItem('id')}; 
jsonaenviar = JSON.stringify(usuarioActual);

window.onload = function(s) {
        fetch('http://localhost:8080/Usuarios/IniciarSesion', {
            method : 'POST',
            body: jsonaenviar,
            headers: {
                "Content-Type": "application/json; charset = UTF-8"
            }
        })
            .then(res =>res.json())
                 .then(datos => {
                     console.log(datos);
                     $inputCorreo.value = datos.correo;
                     $inputPassword.value = datos.contrasenia;
                 });
    }