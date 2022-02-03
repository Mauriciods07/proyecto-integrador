//Función para que no se envie el formulario si hay campos invalidos
(function() {
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
        /* needs-validation.reset();
        return false */
      }, false);
    }); 
  }, false); 
})();

/* function validar(){
  console.log('se envio formulario contacto');
    form1.reset();
    return false
} */
/* const btn_enviarCorreo = document.getElementById('btn_enviar');

btn_enviarCorreo.addEventListener('click',function(e){
  e.preventDefaul();
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const telefono = document.getElementById('telegono').value;
  const mensaje = document.getElementById('mensaje').value;
  window.location.href=`mailto:naye@gmail.to?subject=envioDesdeFormulario&body=Nombre%3A${nombre}%0ACorreo%3A${correo}%0ATelefono%3A${telefono}%0AMensaje%3A${mensaje}`;
});
 */



