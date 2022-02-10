$archivo.addEventListener('change', (e)=>{      //Funcion para agregar una foto en el formulario de usuario.
    let reader = new FileReader();
    reader.readAsDataURL($archivo.files[0]);
    reader.onloadend = () =>{
        $foto.src = reader.result;
    }
});