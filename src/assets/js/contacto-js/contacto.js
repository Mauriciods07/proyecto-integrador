//Función para que no se envie el formulario si hay campos invalidos
//2da opción para la validación
/*(function() {
  'use strict';
  window.addEventListener('load', function() {
    
    var forms = document.getElementsByClassName('needs-validation');
    
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
        // poner despues de la valdación
        //needs-validation.reset();
       // return false
      }, false);
    }); 
  }, false); 
})();
*/
 
const formulario =  document.getElementById ('formulario')
const inputs = document.querySelectorAll ('#formulario input')
 
const expresiones = {
   
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios y acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{10,12}$/, // 10 a 12 numeros.
}
const campos = {
  nombre: false,
  correo: false,
  telefono: false
}

const validarFormulario = (e) =>{
   switch( e.target.name ){
       case 'nombre':
          validarCampo(expresiones.nombre, e.target, 'nombre');
           break;
       case 'correo':
         validarCampo(expresiones.correo, e.target, 'correo');
            break;
       case 'telefono':
         validarCampo(expresiones.telefono, e.target,'telefono');
            break;
     
   }
}

const validarCampo = (expresion,   input, campo)=>{
  if(expresion.test(input.value)){
    document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
    document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto');
    document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
    campos[campo] = true; 

   }else{
       document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
       document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto');
       document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');
       campos[campo] = false; 

   }
}




inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})


formulario.addEventListener('submit', (e) => {
  //e.preventDefault();

  const mensaje = document.getElementById ('mensaje');
  if(campos.nombre && campos.correo && campos.telefono && mensaje.value){
    window.location.href="contacto.html";
    //formulario.reset();

    document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
    setTimeout(() =>{
      document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
    }, 4000);

  } else {
    document.getElementById ('formulario__mensaje').classList.add('formulario__mensaje-activo');
    setTimeout(() =>{
      document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
    }, 4000);
  }

})


