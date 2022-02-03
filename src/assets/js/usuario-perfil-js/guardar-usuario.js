function validarUsuario(){
    if(!($inputTelefono.value.length>9 && $inputTelefono.value.length<12) || !($inputTarjeta.value.length===16 && $inputVencimiento.value.length===5 && $inputCVV.value.length===3)) {
        alert('Revisa los campos en rojo');
        return false;
    }
    else{
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
        return false;
    }
    
}

// function restaurar(){    
//         /////////////////////Formulario de Vendedor se desactiva hasta que se vuelva a editar de manera general///////////////////////////////
//         $btnEditarVendedor.setAttribute('disabled',true);
//         $btnEditarVendedor.style.opacity = "0.2";
//         $btnGuardarVendedor.setAttribute('disabled',true);
//         $btnGuardarVendedor.style.opacity = "0.2";
//         $inputNombreComercio.setAttribute('disabled',true);
//         $inputNombreVendedor.setAttribute('disabled',true);
//         $inputCorreoEmpresa.setAttribute('disabled',true);
//         $inputTelefonoEmpresa.setAttribute('disabled',true);
//         $inputDireccionEmpresa.setAttribute('disabled',true);
//         $btnAgregarVendedor.setAttribute('disabled',true);
//         $imgFotoUsuario.setAttribute('disabled',true);
//         $btnAgregarVendedor.style.opacity = "0.2";
// }
