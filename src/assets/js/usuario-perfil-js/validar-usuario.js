$inputNombre.addEventListener('keyup', (e) =>{
    const expregNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const valido = expregNombre.test(e.target.value) ? true : false;
    if (valido){
        document.getElementById('lblNombre').style.color = 'white';
        document.getElementById('mensaje_error_Nombre').style.display = "none";
        nombre_OK = true;
    }
    else{
        document.getElementById('lblNombre').style.color = 'red';
        document.getElementById('mensaje_error_Nombre').style.display ="block";
        nombre_OK = false;
    }
});

$inputApellido.addEventListener('keyup', (e) =>{
    const expregApellido = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const valido = expregApellido.test(e.target.value) ? true : false;
    if (valido){
        document.getElementById('lblApellido').style.color = 'white';
        document.getElementById('mensaje_error_Apellido').style.display = "none";
        apellido_OK = true;
    }
    else{
        document.getElementById('lblApellido').style.color = 'red';
        document.getElementById('mensaje_error_Apellido').style.display ="block";
        apellido_OK = false
    }
});

$inputCorreo.addEventListener('keyup', (e) =>{
    const expregCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{3}$/;
    const valido = expregCorreo.test(e.target.value) ? true : false;
    if (valido){
        document.getElementById('lblCorreo').style.color = 'white';
        document.getElementById('mensaje_error_Correo').style.display = "none";
        correo_OK = true;
    }
    else{
        document.getElementById('lblCorreo').style.color = 'red';
        document.getElementById('mensaje_error_Correo').style.display ="block";
        correo_OK = false;
    }
});

$inputTelefono.addEventListener('keyup', (e) =>{
    const expregTelefono = /^\d{10,11}$/;
    const valido = expregTelefono.test(e.target.value) ? true : false;
    if (valido){
        document.getElementById('lblTelefono').style.color = 'white';
        document.getElementById('mensaje_error_Telefono').style.display = "none";
        telefono_OK = true;

    }
    else{
        document.getElementById('lblTelefono').style.color = 'red';
        document.getElementById('mensaje_error_Telefono').style.display ="block";
        telefono_OK = false;
    }
});

$inputDireccion.addEventListener('keyup', (e) =>{
    const expregDireccion = /^[a-zA-ZÀ-ÿ\s]{1,100}$/;
    const valido = expregDireccion.test(e.target.value) ? true : false;
    if (valido){
        document.getElementById('lblDireccion').style.color = 'white';
        document.getElementById('mensaje_error_Direccion').style.display = "none";
        direccion_OK = true;
    }
    else{
        document.getElementById('lblDireccion').style.color = 'red';
        document.getElementById('mensaje_error_Direccion').style.display ="block";
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
