$inputNombreProductoNuevo.addEventListener('keyup', (e) =>{ //Evento donde al escribir sobre el input Nombre de producto nuevo, la funcion pregunta si es igual a la expresion regular definida (1-40 caracteres), si esta bien o no, los estilos de texto cambian para avisar al usuario
    const valido =e.target.value.length<60 ? true : false;
    if (valido){
        document.getElementById('lblNombreProducto').style.color = '#46FF01';
        e.target.style.color = "white";
        e.target.style.border = "3px solid #46FF01";
        nombreproducto_OK = true;
    }
    else{
        document.getElementById('lblNombreProducto').style.color = 'red';
        e.target.style.color = "red";
        e.target.style.border = "3px solid red";
        nombreproducto_OK = false;
    }
});

$inputDescripcionProductoNuevo.addEventListener('keyup', (e) =>{ //Evento donde al escribir sobre el input descripcion de producto nuevo, la funcion pregunta si es igual a la expresion regular definida (1-100 caracteres), si esta bien o no, los estilos de texto cambian para avisar al usuario
    const valido = e.target.value.length<150 ? true : false;
    if (valido){
        document.getElementById('lblDescripcionProducto').style.color = '#46FF01';
        e.target.style.color = "white";
        e.target.style.border = "3px solid #46FF01";
        descripcionproducto_OK = true;
    }
    else{
        document.getElementById('lblDescripcionProducto').style.color = 'red';
        e.target.style.color = "red";
        e.target.style.border = "3px solid red";
        descripcionproducto_OK = false
    }
});

$inputCostoProductoNuevo.addEventListener('keyup', (e) =>{ //Evento donde al escribir sobre el input costo de producto nuevo, la funcion pregunta si es igual a la condicion definida (costo mayor a 1), si esta bien o no, los estilos de texto cambian para avisar al usuario
    if (parseInt(e.target.value)>=1){
        document.getElementById('lblCostoProducto').style.color = '#46FF01';
        e.target.style.color = "white";
        e.target.style.border = "3px solid #46FF01";
        costoproducto_OK = true;
    }
    else{
        document.getElementById('lblCostoProducto').style.color = 'red';
        e.target.style.color = "red";
        e.target.style.border = "3px solid red";
        costoproducto_OK = false;
    }
});

$inputCantidadProductoNuevo.addEventListener('keyup', (e) =>{   //Evento donde al escribir sobre el input Cantidad de producto nuevo, la funcion pregunta si es igual a la condicion definida (cantidad mayor a 1), si esta bien o no, los estilos de texto cambian para avisar al usuario
    if (parseInt(e.target.value)>=1){
        document.getElementById('lblCantidadProducto').style.color = '#46FF01';
        e.target.style.color = "white";
        e.target.style.border = "3px solid #46FF01";
        cantidadproducto_OK = true;
    }
    else{
        document.getElementById('lblCantidadProducto').style.color = 'red';
        e.target.style.color = "red";
        e.target.style.border = "3px solid red";
        cantidadproducto_OK = false;
    }
});
//El elemento select no se valida porque tiene una categoria definida por defecto, asi que el usuario debe tener atencion al llenar el formulario