    function validarVendedor(){
        if(!(comercio_OK && legal_OK && correoempresa_OK && telefonoempresa_OK && direccionempresa_OK)){
            alert('Revisa los campos en rojo');
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
            $btnAgregarVendedor.style.opacity = "0.2";
            $btnAgregarVendedor.setAttribute('disabled',true);
            return false;
            // alert('Las modificaciones del vendedor se guardan en el usuario del correo X mediante API');
        }
    }

