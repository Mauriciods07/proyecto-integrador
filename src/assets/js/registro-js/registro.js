sessionStorage.setItem('id', 28);
let usuarioActual ={"id":sessionStorage.getItem('id')}; 
jsonaenviar = JSON.stringify(usuarioActual);

window.onload = function(s) {
        fetch('http://localhost:8080/Usuarios/crearGuardarUsuario', {
            method : 'POST',
            body: jsonaenviar,
            headers: {
                "Content-Type": "application/json; charset = UTF-8"
            }
        })
            .then(res =>res.json())
                 .then(datos => {
                     console.log(datos);
                     $inputNombre.value = datos.nombre;
                     $inputApellido.value = datos.apellido;
                     $inputCorreo.value = datos.correo;
                     $inputPassword.value = datos.contrasenia;
                     $inputTelefono.value = datos.telefono;
                     $inputDireccion.value = null;
                     $inputFechaIngreso.value = null;
                     $inputNumeroTarjeta.value = null;
                     $inputfechaExpiracion.value = null;
                     $inputcvv.value = null;
                     $inputfoto.value = null;
                     $inputesVendedor.value = null;
                     $inputcomercio.value = null;
                     $inputcorreoEmpresa.value = null;
                     $inputtelefonoEmpresa.value = null;
                     $inputdireccionEmpresa.value = null;

                 });
    }