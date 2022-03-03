/* Obtener los elementos */
let $container = document.querySelector('.card-group');


fetch('http://localhost:8080//Productos/obtenerProductoPorCategoria/Xbox')
  .then((response) => response.json())
  .then((json) => {
    json.forEach((el) => {
         
        console.log(el);

        let creado = document.createElement('div');
        //---
        creado.innerHTML = `
        <dir class="col text-center" id="${el.id}> 
        <div class="row Box"> <br><img src="${el.imagen}" class="Imagen_prducto" style="border-color:  #46FF01 "  alt="Pruducto">
        <div class="hoverVerde">
        <p> ${el.nombreProducto}
              <br> ${el.costo}
            </div>  
            <div class="row">
            <div class="col letra">
            ${el.nombreProducto}<br>${el.costo} <br><button class="redondo Verde button" style="border-color: #46FF01"> <img src="src/img/img_productos/carrito.png"  alt="carrito " class="Carrito"> </button>
          </div>
       </div>
      </dir> 
      `;
    $container.appendChild(creado);
    })
  });
