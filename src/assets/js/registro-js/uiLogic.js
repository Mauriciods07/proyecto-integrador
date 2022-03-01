document.querySelector('#formulario_mensaje-enviado').addEventListener('click', saveUser);


function saveUser(){
    var nombre = document.querySelector ('#nombre').value,
        apellido = document.querySelector ('#apellido').value,
        correo = document.querySelector ('#correo').value,
        password = document.querySelector ('#password').value,
        telefono = document.querySelector ('#telefono').value

        addUserToSystem(nombre, apellido, correo, password, telefono);
}