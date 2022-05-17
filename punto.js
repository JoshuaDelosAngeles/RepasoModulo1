"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    //Implementación del método constructor
    function Punto(x, y) {
        var _this = this;
        this.distanciaAlOrigen = function () {
            return parseFloat((Math.sqrt((Math.pow(_this.x, 2)) + (Math.pow(_this.y, 2)))).toFixed(2));
        };
        this.calcularDistancia = function (otroPunto) {
            var xdif = _this.x - otroPunto.getX();
            var ydif = _this.y - otroPunto.getY();
            return parseFloat((Math.sqrt((Math.pow(xdif, 2)) + (Math.pow(ydif, 2)))).toFixed(2));
        };
        this.x = x;
        this.y = y;
    }
    //getter y setter
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.setX = function (newX) {
        this.x = newX;
    };
    Punto.prototype.setY = function (newY) {
        this.y = newY;
    };
    //Implementación de métodos propios
    Punto.prototype.toString = function () {
        return "(".concat(this.x, ", ").concat(this.y, ")");
    };
    Punto.prototype.calcularCuadrante = function () {
        var val = 0;
        if (this.x === 0 || this.y === 0) {
            val = 0;
        }
        else if (this.x > 0 && this.y > 0) {
            val = 1;
        }
        else if (this.x < 0 && this.y > 0) {
            val = 2;
        }
        else if (this.x < 0 && this.y < 0) {
            val = 3;
        }
        else {
            val = 4;
        }
        return val;
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        //let arrayNumeros:number[]=[]
        var result;
        var distancia = this.calcularDistancia(puntos[0]);
        for (var i in puntos) {
            if (this.calcularDistancia(puntos[i]) <= distancia) {
                distancia = this.calcularDistancia(puntos[i]);
                result = puntos[i];
            }
        }
        return result;
    };
    return Punto;
}());
exports.Punto = Punto;
