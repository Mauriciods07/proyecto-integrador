$esVendedor.addEventListener('click', (e) =>{
    $formVendedor.style.display = (e.target.checked) ? "block" : "none";

    // Si esta en checked el checkbox hay que cargar los datos de vendedor de la base de datos, o en su caso, pedir datos nuevos
});
