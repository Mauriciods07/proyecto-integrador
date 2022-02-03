const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')

const expresiones = {
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos ={
	password: false,
	correo:  false ,
    apellido: false,
    nombre:  false,
    telefono: false,
    password2: false,
    correo2:  false, 


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

 

    if (campos. correo && campos. password){
        formulario.reset();
        window.location.href="usuario-perfil.html";

        document.querySelectorAll('.formulario_grupo-correcto').forEach ((icono) =>{
            icono.classList.remove ('formulario_grupo-correcto')
            document.getElementById ('formulario_mensaje').classList.remove('formulario_mensaje-activo');
        })
    } else{
        document.getElementById ('formulario_mensaje').classList.add ('formulario_mensaje-activo');
    }
})



