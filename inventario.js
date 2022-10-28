class Inventario {

    constructor() {
        this.primero = null;
        this.ultimo = null;
    }

    agregar(nuevo) {
        
        if(this.primero === null) {
            this.primero = nuevo;
            this.ultimo = nuevo;
        } else {
            this.ultimo.next = nuevo;
            nuevo.anterior =  this.ultimo;
            this.ultimo = nuevo;
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

}
