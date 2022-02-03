$btnModalAceptarProductoNuevo.addEventListener('click', (e) =>{
    let ruta = $imgProductoNuevo.src;
    if($inputCostoProductoNuevo.value>=1 && $inputCantidadProductoNuevo.value>=1 && $inputNombreProductoNuevo.value.length>0 &&$inputDescripcionProductoNuevo.value.length>0 && !ruta.includes("error.png")){
        
        e.target.setAttribute('data-dismiss',"modal");
        alert('Agregado Exitoso');
        console.log($inputCostoProductoNuevo.value>=1);
        console.log($inputCantidadProductoNuevo.value>=1);
        console.log($inputNombreProductoNuevo.value.length>0);
        console.log($inputDescripcionProductoNuevo.value.length>0);
        console.log(!ruta.includes("error.png"))
    }
    else{
        console.log($inputCostoProductoNuevo.value>=1);
        console.log($inputCantidadProductoNuevo.value>=1);
        console.log($inputNombreProductoNuevo.value.length>0);
        console.log($inputDescripcionProductoNuevo.value.length>0);
        console.log(!ruta.includes("error.png"))
        alert('Revisa los apartados del formulario, debes subir una imagen de tu producto, costo y cantidad no deben ser 0');
        // alert('Se llama a API para agregar el producto a tienda, basado en el id del usuario (correo), id vendedor (correo), si ambos existen, se agrega el producto a la tienda dentro de la categoria especificada, y en sus propiedad de vendedor = correo de vendedor externo');
    }
});
