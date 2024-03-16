class Impuesto {
    #montoBrutoAnual
    #deducciones

    constructor(montoBrutoAnual, deducciones) {
        this.#montoBrutoAnual = montoBrutoAnual
        this.#deducciones = deducciones
    }

    get montoBrutoAnual() {
        return this.#montoBrutoAnual;
    }
    set montoBrutoAnual(nuevoMontoBrutoAnual) {
        this.#montoBrutoAnual = nuevoMontoBrutoAnual;
    }

    get deducciones() {
        return this.#deducciones;
    }
    set deducciones(nuevasDeducciones) {
        this.#deducciones = nuevasDeducciones;
    }


}

class Cliente {
    #nombre
    #impuesto

    constructor(nombre) {
        this.#nombre = nombre
        this.#impuesto = null
    }

    get nombreC() {
        return this.#nombre
    }
    set nombreC(nuevoNombre) {
        return this.#nombre = nuevoNombre
    }

    calcularImpuesto() {
        if (this.#impuesto) {
            const impuestoCalculado = (this.#impuesto.montoBrutoAnual - this.#impuesto.deducciones) * 0.21;
            return {
                nombre: this.#nombre,
                impuesto: impuestoCalculado
            }
        } else {
            console.log("El cliente no tiene información de impuestos.");
            return 0;
        }
    }

    asignarImpuestoPorCliente(impuesto) {
        this.#impuesto = impuesto;
    }
}

const cliente1 = new Cliente("Raul Perez");
const impuestoCliente1 = new Impuesto(50000, 10000);

const cliente2 = new Cliente("Miguel Cervantes")
const impuestoCliente2 = new Impuesto(50000000, 10000000)

cliente1.asignarImpuestoPorCliente(impuestoCliente1);
cliente2.asignarImpuestoPorCliente(impuestoCliente2)

console.log(cliente1.calcularImpuesto());
console.log(cliente2.calcularImpuesto())




