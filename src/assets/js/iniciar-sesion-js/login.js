//localStorage.setItem('id', 8);
/* let usuarioActual ={"id":sessionStorage.getItem('id')}; 
jsonaenviar = JSON.stringify(usuarioActual); */

window.onload = function(s) {
    const urlguarda = 'http://localhost:8080/Usuarios/IniciarSesion'
    fetch(urlguarda, {
            method : 'POST',
            body: /* jsonaenviar, */ JSON.stringify({id:localStorage.getItem('id')}),
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