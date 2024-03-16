export class Cliente {
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