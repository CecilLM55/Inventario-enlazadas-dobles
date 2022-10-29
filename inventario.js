class Inventario {

    constructor() {
        this.primero = null;
        this.ultimo = null;
    }

    agregar(producto, codigo) {
        let temp = this.primero;
        
        if(this.primero === null) {
            this.primero = producto;
            this.ultimo = producto;
        } else {
            if(codigo < this.primero.codigo) {
                producto.next = this.primero;
                this.primero = producto;
            } else {
                while (temp !== null) {
                    if(temp.codigo < codigo && temp.next === null) {
                        this.ultimo.next = producto;
                        producto.anterior = this.ultimo;
                        this.ultimo = producto;
                    } else if (temp.codigo < codigo && temp.next.codigo > codigo) {
                        producto.next = temp.next;
                        temp.next.anterior = producto;
                        temp.next = producto;
                        producto.anterior = temp;
                    }
                    temp = temp.next;
                }
            }
        }
    }

    eliminar(codigo) {
        let temp = this.primero;

        if(codigo === this.primero.codigo) {
            this.primero = this.primero.next;
            this.primero.anterior = null;
        } else if (codigo === this.ultimo.codigo){
            this.ultimo = this.ultimo.anterior;
            this.ultimo.next = null;
        } else {
            while(temp !== null) {
                if(temp.next.codigo === codigo) {
                    temp.next = temp.next.next;
                    temp.anterior = temp.anterior;
                }
                temp = temp.next;
            }
        }
    }


    buscar(codigo) {
        let temp = this.primero;

        while (temp !== null) {
            if(temp.codigo === codigo) {
                return temp;
            }
            
            temp = temp.next;
        }
        
        return null;
    }

    listar() {
        let lista  = '';
        let temp = this.primero;

        while(temp) {
            lista += temp.info() + ' ';
            temp = temp.next;
        }

        return lista;
    }


    listarInverso() {
        let lista = ' ';
        let temp = this.ultimo;

        while(temp !== null) {
            lista += temp.info() + ' ';
            temp = temp.anterior;
        }

        return lista;
    }

}
