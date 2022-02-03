let Mario = {
    titulo: "Mario Kart",
    img: "src/img/productos/mario_kart8_deluxe.jpg",
    precio: 1400,
    descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nisi saepe optio vero animi assumenda non quas corporis corrupti eius eum facere quod sunt repellendus, recusandae quo veritatis dolorem? Molestias.",
    color: "#FF00BC",
    cantidad: 1
}

let Luigi = {
    titulo: "Luigi",
    img: "src/img/productos/luigis_mansion3.jpg",
    precio: 1500,
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat voluptatum ullam quis recusandae rem id excepturi tempore magni! Doloremque laudantium vero assumenda illum, reprehenderit atque sunt necessitatibus expedita ipsum?",
    color: "#46FF01",
    cantidad: 1
}

let Pokemon = {
    titulo: "Pokémon",
    img: "src/img/productos/pokemon_brilliant_diamond.jpg",
    precio: 1300,
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta cupiditate, repellat nihil quisquam minima enim expedita cum molestiae natus accusantium fugiat voluptates laboriosam, quas modi perspiciatis laudantium temporibus nemo accusamus.",
    color: "#1212FF",
    cantidad: 1
}

const juegos = [Mario, Luigi, Pokemon];

/* Recibir los productos de la API */
/* fetch('http://localhost:3000/juegos')
    .then(response => response.json())
    .then(data => data.forEach((el) => juegos.push(el))); */

const colors = ["articlePink", "articleBlue", "articleRed", "articleYellow", "articleGreen"];
let colorsCounter = 0;
let juegoIndex = 0;
let articleNumber = 0;
let articleCounter = 0;
let envio = 49;
let garantia = 59;
let subtotal = 0;
let total = 0;

function addArticle(){
    let $articles = document.querySelector(".articles");
    let juego = juegos[juegoIndex];
    let id = "Article" + articleNumber;
    let span = "span" + articleNumber;
    
    /* Definir imagen del producto */
    let image = `
    <!-- Imagen -->
    <div class="col col-lg-3 col-md-5 align-self-center text-center">
        <img src="${juego.img}" alt="">
    </div>
    `;
    /* Definir el título */
    let title = `
    <div class="row">
        <p class="texto2">${juego.titulo}</p>
    </div>
    `;
    /* Mostrar la descripción */
    let description = `
    <div class="row">
        <p class="texto">${juego.descripcion}</p>
    </div>
    `;
    /* Hacer el div para poner el color */
    let articleDiv = document.createElement('div');
    articleDiv.classList.add('row');    // clase para que esté en línea
    articleDiv.classList.add('article');    // clase para el tamaño del div
    articleDiv.classList.add(colors[colorsCounter]);    // clase para el color del div
    articleDiv.classList.add('mb-4');   // clase para el margin
    articleDiv.id = id; // id para controlar el artículo
    
    articleDiv.innerHTML = `
        ${image}
        <!-- Título y descripción -->
        <div class="col-12 col-lg-4 col-md-7">
            ${title}
            ${description}
        </div>
    
        <!-- Selección de producto -->
        <div class="col-12 col-lg-5">
        <div class="row mt-5 text-center">
            <!-- Precio -->
            <div class="col col-lg-4">
                <h3 class="texto2">Precio</h3>
                <p class="texto2">$
                    <span id="price${articleNumber}">
                        ${juego.precio}
                    </span>
                </p>
            </div>
            <!-- Selección de cantidad (botones y contador) -->
            <div class="col col-lg-4 qty-div">
                <div class="row text-center qty">
                    <h3 class="texto2">Cantidad</h3>
                </div>
                <div class="row cantidad">
                    <div class="col-3 p-0">
                        <button class="qtyBtn minusBtn" onclick="removeQty(${articleNumber});">
                            <span class="textBtn">
                                -
                            </span>
                        </button>
                    </div>
                    <div class="col-3 p-0">
                        <p class="texto2 articleText mt-1">
                            <span id="${span}">
                                1
                            </span>
                        </p>
                    </div>

                    <div class="col-3 p-0">
                        <button class="qtyBtn plusBtn" onclick="addQty(${articleNumber});">
                            <span class="textBtn">
                                +
                            </span>
                        </button>
                    </div>
                    </div>
            </div>

            <!-- Subtotal -->
            <div class="col col-lg-4 p-0">
                <h3 class="texto2">Subtotal</h3>
                <p class="texto2">$
                    <span id="subtotal${articleNumber}">
                        ${juego.precio}
                    </span>
                </p>
            </div>
        </div>
        <!-- Botón de quitar (X) -->
        <div class="row quitar" onclick="removeArticle(${articleNumber});">
            <div>
                <button class="quitarBtn">
                    <span>X</span>
                </button>
            </div>
        </div>
        </div>`;
    
    $articles.appendChild(articleDiv);

    /* Cambiar el objeto y color del div */
    colorsCounter = (colorsCounter < 4) ? colorsCounter+1 : 0;
    juegoIndex = (juegoIndex < 2) ? juegoIndex+1 : 0;
    articleNumber += 1;
    total += juego.precio;
    subtotal = total;
    articleCounter += 1;
    adjustPrices(envio, garantia, subtotal, total);
    adjustKartCounter();
    showEmptyDoc();
}

