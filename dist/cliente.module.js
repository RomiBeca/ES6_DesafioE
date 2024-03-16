"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cliente = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _nombre = /*#__PURE__*/new WeakMap();
var _impuesto = /*#__PURE__*/new WeakMap();
var Cliente = exports.Cliente = /*#__PURE__*/function () {
  function Cliente(nombre) {
    _classCallCheck(this, Cliente);
    _classPrivateFieldInitSpec(this, _nombre, void 0);
    _classPrivateFieldInitSpec(this, _impuesto, void 0);
    _classPrivateFieldSet(_nombre, this, nombre);
    _classPrivateFieldSet(_impuesto, this, null);
  }
  _createClass(Cliente, [{
    key: "nombreC",
    get: function get() {
      return _classPrivateFieldGet(_nombre, this);
    },
    set: function set(nuevoNombre) {
      return _classPrivateFieldSet(_nombre, this, nuevoNombre);
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      if (_classPrivateFieldGet(_impuesto, this)) {
        var impuestoCalculado = (_classPrivateFieldGet(_impuesto, this).montoBrutoAnual - _classPrivateFieldGet(_impuesto, this).deducciones) * 0.21;
        return {
          nombre: _classPrivateFieldGet(_nombre, this),
          impuesto: impuestoCalculado
        };
      } else {
        console.log("El cliente no tiene información de impuestos.");
        return 0;
      }
    }
  }, {
    key: "asignarImpuestoPorCliente",
    value: function asignarImpuestoPorCliente(impuesto) {
      _classPrivateFieldSet(_impuesto, this, impuesto);
    }
  }]);
  return Cliente;
}();