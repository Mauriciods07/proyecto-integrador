$btnEditarVendedor.addEventListener('click',(e) =>{
    $inputNombreComercio.removeAttribute('disabled');
    $inputNombreVendedor.removeAttribute('disabled');
    $inputCorreoEmpresa.removeAttribute('disabled');
    $inputTelefonoEmpresa.removeAttribute('disabled');
    $inputDireccionEmpresa.removeAttribute('disabled');
    $btnGuardarVendedor.removeAttribute('disabled');
    $btnGuardarVendedor.style.opacity = "1.0";
    $btnAgregarVendedor.removeAttribute('disabled');
    $btnAgregarVendedor.style.opacity = "1.0";
    e.target.style.opacity = "0.2";
    e.target.setAttribute('disabled',true);
    alert('Has habilitado la opcion de editar datos del vendedor');
});