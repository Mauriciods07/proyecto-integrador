$inputNombreProductoNuevo.addEventListener('keyup', (e) =>{
    const expregNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const valido = expregNombre.test(e.target.value) ? true : false;
    if (valido){
        document.getElementById('lblNombreProducto').style.color = 'white';
        e.target.style.color = "white";
        nombreproducto_OK = true;
    }
    else{
        document.getElementById('lblNombreProducto').style.color = 'red';
        e.target.style.color = "red";
        nombreproducto_OK = false;
    }
});

$inputDescripcionProductoNuevo.addEventListener('keyup', (e) =>{
    const expregDescripcion = /^[a-zA-ZÀ-ÿ\s]{1,100}$/;
    const valido = expregDescripcion.test(e.target.value) ? true : false;
    if (valido){
        document.getElementById('lblDescripcionProducto').style.color = 'white';
        e.target.style.color = "white";
        descripcionproducto_OK = true;
    }
    else{
        document.getElementById('lblDescripcionProducto').style.color = 'red';
        e.target.style.color = "red";
        descripcionproducto_OK = false
    }
});

$inputCostoProductoNuevo.addEventListener('keyup', (e) =>{
    if (parseInt(e.target.value)>=1){
        document.getElementById('lblCostoProducto').style.color = 'white';
        e.target.style.color = "white";
        costoproducto_OK = true;
    }
    else{
        document.getElementById('lblCostoProducto').style.color = 'red';
        e.target.style.color = "red";
        costoproducto_OK = false;
    }
});

$inputCantidadProductoNuevo.addEventListener('keyup', (e) =>{
    if (parseInt(e.target.value)>=1){
        document.getElementById('lblCantidadProducto').style.color = 'white';
        e.target.style.color = "white";
        cantidadproducto_OK = true;
    }
    else{
        document.getElementById('lblCantidadProducto').style.color = 'red';
        e.target.style.color = "red";
        cantidadproducto_OK = false;
    }
});



$inputNombreProductoNuevo.removeEventListener("keyup",KeyboardEvent);
$inputDescripcionProductoNuevo.removeEventListener("keyup",KeyboardEvent);
$inputCostoProductoNuevo.removeEventListener("keyup",KeyboardEvent);
$inputCantidadProductoNuevo.removeEventListener("keyup",KeyboardEvent);