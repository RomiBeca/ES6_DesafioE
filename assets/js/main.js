import { Impuesto } from "./impuesto.module.js"
import { Cliente } from "./cliente.module.js"

const cliente1 = new Cliente("Raul Perez");
const impuestoCliente1 = new Impuesto(50000, 10000);

const cliente2 = new Cliente("Miguel Cervantes")
const impuestoCliente2 = new Impuesto(50000000, 10000000)

const cliente3 = new Cliente("Mario Triviño")
const impuestoCliente3 = new Impuesto(5892, 357)

cliente1.asignarImpuestoPorCliente(impuestoCliente1);
cliente2.asignarImpuestoPorCliente(impuestoCliente2);
cliente3.asignarImpuestoPorCliente(impuestoCliente3)

console.log(cliente1.calcularImpuesto());
console.log(cliente2.calcularImpuesto());
console.log(cliente3.calcularImpuesto())