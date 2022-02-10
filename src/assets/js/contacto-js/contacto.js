//Función para que no se envie el formulario si hay campos invalidos
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
   
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{10,11}$/, // 10 a 11 numeros.
}
const campos ={
    nombre: false,
    correo: false,
    telefono: false,
    mensaje:false
   
 
}

const validarFormulario = (e) =>{
   switch( e.target.name ){
       case "nombre":
           if(expresiones.nombre.test(e.target.value)){

           }else{
               document.getElementById('grupo_nombre').classList.add('formulario_grupo-incorrecto');
           }
           break;
       case 'correo':
   
            break;
       case 'telofono':
    
            break;
        case 'mensaje':
        
            break;
   }
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})


    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
    })

 