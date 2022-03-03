    /*function validarVendedor(){     //Funcion para validar los campos de formulario vendedor, esta funcion se llama del tag form del vendedor y siempre regresa false para que no recargue la pagina. 
        */
       document.querySelector('#formularioVendedor').addEventListener('submit',(e) => {
           e.preventDefault();
        if(!(banderaVendedor.every(campo => campo===true)&&direccionempresa_OK)){
            alert('Revisa los campos en rojo');
            console.log(banderaVendedor);
        }
        else{               //Si los inputs son correctos, se desahbilitan las entradas de texto y solo se puede editar el vendedor de nuevo
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
            
            $inputNombreComercio.setAttribute('disabled',true);
           // $inputNombreVendedor.setAttribute('disabled',true);
            $inputCorreoEmpresa.setAttribute('disabled',true);
            $inputTelefonoEmpresa.setAttribute('disabled',true);
            $inputDireccionEmpresa.setAttribute('disabled',true);
            $btnEditarVendedor.style.opacity = "1.0";
            $btnEditarVendedor.removeAttribute('disabled');
            $btnGuardarVendedor.style.opacity = "0.2";
            $btnGuardarVendedor.setAttribute('disabled',true);
            $btnAgregarVendedor.style.opacity = "0.2";
            $btnAgregarVendedor.setAttribute('disabled',true);
        }
       });

