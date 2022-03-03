let $inputNombre = document.getElementById('nombre');         //Variable con referencia a input Nombre de usuario
let $inputApellido = document.getElementById('apellido');     //Variable con referencia a input apellido de usuario
let $inputCorreo = document.getElementById('correo');         //Variable con referencia a input correo de usuario
let $inputTelefono = document.getElementById('telefono');     //Variable con referencia a input telefono de usuario
let $inputContrasenia = document.getElementById('password'); 

const formulario=  document.getElementById ('formulario')
const inputs= document.querySelectorAll ('#formulario input')

const expresiones = {	
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos. 
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

        validarCampo (expresiones.apellido, e.target, 'apellido')
    
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
        campos [campo] = false;
    }
 }

inputs.forEach((input) =>{

    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
})

formulario.addEventListener ('submit', (e) =>{

    if (campos.nombre && campos.apellido && campos.correo && campos.password && campos.telefono){
        fetch('http://localhost:8080/Usuarios/crearGuardarUsuario', {
            method : 'POST',
            body: JSON.stringify({
            nombre:$inputNombre.value,
            apellido: $inputApellido.value,
            correo:$inputCorreo.value,
            contrasenia:$inputContrasenia.value,
            telefono:$inputTelefono.value,
            direccion:" ",
            fechaIngreso:"2022-02-15",
            numeroTarjeta:null,
            fechaExpiracion:null,
            cvv:null,
            foto:null,
            esVendedor:false,
            comercio:null,
            correoEmpresa:null,
            telefonoEmpresa:null,
            direccionEmpresa:null
            }),
            headers: {
                "Content-Type": "application/json; charset = UTF-8"
            }})
          
            .then(res => res.json()).then(dato =>{
                    //console.log(dato.id)
                   if(dato.id == undefined ) {
                       alert("Este usuario ya ha suido registrado")
                   }else{
                    localStorage.setItem("id",dato.id)
                    alert("Usuario registrado")
                    formulario.reset();
                    document.querySelectorAll('.formulario_grupo-correcto').forEach ((icono) =>{
                    icono.classList.remove ('formulario_grupo-correcto')
                    document.getElementById ('formulario_mensaje').classList.remove('formulario_mensaje-activo');
        })
        setTimeout(() => { window.location.href="usuario-perfil.html";}, 1000);
         

                   }
                } )


    
        
    } else{
        document.getElementById ('formulario_mensaje').classList.add ('formulario_mensaje-activo');
    }


} )
