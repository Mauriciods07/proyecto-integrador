$archivoProductoNuevo.addEventListener('change', (e)=>{     //Funcion dedicada a obtener la ruta del archivo seleccionado por el usuario
    let reader = new FileReader();
    reader.readAsDataURL($archivoProductoNuevo.files[0]);
    reader.onloadend = () =>{
        $imgProductoNuevo.src = reader.result;
        $btnSubirImagenProductoNuevo.textContent = "!Listo!";
    }
});