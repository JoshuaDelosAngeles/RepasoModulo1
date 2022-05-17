"use strict";
exports.__esModule = true;
var hoja2ejercicio3_1 = require("./hoja2ejercicio3");
var mobiLibrary_1 = require("./mobiLibrary");
var nokia3210 = new hoja2ejercicio3_1.Mobile("Nokia", "Nokia 3210", 'nokia', 0, "Gris", false, 0, 40);
var iPhone3G = new hoja2ejercicio3_1.Mobile("IPhone", "iPhone3G", "Apple", 128, "Negro", false, 1, 200);
var samsungGalaxy10 = new hoja2ejercicio3_1.Mobile("Samsung", "Galaxy 10", "Samsung", 256, "Negro", true, 4, 400);
var mobilesStock = [nokia3210, iPhone3G, samsungGalaxy10];
var armobiles = new mobiLibrary_1.MobileLibrary('Tienda', 'Madrid', mobilesStock, 2000);
console.log(armobiles.getLocation());
console.log(armobiles.getName());
;
console.log(armobiles.getTotalPrice());
