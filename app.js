const miInv = new Inventario();

const agregar = document.getElementById('btnAgregar');
agregar.addEventListener('click', () => {
   let codigo = document.getElementById('txtCodigo').value;
   let nombre = document.getElementById('txtNombre').value;
   let cantidad = document.getElementById('txtCantidad').value;
   let costo = document.getElementById('txtCosto').value;
   let nuevo = new Producto(codigo, nombre, cantidad, costo);
   miInv.agregar(nuevo);
   document.getElementById("divDetalles").innerHTML += '<p> Se ha agregado un producto</p>';
});

const eliminar = document.getElementById('btnEliminar');
eliminar.addEventListener('click', () => {
   let codigo = document.getElementById('txtCodigo').value;
   miInv.eliminar(codigo);
   document.getElementById('divDetalles').innerHTML += "<p> Se ha eliminado el producto </p>";
});

const buscar = document.getElementById('btnBuscar');
buscar.addEventListener('click', () => {
   let codigo = document.getElementById('txtCodigo').value;
   let producto = miInv.buscar(codigo);
   if(producto === null) {
      document.getElementById('divDetalles').innerHTML += "<p> No se ha encontrado el producto </p>";
   } else {
      document.getElementById('divDetalles').innerHTML += producto.info();
   }
});

const listar = document.getElementById('btnListado');
listar.addEventListener('click', () => {
   document.getElementById("divDetalles").innerHTML += miInv.listado();
});

const listarInv = document.getElementById('btnListadoInv');
listarInv.addEventListener('click', () => {
   document.getElementById('divDetalles').innerHTML += miInv.listadoInverso();
});

const insertar = document.getElementById('btnInsertar');
insertar.addEventListener('click', () => {
   let codigo = document.getElementById('txtCodigo').value;
   let nombre = document.getElementById('txtNombre').value;
   let cantidad = document.getElementById('txtCantidad').value;
   let costo = document.getElementById('txtCosto').value;
   let posicion = document.getElementById('txtInsertar').value;
   let producto = new Producto(codigo, nombre, cantidad, costo);
   miInv.insertar(posicion, producto);
   document.getElementById('divDetalles').innerHTML += '<p> Se ha insertado el producto </p>';
});
