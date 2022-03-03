document.querySelector("#iconoCuenta").addEventListener('click',(e)=>{
    if(!localStorage.getItem("id").startsWith("0")){
        e.target.href = "usuario-perfil.html";
    }
    else{
        e.target.href = "iniciar-sesion.html";
    }
})