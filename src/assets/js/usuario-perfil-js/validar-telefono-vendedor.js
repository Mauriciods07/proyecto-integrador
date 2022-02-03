$inputTelefonoEmpresa.addEventListener('input', (e) =>{
    if(!(e.target.value.length>9 && e.target.value.length<12)){
        e.target.style.color = "red";
    }
    else{
        e.target.style.color = "white";
    }
});