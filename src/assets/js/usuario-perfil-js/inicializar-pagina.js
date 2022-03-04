//Script dedicado a inicializar todas las variables utilizadas en todos los scripts

let $btnEditarUsuario = document.getElementById('btnEditarUsuario');    //variable con referencia al boton editar de usuario
let $inputNombre = document.getElementById('txtNombreUsuario');         //Variable con referencia a input Nombre de usuario
let $inputApellido = document.getElementById('txtApellidoUsuario');     //Variable con referencia a input apellido de usuario
let $inputCorreo = document.getElementById('txtCorreoUsuario');         //Variable con referencia a input correo de usuario
let $inputTelefono = document.getElementById('txtTelefonoUsuario');     //Variable con referencia a input telefono de usuario
let $inputDireccion = document.getElementById('txtDireccionUsuario');   //Variable con referencia a input direccion de usuario
let $inputFoto = document.getElementById('imgFotoUsuario');             //Variable con referencia a input foto de usuario
let $inputTarjeta = document.getElementById('txtTarjeta');              //Variable con referencia a input Tarjeta de usuario
let $inputVencimiento = document.getElementById('txtVencimiento');      //Variable con referencia a input F. de Vencimiento de usuario
let $inputCVV = document.getElementById('txtCVV');                      //Variable con referencia a input CVV de usuario
let $inputCBX = document.getElementById('cbxUneteEquipo');              //Variable con referencia al checkbox de usuario
let $btnGuardarUsuario = document.getElementById('btnGuardarUsuario');  //Variable con referencia al boton guardar del usuario
let $formularioVendedor = document.querySelector('.formulario_vendedor');   //Variable con referencia al formulario de vendedor
let $archivo = document.getElementById('imgFotoUsuario');               //Variable con referencia al archivo seleccionado de la foto del usuario
let $foto = document.getElementById('imgFotoActual');                   //Variable con referencia a la imagen de usuario
let $inputNombreComercio = document.getElementById("txtNombreComercio"); //Variable con referencia a input comercio de vendedor
//let $inputNombreVendedor = document.getElementById("txtNombreVendedor");    //Variable con referencia a input Nombre legal de vendedor
let $inputCorreoEmpresa = document.getElementById("txtCorreoEmpresa");  //Variable con referencia a input correo de vendedor
let $inputTelefonoEmpresa = document.getElementById("nmbrTelefonoEmpresa"); //Variable con referencia a input telefono de vendedor
let $inputDireccionEmpresa = document.getElementById("txtDireccionEmpresa"); //Variable con referencia a textarea direccion de empresa
let $formVendedor = document.getElementById("divFormularioVendedor");   //Variable con referencia al formulario de vendedor
let $btnEditarVendedor = document.getElementById("btn_Editar_Vendedor"); //Variable con referencia al boton de editar vendedor
let $btnGuardarVendedor = document.getElementById("btn_Guardar_Vendedor"); //Variable con referencia al boton guardar de vendedor
let $btnAgregarVendedor = document.getElementById("btn_Agregar_Vendedor");  //Variable con referencia al boton agregar producto
let $inputNombreProductoNuevo = document.getElementById("txtNombreProductoNuevo");   //Variable con referencia a input nombre de producto
let $inputDescripcionProductoNuevo = document.getElementById("txtDescripcionNuevo"); //Variable con referencia a textarea descripcion de producto
let $inputCostoProductoNuevo = document.getElementById("numberCostoNuevo"); //Variable con referencia a input costo de producto
let $inputCantidadProductoNuevo = document.getElementById("numberCantidadNuevo");   //Variable con referencia input cantiad de producto
let $inputCategoriaProductoNuevo = document.getElementById("txtCategoriaNuevo"); //Variable con referencia a input categoria de producto
let $btnModalAceptarProductoNuevo = document.getElementById("btnModalAceptarProductoNuevo"); //Variable con referencia al boton de aceptar de modal productonuevo
let $btnModalCancelarProductoNuevo = document.getElementById("btnModalCancelarProductoNuevo"); //Variable con referencia a boton cancelar de modal producto nuevo
let $modalProducto = document.getElementsByClassName('modal_producto'); //Variable con referencia a modal de producto nuevo
let $archivoProductoNuevo = document.getElementById('archivoFotoProductoNuevo');    //Variable con referencia al archivo de foto productonuevo
let $imgProductoNuevo = document.getElementById('imgProductoNuevo'); //Variable con referencia a la imagen visible del producto nuevo
let $btnSubirImagenProductoNuevo = document.getElementById("btnSubirImagenProductoNuevo");  //Variable con referencia al boton de subir image de productonuevo
let $carousel = document.querySelector('.carousel-inner.carousel_dinamico');
$inputCBX.checked = false;
/*Enumerar inputs de formularios*/
let formularioUsuarioInputs = document.querySelectorAll('.formulario_usuario input');    //referencias a los inputs del formulario de usuario, se guardan en esta coleccion para usarlos en validacion 
let banderaUsuario = new Array(formularioUsuarioInputs.length); //Banderas de usuario para validar formulario en botones guardar
banderaUsuario.fill(true);     //Las banderas de usuario se llenan de false para que se modifiquen los campos, si ya hay campos llenos al cargar datos de Api, asegurarse que estos se llenen individualmente


