//Esta funcion se manda llamar cuando el boton de guardar es seleccionado con submit
document.querySelector('#formularioUsuario').addEventListener('submit',(e) =>{
    e.preventDefault();
    if(!(banderaUsuario[0]&&banderaUsuario[1]&&banderaUsuario[2]&&banderaUsuario[3]&&banderaUsuario[5]&&banderaUsuario[6]&&banderaUsuario[7]&&direccion_OK)){
        alert('Revisa los campos en rojo');
    }
    else{   //Si el formulario se lleno correctamente, los campos input se deshabilitan y solo se podra editar el usuario nuevamente o cerrar sesion
        fetch('http://localhost:8080/Usuarios/GuardarUsuario', {
            method : 'POST',
            body: JSON.stringify({
                id:localStorage.getItem('id').toString(),
                nombre:$inputNombre.value,
                apellido: $inputApellido.value,
                telefono:$inputTelefono.value,
                direccion:$inputDireccion.value,
                numeroTarjeta:$inputTarjeta.value,
                fechaExpiracion:$inputVencimiento.value,
                cvv:$inputCVV.value,
                esVendedor:$inputCBX.checked,
                comercio:$inputNombreComercio.value,
                correoEmpresa:$inputCorreoEmpresa.value,
                telefonoEmpresa:$inputTelefonoEmpresa.value,
                direccionEmpresa:$inputDireccionEmpresa.value
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
        $inputNombre.setAttribute('disabled',true);
        $inputApellido.setAttribute('disabled',true);
        $inputCorreo.setAttribute('disabled',true);
        $inputTelefono.setAttribute('disabled',true);
        $inputDireccion.setAttribute('disabled',true);
        $inputTarjeta.setAttribute('disabled',true);
        $inputVencimiento.setAttribute('disabled',true);
        $inputCVV.setAttribute('disabled',true);
        $inputCBX.setAttribute('disabled',true);
        $archivo.setAttribute('disabled',true);
        $btnEditarUsuario.style.opacity = "1.0";
        $btnEditarUsuario.removeAttribute('disabled');
        $btnGuardarUsuario.style.opacity = "0.2";
        $btnGuardarUsuario.setAttribute('disabled',true);
    }
})
/*function guardarUsuario(){  //Funcion llamada por el tag form de usuario, regresa false siempre para que la pagina nunca recargue, verifica que las banderas de los inputs sean true, para asegurarse que los datos son correctos y cambiar informacion del usuario mediante API, SE REQUIERE API AQUI
    
    
}*/

