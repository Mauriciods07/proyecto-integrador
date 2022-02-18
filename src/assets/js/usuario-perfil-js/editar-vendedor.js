$btnEditarVendedor.addEventListener('click',(e) =>{ //Funcion donde, el click a boton editar vendedor, habilita los campos inputs, botones de agregar producto y guardar vendedor. Mientras que el boton editar vendedor se deshabilita
    $inputNombreComercio.removeAttribute('disabled');
    //$inputNombreVendedor.removeAttribute('disabled');
    $inputCorreoEmpresa.removeAttribute('disabled');
    $inputTelefonoEmpresa.removeAttribute('disabled');
    $inputDireccionEmpresa.removeAttribute('disabled');
    $btnGuardarVendedor.removeAttribute('disabled');
    $btnGuardarVendedor.style.opacity = "1.0";
    $btnAgregarVendedor.removeAttribute('disabled');
    $btnAgregarVendedor.style.opacity = "1.0";
    e.target.style.opacity = "0.2";
    e.target.setAttribute('disabled',true);
});