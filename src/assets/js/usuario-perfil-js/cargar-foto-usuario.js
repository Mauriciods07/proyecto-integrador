$archivo.addEventListener('change', (e)=>{
    let reader = new FileReader();
    reader.readAsDataURL($archivo.files[0]);
    reader.onloadend = () =>{
        $foto.src = reader.result;
    }
});