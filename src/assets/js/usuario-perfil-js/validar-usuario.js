formularioUsuarioInputs.forEach((input,index) =>{   //Funcion que evalua todos los inputs dentro del formulario de usuario, como todos los inputs no se utilizan, existen condicionales dentro del foreach
        if(index>=0 && index<=3){   //Los indices del 0-3 son inputs de nombre, apellido, correo y telefono
            input.addEventListener('keyup',(e) =>{  //A cada input se agrega un evento de escritura, mientras se escribe dentro de ellos, se evalua que cumplan las expresiones regulares, dependiendo de la validacion el estilo de texto cambia
                const valido = expregUsuario[index].test(input.value) ? true : false;
                if(valido){
                    document.querySelectorAll('.formulario_usuario label')[index].style.color = '#46FF01';
                    document.querySelectorAll('.formulario_usuario p')[index].style.display = "none";
                    input.style.border = "3px solid #46FF01";
                    banderaUsuario[index] = true;
                }
                else{
                    document.querySelectorAll('.formulario_usuario label')[index].style.color = 'red';
                    document.querySelectorAll('.formulario_usuario p')[index].style.display = "block";
                    input.style.border = "3px solid red";
                    banderaUsuario[index] = false;
                }
            })
        }
        else if(index>=5 && index<=7){  //Los indices del 5-7 son campos de pago (Tarjeta, fecha de vencmiento y CVV)
            input.addEventListener('keyup', (e) =>{ //Se agregan eventos de escritura y mientras se escribe se valida con expresiones regulares, el estilo del texto interior cambia, al igual que el label datos de pago.
                const valido = expregUsuario[index].test(input.value) ? true : false;
                if (valido){
                    document.getElementById('datos_Pago').style.color = "#46FF01";
                    input.style.color = 'white';
                    input.style.border = "3px solid #46FF01";
                    banderaUsuario[index] = true;
                }
                else{
                    input.style.color = 'red';
                    input.style.border = "3px solid red";
                    document.getElementById('datos_Pago').style.color = "red";
                    banderaUsuario[index] = true;
                }
            });
        }
        else{   //Si el indice no esta en los rangos seleccionados, se omiten los inputs de foto y checkbox, ya que no son necesarios para validacion
           // console.log('ignore los otros campos de foto y checkbox');
        }
});

$inputDireccion.addEventListener('keyup', (e) =>{   //Evento especial para campo direccion ya que es textarea y no input
    const valido = e.target.value.length<100 ? true : false;
    if (valido){
        document.querySelectorAll('.formulario_usuario label')[4].style.color = '#46FF01';
        document.querySelectorAll('.formulario_usuario p')[4].style.display = "none";
        e.target.style.border = "3px solid #46FF01";
        direccion_OK = true;
    }
    else{
        document.querySelectorAll('.formulario_usuario label')[4].style.color = 'red';
        document.querySelectorAll('.formulario_usuario p')[4].style.display = "block";
        e.target.style.border = "3px solid red";
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