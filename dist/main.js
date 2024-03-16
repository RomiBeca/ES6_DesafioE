"use strict";

var _impuestoModule = require("./impuesto.module.js");
var _clienteModule = require("./cliente.module.js");
var cliente1 = new _clienteModule.Cliente("Raul Perez");
var impuestoCliente1 = new _impuestoModule.Impuesto(50000, 10000);
var cliente2 = new _clienteModule.Cliente("Miguel Cervantes");
var impuestoCliente2 = new _impuestoModule.Impuesto(50000000, 10000000);
var cliente3 = new _clienteModule.Cliente("Mario Triviño");
var impuestoCliente3 = new _impuestoModule.Impuesto(5892, 357);
cliente1.asignarImpuestoPorCliente(impuestoCliente1);
cliente2.asignarImpuestoPorCliente(impuestoCliente2);
cliente3.asignarImpuestoPorCliente(impuestoCliente3);
console.log(cliente1.calcularImpuesto());
console.log(cliente2.calcularImpuesto());
console.log(cliente3.calcularImpuesto());