"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var punto_1 = require("./punto");
var Triangulo = /** @class */ (function () {
    //creo el constructor que reciba tres objetos de la clase Punto que son sus vértices.
    function Triangulo(punto1, punto2, punto3) {
        this.punto1 = punto1; //(-1,2)
        this.punto2 = punto2; //(3,2)
        this.punto3 = punto3; //(3,-2)
    }
    // Programo el método calcular LongitudLados() : number[] que debe devolver un array de tres posiciones, cada una de las cuales debe ser la longitud de uno de los lados del triángulo.
    Triangulo.prototype.calcularLongitudLados = function () {
        var valores = [];
        var val1 = this.punto1.calcularDistancia(this.punto2);
        var val2 = this.punto1.calcularDistancia(this.punto3);
        var val3 = this.punto3.calcularDistancia(this.punto2);
        valores.push(val1, val2, val3);
        return valores;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
var vertice1 = new punto_1.Punto(-1, 2);
var vertice2 = new punto_1.Punto(3, 2);
var vertice3 = new punto_1.Punto(3, -2);
var largoLados = new Triangulo(vertice1, vertice2, vertice3);
console.log(largoLados.calcularLongitudLados());
console.log(vertice1.getX());
console.log(vertice1.getY());
console.log(vertice2.getX());
console.log(vertice2.getY());
console.log(vertice3.getX());
console.log(vertice3.getY());
