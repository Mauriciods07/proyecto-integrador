$inputCBX.addEventListener('change', (e) =>{     //Funcion donde al dar click al checkbox de unirse al equipo, el formulario de usuario aparece o desaparece del html
    $formVendedor.style.display = (e.target.checked) ? "block" : "none";
});
