    function validarVendedor(){
        if(!($inputTelefonoEmpresa.value.length>9 && $inputTelefonoEmpresa.value.length<12)){
            alert('El numero de teléfono debe tener de 10 a 11 dígitos');
            return false;
        }
        else{
            $inputNombreComercio.setAttribute('disabled',true);
            $inputNombreVendedor.setAttribute('disabled',true);
            $inputCorreoEmpresa.setAttribute('disabled',true);
            $inputTelefonoEmpresa.setAttribute('disabled',true);
            $inputDireccionEmpresa.setAttribute('disabled',true);
            $btnEditarVendedor.style.opacity = "1.0";
            $btnEditarVendedor.removeAttribute('disabled');
            $btnGuardarVendedor.style.opacity = "0.2";
            $btnGuardarVendedor.setAttribute('disabled',true);
            return false;
            // alert('Las modificaciones del vendedor se guardan en el usuario del correo X mediante API');
        }
    }

