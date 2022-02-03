$archivoProductoNuevo.addEventListener('change', (e)=>{
    let reader = new FileReader();
    reader.readAsDataURL($archivoProductoNuevo.files[0]);
    reader.onloadend = () =>{
        $imgProductoNuevo.src = reader.result;
        $btnSubirImagenProductoNuevo.textContent = "!Listo!";
    }
});