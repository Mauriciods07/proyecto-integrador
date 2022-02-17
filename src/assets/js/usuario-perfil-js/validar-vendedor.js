formularioVendedorInputs.forEach((input,index) =>{      //  REVISAR validar-usuario.js PARA EXPLICACION, ES LO MISMO, PERO APLICADO AL FORMULARIO DE VENDEDOR
        input.addEventListener('keyup',(e) =>{
            const valido = expregVendedor[index].test(input.value) ? true : false;
            if(valido){
                document.querySelectorAll('.formulario_vendedor label')[index].style.color = '#46FF01';
                document.querySelectorAll('.formulario_vendedor p')[index].style.display = "none";
                input.style.border = "3px solid #46FF01";
                banderaVendedor[index] = true;
            }
            else{
                document.querySelectorAll('.formulario_vendedor label')[index].style.color = 'red';
                document.querySelectorAll('.formulario_vendedor p')[index].style.display = "block";
                input.style.border = "3px solid red";
                banderaVendedor[index] = false;
            }
        })
});
$inputDireccionEmpresa.addEventListener('keyup', (e) =>{
    const valido = e.target.value.length<100 ? true : false;
    if (valido){
        document.getElementById('lblDireccionEmpresa').style.color = '#46FF01';
        document.getElementById('mensaje_error_DireccionEmpresa').style.display = "none";
        e.target.style.border = "3px solid #46FF01";
        direccionempresa_OK = true;
    }
    else{
        document.getElementById('lblDireccionEmpresa').style.color = 'red';
        document.getElementById('mensaje_error_DireccionEmpresa').style.display ="block";
        e.target.style.border = "3px solid red";
        direccionempresa_OK = false;
    }
});

/*  Opcion 2 de validar formulario de vendedor
$inputNombreComercio.addEventListener('keyup', (e) =>{
    const expregNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const valido = expregNombre.test(e.target.value) ? true : false;
    if (valido){
        document.getElementById('lblComercio').style.color = 'white';
        document.getElementById('mensaje_error_Comercio').style.display = "none";
        comercio_OK = true;
    }
    else{
        document.getElementById('lblComercio').style.color = 'red';
        document.getElementById('mensaje_error_Comercio').style.display ="block";
        comercio_OK = false;
    }
});

$inputNombreVendedor.addEventListener('keyup', (e) =>{
    const expregVendedor = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const valido = expregVendedor.test(e.target.value) ? true : false;
    if (valido){
        document.getElementById('lblNombreLegal').style.color = 'white';
        document.getElementById('mensaje_error_Legal').style.display = "none";
        legal_OK = true;
    }
    else{
        document.getElementById('lblNombreLegal').style.color = 'red';
        document.getElementById('mensaje_error_Legal').style.display ="block";
        legal_OK = false
    }
});

$inputCorreoEmpresa.addEventListener('keyup', (e) =>{
    const expregCorreoEmpresa = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{3}$/;
    const valido = expregCorreoEmpresa.test(e.target.value) ? true : false;
    if (valido){
        document.getElementById('lblCorreoEmpresa').style.color = 'white';
        document.getElementById('mensaje_error_CorreoEmpresa').style.display = "none";
        correoempresa_OK = true;
    }
    else{
        document.getElementById('lblCorreoEmpresa').style.color = 'red';
        document.getElementById('mensaje_error_CorreoEmpresa').style.display ="block";
        correoempresa_OK = false;
    }
});

$inputTelefonoEmpresa.addEventListener('keyup', (e) =>{
    const expregTelefonoEmpresa = /^\d{10,11}$/;
    const valido = expregTelefonoEmpresa.test(e.target.value) ? true : false;
    if (valido){
        document.getElementById('lblTelefonoEmpresa').style.color = 'white';
        document.getElementById('mensaje_error_TelefonoEmpresa').style.display = "none";
        telefonoempresa_OK = true;

    }
    else{
        document.getElementById('lblTelefonoEmpresa').style.color = 'red';
        document.getElementById('mensaje_error_TelefonoEmpresa').style.display ="block";
        telefonoempresa_OK = false;
    }
});

$inputDireccionEmpresa.addEventListener('keyup', (e) =>{
    const expregDireccionEmpresa = /^[a-zA-ZÀ-ÿ\s]{1,100}$/;
    const valido = expregDireccionEmpresa.test(e.target.value) ? true : false;
    if (valido){
        document.getElementById('lblDireccionEmpresa').style.color = 'white';
        document.getElementById('mensaje_error_DireccionEmpresa').style.display = "none";
        direccionempresa_OK = true;
    }
    else{
        document.getElementById('lblDireccionEmpresa').style.color = 'red';
        document.getElementById('mensaje_error_DireccionEmpresa').style.display ="block";
        direccionempresa_OK = false;
    }
});



$inputNombreComercio.removeEventListener("keyup",KeyboardEvent);
$inputNombreVendedor.removeEventListener("keyup",KeyboardEvent);
$inputCorreoEmpresa.removeEventListener("keyup",KeyboardEvent);
$inputTelefonoEmpresa.removeEventListener("keyup",KeyboardEvent);
$inputDireccionEmpresa.removeEventListener("keyup",KeyboardEvent);*/