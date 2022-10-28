class Inventario {

    constructor() {
        this.primero = null;
    }

    agregar(producto) {
        let temp = this.primero;

       if(this.primero === null) {
        this.primero = producto;
       } else {
        while (temp.next !== null) {
            temp = temp.next;
        }
        temp.next = producto;
       }
    }

//No parece funcionar, checar.
    eliminar(codigo) {
        let temp = this.primero;
        
        if(codigo === this.primero.codigo) {
            this.primero = this.primero.next;
        } else {
            while(temp !== null) {
                if (temp.next.codigo === codigo) {
                    temp.next = temp.next.next;
                }

                temp = temp.next
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

    listado() {
        let lista = '';
        let temp = this.primero;

        while(temp !== null) {
            lista += temp.info();
            temp = temp.next;
        }
        return lista;

    }


    listadoInverso() {
        let lista = '';
        let temp = this.primero;

        while(temp !== null) {
            lista = temp.info() + ' ' + this.lista;
            temp = temp.next;
        }
        
        return lista;
    }

//Checar porqué no funciona.
    insertar(posicion, producto) {
        let aux = this.primero;
        let anterior;
        let temp = parseInt(posicion);

        if(temp === 1) {
            producto.next = this.primero;
            this.primero = producto;
        } else {
            for (let i = 1; i < temp; i++) {
                anterior = aux;
                aux = aux.next;
            }
            anterior.next = producto;
            producto.next = aux;
        }
    }
}
