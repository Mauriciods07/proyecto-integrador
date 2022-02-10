do{
    paginas++;
    numjuegos-=2;
}while(numjuegos>0)

let indicePaginas =paginas.valueOf();

// console.log("Inicio numero de juegos por agregar "+numJuegosPorAgregar);
// console.log("Inicio numero de paginas por agregar " +paginas);

for(let i=0;i<paginas;i++){
    if(numJuegosPorAgregar<2){    //Si solo hay un elemento por agregar, crear una pagina con un solo elemento
        let $pagCarouselSimple = document.createElement('div');
        $pagCarouselSimple.classList.add('carousel-item');
        $pagCarouselSimple.classList.add(indicePaginas===1 ? 'active':'noactive'); 
        $pagCarouselSimple.innerHTML = `<div class="row">
          <div class="col-md-12 col-sm-12 d-flex justify-content-center mb-2">
              <div class="card card_articulo_comprado popover-test" title="Orden 1881">
                <div class="row">
                  <div class="col-6">
                    <img src=${juegos[2*i].img} alt=${juegos[2*i].titulo} width="150" height="200">
                  </div>
                  <div class="col-6 pt-3">
                    <div class="row d-flex flex-column mb-1 text-center">
                      <span class="orden_texto">Nombre</spans>
                      <span class="orden_texto_id d-inline-block">${juegos[2*i].titulo}</span>
                    </div>
                    <div class="row d-flex flex-column text-center mb-1">
                      <span class="orden_texto">Precio</span>
                      <span class="orden_texto_id mx-auto">${'$' + juegos[2*i].precio}</span>
                    </div>
                    <div class="row d-flex flex-column text-center">
                      <span class="orden_texto">Cantidad</span>
                      <span class="orden_texto_id mx-auto">${juegos[2*i].cantidad}</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>`;
        numJuegosPorAgregar--;    //Se disminuye en 1 el numero de juegos por agregar
        indicePaginas--;      //Se disminuye en 1 el numero de paginas por agregar
        $carousel.appendChild($pagCarouselSimple);
        console.log("Paginas actuales =" + indicePaginas + " + numJuegosPorAgregar = " + numJuegosPorAgregar); 
    }     
    else{      //Si aun no se cumple que los juegos por agregar sean menores a 2, significa que deben agregar paginas con dos elementos
        let $pagCarouselDoble = document.createElement('div');   //Este es el div de clase carousel-item donde estaran las cartas
        $pagCarouselDoble.classList.add('carousel-item');
        $pagCarouselDoble.classList.add(indicePaginas===1 ? 'active':'noactive'); 
        console.log(indicePaginas);
        console.log(indicePaginas===1);
        $pagCarouselDoble.innerHTML = `<div class="row">
          <div class="col-md-6 col-sm-12 d-flex justify-content-center mb-2">
              <div class="card card_articulo_comprado popover-test" title="Orden 1881">
                <div class="row">
                  <div class="col-6">
                    <img src=${juegos[2*i].img} alt=${juegos[2*i].titulo} width="150" height="200">
                  </div>
                  <div class="col-6 pt-3">
                    <div class="row d-flex flex-column mb-1 text-center">
                            <span class="orden_texto">Nombre</spans>
                            <span class="orden_texto_id d-inline-block">${juegos[2*i].titulo}</span>
                    </div>
                    <div class="row d-flex flex-column text-center mb-1">
                      <span class="orden_texto">Precio</span>
                      <span class="orden_texto_id mx-auto">${'$' + juegos[2*i].precio}</span>
                    </div>
                    <div class="row d-flex flex-column text-center">
                      <span class="orden_texto">Cantidad</span>
                      <span class="orden_texto_id mx-auto">${juegos[2*i].cantidad}</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div class="col-md-6 col-sm-12 d-flex justify-content-center mb-2">
            <div class="card card_articulo_comprado popover-test" title="Orden 1881">
              <div class="row">
                <div class="col-6">
                  <img src="${juegos[2*i+1].img}" alt=${juegos[2*i+1].titulo} width="150" height="200">
                </div>
                <div class="col-6 pt-3">
                  <div class="row d-flex flex-column text-center mb-1">
                    <span class="orden_texto">Nombre</spans>
                    <span class="orden_texto_id d-inline-block">${juegos[2*i+1].titulo}</span>
                  </div>
                  <div class="row d-flex flex-column text-center mb-1">
                    <span class="orden_texto">Precio</span>
                    <span class="orden_texto_id mx-auto">${'$' + juegos[2*i+1].precio}</span>
                  </div>
                  <div class="row d-flex flex-column text-center">
                    <span class="orden_texto">Cantidad</span>
                    <span class="orden_texto_id mx-auto">${juegos[2*i+1].cantidad}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
        numJuegosPorAgregar = numJuegosPorAgregar-2;    //Se disminuye en 2 el numero de juegos por agregar
        indicePaginas--; 
        $carousel.appendChild($pagCarouselDoble);
        console.log("Paginas actuales =" + indicePaginas + " + numJuegosPorAgregar = " + numJuegosPorAgregar);   
    }
}

let TextosWrap = document.querySelectorAll('.orden_texto_id');
TextosWrap.forEach((texto,index)=>{
    if (texto.textContent.length>13) {
        TextosWrap[index].textContent = texto.textContent.substring(0,10)+"...";
    }
})