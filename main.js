"use strict";
exports.__esModule = true;
var punto_1 = require("./punto");
var triangulo_1 = require("./triangulo");
var punto1 = new punto_1.Punto(4, 8);
console.log(punto1);
console.log(punto1.toString());
// distancia al origen
var verticeDist = new punto_1.Punto(5, 2);
console.log(verticeDist.distanciaAlOrigen());
//Calcular distancia
var verticeA = new punto_1.Punto(3, 4);
var verticeB = new punto_1.Punto(-3, -4);
console.log(verticeA.calcularDistancia(verticeB));
//Calcular cuadrante
var v1 = new punto_1.Punto(4, 0);
var v2 = new punto_1.Punto(2, 3);
var v3 = new punto_1.Punto(-4, 1);
var v4 = new punto_1.Punto(-6, -2);
var v5 = new punto_1.Punto(2, -2);
console.log(v1.calcularCuadrante());
console.log(v2.calcularCuadrante());
console.log(v3.calcularCuadrante());
console.log(v4.calcularCuadrante());
console.log(v5.calcularCuadrante());
//Calcular mas cercano
var vCer1 = new punto_1.Punto(4, 0);
var vCer2 = new punto_1.Punto(2, 3);
var vCer3 = new punto_1.Punto(-4, 1);
var arrayPuntos = new Array(vCer1, vCer2, vCer3);
var vCer4 = new punto_1.Punto(1, 1);
console.log(vCer4.calcularMasCercano(arrayPuntos));
console.log((vCer4.calcularMasCercano(arrayPuntos)).toString());
//Calcular distancia lado Triangulo
var vertice1 = new punto_1.Punto(4, -1);
var vertice2 = new punto_1.Punto(2, 3);
var vertice3 = new punto_1.Punto(6, -2);
var largoLados = new triangulo_1.Triangulo(vertice1, vertice2, vertice3);
console.log(largoLados.calcularLongitudLados());
