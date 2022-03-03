/*const juegos = [
    {
        id_producto: 1,
        nombre_producto: "Mario Kart",
        descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nisi saepe optio vero animi assumenda non quas corporis corrupti eius eum facere quod sunt repellendus, recusandae quo veritatis dolorem? Molestias.",
        imagen: "src/img/productos/mario_kart8_deluxe.jpg",
        costo: 1400.00,
        color: "#FF00BC",
        cantidad: 1
    },
    {
        id_producto: 2,
        nombre_producto: "Luigi",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat voluptatum ullam quis recusandae rem id excepturi tempore magni! Doloremque laudantium vero assumenda illum, reprehenderit atque sunt necessitatibus expedita ipsum?",
        imagen: "src/img/productos/luigis_mansion3.jpg",
        costo: 1500.00,
        color: "#46FF01",
        cantidad: 1
    },
    {
        id_producto: 3,
        nombre_producto: "Pokémon",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta cupiditate, repellat nihil quisquam minima enim expedita cum molestiae natus accusantium fugiat voluptates laboriosam, quas modi perspiciatis laudantium temporibus nemo accusamus.",
        imagen: "src/img/productos/pokemon_brilliant_diamond.jpg",
        costo: 1300.00,
        color: "#1212FF",
        cantidad: 1
    }
]; */


/* Recibir los productos de la API */
let juegos = [];
/* Función para obtener los artículos de la BD */
const fetchProducts = function() {
    const article = [];
    const requests = [];
    const prom = fetch('http://127.0.0.1:8090/Productos/obtenerProductos')
        .then(response => response.json());

    requests.push(prom);

    return new Promise((resolve) => {
        Promise.all(requests)
            .then((proms) =>
                proms.forEach((p) => article.push(p))
            )
            .then(() => resolve(article));
    });
};

/* Función para esperar a que se recuperen todos los artículos con fetch */
async function main() {
    await fetchProducts().then((el) => {
        juegos = el.map(p => p);
    });
    juegos = juegos[0];
    
    loadLocalKart();
    
    if (page == 'carrito.html') {
        renderKart();
        showEmptyDoc();
    }
    adjustKartCounter();
}

let kart = [];
const $articles = document.querySelector("#articles");
const $pymEnvio = document.querySelector('#pymEnvio');
const $pymGarantia = document.querySelector('#pymGarantia');
const $subtotal = document.querySelector('#pymSubtotal');
const $total = document.querySelector('#pymTotal');
const $addArticleBtn = document.querySelectorAll('.addArticleBtn');
const myLocalStorage = window.localStorage;// verificar en qué página se encuentra el usuario
const path = window.location.pathname;
const page = path.substring(path.lastIndexOf('/') + 1);

const colors = ["articleBlue", "articleRed", "articleGrey"];
const totalColors = 3;
const moneda = '$';

// Darle funcionalidad a los botones para agregar elementos al carrito
$addArticleBtn.forEach((button) => {
    button.addEventListener("click", addArticleToKart);
});

/* Añadir los productos al carrito */
function addArticleToKart(e) {
    // añadir el producto al carrito
    //let newArticle = e.target.getAttribute('marcador');
    //kart.push(e.target.getAttribute('marcador'));
    
    // función de prueba -- ELIMINAR
    let newArticle = parseInt(Math.random() * juegos.length) + 1;

    if(!kart.includes(newArticle)) {
        kart.push(newArticle);

        // mostrar los productos en el carrito sólo si el usuario está en la página de carrito
        if (page === 'carrito.html'){
            renderKart();
        }
    }

    // guardar el elemento localmente
    saveLocalKart();
}

