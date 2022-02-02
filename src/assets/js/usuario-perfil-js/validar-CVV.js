$inputCVV.addEventListener('input', (e) =>{
    if(!(e.target.value.length===3)){
        e.target.style.color = "red";
    }
    else{
        e.target.style.color = "white";
    }
});