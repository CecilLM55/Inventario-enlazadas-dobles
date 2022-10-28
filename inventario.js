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
