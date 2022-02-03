$('#modalAgregarProductoNuevo').on('shown.bs.modal', function() { 
   $inputNombreProductoNuevo.value = "";
   $inputDescripcionProductoNuevo.value ="";
   $inputDescripcionProductoNuevo.textContent ="";
   $inputCostoProductoNuevo.value="";
   $inputCantidadProductoNuevo.value="";
   $btnSubirImagenProductoNuevo.textContent = "Subir Foto";
   $imgProductoNuevo.src = "src/img/error.png";
});