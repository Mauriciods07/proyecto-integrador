    function validarVendedor(){     //Funcion para validar los campos de formulario vendedor, esta funcion se llama del tag form del vendedor y siempre regresa false para que no recargue la pagina. 
        if(!(banderaVendedor.every(campo => campo===true)&&direccionempresa_OK)){
            alert('Revisa los campos en rojo');
            console.log(banderaVendedor);
            return false;
        }
        else{               //Si los inputs son correctos, se desahbilitan las entradas de texto y solo se puede editar el vendedor de nuevo
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
        }
    }

