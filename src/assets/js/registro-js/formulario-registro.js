const formulario=  document.getElementById ('formulario')
const inputs= document.querySelectorAll ('#formulario input')

const expresiones = {
	
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.

	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo2: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const campos ={
	password: false,
	correo2:  false ,
    nombre: false,
    correo2: false,

    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/, // 4 a 12 digitos.
	telefono: /^\d{10,11}$/ // 10 a 11 numeros.
}
const campos ={
    nombre: false,
    apellido:false,
	correo:  false ,

    password: false,
    telefono: false
   

}
const validarFormulario = (e) =>{
 switch (e.target.name){
     case  "nombre":
          validarCampo (expresiones.nombre, e.target, 'nombre');
     break;
    case  "apellido":

        validarCampo (expresiones.nombre, e.target, 'apellido');
    
    break;
    case  "correo2":
        validarCampo (expresiones.correo2, e.target, 'correo2');

        validarCampo (expresiones.apellido, e.target, 'apellido');
    
    break;
    case  "correo":
        validarCampo (expresiones.correo, e.target, 'correo');

    
    break
     case  "password":
        validarCampo (expresiones.password, e.target, 'password');
    
    break;
    case  "telefono":
        validarCampo (expresiones.telefono, e.target, 'telefono');
    
    break;
 }
}

const validarCampo = (expresion , input, campo ) =>{


    if (expresion.test (input.value))    {

    if (expresion.test (input.value)){

        document.getElementById (`grupo-${campo}`).classList.remove ('formulario_grupo-incorrecto');
        document.getElementById (`grupo-${campo}`).classList.add ('formulario_grupo-correcto');
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo-${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo')


        campos [campo] = true;


    } else {
        document.getElementById (`grupo-${campo}`).classList.add ('formulario_grupo-incorrecto')
        document.getElementById (`grupo-${campo}`).classList.remove ('formulario_grupo-correcto')
        document.querySelector(`#grupo-${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo-${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo-${campo} .formulario_input-error`).classList.add('formulario_input-error-activo')

    }

        campos [campo] = false;
    }


    
}


inputs.forEach((input) =>{

    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})

formulario.addEventListener ('submit', (e) =>{


    if (campos.nombre &&  campos.apellido && campos.correo2 && campos.password &&  campos.telefono){
        

    if (campos.nombre && campos.apellido && campos.correo && campos.password && campos.telefono){
        window.location.href="usuario-perfil.html";

      formulario.reset();
        document.querySelectorAll('.formulario_grupo-correcto').forEach ((icono) =>{
            icono.classList.remove ('formulario_grupo-correcto')
            document.getElementById ('formulario_mensaje').classList.remove('formulario_mensaje-activo');
        })
        
    } else{
        document.getElementById ('formulario_mensaje').classList.add ('formulario_mensaje-activo');
    }


} )