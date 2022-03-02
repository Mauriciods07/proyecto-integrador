const $formLogin = document.querySelector('#formulario');
const $nombre = document.querySelector('#nombre');
const $apellido = document.querySelector('#apellido');
const $correo = document.querySelector('#correo');
const $password = document.querySelector('#password');
const $telefono = document.querySelector('#telefono');

$formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = $nombre.value; 
    const apellido = $apellido.value;
    const correo = $correo.value;
    const password = $password.value;
    const telefono = $telefono.value;


    if(nombre != '' && apellido != '' && correo != '' && password != '' && telefono != '' ) {
        fetch('Usuarios/crearGuardarUsuario', {
            method: 'POST',
            body: JSON.stringify( {
                nombre,
                apellido,
                correo,
                password,
                telefono
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(resp => {
            const token = resp.headers.get('Authorization');
            
            if(token && token.includes('Bearer') && resp.ok) {
                localStorage.setItem('token', token);
                console.log(token);
                url = window.location;
                const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1)
                location.href = path +  'usuario-perfil.html';
            } else {
                localStorage.removeItem('token');
                Swal.fire({
                    title: 'Rellena los campos faltantes',
                    text: 'Reintentar',
                    icon: 'error',
                    confirmButtonText: 'ok'
                });
                //emailError.textContent = 'Usuario o contraseña incorrecta';
            }
        })
    }

})