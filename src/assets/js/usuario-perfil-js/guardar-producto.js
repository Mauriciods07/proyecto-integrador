$btnModalAceptarProductoNuevo.addEventListener('click', (e) =>{ //Boton donde el dar click, verifica que las banderas de los inputs dentro del modal esten correctamente ingresadas, si lo estan, se agrega el producto(REQUIERE API)
    let ruta = $imgProductoNuevo.src;
    if(nombreproducto_OK && descripcionproducto_OK && costoproducto_OK && cantidadproducto_OK && !ruta.includes("error.png")){

        e.target.setAttribute('data-dismiss',"modal");
        const urlNuevoProducto = 'http://localhost:8080/Productos/nuevoProducto'
        fetch(urlNuevoProducto, {
            method : 'POST',
            body: JSON.stringify({usuario:{
                                          id:localStorage.getItem('id')
                                          },
                                 nombreProducto:$inputNombreProductoNuevo.value,
                                 descripcion:$inputDescripcionProductoNuevo.value,
                                 imagen:"ImagendeProductoSubido",
                                 costo:$inputCostoProductoNuevo.value,
                                 cantidad:$inputCantidadProductoNuevo.value,
                                 categoria:$inputCategoriaProductoNuevo.value,
                                 fechaProducto:fechaActual
            }),
            headers: {
                "Content-Type": "application/json; charset = UTF-8"
            }
        }).then(res =>{
            if(res.ok){
                alert("Se guardo el producto correctamente")
            }
            else{
                alert("Hubo un error al guardar el producto")
            }
        })
    }
    else{
        
        
        alert('Revisa los apartados en rojo y recuerda que debes subir una imagen de tu producto');
        document.querySelector('#formularioProducto').addEventListener('submit',(e)=>{
            e.preventDefault();
        });
        // alert('Se llama a API para agregar el producto a tienda, basado en el id del usuario (correo), id vendedor (correo), si ambos existen, se agrega el producto a la tienda dentro de la categoria especificada, y en sus propiedad de vendedor = correo de vendedor externo');
    }
});