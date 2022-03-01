var userList = [];

function addUserToSystem(nombre, apellido, correo, password, telefono){

    var newUser = {
        nombre : nombre,
        apellido: apellido,
        correo: correo,
        password: password,
        telefono: telefono
    };
    console.log(newUser)
    userList.push(newUser);
}