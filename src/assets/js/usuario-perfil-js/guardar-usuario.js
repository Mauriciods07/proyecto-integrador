//Esta funcion se manda llamar cuando el boton de guardar es seleccionado con submit
function guardarUsuario(){
    if(!(banderaUsuario[0]&&banderaUsuario[1]&&banderaUsuario[2]&&banderaUsuario[3]&&banderaUsuario[5]&&banderaUsuario[6]&&banderaUsuario[7]&&direccion_OK)){
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

