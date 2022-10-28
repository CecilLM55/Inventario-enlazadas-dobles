
class Producto {

    constructor(codigo, nombre, cantidad, costo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
        this.next = null;
        this.anterior = null;
    }
    
    getCodigo() {
        return this.codigo;
    }

    getNombre() {
        return this.nombre;
    }

    getCantidad() {
        return this.cantidad;
    }

    getCosto() {
        return this.costo;
    }

    info() {
        return `Codigo: ${this.codigo}  Producto: ${this.nombre}  Cantidad: ${this.cantidad}   Costo: $${this.costo}`;
    }
}