/* Función para actualizar los precios */
function adjustPrices(envio, garantia, subtotal, total) {
    let pymEnvio = document.querySelector('#pymEnvio');
    let pymGarantia = document.querySelector('#pymGarantia');
    let pymSubtotal = document.querySelector('#pymSubtotal');
    let pymTotal = document.querySelector('#pymTotal');

    total += envio + garantia;

    pymEnvio.textContent = parseFloat(envio).toFixed(2);
    pymGarantia.textContent = parseFloat(garantia).toFixed(2);
    pymSubtotal.textContent = parseFloat(subtotal).toFixed(2);
    pymTotal.textContent = parseFloat(total).toFixed(2);
}

/* Si no hay elementos en el carrito, muestra un mensaje */
function showEmptyDoc() {
    let $articles = document.querySelector('.articles');
    /* Comprobar que no haya elementos */
    if($articles.children.length == 0){
        $articles.innerHTML = `
        <div id="no-articles" class="article articlePink text-center ">
            <p class="texto2">No hay elementos en el carrito</p>
        </div>
        `;
    }
    else {
        /* En caso de agregar un artículo, se quita el mensaje */
        let noArticles = $articles.querySelector('#no-articles');
        if(noArticles) {
            noArticles.remove();
        }
    }
}

/* Función para remover los artículos del carrito */
function removeArticle(id) {
    let articleSubtotal = document.querySelector(`#subtotal${id}`).textContent;
    total -= articleSubtotal;
    subtotal -= articleSubtotal;
    articleCounter -= 1;
    adjustPrices(envio, garantia, subtotal, total);
    adjustKartCounter();

    let article = document.querySelector(`#Article${id}`);
    article.remove();
    showEmptyDoc();
}

/* Función para agregar cantidad */
function addQty(id) {
    let quantitySpan = document.querySelector(`#span${id}`);
    let quantity = parseInt(quantitySpan.textContent) + 1;
    quantitySpan.textContent = quantity;

    // agregar el precio del total
    adjustSubtotalArticle(id, "add");
}

/* Función para remover cantidad */
function removeQty(id) {
    let quantitySpan = document.querySelector(`#span${id}`);
    let quantity = parseInt(quantitySpan.textContent) - 1;
    if (quantity < 1){
        quantity = 1;
    }
    else {
        // quitar el precio del total
        adjustSubtotalArticle(id, "remove");
    }
    quantitySpan.textContent = quantity;
}

/* Función para ajustar el subtotal de cada artículo después de aumentar o disminuir la cantidad */
function adjustSubtotalArticle(id, action) {
    let priceSpan = document.querySelector(`#price${id}`).textContent;
    let articleTotal = document.querySelector(`#subtotal${id}`);
    let price = articleTotal.textContent;
    if(action === "add") {
        price = parseInt(price) + parseInt(priceSpan);
        total += parseInt(priceSpan);
        subtotal += parseInt(priceSpan);
    }
    else if (action === "remove"){
        price = parseInt(price) - parseInt(priceSpan);
        total -= parseInt(priceSpan);
        subtotal -= parseInt(priceSpan);
    }
    articleTotal.textContent = price;

    adjustPrices(envio, garantia, subtotal, total);
}

/* Función para mostrar el contador del carrito en la navbar */
function adjustKartCounter() {
    let $contador = document.querySelector('.contador');
    let articulosContador = document.querySelector('.articulos-contador');
    $contador.textContent = articleCounter;

    /* Actualizar el contador del carrito */
    if($contador.textContent == 0){
        articulosContador.style.display = "none";
    }
    else {
        articulosContador.style.display = "block";
    }

}

adjustPrices(envio, garantia, subtotal, total);
showEmptyDoc();