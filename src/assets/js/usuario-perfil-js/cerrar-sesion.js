
$('#modalCerrarSesion').on('shown.bs.modal', function() {    //Funcion resetearlos valores de inputs.value a strings vacios o valores predefinidos, tal que al abrir el modal de producto nuevo, siempre este listo para recibir informacion del usuario
    

/*let correo = "jonathan@gmail.com";
let contrasenia = "260793";
let objetoParaEnviar = {correo,contrasenia};
let jsonaenviar = JSON.stringify(objetoParaEnviar);

    fetch('http://localhost:8080/Usuarios/IniciarSesion', {
        method : 'POST',
        body: jsonaenviar,
        headers: {
            "Content-Type": "application/json; charset = UTF-8"
        }
    })
        .then(res => res.json())
            .then(datos => sessionStorage.setItem("IdUsuario",datos))
*/
    document.querySelector('#btnModalAceptar').addEventListener('click',(e) => {
        sessionStorage.removeItem('id');
    })
})
