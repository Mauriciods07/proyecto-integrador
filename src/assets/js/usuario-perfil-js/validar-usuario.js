formularioUsuarioInputs.forEach((input,index) =>{
        if(index>=0 && index<=3){
            input.addEventListener('keyup',(e) =>{
                const valido = expregUsuario[index].test(input.value) ? true : false;
                if(valido){
                    document.querySelectorAll('.formulario_usuario label')[index].style.color = 'white';
                    document.querySelectorAll('.formulario_usuario p')[index].style.display = "none";
                    banderaUsuario[index] = true;
                }
                else{
                    document.querySelectorAll('.formulario_usuario label')[index].style.color = 'red';
                    document.querySelectorAll('.formulario_usuario p')[index].style.display = "block";
                    banderaUsuario[index] = false;
                }
            })
        }
        else if(index>=5 && index<=7){
            input.addEventListener('keyup', (e) =>{
                const valido = expregUsuario[index].test(input.value) ? true : false;
                if (valido){
                    document.getElementById('datos_Pago').style.color = "white";
                    input.style.color = 'white';
                    banderaUsuario[index] = true;
                }
                else{
                    input.style.color = 'red';
                    document.getElementById('datos_Pago').style.color = "red";
                    banderaUsuario[index] = true;
                }
            });
        }
        else{
            console.log('ignore los otros campos de foto y checkbox');
        }
});

$inputDireccion.addEventListener('keyup', (e) =>{   //Evento especial para campo direccion ya que es textarea y no input
    const expregDireccion = /^[a-zA-ZÀ-ÿ\s]{1,100}$/;
    const valido = expregDireccion.test(e.target.value) ? true : false;
    if (valido){
        document.querySelectorAll('.formulario_usuario label')[4].style.color = 'white';
        document.querySelectorAll('.formulario_usuario p')[4].style.display = "none";
        direccion_OK = true;
    }
    else{
        document.querySelectorAll('.formulario_usuario label')[4].style.color = 'red';
        document.querySelectorAll('.formulario_usuario p')[4].style.display = "block";
        direccion_OK = false;
    }
});

/*      Opcion 2 para validar
$inputNombre.addEventListener('keyup', (e) =>{
    const expregNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const valido = expregNombre.test(e.target.value) ? true : false;
    if (valido){
        document.querySelectorAll('.formulario_usuario label')[0].style.color = 'white';
        document.querySelectorAll('.formulario_usuario p')[0].style.display = "none";
        nombre_OK = true;
    }
    else{
        document.querySelectorAll('.formulario_usuario label')[0].style.color = 'red';
        document.querySelectorAll('.formulario_usuario p')[0].style.display = "block";
        nombre_OK = false;
    }
});

$inputApellido.addEventListener('keyup', (e) =>{
    const expregApellido = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const valido = expregApellido.test(e.target.value) ? true : false;
    if (valido){
        document.querySelectorAll('.formulario_usuario label')[1].style.color = 'white';
        document.querySelectorAll('.formulario_usuario p')[1].style.display = "none";
        apellido_OK = true;
    }
    else{
        document.querySelectorAll('.formulario_usuario label')[1].style.color = 'red';
        document.querySelectorAll('.formulario_usuario p')[1].style.display = "block";
        apellido_OK = false
    }
});

$inputCorreo.addEventListener('keyup', (e) =>{
    const expregCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{3}$/;
    const valido = expregCorreo.test(e.target.value) ? true : false;
    if (valido){
        document.querySelectorAll('.formulario_usuario label')[2].style.color = 'white';
        document.querySelectorAll('.formulario_usuario p')[2].style.display = "none";
        correo_OK = true;
    }
    else{
        document.querySelectorAll('.formulario_usuario label')[2].style.color = 'red';
        document.querySelectorAll('.formulario_usuario p')[2].style.display = "block";
        correo_OK = false;
    }
});

$inputTelefono.addEventListener('keyup', (e) =>{
    const expregTelefono = /^\d{10,11}$/;
    const valido = expregTelefono.test(e.target.value) ? true : false;
    if (valido){
        document.querySelectorAll('.formulario_usuario label')[3].style.color = 'white';
        document.querySelectorAll('.formulario_usuario p')[3].style.display = "none";
        telefono_OK = true;

    }
    else{
        document.querySelectorAll('.formulario_usuario label')[3].style.color = 'red';
        document.querySelectorAll('.formulario_usuario p')[3].style.display = "block";
        telefono_OK = false;
    }
});

$inputDireccion.addEventListener('keyup', (e) =>{
    const expregDireccion = /^[a-zA-ZÀ-ÿ\s]{1,100}$/;
    const valido = expregDireccion.test(e.target.value) ? true : false;
    if (valido){
        document.querySelectorAll('.formulario_usuario label')[4].style.color = 'white';
        document.querySelectorAll('.formulario_usuario p')[4].style.display = "none";
        direccion_OK = true;
    }
    else{
        document.querySelectorAll('.formulario_usuario label')[4].style.color = 'red';
        document.querySelectorAll('.formulario_usuario p')[4].style.display = "block";
        direccion_OK = false;
    }
});

$inputTarjeta.addEventListener('keyup', (e) =>{
    const expregTarjeta = /^\d{16}$/;
    const valido = expregTarjeta.test(e.target.value) ? true : false;
    if (valido){
        document.getElementById('datos_Pago').style.color = "white";
        e.target.style.color = 'white';
        tarjeta_OK = true;
    }
    else{
        e.target.style.color = 'red';
        document.getElementById('datos_Pago').style.color = "red";
        tarjeta_OK = false;
    }
});

$inputVencimiento.addEventListener('keyup', (e) =>{
    const expregVencimiento = /^(0[0-9]|1[0-9])\/?([0-9]{2})$/;
    const valido = expregVencimiento.test(e.target.value) ? true : false;
    if (valido){
        document.getElementById('datos_Pago').style.color = "white";
        e.target.style.color = 'white';
        vencimiento_OK = true;
    }
    else{
        e.target.style.color = 'red';
        document.getElementById('datos_Pago').style.color = "red";
        vencimiento_OK = false;
    }
});

$inputCVV.addEventListener('keyup', (e) =>{
    const expregVencimiento = /^\d{3}$/;
    const valido = expregVencimiento.test(e.target.value) ? true : false;
    if (valido){
        document.getElementById('datos_Pago').style.color = "white";
        e.target.style.color = 'white';
        cvv_OK = true;
    }
    else{
        e.target.style.color = 'red';
        document.getElementById('datos_Pago').style.color = "red";
        cvv_OK = false
    }
});


$inputNombre.removeEventListener("keyup",KeyboardEvent);
$inputApellido.removeEventListener("keyup",KeyboardEvent);
$inputCorreo.removeEventListener("keyup",KeyboardEvent);
$inputTelefono.removeEventListener("keyup",KeyboardEvent);
$inputDireccion.removeEventListener("keyup",KeyboardEvent);
$inputVencimiento.removeEventListener("keyup",KeyboardEvent);
$inputTarjeta.removeEventListener("keyup",KeyboardEvent);
$inputCVV.removeEventListener("keyup",KeyboardEvent);
*/