let formularioVendedorInputs = document.querySelectorAll('.formulario_vendedor input'); //Referencias a los inputs del formulario de vendedor, se guardan en esta coleccion para usarlos en validacion 
let banderaVendedor = new Array(formularioVendedorInputs.length);       //Banderas de vendedor para validar formulario en botones guardar
banderaVendedor.fill(true);     //Las banderas de vendedor  se llenan de false para que se modifiquen los campos, si ya hay campos llenos al cargar datos de Api, asegurarse que estos se llenen individualmente


let expregUsuario = [/^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                    /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{3}$/,
                    /^\d{10,11}$/,/^[a-zA-ZÀ-ÿ\s]{1,100}$/,
                    /^\d{16}$/,/^(0?[1-9]|1[0-2])\/(\d{2})$/,
                    /^\d{3}$/];   //Arreglo de expresiones regulares utilizadas en el formulario de USUARIO

let expregVendedor =[/^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                     /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{3}$/,
                     /^\d{10,11}$/];    //Arreglo de expresiones regulares utilizadas en el formulario de VENDEDOR

/*Variables de validacion de formularios, estas banderas se utilizan para saber, individualmente, el estado {true,false} de los inputs de textarea y los incluidos dentro del modal de agregar producto*/
let direccion_OK =true;     
let direccionempresa_OK =true;
let nombreproducto_OK = true;
let descripcionproducto_OK = true;
let costoproducto_OK = true;
let cantidadproducto_OK = true;


 let numjuegos=0;// juegos.length;

//llamada a API para cargar datos del usuario basados en su correo;

window.onload = function() {
     const urlcarga = 'http://localhost:8080/Usuarios/obtenerUsuarioPorId'
        fetch(urlcarga, {
            method : 'POST',
            body: JSON.stringify({id:localStorage.getItem('id')}),
            headers: {
                "Content-Type": "application/json; charset = UTF-8"
            }
        })
            .then(res =>res.json())
                 .then(datos => {
                     console.log(datos);
                     $inputNombre.value = datos.nombre;
                     $inputApellido.value = datos.apellido;
                     $inputCorreo.value = datos.correo;
                     $inputTelefono.value = datos.telefono;
                     $inputDireccion.value = datos.direccion;
                     $foto.src = datos.foto;
                     $inputTarjeta.value = datos.numeroTarjeta;
                     $inputVencimiento.value = datos.fechaExpiracion;
                     $inputCVV.value = datos.cvv
                     $inputCBX.checked = datos.esVendedor;
                     $formVendedor.style.display = $inputCBX.checked ? "block" : "none";
                     if(datos.esVendedor){
                        $btnEditarVendedor.removeAttribute('disabled');
                        $btnEditarVendedor.style.opacity = "1.0";
                        $btnAgregarVendedor.style.opacity ="0.2";
                        $btnAgregarVendedor.setAttribute('disabled',true);
                     }
                     $inputNombreComercio.value = datos.comercio;
                     $inputCorreoEmpresa.value = datos.correoEmpresa;
                     $inputTelefonoEmpresa.value = datos.telefonoEmpresa;
                     $inputDireccionEmpresa.value = datos.direccionEmpresa;
                 })
                 const urlcompra = 'http://localhost:8080/Compras/buscarCompraPorUsuario/'+ localStorage.getItem('id').toString();
                 fetch(urlcompra).then(res =>res.json()).then(datos =>{    
                     if (datos.length>0){
                     generarCarrusel(0,datos.length,datos.length,0,datos)
                     recortarTextos()
                    }
                     else{
                         alert("No tienes compras, ¡Agrega productos al carrito!")
                     }
                     
                 })
    }
