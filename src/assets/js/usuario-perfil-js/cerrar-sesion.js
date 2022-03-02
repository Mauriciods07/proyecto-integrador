
$('#modalCerrarSesion').on('shown.bs.modal', function() {    //Funcion resetearlos valores de inputs.value a strings vacios o valores predefinidos, tal que al abrir el modal de producto nuevo, siempre este listo para recibir informacion del usuario
    document.querySelector('#btnModalAceptar').addEventListener('click',(e) => {
        localStorage.removeItem('id');
        localStorage.removeItem('C');
    })
})
