//localStorage.setItem('id', );
//let usuarioActual ={"id":sessionStorage.getItem('id')}; 
//jsonaenviar = JSON.stringify(usuarioActual);
/* window.onload = function(s) {
    const urlguarda = 'http://localhost:8080/Usuarios/crearGuardarUsuario'
    fetch(urlguarda, { */
        /* fetch('http://localhost:8080/Usuarios/crearGuardarUsuario', { */
            //method : 'POST',
            //body: /* jsonaenviar, */ JSON.
           /*  .then(res =>res.json())
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
                     $inputFechaExpiracion.value = null;
                     $inputCvv.value = null;
                     $inputFoto.value = null;
                     $inputEsVendedor.value = null;
                     $inputComercio.value = null;
                     $inputCorreoEmpresa.value = null;
                     $inputTelefonoEmpresa.value = null;
                     $inputDireccionEmpresa.value = null; 
                 });
                 ({id:localStorage.getItem('id')}),
            headers: {
                "Content-Type": "application/json; charset = UTF-8"
            }
        })
    } */

    document.querySelector('#formulario').addEventListener('submit',(e) =>{
        e.preventDefault();
        if(!(nombre && apellido && correo && contrasenia && telefono)){
            alert('Rellena los campos');
        }
        else{  
            fetch('http://localhost:8080/Usuarios/crearGuardarUsuario', {
                method : 'POST',
                body: JSON.stringify({
                nombre:$inputNombre.value,
                apellido: $inputApellido.value,
                correo:$inputCorreo.value,
                contrasenia:localStorage.getItem("id"),
                telefono:$inputTelefono.value,
                direccion:null,
                fechaIngreso:null,
                numeroTarjeta:null,
                fechaExpiracion:null,
                cvv:null,
                foto:null,
                esVendedor:null,
                comercio:null,
                correoEmpresa:null,
                telefonoEmpresa:null,
                direccionEmpresa:null
                }),
                headers: {
                    "Content-Type": "application/json; charset = UTF-8"
                }
            })
                .then(res =>{

                    if(res.ok){
                        alert("Se guardo el usuario correctamente")
                    }
                    else{
                        alert("Hubo un error al guardar el usuario")
                    }
                })
        }
    })