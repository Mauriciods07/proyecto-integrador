const $formLogin = document.querySelector('#formulario');
const $correo = document.querySelector('#correo');
const $password = document.querySelector('#password');

$formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const correo = $correo.value;
    const password = $password.value;


    if(correo != '' && password != '') {
        fetch('http://localhost:8080/Usuarios/IniciarSesion', {
            method: 'POST',
            body: JSON.stringify( {
                correo,
                password
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
                    title: 'Correo electronico o contraseña incorrecta',
                    text: 'Reintentar',
                    icon: 'error',
                    confirmButtonText: 'ok'
                });
                //emailError.textContent = 'Usuario o contraseña incorrecta';
            }
        })
    }

})