/* Función para colocar los productos al carrito */
function renderKart() {
    let colorsCounter = 0;
    // limpiar el carrito
    $articles.textContent = '';
    // quitar los elementos duplicados
    const newKart = [...new Set(kart)];

    
    // colocar los elementos de cada artículo
    // cada elemento es el id de los productos
    newKart.forEach((el) => {
        // obtener los productos de la base de datos
        const product = juegos.filter((item) => {
            return item.id === parseInt(el);
        });

        const id_producto = product[0].id;
        
        // crear el nodo para los productos del carrito
        const node = document.createElement('div');
        node.classList.add('row', 'article', colors[colorsCounter], 'mb-4');
        const classLbl = `div-${id_producto}`;
        node.setAttribute('id', classLbl);
        
        // imagen
        const labelImg = document.createElement('img');
        labelImg.setAttribute('src', product[0].imagen);
        const nodeImg = document.createElement('div');
        nodeImg.classList.add('col', 'col-lg-3', 'col-md-5', 'align-self-center', 'text-center');
        nodeImg.appendChild(labelImg);
        
        // título y descripción
        const nodeText = renderTitle(product[0].nombre_producto, product[0].descripcion);

        // selección de producto
        const nodeProduct = document.createElement('div');
        nodeProduct.classList.add('col-12', 'col-lg-5');

        // sección de información del producto
        const nodeInfo = document.createElement('div');
        nodeInfo.classList.add('row', 'mt-5', 'text-center');

        // precio
        const priceNode = renderPrice(id_producto, getTotalProduct(id_producto), 'total');

        // subtotal
        const subtotalNode = renderPrice(id_producto, product[0].costo, 'subtotal');

        // selección de cantidad (botones y contador)
        const qtySelectionNode = document.createElement('div');
        qtySelectionNode.classList.add('col', 'col-lg-4', 'qty-div');

        const qtyTitle = document.createElement('h3');
        qtyTitle.classList.add('texto2');
        qtyTitle.textContent = 'Cantidad';
        const titleNode = document.createElement('div');
        titleNode.classList.add('row', 'text-center', 'qty');
        titleNode.appendChild(qtyTitle);

        const qtyNode = document.createElement('div');
        qtyNode.classList.add('row', 'cantidad');

        const plusBtn = renderQtyBtn('plus', id_producto);
        const minusBtn = renderQtyBtn('minus', id_producto);

        const qtySpan = document.createElement('span');
        qtySpan.setAttribute('id', `span${id_producto}`);
        qtySpan.textContent = kart.filter(p => p == id_producto).length;
        const qtyText = document.createElement('p');
        qtyText.classList.add('texto2', 'articleText', 'mt-1');
        qtyText.appendChild(qtySpan);
        const counterNode = document.createElement('div');
        counterNode.classList.add('col-3', 'p-0');
        counterNode.appendChild(qtyText);

        qtyNode.appendChild(minusBtn);
        qtyNode.appendChild(counterNode);
        qtyNode.appendChild(plusBtn);

        qtySelectionNode.appendChild(titleNode);
        qtySelectionNode.appendChild(qtyNode);

        // agregar toda la información del producto
        nodeInfo.appendChild(subtotalNode);
        nodeInfo.appendChild(qtySelectionNode);
        nodeInfo.appendChild(priceNode);

        // botón para quitar
        const closeBtn = document.createElement('button');
        closeBtn.classList.add('quitarBtn');
        closeBtn.textContent = 'X';
        closeBtn.setAttribute('identifier', id_producto);
        const nodeBtn = document.createElement('div');
        nodeBtn.classList.add('row', 'quitar');
        nodeBtn.addEventListener('click', removeArticle);
        nodeBtn.appendChild(closeBtn);

        nodeProduct.appendChild(nodeInfo);
        nodeProduct.appendChild(nodeBtn);

        // poner el elemento en el documento
        node.appendChild(nodeImg);
        node.appendChild(nodeText);
        node.appendChild(nodeProduct);
        
        $articles.appendChild(node);

        colorsCounter = (colorsCounter < totalColors-1) ? colorsCounter+1 : 0;
    });

    adjustKartCounter();
    updatePrices();
}

/* Función para colocar el título dentro de las tarjetas del carrito */
function renderTitle(title, description){
    const textTitle = document.createElement('p');
    textTitle.classList.add('texto2');
    // título del artículo
    textTitle.textContent = title; 
    const nodeTitle = document.createElement('div');
    nodeTitle.classList.add('row');
    nodeTitle.appendChild(textTitle);
    const textDescription = document.createElement('p');
    textDescription.classList.add('texto');
    // descripción del artículo
    textDescription.textContent = description; 
    const nodeDescription = document.createElement('div');
    nodeDescription.classList.add('row');
    nodeDescription.appendChild(textDescription);
    const nodeText = document.createElement('div');
    nodeText.classList.add("col-12", "col-lg-4", "col-md-7");
    nodeText.appendChild(nodeTitle);
    nodeText.appendChild(nodeDescription);
    
    return nodeText;
} 

/* Función para colocar el precio del artículo */
function renderPrice(id, price, section) {
    const priceSpan = document.createElement('span');
    priceSpan.setAttribute('id', `${section}Article${id}`);
    priceSpan.textContent = `${moneda}${price}`;
    const priceText = document.createElement('p');
    priceText.classList.add('texto2');
    priceText.appendChild(priceSpan);
    const priceTitle = document.createElement('h3');
    priceTitle.classList.add('texto2');
    priceTitle.textContent = section.charAt(0).toUpperCase() + section.slice(1);
    const priceNode = document.createElement('div');
    priceNode.classList.add('col', 'col-lg-4');
    priceNode.appendChild(priceTitle);
    priceNode.appendChild(priceText);

    return priceNode;
}

