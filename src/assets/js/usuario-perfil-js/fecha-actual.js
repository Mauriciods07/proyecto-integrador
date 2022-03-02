let dia = new Date();
dia = dia.getDate()<10 ? "0"+dia.getDate() : dia.getDate();
let mes = new Date();
mes = mes.getMonth()<10 ? "0"+ (mes.getMonth()+1): mes.getMonth()+1;
let anio = new Date().getFullYear();
let fechaActual = anio + '-' + mes + '-' + dia;
    //console.log(fechaActual);