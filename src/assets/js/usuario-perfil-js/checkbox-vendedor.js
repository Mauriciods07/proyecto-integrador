let $esVendedor = document.getElementById("cbxUneteEquipo");
let $formVendedor = document.getElementById("divFormularioVendedor");
let $btnEditarVendedor = document.getElementById("btn_Editar_Vendedor");
let $btnGuardarVendedor = document.getElementById("btn_Guardar_Vendedor");
let $btnAgregarVendedor = document.getElementById("btn_Agregar_Vendedor");
$esVendedor.addEventListener('click', (e) =>{
    $formVendedor.style.display = (e.target.checked) ? "block" : "none";

    // Si esta en checked el checkbox hay que cargar los datos de vendedor de la base de datos, o en su caso, pedir datos nuevos
});