function renderQtyBtn(value, id) {
    const label = (value =='minus') ? '-' : '+'

    const nodeBtn = document.createElement('div');
    nodeBtn.classList.add('col-3', 'p-0');

    const spanBtn = document.createElement('span');
    spanBtn.classList.add('textBtn');
    spanBtn.setAttribute('productId', id);
    spanBtn.setAttribute('value', value);
    spanBtn.textContent = label;
    
    const button = document.createElement('button');
    button.classList.add('qtyBtn', `${value}Btn`);
    button.setAttribute('productId', id);
    button.setAttribute('value', value);
    button.addEventListener('click', updateQty);
    button.appendChild(spanBtn);

    nodeBtn.appendChild(button);
    
    return nodeBtn;
}

/* Función para borrar elementos */
function deleteElement(id, array) {
    // Asegurarse de que haya al menos un elemento en el carrito
    const items = array.filter(p => p == id).length;

    if (items > 1){
        for(let i=0; i<array.length; i++) {
            if(array[i] === id) {
                array.splice(i, 1);
                break;
            }
        }
    }
}

/* Función para agregar cantidad */
function updateQty(e) {
    const id = parseInt(e.target.getAttribute('productId'));
    const value = e.target.getAttribute('value');
    const totalSpan = document.querySelector(`#totalArticle${id}`);

    if (value == 'minus') {
        deleteElement(id, kart);
    }
    else {
        kart.push(id);
    }

    const qtyProduct = kart.reduce((total, itemId) => {
        return itemId === id ? total += 1 : total;
    }, 0);

    let qtySpan = document.querySelector(`#span${id}`);
    qtySpan.textContent = qtyProduct;

    totalSpan.textContent = `${moneda}${getTotalProduct(id)}`;
    updatePrices();
}

/* Si no hay elementos en el carrito, muestra un mensaje */
function showEmptyDoc() { 
    /* Comprobar que no haya elementos */
    if($articles.children.length == 0){
        const divNode = document.createElement('div');
        divNode.classList.add('article', 'articleGrey', 'text-center');
        divNode.setAttribute('id', 'no-articles');

        const textNode = document.createElement('p');
        textNode.classList.add('texto2');
        textNode.textContent = 'No hay elementos en el carrito';

        divNode.appendChild(textNode);
        $articles.appendChild(divNode);
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
function removeArticle(e) {
    let id = parseInt(e.target.getAttribute('identifier'));
    
    kart = kart.filter((kartId) => {
        return kartId !== id;
    });
    
    renderKart();

    saveLocalKart();

    showEmptyDoc();
}

/* Función para mostrar el contador del carrito en la navbar */
function adjustKartCounter() {
    let $contador = document.querySelector('.contador');
    let articulosContador = document.querySelector('.articulos-contador');
    const noRepeatedKart = [...new Set(kart)];
    const items = noRepeatedKart.length;
    $contador.textContent = items;

    /* Actualizar el contador del carrito */
    if(items === 0) {
        articulosContador.style.display = "none";
    }
    else {
        articulosContador.style.display = "block";
    }
}

/* Función para obtener el precio subtotal de los productos */
function getSubtotal() {
    return kart.reduce((total, item) => {
        // obtener el precio de cada producto
        const product = juegos.filter((element) => {
            return element.id === parseInt(item);
        });

        return total + product[0].costo;
    }, 0).toFixed(2);
}

/* Función para obtener el precio total de los productos */
function getTotal() {
    return kart.reduce((total, item) => {
        // obtener el precio de cada producto
        const product = juegos.filter((element) => {
            return element.id === parseInt(item);
        });

        return total + product[0].costo;
    }, 0).toFixed(2);
}

/* Función para obtener el precio total de cada productos */
function getTotalProduct(id) {
    const filteredKart = kart.filter(p => p === id);
    return filteredKart.reduce((total, item) => {
        // obtener el precio de cada producto
        const product = juegos.filter((element) => {
            return element.id === parseInt(id);
        });

        return total + product[0].costo;
    }, 0).toFixed(2);
}

/* Función para actualizar los precios totales */
function updatePrices() {
    $total.textContent = getTotal();
    $subtotal.textContent = getSubtotal();
}

/* Función para almacenar el carrito localmente */
function saveLocalKart() {
    myLocalStorage.setItem('kart', JSON.stringify(kart));
}

/* Función para cargar el carrito localmente */
function loadLocalKart() {
    // verificar si existe el carrito en el almacenamiento local
    if (myLocalStorage.getItem('kart') !== null) {
        kart = JSON.parse(myLocalStorage.getItem('kart'));
    }
}

main();