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