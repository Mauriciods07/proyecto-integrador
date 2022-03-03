let $inputCorreo = document.getElementById('correo');
let $inputContrasenia = document.getElementById('password');
localStorage.setItem('id',"0");
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')

const expresiones = {
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	
}

const campos ={
	password: false,
	correo:  false ,
   

}

const validarFormulario = (e) =>{
switch(e.target.name){
    case "correo":
        validarCampo(expresiones.correo, e.target , 'correo');
    break;

    case "password":
       
        validarCampo(expresiones.password, e.target , 'password');
    
    break;
}
}

const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto');
        document.querySelector (`#grupo_${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove  ('fa-times-circle');
        document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
        campos [campo] = true;


    }else{
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto');
        document.querySelector (`#grupo_${campo} i`).classList.add ('fa-times-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove ('fa-check-circle');
        document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');
        campos [campo] = false;
    }
}

inputs.forEach ((input) =>{
input.addEventListener ('keyup', validarFormulario );
input.addEventListener ('blur', validarFormulario );
})

formulario.addEventListener ('submit', (e)=> {
    e.preventDefault();
    if (campos. correo && campos. password){
        fetch('http://localhost:8080/Usuarios/IniciarSesion', {
            method : 'POST',
            body: JSON.stringify({
               correo:$inputCorreo.value,
               contrasenia:$inputContrasenia.value
            }),
            headers: {
                "Content-Type": "application/json; charset = UTF-8"
            }})
          
            .then(res => res.json()).then(dato => localStorage.setItem("id",dato.toString()))
            setTimeout(() => {}, 100);
            if(parseInt(localStorage.getItem("id"))!==0 ){
                //formulario.reset();
                document.querySelectorAll('.formulario_grupo-correcto').forEach ((icono) =>{
                icono.classList.remove ('formulario_grupo-correcto')
                document.getElementById ('formulario_mensaje').classList.remove('formulario_mensaje-activo');
                })
                setTimeout(() => { window.location.href="usuario-perfil.html";}, 1000);
            }
            else{
                console.log("invalido");
            }
        
    } else{
        document.getElementById ('formulario_mensaje').classList.add ('formulario_mensaje-activo');
    }
})



