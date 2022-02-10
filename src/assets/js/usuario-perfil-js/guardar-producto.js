$btnModalAceptarProductoNuevo.addEventListener('click', (e) =>{ //Boton donde el dar click, verifica que las banderas de los inputs dentro del modal esten correctamente ingresadas, si lo estan, se agrega el producto(REQUIERE API)
    let ruta = $imgProductoNuevo.src;
    if(nombreproducto_OK && descripcionproducto_OK && costoproducto_OK && cantidadproducto_OK && !ruta.includes("error.png")){
        e.target.setAttribute('data-dismiss',"modal");
        alert('Agregado Exitoso');
    }
    else{
        alert('Revisa los apartados en rojo y recuerda que debes subir una imagen de tu producto');
        // alert('Se llama a API para agregar el producto a tienda, basado en el id del usuario (correo), id vendedor (correo), si ambos existen, se agrega el producto a la tienda dentro de la categoria especificada, y en sus propiedad de vendedor = correo de vendedor externo');
    }
});