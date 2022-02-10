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

const validarCampo = (expresion, input, campo)=>{
  if(expresion.test(input.value)){
    document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
    document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto');
    document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');

   }else{
       document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
       document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto');
       document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');

   }
}




inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})


    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
    })

 