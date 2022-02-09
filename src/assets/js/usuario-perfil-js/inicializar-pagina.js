let $btnEditarUsuario = document.getElementById('btnEditarUsuario');
let $inputNombre = document.getElementById('txtNombreUsuario');
let $inputApellido = document.getElementById('txtApellidoUsuario');
let $inputCorreo = document.getElementById('txtCorreoUsuario');
let $inputTelefono = document.getElementById('txtTelefonoUsuario');
let $inputDireccion = document.getElementById('txtDireccionUsuario');
let $inputFoto = document.getElementById('imgFotoUsuario');
let $inputTarjeta = document.getElementById('txtTarjeta');
let $inputVencimiento = document.getElementById('txtVencimiento');
let $inputCVV = document.getElementById('txtCVV');
let $inputCBX = document.getElementById('cbxUneteEquipo');
let $btnGuardarUsuario = document.getElementById('btnGuardarUsuario');
let $formularioVendedor = document.querySelector('.formulario_vendedor');
let $archivo = document.getElementById('imgFotoUsuario');
let $foto = document.getElementById('imgFotoActual');
let $esVendedor = document.getElementById("cbxUneteEquipo");
let $inputNombreComercio = document.getElementById("txtNombreComercio");
let $inputNombreVendedor = document.getElementById("txtNombreVendedor");
let $inputCorreoEmpresa = document.getElementById("txtCorreoEmpresa");
let $inputTelefonoEmpresa = document.getElementById("nmbrTelefonoEmpresa");
let $inputDireccionEmpresa = document.getElementById("txtDireccionEmpresa");
let $formVendedor = document.getElementById("divFormularioVendedor");
let $btnEditarVendedor = document.getElementById("btn_Editar_Vendedor");
let $btnGuardarVendedor = document.getElementById("btn_Guardar_Vendedor");
let $btnAgregarVendedor = document.getElementById("btn_Agregar_Vendedor");
let $inputNombreProductoNuevo = document.getElementById("txtNombreProductoNuevo");
let $inputDescripcionProductoNuevo = document.getElementById("txtDescripcionNuevo");
let $inputCostoProductoNuevo = document.getElementById("numberCostoNuevo");
let $inputCantidadProductoNuevo = document.getElementById("numberCantidadNuevo");
let $inputCategoriaProductoNuevo = document.getElementById("txtCategoriaNuevo");
let $btnModalAceptarProductoNuevo = document.getElementById("btnModalAceptarProductoNuevo");
let $btnModalCancelarProductoNuevo = document.getElementById("btnModalCancelarProductoNuevo");
let $modalProducto = document.getElementsByClassName('modal_producto');
let $archivoProductoNuevo = document.getElementById('archivoFotoProductoNuevo');
let $imgProductoNuevo = document.getElementById('imgProductoNuevo');
let $btnSubirImagenProductoNuevo = document.getElementById("btnSubirImagenProductoNuevo");

/*Enumerar inputs de formularios*/
let formularioUsuarioInputs = document.querySelectorAll('.formulario_usuario input');    //referencias a los inputs del formulario de usuario
let banderaUsuario = new Array(formularioUsuarioInputs.length); //Banderas de usuario para validar formulario
banderaUsuario.fill(false);     //Las banderas de usuario se llenan de false para que se modifiquen los campos, si ya hay campos llenos al cargar datos de Api, asegurarse que estos se llenen individualmente


let formularioVendedorInputs = document.querySelectorAll('.formulario_vendedor input'); //Referencias a los inputs del formulario de vendedor
let banderaVendedor = new Array(formularioVendedorInputs.length);       //Banderas de vendedor para validar formulario
banderaVendedor.fill(false);     //Las banderas de vendedor  se llenan de false para que se modifiquen los campos, si ya hay campos llenos al cargar datos de Api, asegurarse que estos se llenen individualmente


let formularioProductoInputs = document.querySelectorAll('.modal_producto input');  //Referencias a los inputs del formulario de nuevo producto
let banderaProducto = new Array(formularioProductoInputs.length); //Banderas de nuevo producto para validar formulario
banderaProducto.fill(false);        //Las banderas de producto nuevo  se llenan de false para que se modifiquen los campos, si ya hay campos llenos al cargar datos de Api, asegurarse que estos se llenen individualmente

console.log(formularioProductoInputs);
let expregUsuario = [/^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                    /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{3}$/,
                    /^\d{10,11}$/,/^[a-zA-ZÀ-ÿ\s]{1,100}$/,
                    /^\d{16}$/,/^(0[0-9]|1[0-9])\/?([0-9]{2})$/,
                    /^\d{3}$/,
                    /./];   //TODO verificar si esta ultima expresion se utiliza
expregUsuario.pop();
console.log(expregUsuario.length);

let expregVendedor =[/^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                     /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                     /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{3}$/,
                     /^\d{10,11}$/];

/*Variables de validacion de formularios*/
let direccion_OK =true;
let direccionempresa_OK =true;
let nombreproducto_OK = true;
let descripcionproducto_OK = true;
let costoproducto_OK = true;
let cantidadproducto_OK = true;

//llamada a API para cargar datos del usuario basados en su correo;
