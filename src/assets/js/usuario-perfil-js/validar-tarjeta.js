$inputTarjeta.addEventListener('input', (e) =>{
    if(!(e.target.value.length===16)){
        e.target.style.color = "red";
    }
    else{
        e.target.style.color = "white";
    }
});