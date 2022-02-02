function validarUsuario(){
    if(!($inputTelefono.value.length>9 && $inputTelefono.value.length<12)){
        alert('El numero de teléfono debe tener de 10 a 11 dígitos');
        return false;
    }
    else{
        alert('Las modificaciones del Usuario se guardan en el usuario del correo X mediante API');
        $inputNombre.setAttribute('disabled',true);
        $inputApellido.setAttribute('disabled',true);
        $inputCorreo.setAttribute('disabled',true);
        $inputTelefono.setAttribute('disabled',true);
        $inputDireccion.setAttribute('disabled',true);
        $inputTarjeta.setAttribute('disabled',true);
        $inputVencimiento.setAttribute('disabled',true);
        $inputCVV.setAttribute('disabled',true);
        $inputCBX.setAttribute('disabled',true);
        $btnEditarUsuario.style.opacity = "1.0";
        $btnEditarUsuario.removeAttribute('disabled');
        $btnGuardarUsuario.style.opacity = "0.2";
        $btnGuardarUsuario.setAttribute('disabled',true);

        /////////////////////Formulario de Vendedor se desactiva hasta que se vuelva a editar de manera general///////////////////////////////
        $btnEditarVendedor.setAttribute('disabled',true);
        $btnEditarVendedor.style.opacity = "0.2";
        $btnGuardarVendedor.setAttribute('disabled',true);
        $btnGuardarVendedor.style.opacity = "0.2";
        $inputNombreComercio.setAttribute('disabled',true);
        $inputNombreVendedor.setAttribute('disabled',true);
        $inputCorreoEmpresa.setAttribute('disabled',true);
        $inputTelefonoEmpresa.setAttribute('disabled',true);
        $inputDireccionEmpresa.setAttribute('disabled',true);
        $btnAgregarVendedor.setAttribute('disabled',true);
        $btnAgregarVendedor.style.opacity = "0.2";
        return false;
    }
    
}


