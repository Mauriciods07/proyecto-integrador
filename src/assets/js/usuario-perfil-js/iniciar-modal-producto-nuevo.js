$('#modalAgregarProductoNuevo').on('shown.bs.modal', function() {    //Funcion resetearlos valores de inputs.value a strings vacios o valores predefinidos, tal que al abrir el modal de producto nuevo, siempre este listo para recibir informacion del usuario
   $inputNombreProductoNuevo.value = "";
   $inputDescripcionProductoNuevo.value ="";
   $inputDescripcionProductoNuevo.textContent ="";
   $inputCostoProductoNuevo.value="";
   $inputCantidadProductoNuevo.value="";
   $btnSubirImagenProductoNuevo.textContent = "Subir Foto";
   $imgProductoNuevo.src = "src/img/error.png";
});